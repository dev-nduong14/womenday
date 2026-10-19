
const root=document.getElementById('scene-root');
const header=document.getElementById('site-header');
const footer=document.getElementById('scene-footer');
const overlay=document.getElementById('scene-transition');
const modal=document.getElementById('modal-layer');
const toast=document.getElementById('toast');
const fileInput=document.getElementById('gallery-file-input');
const audio=new BackgroundMusic();
const particles=new PinkParticles(document.getElementById('petal-canvas'));
const prefersReduced=window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const state={
  activeScene:0, started:false, transitioning:false, galleryIndex:0, gardenQuoteIndex:0,
  lightboxIndex:null, giftClaimed:false, toastTimer:0, mascotMoodIndex:0, finaleBurstTimer:0,
  galleryItems:GALLERY.map((g)=>({...g,url:g.file?new URL(`assets/images/${g.file}`, document.baseURI).href:''})),
};

function showToast(message){
  clearTimeout(state.toastTimer);
  toast.textContent=message;toast.classList.add('show');
  state.toastTimer=setTimeout(()=>toast.classList.remove('show'),2800);
}

function updateHeader(){
  header.innerHTML=`<button type="button" class="site-brand" data-action="home" aria-label="Về trang bắt đầu">
      <span class="brand-mark">${lotusLogo(31)}</span>
      <span class="brand-text"><span class="brand-name">${SITE.brand}</span><span class="brand-tag">EXPLORE MODE · 20/10</span></span>
    </button>
    <div class="header-center-badge">✦ Chạm để khám phá từng phân cảnh</div>
    <div class="sound-section">
      <span class="header-date">20 / 10</span>
      <button class="sound-button ${audio.muted?'is-muted':''}" data-action="sound" type="button" aria-label="${audio.muted?'Bật':'Tắt'} nhạc nền" aria-pressed="${!audio.muted}">${icon(audio.muted?'mute':'volume',20)}</button>
      <button class="volume-settings" data-action="volume-panel" type="button" title="Điều chỉnh âm lượng" aria-label="Mở thanh chỉnh âm lượng">${icon('volume',14)}</button>
      <div class="volume-panel" id="volume-panel">
        <div class="volume-panel-title"><span>Âm lượng nhạc nền</span><span id="volume-number">${Math.round(audio.volume*100)}%</span></div>
        <input id="volume-range" type="range" min="0" max="100" value="${Math.round(audio.volume*100)}" aria-label="Điều chỉnh âm lượng">
        <div class="volume-panel-note">Nhạc từ video mới nhất, lặp xuyên suốt cả 7 phân cảnh.</div>
      </div>
    </div>`;
}

function renderFooter(){
  footer.innerHTML=`<div class="footer-line"></div><div class="footer-content">
   <div class="footer-note"><span class="note-flower">✿</span> CHẠM, CUỘN, VUỐT ĐỂ KHÁM PHÁ</div>
   <nav class="scene-dots" aria-label="Chuyển giữa bảy phân cảnh">
     ${SCENES.map((s,i)=>`<button type="button" class="scene-dot ${i===state.activeScene?'current':i<state.activeScene?'complete':''}" data-action="scene" data-index="${i}" title="${escapeHTML(s.title)}" aria-label="Đến phần ${i+1}: ${escapeHTML(s.title)}"><span class="dot-fill" style="width:${i<=state.activeScene?'100%':'0%'}"></span></button>`).join('')}
   </nav>
   <div class="navigation-controls"><span class="scene-count">${String(state.activeScene+1).padStart(2,'0')} / 07</span>
      <button type="button" class="nav-circle" data-action="prev" aria-label="Phân cảnh trước" ${state.activeScene===0?'disabled':''}>${icon('arrowLeft',17)}</button>
      <button type="button" class="nav-circle" data-action="next" aria-label="Phân cảnh sau" ${state.activeScene===6?'disabled':''}>${icon('arrowRight',17)}</button></div>
  </div>`;
}

