export function initNavigation() {
    const btnProjects = document.getElementById('btnProjects');
    const btnAbout = document.getElementById('btnAbout');
    const profileBox = document.getElementById('profileBox');
    
    if (!btnProjects || !btnAbout || !profileBox) return;
    
    const profileHTML = profileBox.innerHTML;
    const soonHTML = `
        <div style="width: 100%; height: 100%; display: flex; flex-direction: column; justify-content: center; align-items: center; text-align: center; position: relative;">
            <span class="micro-text micro-tl" style="top: 15px; left: 20px;">SYS.MODULE // PROJECTS</span>
            <div style="font-family: var(--font-sudo); font-size: 4rem; color: var(--line-color); line-height: 1; transition: color 0.3s;">
                soon<span class="blink-cursor">_</span>
            </div>
            <div style="font-size: 0.7rem; font-weight: bold; opacity: 0.5; margin-top: 10px; color: var(--line-color); transition: color 0.3s;">MODULE IN DEVELOPMENT</div>
        </div>
    `;

    let currentSection = 'about';

    function switchSection(targetSection) {
        if (currentSection === targetSection || profileBox.classList.contains('do-swap')) return;
        profileBox.classList.add('do-swap');

        setTimeout(() => {
            currentSection = targetSection;
            profileBox.innerHTML = targetSection === 'projects' ? soonHTML : profileHTML;
        }, 500);

        setTimeout(() => {
            profileBox.classList.remove('do-swap');
        }, 1000);
    }

    btnProjects.addEventListener('click', (e) => { e.preventDefault(); switchSection('projects'); });
    btnAbout.addEventListener('click', (e) => { e.preventDefault(); switchSection('about'); });
}
