export function initThemeToggle() {
    const themeToggle = document.getElementById('themeToggle');
    const iconMoon = document.getElementById('iconMoon');
    const iconSun = document.getElementById('iconSun');

    if (!themeToggle || !iconMoon || !iconSun) return;

    themeToggle.addEventListener('click', () => {
        document.documentElement.classList.toggle('dark-theme');
        if (document.documentElement.classList.contains('dark-theme')) {
            iconMoon.style.display = 'none';
            iconSun.style.display = 'block';
        } else {
            iconMoon.style.display = 'block';
            iconSun.style.display = 'none';
        }
    });
}