function stopFinaleBursts(){
  clearInterval(state.finaleBurstTimer); state.finaleBurstTimer=0;
}
function startFinaleBursts(){
  stopFinaleBursts();
  if(prefersReduced) return;
  const launch=()=>{
    if(state.activeScene!==6) return;
    const x = innerWidth*(0.18 + Math.random()*0.64);
    const y = innerHeight*(0.18 + Math.random()*0.34);
    particles.burst(x,y,26);
    particles.confetti(x,y,18);
  };
  launch();
  state.finaleBurstTimer=setInterval(launch,1100);
}

function displayScene(){
  root.innerHTML=sceneTemplate(state.activeScene,state.galleryItems,state.galleryIndex);
  state.giftClaimed=false;
  renderFooter();
  document.title=`${SCENES[state.activeScene].title} · Pink Blooming Dream 20/10`;
  if(state.activeScene===2) applyMascotMood(state.mascotMoodIndex, true);
  // Nhac nen la mot Audio duy nhat: khong doi bai va khong tua lai khi chuyen canh.
  if(state.activeScene===6) startFinaleBursts();
  else stopFinaleBursts();
}

function navigateTo(index,opts={}){
  if(index<0||index>=SCENES.length||state.transitioning)return;
  if(index===state.activeScene&&!opts.force)return;
  if(index!==0 && !state.started){ showToast('Hãy nhấn “Bắt đầu khám phá” trước nhé 🎀'); return; }
  state.transitioning=true;
  closeModal(false);
  overlay.classList.remove('play');void overlay.offsetWidth;overlay.classList.add('play');
  const delay=prefersReduced?10:220;
  setTimeout(()=>{
    state.activeScene=index;
    displayScene();
    if(!prefersReduced) particles.burst(innerWidth/2,innerHeight*.44,18);
    state.transitioning=false;
  },delay);
}

function begin(){
  if(!state.started){
    state.started=true;
    // Audio chi bat dau trong lan cham "Bat dau" dau tien; khong khoi tao lai khi xem lai.
    audio.start().then(success=>{ if(!success) showToast('Nếu nhạc chưa phát, bạn hãy chạm biểu tượng loa nhé.'); });
  }
  const gift=document.getElementById('intro-gift');gift?.classList.add('is-opening');
  particles.burst(innerWidth*.72,innerHeight*.45,55);
  setTimeout(()=>particles.burst(innerWidth*.65,innerHeight*.3,30),450);
  setTimeout(()=>navigateTo(1),prefersReduced?250:1200);
}

function setGardenQuote(index){
  if(state.activeScene!==2)return;
  state.gardenQuoteIndex=(index+GARDEN_LINES.length)%GARDEN_LINES.length;
  const node=document.getElementById('garden-quote'); if(!node)return;
  node.classList.add('changing');
  setTimeout(()=>{
    if(state.activeScene!==2)return;
    node.textContent=GARDEN_LINES[state.gardenQuoteIndex]; node.classList.remove('changing');
    document.querySelectorAll('.quote-dots span').forEach((el,i)=>el.classList.toggle('active',i===state.gardenQuoteIndex));
  },prefersReduced?0:180);
}

function applyMascotMood(index, silent=false){
  state.mascotMoodIndex=((index%MASCOT_MOODS.length)+MASCOT_MOODS.length)%MASCOT_MOODS.length;
  const mood=MASCOT_MOODS[state.mascotMoodIndex];
  const button=document.getElementById('mascot-button');
  const bubble=document.getElementById('mascot-speech');
  if(button) button.dataset.expression=mood.key;
  if(bubble) bubble.textContent=mood.text;
  if(!silent){
    button?.classList.remove('bopped'); void button?.offsetWidth; button?.classList.add('bopped');
    const rect=button?.getBoundingClientRect();
    particles.burst(rect?.left+rect?.width*.65||innerWidth/2,rect?.top+rect?.height*.4||innerHeight/2,24);
    showToast(`${SITE.mascotName.split(' ')[0]} đổi mood nè ${['🌸','💗','✨','🎀','💖'][state.mascotMoodIndex%5]}`);
  }
}

