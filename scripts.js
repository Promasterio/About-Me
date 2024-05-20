document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('background');
    const ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const dots = [];
    const maxDots = 100;
    const dotSpeed = 0.5;
    const lineDistance = 100;

    class Dot {
        constructor(x, y) {
            this.x = x;
            this.y = y;
            this.vx = (Math.random() - 0.5) * dotSpeed;
            this.vy = (Math.random() - 0.5) * dotSpeed;
        }

        move() {
            this.x += this.vx;
            this.y += this.vy;

            if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
            if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
        }

        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, 2, 0, Math.PI * 2);
            ctx.fillStyle = '#fff';
            ctx.fill();
        }
    }

    function init() {
        for (let i = 0; i < maxDots; i++) {
            dots.push(new Dot(Math.random() * canvas.width, Math.random() * canvas.height));
        }
        animate();
    }

    function drawLines() {
        for (let i = 0; i < dots.length; i++) {
            for (let j = i + 1; j < dots.length; j++) {
                const dist = Math.hypot(dots[i].x - dots[j].x, dots[i].y - dots[j].y);
                if (dist < lineDistance) {
                    ctx.beginPath();
                    ctx.moveTo(dots[i].x, dots[i].y);
                    ctx.lineTo(dots[j].x, dots[j].y);
                    ctx.strokeStyle = 'rgba(255, 255, 255, ' + (1 - dist / lineDistance) + ')';
                    ctx.stroke();
                }
            }
        }
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        dots.forEach(dot => {
            dot.move();
            dot.draw();
        });
        drawLines();
        requestAnimationFrame(animate);
    }

    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });

    init();
});
