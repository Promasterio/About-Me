function showAlert() {
    alert("You can contact me at john.doe@example.com or (123) 456-7890.");
}

function scrollToDetails() {
    document.getElementById("details").scrollIntoView({ behavior: "smooth" });
}

// Canvas animation
const canvas = document.getElementById('backgroundCanvas');
const ctx = canvas.getContext('2d');

let width, height;
let particles = [];

function init() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;

    particles = [];
    for (let i = 0; i < 100; i++) {
        particles.push(new Particle());
    }
}

class Particle {
    constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.radius = Math.random() * 5 + 1;
        this.speedX = Math.random() * 2 - 1;
        this.speedY = Math.random() * 2 - 1;
        this.growth = Math.random() * 0.05;
    }

    update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.radius += this.growth;

        if (this.radius > 20) {
            this.radius = Math.random() * 5 + 1;
            this.x = Math.random() * width;
            this.y = Math.random() * height;
        }
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
        ctx.fill();
    }
}

function animate() {
    ctx.clearRect(0, 0, width, height);

    particles.forEach(particle => {
        particle.update();
        particle.draw();
    });

    requestAnimationFrame(animate);
}

window.addEventListener('resize', init);

init();
animate();
