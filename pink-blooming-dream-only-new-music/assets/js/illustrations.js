
const paths = {
  arrowRight: '<path d="M5 12h14M13 5l7 7-7 7"/>',
  arrowLeft: '<path d="M19 12H5M11 19l-7-7 7-7"/>',
  heart: '<path d="M12 20s-7-4.4-9.2-8.6C1 8 3 4.5 6.6 4.2 8.7 4 10.3 5 12 6.8 13.7 5 15.3 4 17.4 4.2 21 4.5 23 8 21.2 11.4 19 15.6 12 20 12 20Z"/>',
  volume: '<path d="M5 9v6h4l5 4V5l-5 4H5Z"/><path d="M18.5 8.5a5 5 0 0 1 0 7"/><path d="M16.2 6a8.5 8.5 0 0 1 0 12"/>',
  mute: '<path d="M5 9v6h4l5 4V5l-5 4H5Z"/><path d="m17 9 5 6m0-6-5 6"/>',
  upload: '<path d="M12 16V3m0 0-5 5m5-5 5 5M4 16v3a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-3"/>',
  camera: '<path d="M4 8h4l2-3h4l2 3h4v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8Z"/><circle cx="12" cy="13" r="3.5"/>',
  image: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m7 14 3-3 4 4 2-2 3 3"/><circle cx="8" cy="9" r="1.2"/>',
  close: '<path d="M18 6 6 18M6 6l12 12"/>',
  play: '<path d="M8 5v14l11-7Z"/>',
  pause: '<path d="M8 5h3v14H8zm5 0h3v14h-3z"/>',
  sparkles: '<path d="m12 3 1.9 6.1L20 11l-6.1 1.9L12 19l-1.9-6.1L4 11l6.1-1.9L12 3ZM19 17l.7 1.3L21 19l-1.3.7L19 21l-.7-1.3L17 19l1.3-.7L19 17Z"/>',
  replay: '<path d="M3 12a9 9 0 1 0 3-6.7L3 8m0-6v6h6"/>',
};
function icon(name, size = 22, css = '') {
  return `<svg class="ui-icon ${css}" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${paths[name] || paths.heart}</svg>`;
}

function lotusLogo(size = 32) {
  return `<svg width="${size}" height="${size}" viewBox="0 0 64 64" aria-hidden="true" fill="none"><path d="M32 11c-15 15-15 29 0 38 15-9 15-23 0-38Z" fill="#f858a5"/><path d="M18 20C8 34 13 48 30 51c-1-13-6-23-12-31Z" fill="#ff97c2"/><path d="M46 20c10 14 5 28-12 31 1-13 6-23 12-31Z" fill="#ea4091"/><path d="M5 40c10 4 17 8 27 13 10-5 17-9 27-13-1 11-12 17-27 17S6 51 5 40Z" fill="#e9509c"/></svg>`;
}

function sparkleDecor(css = '') {
  return `<svg class="${css}" viewBox="0 0 80 80" fill="none" aria-hidden="true"><path d="M40 4c5 22 10 27 32 36-22 5-27 11-32 36C35 51 30 45 8 40 30 31 35 26 40 4Z" fill="#ffe5a9"/><circle cx="70" cy="12" r="4" fill="#ffafd6"/><circle cx="11" cy="68" r="3" fill="#fff"/></svg>`;
}

function flowerSvg(color = 'pink', face = false) {
  const palettes = {
    pink: ['#ffbad6','#ef5d9f','#ffe0eb'],
    peach: ['#ffdbcb','#fca4a9','#fff2e9'],
    lilac: ['#e3c9fa','#bd90d9','#f9e7ff'],
    bright: ['#ff7bb4','#eb428e','#ffdbef'],
  };
  const p = palettes[color] || palettes.pink;
  let petals='';
  for(let i=0;i<8;i++) petals += `<ellipse cx="64" cy="30" rx="20" ry="30" transform="rotate(${i*45} 64 65)" fill="${i%2 ? p[0] : p[1]}" stroke="${p[2]}" stroke-width="2"/>`;
  return `<svg class="flower-art" viewBox="0 0 128 152" fill="none" aria-hidden="true"><path d="M64 76V149" stroke="#79aa83" stroke-width="7" stroke-linecap="round"/><path d="M62 127c-21-1-27-8-27-20 12-1 26 1 27 20Zm6-22c21 1 27-8 27-20-12-1-26 1-27 20Z" fill="#a4cf9f"/><g>${petals}<circle cx="64" cy="65" r="26" fill="#ffe4ae"/><circle cx="64" cy="65" r="21" fill="#ffefcb"/>${face ? '<path d="M54 62v4m20-4v4" stroke="#8a4772" stroke-width="3.4" stroke-linecap="round"/><path d="M57 73q7 7 14 0" stroke="#8a4772" stroke-width="3" stroke-linecap="round"/><circle cx="49" cy="72" r="4" fill="#fba1b2"/><circle cx="79" cy="72" r="4" fill="#fba1b2"/>' : '<circle cx="58" cy="63" r="3" fill="#e9a64e"/><circle cx="71" cy="70" r="3" fill="#e9a64e"/>'}</g></svg>`;
}

