const polza = document.getElementById('polzunok');
const pryamougolnik = document.querySelector('.Erect');
const bordDisplay = document.getElementById('Bord');

function izmena() {
    const value = polza.value;
    const radius = value;
    pryamougolnik.style.borderRadius = radius + 'px';
    bordDisplay.textContent = radius;
}

polza.addEventListener('input', izmena);

izmena();