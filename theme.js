const themeToggle = document.querySelector('.theme-toggle');
const storedTheme = localStorage.getItem('portfolio-theme');
const initialTheme = storedTheme === 'light' ? 'light' : 'dark';

function applyTheme(theme) {
  const isLight = theme === 'light';
  document.documentElement.dataset.theme = isLight ? 'light' : 'dark';
  themeToggle.setAttribute('aria-pressed', String(isLight));
  themeToggle.setAttribute('aria-label', `Switch to ${isLight ? 'dark' : 'light'} theme`);
  themeToggle.innerHTML = `<i class="fa-solid ${isLight ? 'fa-moon' : 'fa-sun'}" aria-hidden="true"></i><span>${isLight ? 'Dark' : 'Light'} mode</span>`;
}

applyTheme(initialTheme);

themeToggle.addEventListener('click', () => {
  const nextTheme = document.documentElement.dataset.theme === 'light' ? 'dark' : 'light';
  localStorage.setItem('portfolio-theme', nextTheme);
  applyTheme(nextTheme);
});
