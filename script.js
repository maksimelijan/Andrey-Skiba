const header=document.querySelector('.site-header');
let lastScrollY=window.scrollY;
let ticking=false;

function updateHeader(){
  const currentScrollY=window.scrollY;
  const delta=currentScrollY-lastScrollY;

  if(header){
    if(currentScrollY<=10){
      header.classList.remove('header-hidden');
    }else if(delta>3){
      header.classList.add('header-hidden');
    }else if(delta<-3){
      header.classList.remove('header-hidden');
    }
  }

  lastScrollY=currentScrollY;
  ticking=false;
}

window.addEventListener('scroll',()=>{
  if(!ticking){
    window.requestAnimationFrame(updateHeader);
    ticking=true;
  }
},{passive:true});

window.addEventListener('touchmove',()=>{
  if(!ticking){
    window.requestAnimationFrame(updateHeader);
    ticking=true;
  }
},{passive:true});

document.querySelectorAll('a[href^="http"]').forEach(a=>a.addEventListener('click',()=>a.blur()));
document.querySelectorAll('img[src="andrey-skiba.jpg"]').forEach(img=>img.addEventListener('error',()=>{img.src='avatar.svg'}));
