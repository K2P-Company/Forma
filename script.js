// Elementy menu na telefonie.
const menuButton = document.querySelector('.menu-toggle');
const menu = document.querySelector('#menu');
const menuLabel = menuButton.querySelector('.menu-label');
const menuIcon = menuButton.querySelector('.menu-icon');
const mobileScreen = window.matchMedia('(max-width: 960px)');

// Bez JavaScriptu menu zostaje widoczne.
document.documentElement.classList.add('js');

function setMenu(open) {
  menu.classList.toggle('is-open', open);
  menuButton.setAttribute('aria-expanded', String(open));
  menuLabel.textContent = open ? 'Zamknij' : 'Menu';
  menuIcon.textContent = open ? '×' : '☰';
}

function closeMenu() {
  setMenu(false);
}

menuButton.addEventListener('click', () => {
  setMenu(!menu.classList.contains('is-open'));
});
menu.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
  const target = document.querySelector(link.getAttribute('href'));
  closeMenu();
  // Przenosimy fokus klawiatury do wybranej sekcji.
  if (target) {
    target.setAttribute('tabindex', '-1');
    target.focus({ preventScroll: true });
  }
}));

document.addEventListener('click', (event) => {
  if (!mobileScreen.matches || !menu.classList.contains('is-open')) return;
  if (!menu.contains(event.target) && !menuButton.contains(event.target)) {
    const focusWasInMenu = menu.contains(document.activeElement);
    closeMenu();
    if (focusWasInMenu) menuButton.focus({ preventScroll: true });
  }
});

// Zamykamy menu po zmianie rozmiaru okna.
mobileScreen.addEventListener('change', () => {
  const focusWillBeHidden = mobileScreen.matches && menu.contains(document.activeElement);
  const focusWasOnButton = !mobileScreen.matches && document.activeElement === menuButton;
  closeMenu();
  if (focusWillBeHidden) menuButton.focus({ preventScroll: true });
  if (focusWasOnButton) menu.querySelector('a').focus({ preventScroll: true });
});
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && menu.classList.contains('is-open')) {
    closeMenu();
    menuButton.focus();
  }
});

