import './styles/variables.css';
import './styles/base.css';
import './styles/layout.css';
import './styles/components.css';
import './styles/animations.css';
import './styles/responsive.css';

import { initClock } from './js/clock.js';
import { initThemeToggle } from './js/theme.js';
import { initNavigation } from './js/navigation.js';
import { initMatrix } from './js/matrix.js';

document.addEventListener('DOMContentLoaded', () => {
    initClock();
    initThemeToggle();
    initNavigation();
    initMatrix();
});