function renderGallery(){
  if(state.activeScene!==3)return;
  const node=document.getElementById('gallery-stack');if(node)node.innerHTML=galleryCards(state.galleryItems,state.galleryIndex);
  const count=document.getElementById('gallery-counter');if(count)count.innerHTML=`${String(state.galleryIndex+1).padStart(2,'0')} <span>/</span> ${String(state.galleryItems.length).padStart(2,'0')}`;
}
function galleryMove(offset){ state.galleryIndex=(state.galleryIndex+offset+state.galleryItems.length*10)%state.galleryItems.length; renderGallery(); }
function chooseGallery(index){
  const i=Number(index);if(!Number.isInteger(i)||!state.galleryItems[i])return;
  if(i!==state.galleryIndex){state.galleryIndex=i;renderGallery();return;}
  if(!state.galleryItems[i].url){showToast('Khung ảnh này đang chờ hình của bạn 💗');return;}
  openLightbox(i);
}
function rerenderCurrentScene(keepScene=true){
  const current=state.activeScene; displayScene(); if(!keepScene) navigateTo(current,{force:true});
}
function loadLocalImages(fileList){
  const files=[...fileList].filter(f=>f.type.startsWith('image/'));
  if(!files.length){showToast('Bạn hãy chọn ảnh JPG, PNG, WEBP hoặc GIF nhé.');return;}
  const available=state.galleryItems.filter(item=>!item.url);
  files.forEach((file,index)=>{
    const imageUrl=URL.createObjectURL(file);
    const target=available[index];
    const caption=file.name.replace(/\.[^.]+$/,'').replace(/[-_]/g,' ').slice(0,38)||`Ảnh của bạn ${index+1}`;
    if(target){target.url=imageUrl;target.caption=caption;target.note='Ảnh đã thêm để xem thử';}
    else{state.galleryItems.push({file:'',caption,note:'Ảnh đã thêm để xem thử',url:imageUrl});}
  });
  const first=state.galleryItems.findIndex(i=>i.url&&i.note==='Ảnh đã thêm để xem thử');
  if(first>=0)state.galleryIndex=first;
  if([3,5,6].includes(state.activeScene)) displayScene();
  else renderGallery();
  showToast(`Đã thêm ${files.length} ảnh. Web sẽ dùng chúng trong các cụm ảnh động luôn nhé!`);
  fileInput.value='';
}
function lightboxHTML(index){
  const item=state.galleryItems[index];
  return `<div class="modal-card lightbox-card" role="dialog" aria-modal="true" aria-label="Xem ảnh phóng to">
      <button class="modal-close" data-action="close-modal" aria-label="Đóng ảnh">${icon('close',18)}</button>
      <img class="lightbox-image" src="${escapeHTML(item.url)}" alt="${escapeHTML(item.caption)}">
      <div class="lightbox-caption">${escapeHTML(item.caption)} ♡</div>
      <div class="lightbox-actions"><button type="button" class="circle-button" data-action="lightbox-prev" aria-label="Ảnh trước">${icon('arrowLeft',19)}</button><button type="button" class="circle-button" data-action="lightbox-next" aria-label="Ảnh tiếp">${icon('arrowRight',19)}</button></div>
    </div>`;
}
function openLightbox(index){ if(!state.galleryItems[index]?.url)return; state.lightboxIndex=index; modal.innerHTML=lightboxHTML(index); modal.classList.add('show'); modal.querySelector('.modal-close')?.focus(); }
function switchLightbox(dir){
  let n=state.lightboxIndex;
  for(let i=0;i<state.galleryItems.length;i++){ n=(n+dir+state.galleryItems.length)%state.galleryItems.length; if(state.galleryItems[n].url){ openLightbox(n); return; } }
  showToast('Chưa có thêm ảnh nào được tải lên.');
}
function closeModal(restoreFocus=true){
  const wasOpen=modal.classList.contains('show'); modal.classList.remove('show'); modal.innerHTML=''; state.lightboxIndex=null;
  if(restoreFocus&&wasOpen)document.querySelector('.scene [data-action="gallery-card"].polaroid--center,.scene [data-action="claim-gift"]')?.focus();
}

