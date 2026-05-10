export function initMatrix() {
    const canvas = document.createElement('canvas');
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100vw';
    canvas.style.height = '100vh';
    canvas.style.zIndex = '0'; 
    canvas.style.pointerEvents = 'none'; 
    canvas.style.opacity = '0'; 
    canvas.style.transition = 'opacity 3s ease 1s'; 
    document.body.appendChild(canvas);

    setTimeout(() => canvas.style.opacity = '1', 100);

    const ctx = canvas.getContext('2d');
    const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ@#$%^&*+-/<>~'.split('');
    const fontSize = 16;
    let columns, rows, grid;
    let isPageVisible = true;
    let animationFrameId;

    function resize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        columns = Math.ceil(canvas.width / fontSize);
        rows = Math.ceil(canvas.height / fontSize);
        grid = [];
        for (let c = 0; c < columns; c++) {
            grid[c] = [];
            for (let r = 0; r < rows; r++) {
                grid[c][r] = {
                    char: chars[Math.floor(Math.random() * chars.length)],
                    opacity: Math.random(), 
                    speed: (Math.random() * 0.03) + 0.01, 
                    isRed: Math.random() > 0.97 
                };
            }
        }
    }

    window.addEventListener('resize', resize);
    resize();

    document.addEventListener("visibilitychange", () => {
        isPageVisible = !document.hidden;
        if (isPageVisible) {
            draw();
        } else if (animationFrameId) {
            cancelAnimationFrame(animationFrameId);
        }
    });

    function draw() {
        if (!isPageVisible) return;

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.font = fontSize + 'px "Space Mono", monospace';
        ctx.textAlign = 'center';

        const isDark = document.documentElement.classList.contains('dark-theme');
        const mainRgb = isDark ? '229, 229, 229' : '17, 17, 17';

        for (let c = 0; c < columns; c++) {
            for (let r = 0; r < rows; r++) {
                const cell = grid[c][r];
                
                cell.opacity += cell.speed;
                if (cell.opacity >= 1 || cell.opacity <= 0) {
                    cell.speed *= -1; 
                }
                
                if (Math.random() < 0.01) {
                    cell.char = chars[Math.floor(Math.random() * chars.length)];
                }

                const maxAlpha = 0.2; 
                const currentAlpha = Math.abs(cell.opacity) * maxAlpha;
                
                if (cell.isRed) {
                    ctx.fillStyle = `rgba(234, 46, 46, ${currentAlpha + 0.1})`; 
                } else {
                    ctx.fillStyle = `rgba(${mainRgb}, ${currentAlpha})`;
                }
                
                ctx.fillText(cell.char, c * fontSize + fontSize/2, r * fontSize + fontSize);
            }
        }
        
        setTimeout(() => {
            if (isPageVisible) {
                animationFrameId = requestAnimationFrame(draw);
            }
        }, 33);
    }
    
    draw();
}
