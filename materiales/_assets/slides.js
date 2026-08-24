function initDeck(){
  const slides=[...document.querySelectorAll('.slide')];
  const counter=document.getElementById('counter');
  let i=0;
  const key='slidepos:'+location.pathname;
  try{ const saved=parseInt(sessionStorage.getItem(key)||'0',10); if(saved>=0&&saved<slides.length) i=saved; }catch(e){}

  function show(n){
    n=Math.max(0,Math.min(n,slides.length-1));
    slides.forEach((s,idx)=>s.classList.toggle('active',idx===n));
    if(counter) counter.textContent=(n+1)+' / '+slides.length;
    i=n;
    try{ sessionStorage.setItem(key,String(n)); }catch(e){}
  }
  function toggleFullscreen(){
    if(!document.fullscreenElement) document.documentElement.requestFullscreen().catch(()=>{});
    else document.exitFullscreen();
  }
  const next=()=>show(i+1), prev=()=>show(i-1);
  const btnNext=document.getElementById('next');
  const btnPrev=document.getElementById('prev');
  const btnFs=document.getElementById('fullscreen');
  if(btnNext) btnNext.onclick=next;
  if(btnPrev) btnPrev.onclick=prev;
  if(btnFs) btnFs.onclick=toggleFullscreen;

  document.addEventListener('keydown',e=>{
    if(['ArrowRight','PageDown',' '].includes(e.key)){ e.preventDefault(); next(); }
    else if(['ArrowLeft','PageUp'].includes(e.key)){ e.preventDefault(); prev(); }
    else if(e.key==='Home') show(0);
    else if(e.key==='End') show(slides.length-1);
    else if(e.key.toLowerCase()==='f') toggleFullscreen();
  });

  let touchX=null;
  document.addEventListener('touchstart',e=>{ touchX=e.touches[0].clientX; });
  document.addEventListener('touchend',e=>{
    if(touchX==null) return;
    const dx=e.changedTouches[0].clientX-touchX;
    if(dx<-40) next(); else if(dx>40) prev();
    touchX=null;
  });

  show(i);
}