function openWish(index){
  if(state.activeScene!==4)return;
  const cards=[...document.querySelectorAll('.wish-card')], chosen=cards[index]; if(!chosen)return;
  const nowOpen=chosen.classList.contains('is-open');
  cards.forEach((card)=>card.classList.remove('is-open'));
  if(!nowOpen){
    chosen.classList.add('is-open');
    const r=chosen.getBoundingClientRect(); particles.burst(r.left+r.width/2,r.top+r.height/2,20);
    if(innerWidth<800)chosen.scrollIntoView({behavior:prefersReduced?'instant':'smooth',block:'nearest',inline:'center'});
  }
}

function giftModalHTML(){
  return `<div class="modal-card gift-modal" role="dialog" aria-modal="true" aria-labelledby="special-wish-title">
    <button class="modal-close" type="button" data-action="close-modal" aria-label="Đóng lời chúc">${icon('close',18)}</button>
    <span class="gift-modal-label">A LITTLE SOMETHING FOR YOU</span>
    <div class="gift-modal-bloom" aria-hidden="true">💐</div>
    <h3 id="special-wish-title">Bạn là một điều<br>thật tuyệt vời! ♡</h3>
    <p>Chúc bạn không chỉ có một ngày 20/10 thật đẹp, mà còn có thật nhiều ngày được sống vui, được trân trọng và được là chính mình.</p>
    <div class="gift-modal-actions"><button type="button" class="btn btn--outline" data-action="copy-wish">${icon('heart',17)} Sao chép lời chúc</button><button type="button" class="btn btn--primary" data-action="continue-gift">Đến lời chúc cuối ${icon('arrowRight',17)}</button></div>
  </div>`;
}
function claimGift(){
  if(state.activeScene!==5)return;
  if(!state.giftClaimed){ state.giftClaimed=true; document.getElementById('bouquet-wrap')?.classList.add('is-blooming'); }
  particles.burst(innerWidth*(innerWidth<800?.5:.28),innerHeight*.49,65);
  particles.confetti(innerWidth*(innerWidth<800?.5:.28),innerHeight*.45,54);
  modal.innerHTML=giftModalHTML(); modal.classList.add('show'); modal.querySelector('.modal-close')?.focus();
}
async function copyWish(){
  const text='Chúc bạn không chỉ có một ngày 20/10 thật đẹp, mà còn có thật nhiều ngày được sống vui, được trân trọng và được là chính mình. 🌷';
  try{ await navigator.clipboard.writeText(text); showToast('Đã sao chép lời chúc 💌'); }
  catch{
    const temp=document.createElement('textarea'); temp.value=text; document.body.appendChild(temp); temp.select();
    const done=document.execCommand('copy'); temp.remove(); showToast(done?'Đã sao chép lời chúc 💌':'Bạn có thể chọn và sao chép nội dung trên thiệp.');
  }
}

function clickAction(event){
  if(event.target===modal){closeModal();return;}
  const btn=event.target.closest('[data-action]'); if(!btn||btn.disabled)return;
  switch(btn.dataset.action){
    case 'start': begin(); break;
    case 'next': navigateTo(state.activeScene+1); break;
    case 'prev': navigateTo(state.activeScene-1); break;
    case 'scene': navigateTo(Number(btn.dataset.index)); break;
    case 'home': navigateTo(0); break;
    case 'sound': audio.toggle().then(()=>{updateHeader(); showToast(!state.started?'Nhạc sẽ bắt đầu khi bạn mở hộp quà 🎀':audio.muted?'Đã tắt nhạc nền':'Đã bật nhạc nền 🎵');}); break;
    case 'volume-panel': document.getElementById('volume-panel')?.classList.toggle('show'); break;
    case 'garden-quote': setGardenQuote(state.gardenQuoteIndex+1); particles.burst(innerWidth*.4,innerHeight*.54,15); break;
    case 'mascot': applyMascotMood(state.mascotMoodIndex+1); break;
    case 'gallery-prev': galleryMove(-1); break;
    case 'gallery-next': galleryMove(1); break;
    case 'gallery-card': chooseGallery(btn.dataset.index); break;
    case 'upload': fileInput.click(); break;
    case 'wish-card': openWish(Number(btn.dataset.index)); break;
    case 'claim-gift': claimGift(); break;
    case 'close-modal': closeModal(); break;
    case 'lightbox-prev': switchLightbox(-1); break;
    case 'lightbox-next': switchLightbox(1); break;
    case 'copy-wish': copyWish(); break;
    case 'continue-gift': closeModal(false); navigateTo(6); break;
    case 'replay': navigateTo(0); break;
    case 'open-wishes': navigateTo(4); setTimeout(()=>openWish(0),550); break;
  }
}

