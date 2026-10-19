
const escapeHTML = (value) => String(value).replace(/[&<>"']/g, (ch) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[ch]));

const cloud = (cls='') => `<div class="puff-cloud ${cls}"><span></span><span></span><span></span></div>`;
const twinkle = (cls='') => sparkleDecor(`deco-sparkle ${cls}`);
const eyebrow = (text) => `<div class="eyebrow"><span class="eyebrow-dot"></span>${text}<span class="eyebrow-dot"></span></div>`;

function floatingPhotoOrbit(items, cls=''){
  const picks = items.filter(item => item.url).slice(0, 6);
  if(!picks.length) return '';
  return `<div class="floating-photo-orbit ${cls}">${picks.map((item,i)=>`<div class="floating-photo-card" style="--i:${i};--total:${picks.length}"><img src="${escapeHTML(item.url)}" alt="${escapeHTML(item.caption)}"><span>${escapeHTML(item.caption)}</span></div>`).join('')}</div>`;
}

function intro() {
  return `<section class="scene scene--intro" aria-labelledby="intro-heading">
    <div class="scene-wash"></div><div class="intro-arch" aria-hidden="true"></div>
    ${twinkle('intro-sparkle-a')}${twinkle('intro-sparkle-b')}
    <div class="scene-inner intro-layout">
      <div class="intro-copy animate-float-in">
        ${eyebrow('DÀNH CHO NGÀY 20 THÁNG 10')}
        <p class="intro-kicker">Hey, beautiful soul <span aria-hidden="true">♡</span></p>
        <h1 id="intro-heading" class="display-heading intro-heading">Một điều <em>dễ thương</em><br>đang chờ bạn<span class="punctuation">...</span></h1>
        <p class="intro-description">Một khu vườn nhỏ, một chút phép màu và thật nhiều lời yêu thương đang đợi được gửi đến bạn.</p>
        <button class="btn btn--primary btn--big" type="button" data-action="start">${icon('heart',20)} Bắt đầu khám phá <span class="btn-arrow">${icon('arrowRight',19)}</span></button>
        <div class="sound-hint">${icon('volume',16)} Chạm để bắt đầu và bật nhạc nền nhé</div>
      </div>
      <div class="intro-art" aria-hidden="true">
        <div class="intro-art-ring intro-art-ring--one"></div><div class="intro-art-ring intro-art-ring--two"></div>
        <div class="orbit-label orbit-label--top">made with <span>♥</span></div>
        <div class="orbit-label orbit-label--bottom">a little pink magic ✨</div>
        <div class="gift-illustration" id="intro-gift">
          <div class="gift-spark gift-spark--one">✦</div><div class="gift-spark gift-spark--two">✳</div><div class="gift-spark gift-spark--three">✧</div>
          <div class="gift-lid"><div class="gift-ribbon-lid"></div><div class="gift-bow"><span class="bow-left"></span><span class="bow-right"></span><span class="bow-center"></span></div></div>
          <div class="gift-box"><div class="gift-front-glow"></div><div class="gift-ribbon-vertical"></div><div class="gift-ribbon-horizontal"></div></div>
          <div class="gift-ground"></div>
        </div>
        <span class="floating-smallheart floating-smallheart--a">♥</span><span class="floating-smallheart floating-smallheart--b">♥</span>
      </div>
    </div>
    <div class="scene-corner-note">A LITTLE GIFT, JUST FOR YOU <span>✻</span> 20.10</div>
  </section>`;
}

function celebrate() {
  return `<section class="scene scene--celebrate" aria-labelledby="celebrate-heading">
   <div class="celebrate-rays" aria-hidden="true"></div>
   <div class="celebrate-flower cf--one">${flowerSvg('pink')}</div><div class="celebrate-flower cf--two">${flowerSvg('lilac')}</div><div class="celebrate-flower cf--three">${flowerSvg('peach')}</div><div class="celebrate-flower cf--four">${flowerSvg('bright')}</div>
   ${twinkle('celebrate-sparkle-a')}${twinkle('celebrate-sparkle-b')}
   <div class="scene-inner celebrate-layout">
     ${eyebrow('HAPPY VIETNAMESE WOMEN’S DAY')}
     <div class="celebrate-medallion" aria-label="Ngày 20 tháng 10"><div class="celebrate-date"><span>20</span><span class="celebrate-slash">/</span><span>10</span></div><span class="medallion-mini medallion-mini--a">✧</span><span class="medallion-mini medallion-mini--b">♡</span></div>
     <h2 id="celebrate-heading" class="display-heading celebrate-heading">Today is <em>your day!</em></h2>
     <p class="celebrate-subtitle">Ngày của những điều tuyệt vời <span>🌸</span></p>
     <p class="celebrate-description">Hôm nay là một ngày thật đặc biệt, để gửi những lời yêu thương đến những người phụ nữ tuyệt vời quanh ta.</p>
     <button class="text-link" data-action="next" type="button">Đi tiếp vào khu vườn dễ thương ${icon('arrowRight',18)}</button>
   </div>
 </section>`;
}

function garden() {
 return `<section class="scene scene--garden" aria-labelledby="garden-heading">
    <div class="garden-haze" aria-hidden="true"></div>
    ${cloud('cloud--one')}${cloud('cloud--two')}${cloud('cloud--three')}
    <div class="butterfly butterfly--one">${butterflySvg()}</div><div class="butterfly butterfly--two">${butterflySvg()}</div>
    ${twinkle('garden-sparkle-a')}${twinkle('garden-sparkle-b')}
    <div class="garden-hill garden-hill--back"></div><div class="garden-hill garden-hill--front"></div>
    <div class="garden-flower flower--a">${flowerSvg('peach',true)}</div><div class="garden-flower flower--b">${flowerSvg('pink')}</div><div class="garden-flower flower--c">${flowerSvg('lilac',true)}</div><div class="garden-flower flower--d">${flowerSvg('bright')}</div><div class="garden-flower flower--e">${flowerSvg('pink',true)}</div>
    <div class="scene-inner garden-layout">
      <div class="garden-story animate-float-in">
        ${eyebrow(`CHÀO MỪNG ĐẾN KHU VƯỜN CỦA ${SITE.mascotName.toUpperCase()}`)}
        <h2 id="garden-heading" class="display-heading garden-heading">Bạn là một <em>bông hoa</em><br>rất riêng.</h2>
        <div class="garden-quote-card"><span class="quote-flower">✿</span><p id="garden-quote" aria-live="polite">${GARDEN_LINES[0]}</p><div class="quote-dots" aria-hidden="true">${GARDEN_LINES.map((_,i)=>`<span class="${i===0?'active':''}"></span>`).join('')}</div></div>
        <button class="btn btn--soft" data-action="garden-quote" type="button">Nghe ${SITE.mascotName.split(' ')[0]} kể tiếp ${icon('arrowRight',18)}</button>
      </div>
      <div class="garden-character">
       <div class="mascot-halo"></div><div class="mascot-floating-heart">♥</div>
       <button class="mascot-button" id="mascot-button" data-expression="smile" data-action="mascot" type="button" aria-label="Chạm vào mascot để đổi biểu cảm">${mascotSvg()}</button>
       <span class="mascot-name">${SITE.mascotName} <span class="mascot-name-star">✳</span></span><span class="mascot-caption">tap me to change my mood</span>
       <div class="mascot-speech" id="mascot-speech">${MASCOT_MOODS[0].text}</div>
      </div>
    </div>
    <div class="garden-bottom-label">GROW AT YOUR OWN PACE <span>✷</span> BLOOM IN YOUR OWN WAY</div>
 </section>`;
}

function galleryCards(items, active = 0) {
  if(!items.length) return '';
  let results='';
  for(let offset = -2; offset <= 2; offset++){
    const index = (active + offset + items.length * 10) % items.length;
    const item=items[index];
    const photo = item.url
      ? `<img src="${escapeHTML(item.url)}" loading="${offset===0 ? 'eager':'lazy'}" alt="${escapeHTML(item.caption)}">`
      : `<div class="empty-photo">${icon('camera',36)}<span>YOUR PHOTO HERE</span><small>Chờ một khoảnh khắc xinh đẹp</small></div>`;
    results += `<button type="button" class="polaroid polaroid--offset-${offset+2} ${offset===0?'polaroid--center':''}" style="--slot:${offset}" data-action="gallery-card" data-index="${index}" aria-label="${item.url?'Phóng to ảnh':'Xem khung ảnh'} ${escapeHTML(item.caption)}">
      <div class="polaroid-tape" aria-hidden="true"></div><div class="polaroid-photo">${photo}</div>
      <span class="polaroid-caption">${escapeHTML(item.caption)} <span>♡</span></span>
    </button>`;
  }
  return results;
}

function memories(items=GALLERY.map(x=>({ ...x, url: '' })),galleryIndex=0) {
 return `<section class="scene scene--memories" aria-labelledby="memory-heading">
  <div class="memories-grid-dots" aria-hidden="true"></div>
  <span class="scrapbook-sticker sticker--one">♡</span><span class="scrapbook-sticker sticker--two">✳</span><span class="scrapbook-sticker sticker--three">✿</span>
  <div class="scene-inner memories-layout">
   <div class="memories-copy animate-float-in">
    ${eyebrow('A LITTLE GALLERY OF LOVE')}
    <h2 id="memory-heading" class="display-heading">Mỗi khoảnh khắc<br>đều <em>đáng yêu.</em></h2>
    <p class="scene-description">Nơi lưu giữ những nụ cười, những câu chuyện và những điều nhỏ bé làm ngày hôm nay trở nên đặc biệt.</p>
    <div class="gallery-step-note"><span class="step-circle">${icon('image',21)}</span><div><strong>Album của chúng mình</strong><span>Ảnh sẽ hiện trong polaroid và chạy nhẹ xung quanh</span></div></div>
    <button class="btn btn--primary" type="button" data-action="upload">${icon('upload',18)} Thêm ảnh của bạn</button>
    <p class="upload-note">Xem thử ngay trên máy của bạn. Nếu sau này upload ảnh thật, web sẽ tự dùng các ảnh đó để tạo các cụm ảnh động ở nhiều cảnh.</p>
   </div>
   <div class="gallery-column">
     <div class="gallery-backdrop"><div class="gallery-halo"></div><div class="gallery-squiggle">♡</div></div>
     ${floatingPhotoOrbit(items,'gallery-float-orbit')}
     <div class="gallery-stack" id="gallery-stack">${galleryCards(items,galleryIndex)}</div>
     <div class="gallery-controls"><button type="button" class="circle-button" data-action="gallery-prev" aria-label="Ảnh trước">${icon('arrowLeft',20)}</button><span class="gallery-counter" id="gallery-counter">${String(galleryIndex+1).padStart(2,'0')} <span>/</span> ${String(items.length).padStart(2,'0')}</span><button type="button" class="circle-button" data-action="gallery-next" aria-label="Ảnh tiếp theo">${icon('arrowRight',20)}</button></div>
   </div>
  </div>
 </section>`;
}

function wishes() {
 const cards = WISHES.map((w,i)=> `<button class="wish-card" data-action="wish-card" data-index="${i}" type="button" aria-label="Mở thiệp ${escapeHTML(w.title)}">
   <span class="wish-card-inner"><span class="wish-card-front"><span class="wish-card-count">0${i+1} / 05</span><span class="wish-icon">${w.icon}</span><strong>${escapeHTML(w.title)}</strong><small>${escapeHTML(w.short)}</small><span class="wish-tap">CHẠM ĐỂ MỞ <span>↗</span></span></span><span class="wish-card-back"><span class="wish-card-back-spark">✧</span><span class="wish-card-back-heading">Gửi bạn ✿</span><span class="wish-card-message">${escapeHTML(w.text)}</span><span class="wish-card-back-footer">WITH LOVE · 20.10</span></span></span>
 </button>`).join('');
 return `<section class="scene scene--wishes" aria-labelledby="wishes-heading">
    <div class="wishes-ambient-glow"></div>${twinkle('wish-sparkle-a')}${twinkle('wish-sparkle-b')}
    <div class="scene-inner wishes-layout">
      <div class="wishes-head">${eyebrow('SWEET WORDS, JUST FOR YOU')}<h2 id="wishes-heading" class="display-heading">Những lời chúc <em>nhỏ xinh.</em></h2><p>Mỗi tấm thiệp là một điều tốt đẹp muốn gửi đến bạn. Chạm vào một tấm thiệp để mở nhé!</p></div>
      <div class="wish-cards" id="wish-cards">${cards}</div>
      <div class="wishes-tip"><span class="hand-drawn-arrow">↗</span> Một chút yêu thương cũng đủ làm ngày thật đẹp</div>
    </div>
 </section>`;
}

function gift(items=[]) {
  return `<section class="scene scene--gift" aria-labelledby="gift-heading">
   <div class="gift-rays" aria-hidden="true"></div>
   <div class="heart-trend-rain" aria-hidden="true">${Array.from({length:10},(_,i)=>`<span style="--i:${i}">❤</span>`).join('')}</div>
   ${twinkle('gift-sparkle-a')}${twinkle('gift-sparkle-b')}
   <div class="scene-inner gift-layout">
      <div class="bouquet-wrap" id="bouquet-wrap"><div class="bouquet-back-orbit"></div><div class="bouquet-back-orbit bouquet-back-orbit--second"></div><span class="bouquet-asterisk bouquet-asterisk--one">✳</span><span class="bouquet-asterisk bouquet-asterisk--two">✧</span>${bouquetSvg()}${floatingPhotoOrbit(items,'gift-photo-orbit')}</div>
      <div class="gift-copy animate-float-in">${eyebrow('A SURPRISE FOR YOU')}
       <h2 id="gift-heading" class="display-heading">Một bó hoa nhỏ,<br><em>ngàn lời thương.</em></h2>
       <p class="scene-description">Chạm vào món quà để bó hoa rung rinh, nở rộ và gửi tới bạn một lời chúc thật xinh. Nếu đã có ảnh tải lên, chúng cũng sẽ xuất hiện nhẹ quanh bó hoa.</p>
       <button type="button" class="btn btn--primary btn--big" data-action="claim-gift">${icon('heart',20)} Nhận món quà của bạn ${icon('arrowRight',19)}</button>
       <span class="gift-footnote">100% yêu thương • 0% điều kiện</span>
      </div>
   </div>
 </section>`;
}

function finale(items=[]) {
 return `<section class="scene scene--finale" aria-labelledby="finale-heading">
   <div class="finale-moon"></div><div class="finale-outline-heart finale-outline-heart--left">♡</div><div class="finale-outline-heart finale-outline-heart--right">♡</div>
   <div class="finale-hearts" aria-hidden="true">${Array.from({length:14},(_,i)=>`<span class="heart-lift" style="--i:${i}">${i%4===0?'❤':'♡'}</span>`).join('')}</div>
   <div class="finale-fireworks" id="finale-fireworks" aria-hidden="true"></div>
   ${floatingPhotoOrbit(items,'finale-photo-orbit')}
   ${twinkle('finale-sparkle-a')}${twinkle('finale-sparkle-b')}
   <div class="scene-inner finale-layout">
    <div class="finale-lotus finale-bloomy">${flowerSvg('bright',true)}</div>
    ${eyebrow('THE SWEETEST ENDING')}
    <span class="finale-kicker">for every wonderful woman, everywhere</span>
    <h2 id="finale-heading" class="display-heading">Happy Women’s<br><em>Day 20/10!</em></h2>
    <p class="finale-message">${escapeHTML(SITE.finaleMessage)}</p>
    <div class="finale-actions"><button type="button" class="btn btn--primary" data-action="replay">${icon('replay',18)} Xem lại từ đầu</button><button type="button" class="btn btn--outline" data-action="open-wishes">${icon('heart',19)} Mở lời chúc lần nữa</button></div>
    <div class="finale-signature">Made of petals, smiles & a little bit of magic <span>♥</span></div>
   </div>
 </section>`;
}

function sceneTemplate(index, galleryItems, galleryIndex) {
 switch(index){case 0:return intro();case 1:return celebrate();case 2:return garden();case 3:return memories(galleryItems,galleryIndex);case 4:return wishes();case 5:return gift(galleryItems);case 6:return finale(galleryItems);default:return intro();}
}
