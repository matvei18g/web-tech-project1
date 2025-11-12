const btn = document.getElementById('checkBtn');
const input = document.getElementById('numberInput');
const result = document.getElementById('result');




btn.addEventListener('click', () => {
    const value = parseFloat(input.value);
    if (isNaN(value)) {
        result.textContent = 'Введите корректное число!';
    } else if (value > 0) {
        result.textContent = 'Число положительное';
    } else if (value < 0) {
        result.textContent = 'Число отрицательное';
    } else {
        result.textContent = 'Число равно нулю';
    }
});