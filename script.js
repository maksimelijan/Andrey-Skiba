let lastScrollY=window.scrollY;
const header=document.querySelector('.site-header');
let ticking=false;

function updateHeader(){
  const currentScrollY=window.scrollY;
  if(header){
    if(currentScrollY>lastScrollY && currentScrollY>80){
      header.classList.add('header-hidden');
    }else if(currentScrollY<lastScrollY){
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

document.querySelectorAll('a[href^="http"]').forEach(a=>a.addEventListener('click',()=>a.blur()));
document.querySelectorAll('img[src="andrey-skiba.jpg"]').forEach(img=>img.addEventListener('error',()=>{img.src='avatar.svg'}));