let wheelStamp=0, touchStart=null;
root.addEventListener('wheel',(event)=>{
  if(state.transitioning||modal.classList.contains('show')||Math.abs(event.deltaY)<15)return;
  const scene=root.querySelector('.scene');
  if(scene&&scene.scrollHeight>scene.clientHeight+12){
    if(event.deltaY>0&&scene.scrollTop+scene.clientHeight<scene.scrollHeight-8)return;
    if(event.deltaY<0&&scene.scrollTop>8)return;
  }
  event.preventDefault(); const now=performance.now(); if(now-wheelStamp<780)return; wheelStamp=now;
  if(!state.started&&state.activeScene===0)return;
  navigateTo(state.activeScene+(event.deltaY>0?1:-1));
},{passive:false});
root.addEventListener('touchstart',(e)=>{ if(e.touches.length===1) touchStart={x:e.touches[0].clientX,y:e.touches[0].clientY}; },{passive:true});
root.addEventListener('touchend',(e)=>{
  if(!touchStart||state.transitioning||modal.classList.contains('show'))return;
  const dx=e.changedTouches[0].clientX-touchStart.x, dy=e.changedTouches[0].clientY-touchStart.y; touchStart=null;
  if(Math.abs(dy)<85||Math.abs(dy)<Math.abs(dx)*1.3)return;
  const scene=root.querySelector('.scene');
  if(scene&&scene.scrollHeight>scene.clientHeight+12){
    if(dy<0&&scene.scrollTop+scene.clientHeight<scene.scrollHeight-8)return;
    if(dy>0&&scene.scrollTop>8)return;
  }
  if(!state.started&&state.activeScene===0)return;
  navigateTo(state.activeScene+(dy<0?1:-1));
},{passive:true});

document.addEventListener('keydown',(e)=>{
  if(e.key==='Escape'){closeModal();return;}
  if(e.target.closest('input,textarea'))return;
  if(modal.classList.contains('show')){ if(e.key==='ArrowRight')switchLightbox(1); if(e.key==='ArrowLeft')switchLightbox(-1); return; }
  if(e.key==='ArrowRight'&&state.started)navigateTo(state.activeScene+1);
  if(e.key==='ArrowLeft'&&state.started)navigateTo(state.activeScene-1);
});

document.addEventListener('click',clickAction);
fileInput.addEventListener('change',(e)=>loadLocalImages(e.target.files||[]));
header.addEventListener('input',(e)=>{
  if(e.target.id==='volume-range'){
    audio.setVolume(e.target.value/100);
    const n=document.getElementById('volume-number'); if(n)n.textContent=`${Math.round(audio.volume*100)}%`;
  }
});
document.addEventListener('pink-audio-error',()=>showToast('Không tìm thấy file nhạc. Hãy kiểm tra thư mục assets/audio/.'));
document.addEventListener('pink-audio-blocked',()=>showToast('Trình duyệt chưa cho phép phát nhạc. Hãy nhấn biểu tượng loa nhé.'));
root.addEventListener('error',(e)=>{
  if(e.target instanceof HTMLImageElement&&e.target.closest('.polaroid,.floating-photo-card')){
    const broken=state.galleryItems.find(item=>item.url===e.target.src);
    if(broken){ broken.url=''; showToast('Một ảnh không tải được. Hãy kiểm tra tên file trong content.js.'); if(state.activeScene===3) renderGallery(); else displayScene(); }
  }
},true);

if(prefersReduced)document.documentElement.classList.add('no-motion');
updateHeader(); displayScene();
console.info('🌷 Pink Blooming Dream 20/10: bản Explore mới đã sẵn sàng');
