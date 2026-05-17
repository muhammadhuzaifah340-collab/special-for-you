/* ── Floating Hearts ── */
(()=>{
  const c=document.getElementById('fhWrap');
  const e=['💕','💗','💖','🌹','✨','🌸','💝','🌷','💓','🫀'];
  for(let i=0;i<20;i++){
    const h=document.createElement('div');
    h.className='fh';
    h.textContent=e[Math.floor(Math.random()*e.length)];
    h.style.left=Math.random()*100+'%';
    h.style.animationDuration=(9+Math.random()*10)+'s';
    h.style.animationDelay=(Math.random()*12)+'s';
    h.style.fontSize=(.8+Math.random()*1.1)+'rem';
    c.appendChild(h);
  }
})();

/* ── Particle Canvas ── */
(()=>{
  const cv=document.getElementById('cv');
  const ctx=cv.getContext('2d');
  let W,H,pts=[];
  function resize(){W=cv.width=innerWidth;H=cv.height=innerHeight;}
  resize(); window.addEventListener('resize',resize);
  const cols=['rgba(232,72,106,','rgba(196,106,170,','rgba(201,150,74,','rgba(196,160,232,'];
  class P{
    constructor(){this.reset();}
    reset(){this.x=Math.random()*W;this.y=Math.random()*H;this.r=Math.random()*2+.4;
      this.vx=(Math.random()-.5)*.28;this.vy=(Math.random()-.5)*.28;
      this.a=Math.random()*.38+.08;this.c=cols[Math.floor(Math.random()*cols.length)];}
    update(){this.x+=this.vx;this.y+=this.vy;if(this.x<0||this.x>W||this.y<0||this.y>H)this.reset();}
    draw(){ctx.beginPath();ctx.arc(this.x,this.y,this.r,0,Math.PI*2);ctx.fillStyle=this.c+this.a+')';ctx.fill();}
  }
  for(let i=0;i<90;i++)pts.push(new P());
  (function loop(){ctx.clearRect(0,0,W,H);pts.forEach(p=>{p.update();p.draw();});requestAnimationFrame(loop);})();
})();

/* ── Scroll Reveal ── */
(()=>{
  const els=document.querySelectorAll('.reveal,.reveal-l,.reveal-r,.reveal-scale');
  const obs=new IntersectionObserver(entries=>{
    entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('v');});
  },{threshold:.13,rootMargin:'0px 0px -40px 0px'});
  els.forEach(e=>obs.observe(e));
})();

/* ── Quote Slider ── */
let cur=0;
const slides=document.querySelectorAll('.q-slide');
const dots=document.querySelectorAll('.q-dot');
function goSlide(i){
  slides[cur].classList.remove('active');dots[cur].classList.remove('active');
  cur=i;slides[cur].classList.add('active');dots[cur].classList.add('active');
}
setInterval(()=>goSlide((cur+1)%slides.length),4800);

/* ── No Button Runs Away ── */
function runAway(btn){
  const maxX=window.innerWidth-120, maxY=window.innerHeight-60;
  const x=Math.floor(Math.random()*maxX);
  const y=Math.floor(Math.random()*maxY);
  btn.style.position='fixed';
  btn.style.left=x+'px';
  btn.style.top=y+'px';
  btn.style.zIndex='9999';
}

/* ── Yes button ── */
function sayYes(){
  document.getElementById('answer-section').style.display='none';
  const msg=document.getElementById('response-msg');
  msg.style.display='block';
  // confetti burst
  for(let i=0;i<30;i++) launchHeart();
}
function launchHeart(){
  const h=document.createElement('div');
  h.style.cssText=`position:fixed;font-size:${1+Math.random()*1.5}rem;
    left:${30+Math.random()*40}%;top:60%;pointer-events:none;z-index:9999;
    animation:fhRise ${3+Math.random()*3}s linear forwards;`;
  h.textContent=['💕','💗','💖','🌹','✨'][Math.floor(Math.random()*5)];
  document.body.appendChild(h);
  setTimeout(()=>h.remove(),6000);
}

/* ── Finale Stars ── */
(()=>{
  const c=document.getElementById('finStars');
  const pos=[[5,10],[15,30],[25,15],[35,45],[45,20],[55,55],[65,10],[75,35],[85,20],[95,50],
             [10,70],[20,80],[30,60],[40,85],[50,75],[60,65],[70,80],[80,70],[90,90],[5,90]];
  pos.forEach(([l,t],i)=>{
    const s=document.createElement('div');
    s.className='fstar';
    s.style.left=l+'%';s.style.top=t+'%';
    s.style.animationDelay=(i*.15)+'s';
    s.style.animationDuration=(1.5+Math.random())+'s';
    s.textContent=['✦','✧','⋆','✨'][i%4];
    c.appendChild(s);
  });
})();