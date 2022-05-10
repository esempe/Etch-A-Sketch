
let drawPanel = document.getElementById('root')
let sliderRange = document.querySelector('.slider')
let sliderCounter = document.querySelector('.sliderValue')
sliderCounter.textContent = sliderRange.value
const removeChilds = (parent) => {
    while (parent.lastChild) {
        parent.removeChild(parent.lastChild);
    }
};

sliderRange.addEventListener('change', (event) => {
    let sliderCounter = document.querySelector('.sliderValue')
    removeChilds(drawPanel)
    sliderCounter.textContent = event.target.value
    makeRows(event.target.value)
})

makeRows = (rowsCols) => {
    drawPanel.style.setProperty('--grid-rows', rowsCols);
    drawPanel.style.setProperty('--grid-cols', rowsCols)
    for (let i = 0; i < (rowsCols * rowsCols); i++) {
        const div = document.createElement('div');
        document.getElementById('root').appendChild(div)
    }
}


