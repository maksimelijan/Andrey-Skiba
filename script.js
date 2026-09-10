const header = document.querySelector('.site-header');
let lastScrollY = window.scrollY;
let ticking = false;

function updateHeader() {
  if (!header) return;

  const currentScrollY = window.scrollY;

  if (currentScrollY <= 5) {
    header.classList.remove('header-hidden');
  } else if (currentScrollY > lastScrollY) {
    header.classList.add('header-hidden');
  } else if (currentScrollY < lastScrollY) {
    header.classList.remove('header-hidden');
  }

  lastScrollY = currentScrollY;
  ticking = false;
}

window.addEventListener('scroll', () => {
  if (!ticking) {
    requestAnimationFrame(updateHeader);
    ticking = true;
  }
}, { passive: true });

document.querySelectorAll('a[href^="http"]').forEach(a => {
  a.addEventListener('click', () => a.blur());
});

document.querySelectorAll('img[src="andrey-skiba.jpg"]').forEach(img => {
  img.addEventListener('error', () => {
    img.src = 'avatar.svg';
  });
});
