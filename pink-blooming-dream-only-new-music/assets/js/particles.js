/** Canvas 2D: canh hoa, trai tim va cac vi sao / toi uu 60fps. */
const rand = (a,b)=> a+Math.random()*(b-a);
const reduceMedia = window.matchMedia('(prefers-reduced-motion: reduce)');

class PinkParticles {
  constructor(canvas){
    this.canvas=canvas;
    this.ctx=canvas.getContext('2d', { alpha:true });
    this.dpr=1; this.width=0; this.height=0; this.particles=[]; this.bursts=[];
    this.reduced=reduceMedia.matches; this.last=0; this.id=0;
    this.resize=()=>this.onResize(); this.onResize();
    window.addEventListener('resize',this.resize,{passive:true});
    reduceMedia.addEventListener?.('change',e=>{this.reduced=e.matches;this.populate();});
    document.addEventListener('visibilitychange',()=>{this.last=performance.now();});
    this.populate(); this.id=requestAnimationFrame(time=>this.drawFrame(time));
  }
  onResize(){
    this.width=window.innerWidth;this.height=window.innerHeight;this.dpr=Math.min(devicePixelRatio||1,2);
    this.canvas.width=Math.round(this.width*this.dpr);this.canvas.height=Math.round(this.height*this.dpr);
    this.canvas.style.width=`${this.width}px`;this.canvas.style.height=`${this.height}px`;
    this.ctx?.setTransform(this.dpr,0,0,this.dpr,0,0);
    if(this.particles.length)this.populate();
  }
  populate(){
    const count=this.reduced?20:(this.width<600?38:72);
    this.particles=Array.from({length:count},()=>this.makeAmbient(true));
  }
  makeAmbient(init=false){
    const kind=Math.random()<.55?'petal':Math.random()<.75?'dot':'star';
    return {kind,x:rand(0,this.width),y:init?rand(0,this.height):rand(-80,-10),size:kind==='petal'?rand(4,11):rand(1.4,3.5),speed:rand(.25,.88),drift:rand(-.2,.45),phase:rand(0,6.3),rotation:rand(-3,3),turn:rand(-.008,.008),opacity:rand(.23,.56),hue:Math.random()<.7?'pink':'white',age:0};
  }
  burst(x=this.width/2,y=this.height/2,count=27){
    if(this.reduced)return;
    const n=Math.min(count,this.width<600?32:60);
    for(let i=0;i<n;i++){
      const a=rand(0,Math.PI*2),speed=rand(1.8,5.5);
      this.bursts.push({x,y,vx:Math.cos(a)*speed,vy:Math.sin(a)*speed-1.3,kind:i%4===0?'heart':i%3===0?'star':'petal',size:rand(4,9),rotation:rand(0,6),turn:rand(-.13,.13),life:1,opacity:rand(.55,.93),hue:i%3===0?'white':'pink'});
    }
  }
  confetti(x=this.width/2,y=this.height/2,count=50){
    if(this.reduced)return;
    for(let i=0;i<count;i++){
      const a=rand(-Math.PI*.9,-Math.PI*.1),speed=rand(2.7,7.2);
      this.bursts.push({x,y,vx:Math.cos(a)*speed,vy:Math.sin(a)*speed,kind:'confetti',size:rand(3.2,7),rotation:rand(0,6),turn:rand(-.14,.14),life:1,opacity:.85,hue:i%4===0?'white':'pink'});
    }
  }
  petal(p){
    const ctx=this.ctx;
    ctx.beginPath();ctx.moveTo(0,-p.size);
    ctx.bezierCurveTo(p.size*.95,-p.size*.95,p.size*.85,p.size*.3,0,p.size*.95);
    ctx.bezierCurveTo(-p.size*.85,p.size*.3,-p.size*.95,-p.size*.95,0,-p.size);
    ctx.fillStyle=p.hue==='white'?'#fffafa':p.kind==='heart'?'#f05d9e':'#f79cbd';ctx.fill();
    ctx.strokeStyle='rgba(255,255,255,.38)';ctx.lineWidth=.5;ctx.stroke();
  }
  heart(p){
    const s=p.size,c=this.ctx;c.beginPath();c.moveTo(0,s*.75);c.bezierCurveTo(-s*1.4,-s*.05,-s*.9,-s*1.05,0,-s*.4);c.bezierCurveTo(s*.9,-s*1.05,s*1.4,-s*.05,0,s*.75);c.fillStyle='#ee6aa6';c.fill();
  }
  star(p){
    const c=this.ctx,s=p.size;c.beginPath();c.moveTo(0,-s*1.4);c.quadraticCurveTo(s*.2,-s*.2,s*1.3,0);c.quadraticCurveTo(s*.2,s*.2,0,s*1.4);c.quadraticCurveTo(-s*.2,s*.2,-s*1.3,0);c.quadraticCurveTo(-s*.2,-s*.2,0,-s*1.4);c.fillStyle='#fff7dc';c.fill();
  }
  drawParticle(p){
    const c=this.ctx;c.save();c.translate(p.x,p.y);c.rotate(p.rotation);c.globalAlpha=Math.max(0,Math.min(1,p.opacity*(p.life ?? 1)));
    if(p.kind==='petal')this.petal(p);else if(p.kind==='heart')this.heart(p);else if(p.kind==='star')this.star(p);else if(p.kind==='confetti'){c.fillStyle=p.hue==='white'?'#fff3c9':'#f169a7';c.fillRect(-p.size*.45,-p.size,p.size*.9,p.size*2);}else{c.beginPath();c.arc(0,0,p.size,0,Math.PI*2);c.fillStyle=p.hue==='white'?'#fff': '#f78dbb';c.fill();}
    c.restore();
  }
  drawFrame(timestamp){
    if(document.hidden){this.last=timestamp;this.id=requestAnimationFrame(t=>this.drawFrame(t));return;}
    const elapsed=this.last?Math.min((timestamp-this.last)/16.67,2):1;this.last=timestamp;
    const c=this.ctx;c.clearRect(0,0,this.width,this.height);
    for(let i=0;i<this.particles.length;i++){
      const p=this.particles[i];
      if(!this.reduced){p.age+=elapsed*.013;p.y+=p.speed*elapsed;p.x+=(p.drift+Math.sin(p.age+p.phase)*.35)*elapsed;p.rotation+=p.turn*elapsed;}
      if(p.y>this.height+40||p.x>this.width+40||p.x<-40)this.particles[i]=this.makeAmbient(false);
      this.drawParticle(p);
    }
    if(!this.reduced){
      for(let i=this.bursts.length-1;i>=0;i--){
        const p=this.bursts[i];p.x+=p.vx*elapsed;p.y+=p.vy*elapsed;p.vy+=.055*elapsed;p.vx*=.985;p.life-=.014*elapsed;p.rotation+=p.turn*elapsed;
        if(p.life<=0)this.bursts.splice(i,1);else this.drawParticle(p);
      }
    }
    this.id=requestAnimationFrame(t=>this.drawFrame(t));
  }
}
