(function () {
  const root = document.documentElement;
  const saved = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const initial = saved || (prefersDark ? 'dark' : 'light');
  root.setAttribute('data-bs-theme', initial);

  const btn = document.getElementById('theme-toggle');
  if (!btn) return;
  btn.textContent = initial === 'dark' ? '☀️' : '🌙';

  btn.addEventListener('click', function () {
    const current = root.getAttribute('data-bs-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-bs-theme', next);
    localStorage.setItem('theme', next);
    btn.textContent = next === 'dark' ? '☀️' : '🌙';
  });
})();