function butterflySvg() {
  return `<svg viewBox="0 0 120 110" fill="none" aria-hidden="true"><path d="M60 54C5 0 3 48 48 68 10 102 42 112 60 64 78 112 110 102 72 68 117 48 115 0 60 54Z" fill="#ffc0da" stroke="#eb85ba" stroke-width="2"/><path d="M60 54C18 10 17 50 50 62 28 92 48 95 60 64" fill="#ffedf3"/><path d="M60 54c42-44 43-4 10 8 22 30 2 33-10 2" fill="#f4d7ff"/><path d="M60 54V77" stroke="#ad5f8b" stroke-width="5" stroke-linecap="round"/><path d="M60 52c-2-12-7-17-13-19m13 19c2-12 7-17 13-19" stroke="#ad5f8b" stroke-width="2" stroke-linecap="round"/><circle cx="28" cy="42" r="5" fill="#fff" opacity=".8"/><circle cx="92" cy="42" r="5" fill="#fff" opacity=".8"/></svg>`;
}

function mascotSvg() {
  return `<svg class="mimi-svg" viewBox="0 0 440 430" role="img" aria-label="Mascot bông hoa hồng dễ thương đang chờ bạn chạm vào để đổi biểu cảm">
  <defs>
    <linearGradient id="mimiPetalA" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#ffe1ef"/><stop offset=".55" stop-color="#ff9fcb"/><stop offset="1" stop-color="#ea4d98"/></linearGradient>
    <linearGradient id="mimiPetalB" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#fff4f9"/><stop offset="1" stop-color="#ffb5d6"/></linearGradient>
    <linearGradient id="mimiBody" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#fff7ec"/><stop offset="1" stop-color="#ffe3cd"/></linearGradient>
    <filter id="mimiShadow" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="12"/></filter>
  </defs>
  <ellipse cx="220" cy="390" rx="120" ry="18" fill="#db77a7" opacity=".18" filter="url(#mimiShadow)"/>
  <g class="mimi-shell">
    <path d="M220 82c-53 67-70 142-34 190 25 18 61 19 86 0 35-49 10-126-52-190Z" fill="url(#mimiPetalA)" stroke="#ef75a9" stroke-width="4"/>
    <path d="M125 128c-24 62-8 130 60 160 18-56-9-120-60-160Z" fill="#ffb5d5"/>
    <path d="M312 128c24 62 8 130-60 160-18-56 9-120 60-160Z" fill="#f466ac"/>
    <path d="M70 206c17 67 62 100 135 106-30-55-92-92-135-106Z" fill="#ffd5e5"/>
    <path d="M370 206c-17 67-62 100-135 106 30-55 92-92 135-106Z" fill="#f78cbd"/>
    <path d="M138 248c23-16 52-24 81-23 34-3 64 7 87 23-3 77-31 118-87 120-61-2-84-46-81-120Z" fill="url(#mimiPetalB)" stroke="#f8a6cb" stroke-width="4"/>
    <ellipse cx="220" cy="266" rx="81" ry="76" fill="url(#mimiBody)"/>
    <ellipse cx="172" cy="283" rx="17" ry="9" fill="#ffa7bf" opacity=".84"/>
    <ellipse cx="272" cy="283" rx="17" ry="9" fill="#ffa7bf" opacity=".84"/>
    <circle cx="219" cy="270" r="9" fill="#f5b7c8" opacity=".75"/>
    <g class="expression-group expr-smile"><path d="M183 258q10-15 21 0" stroke="#7e3b67" stroke-width="6" stroke-linecap="round" fill="none"/><path d="M236 258q10-15 21 0" stroke="#7e3b67" stroke-width="6" stroke-linecap="round" fill="none"/><path d="M205 298q16 18 30 0" stroke="#a14c68" stroke-width="6" stroke-linecap="round" fill="none"/></g>
    <g class="expression-group expr-wink"><path d="M182 257q10-7 18 0" stroke="#7e3b67" stroke-width="6" stroke-linecap="round" fill="none"/><circle cx="257" cy="257" r="8" fill="#7e3b67"/><circle cx="254" cy="254" r="2.3" fill="#fff"/><path d="M205 298q15 10 26-4" stroke="#a14c68" stroke-width="6" stroke-linecap="round" fill="none"/></g>
    <g class="expression-group expr-kiss"><circle cx="192" cy="258" r="8" fill="#7e3b67"/><circle cx="249" cy="258" r="8" fill="#7e3b67"/><circle cx="189" cy="255" r="2.3" fill="#fff"/><circle cx="246" cy="255" r="2.3" fill="#fff"/><path d="M213 294q8-8 15 0-6 8-15 0Z" fill="#e66ca0" stroke="#a14c68" stroke-width="3"/></g>
    <g class="expression-group expr-spark"><circle cx="192" cy="258" r="8" fill="#7e3b67"/><circle cx="249" cy="258" r="8" fill="#7e3b67"/><circle cx="189" cy="255" r="2.3" fill="#fff"/><circle cx="246" cy="255" r="2.3" fill="#fff"/><path d="M207 297q14 14 28 0" stroke="#a14c68" stroke-width="6" stroke-linecap="round" fill="none"/><path d="m286 186 8-13 7 13 14 5-14 7-7 14-8-14-14-7 14-5Z" fill="#ffe6a0"/></g>
    <g class="expression-group expr-surprise"><circle cx="192" cy="258" r="8" fill="#7e3b67"/><circle cx="249" cy="258" r="8" fill="#7e3b67"/><circle cx="189" cy="255" r="2.3" fill="#fff"/><circle cx="246" cy="255" r="2.3" fill="#fff"/><ellipse cx="221" cy="299" rx="10" ry="13" fill="#a14c68"/></g>
    <path d="M162 336c22 19 53 29 89 29 38 0 68-13 90-31-22 44-54 57-91 57-40 0-74-17-88-55Z" fill="#f56dab"/>
    <path d="M178 344q54 29 96 0" stroke="#ffc2dd" stroke-width="5" fill="none" opacity=".75"/>
    <path d="M158 286c-27 10-34 47-45 55" stroke="#ac638d" stroke-width="13" stroke-linecap="round" fill="none"/>
    <circle cx="109" cy="340" r="13" fill="#ffe9cf" stroke="#ffb4c5" stroke-width="4"/>
    <path d="M290 286c26 7 35 36 49 38" stroke="#ac638d" stroke-width="13" stroke-linecap="round" fill="none"/><circle cx="343" cy="319" r="13" fill="#ffe9cf" stroke="#ffb4c5" stroke-width="4"/>
    <path d="m192 340-8 33" stroke="#a36d9d" stroke-width="13" stroke-linecap="round"/><path d="m248 340 8 33" stroke="#a36d9d" stroke-width="13" stroke-linecap="round"/>
    <ellipse cx="177" cy="382" rx="27" ry="13" fill="#f987b8"/><ellipse cx="265" cy="382" rx="27" ry="13" fill="#f987b8"/>
    <path class="mimi-heart-star" d="m294 183 8-13 7 13 14 5-14 7-7 14-8-14-14-7 14-5Z" fill="#ffe6a0"/><circle class="mimi-heart-star" cx="303" cy="188" r="4" fill="#fff"/>
  </g>
  </svg>`;
}

