const cursorTag = document.querySelector('div.cursors');
const ball = cursorTag.querySelector('div');

let aimY = 0;
let aimX = 0;
let currentX = 0;
let currentY = 0;
let speed = 0.3;

const animate = function () {
    currentX += (aimX - currentX) * speed;
    currentY += (aimY - currentY) * speed;

    ball.style.left = currentX + 'px';
    ball.style.top = currentY + 'px';


    requestAnimationFrame(animate);
}

animate()


document.addEventListener("mousemove", function(event) {
    aimX = event.pageX;
    aimY = event.pageY;
})

document.addEventListener("touchmove", function(event) {
    aimX = event.touches[0].pageX;
    aimY = event.touches[0].pageY;
})