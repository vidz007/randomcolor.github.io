const button = document.querySelector('button');
const h1 = document.querySelector('h1');


button.addEventListener('click', function() {
    const newColor = makeRandColor();
    document.body.style.background = newColor;
    h1.innerText = newColor;
    h1.style.fontSize = "40px";
    h1.style.textAlign = "center";
})

const makeRandColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r}, ${g}, ${b})`;
}