function blossom(cx,cy,scale,color,kind='rose',tilt=0){
  const tones=color==='light' ? ['#ffe9f1','#ffbdd8','#f989bd'] : color==='deep' ? ['#ff87b9','#ef4395','#c92f80'] : color==='peach' ? ['#fff0d5','#ffc49f','#fa97ab'] : ['#ffd7e6','#ff91be','#ee539e'];
  let parts='';
  if(kind==='lotus'){
    for(let i=0;i<8;i++) parts += `<path d="M0-9 Q-20-37 0-60 Q20-37 0-9Z" transform="rotate(${i*45})" fill="${tones[i%3]}" stroke="#fff1f7" stroke-width="1.1"/>`;
    parts+=`<circle r="19" fill="#ffe4a6"/><circle r="10" fill="#ffce8b"/>`;
  }else{
    for(let i=0;i<9;i++) parts += `<ellipse cx="0" cy="-29" rx="21" ry="31" transform="rotate(${i*40})" fill="${tones[i%3]}" stroke="#fff1f7" stroke-width="1.25"/>`;
    parts+=`<circle r="24" fill="${tones[1]}"/><path d="M-12-4q14-15 24 0 3 10-7 14-17 1-13-12q3-8 12-6" fill="none" stroke="${tones[0]}" stroke-width="5" stroke-linecap="round"/>`;
  }
  return `<g class="bouquet-flower" style="--flower-delay:${Math.round((cy/90+cx/500)*145)}ms" transform="translate(${cx} ${cy}) rotate(${tilt}) scale(${scale})"><g>${parts}</g></g>`;
}
function bouquetSvg() {
  const blooms=[
    blossom(146,205,.70,'peach','rose',-13),blossom(247,150,.86,'light','lotus',-6),
    blossom(359,199,.78,'deep','rose',19),blossom(111,285,.70,'light','lotus',-24),
    blossom(224,251,.97,'deep','rose',4),blossom(343,290,.75,'pink','lotus',12),
    blossom(170,338,.68,'pink','rose',-12),blossom(295,357,.71,'peach','rose',12),
  ].join('');
  return `<svg class="bouquet-svg" viewBox="0 0 500 570" role="img" aria-label="Bó hoa sen và hoa hồng màu hồng được buộc bằng nơ">
   <defs>
    <linearGradient id="paperG" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#fff1f7"/><stop offset=".5" stop-color="#ffc3dd"/><stop offset="1" stop-color="#f58aba"/></linearGradient>
    <linearGradient id="paperG2" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#ffe8f2"/><stop offset="1" stop-color="#f8a8cb"/></linearGradient>
   </defs>
   <ellipse cx="250" cy="538" rx="116" ry="17" fill="#dd8faf" opacity=".2"/>
   <g class="bouquet-stems" stroke="#74aa83" stroke-linecap="round" stroke-width="7">
     <path d="M248 486 146 208"/><path d="M248 486 247 156"/><path d="M248 486 359 202"/><path d="M248 486 111 289"/><path d="M248 486 224 255"/><path d="M248 486 343 295"/><path d="M248 486 170 340"/><path d="M248 486 295 358"/>
   </g>
   <g class="bouquet-leaves" fill="#a5d6a6"><path d="M187 375q-72-2-72-57 60-2 72 57Z"/><path d="M301 396q70-12 76-72-61 2-76 72Z"/><path d="M257 394q-58-26-49-67 46 8 49 67Z"/></g>
   <g class="bouquet-paper"><path d="M62 290 251 528 439 292 381 470 251 559 121 468Z" fill="url(#paperG)" stroke="#ffb4d4" stroke-width="4"/><path d="M62 290 248 452 180 527Z" fill="#fff5f9" opacity=".92"/><path d="M439 292 251 452 324 527Z" fill="url(#paperG2)"/><path d="M75 294q173 165 348 0" stroke="#fff4f8" stroke-width="8" fill="none" opacity=".7"/></g>
   <g class="bouquet-blooms">${blooms}</g>
   <g class="bouquet-ribbon"><path d="M248 445q-75-48-79 5 5 43 79 11-9 20-12 55l23-15-4-47q48 23 79 9 30-31-16-42-24-3-70 24Z" fill="#f255a2" stroke="#d73e87" stroke-width="4"/><path d="M245 448c-33-18-56-13-57 2 9 16 34 9 57 2Zm19-1c35-19 51-14 55-3-9 16-38 9-55 3Z" fill="#ffb8d7"/><circle cx="253" cy="454" r="17" fill="#ff9cc9" stroke="#ee539e" stroke-width="4"/></g>
   </svg>`;
}
