let colors = [
    '#005f73', // Dark Cyan
    '#0a9396', // Teal
    '#94d2bd', // Light Sea Green
    '#3d405b', // Dark Slate Blue
    '#e9c46a', // Pale Gold
    '#f4a261', // Sandy Brown
    '#264653', // Dark Slate Green
    '#2a9d8f', // Medium Aquamarine
    '#e76f51', // Coral
];
let len = colors.length;
let previousColor = '#00000';

function getRandomColor(excludeColor) {
    let color;
    do {
        color = colors[Math.floor(Math.random() * len) + 1];
    } while (color === excludeColor);
    return color;
}

let container = document.createElement('div');
container.className = 'sliders';
for (let i = 1; i <= 500; i++) {
    let div = document.createElement('div');
    div.className = 'slider';
    div.textContent = `Item ${i}`;
    let color = getRandomColor(previousColor);
    div.style.backgroundColor = color;
    previousColor = color;
    container.appendChild(div);
}

document.body.appendChild(container);


const slider = document.querySelector('.sliders');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
    isDown = true;
    e.preventDefault();
    slider.classList.add('active');
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
});

slider.addEventListener('mouseup', () => {
    isDown = false;
    slider.classList.remove('active');
});

slider.addEventListener('mouseleave', () => {
    isDown = false;
    slider.classList.remove('active');
});

slider.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    let walk = (e.pageX - slider.offsetLeft) - startX;
    walk *= 3;
    slider.scrollLeft = scrollLeft - walk;
});