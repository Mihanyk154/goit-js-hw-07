function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
}

const input = document.querySelector('input');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const boxesDiv = document.getElementById('boxes');

createBtn.addEventListener('click', () => {
    const amount = Number(input.value);
    if (amount < 1 || amount > 100) {
        alert('Please enter a number between 1 and 100.');
        return;
    }
    createBoxes(amount);
    input.value = '';
});

destroyBtn.addEventListener('click', () => {
    destroyBoxes();
});

function createBoxes(amount) {
    destroyBoxes();
    for (let i = 0; i < amount; i++) {
        const box = document.createElement('div');
        box.classList.add('box');
        box.style.backgroundColor = getRandomHexColor();
        box.style.width = `${30 + i * 10}px`;
        box.style.height = `${30 + i * 10}px`;
        boxesDiv.appendChild(box);
    }
}

function destroyBoxes() {
    boxesDiv.innerHTML = '';
}