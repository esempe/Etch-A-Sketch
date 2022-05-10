
let drawPanel = document.getElementById('root')
let sliderRange = document.querySelector('.slider')
let sliderCounter = document.querySelector('.sliderValue')
sliderCounter.textContent = sliderRange.value
const removeChilds = (parent) => {
    while (parent.lastChild) {
        parent.removeChild(parent.lastChild);
    }
};

sliderRange.addEventListener('input', (event) => {
    let sliderCounter = document.querySelector('.sliderValue')
    removeChilds(drawPanel)
    sliderCounter.textContent = event.target.value
    makeRows(event.target.value)
    let selectedDiv = document.getElementsByClassName('cell')
    for (let i = 0; i < selectedDiv.length; i++) {
        selectedDiv[i].addEventListener('mousedown', (e) => {
            for (let i = 0; i < selectedDiv.length; i++) {
                selectedDiv[i].addEventListener('mouseenter', (e) => {
                    e.target.style.backgroundColor = 'red'
                })
            }
        })
    }

})

makeRows = (rowsCols) => {
    drawPanel.style.setProperty('--grid-rows', rowsCols);
    drawPanel.style.setProperty('--grid-cols', rowsCols)
    for (let i = 0; i < (rowsCols * rowsCols); i++) {
        const div = document.createElement('div');
        div.setAttribute('class', `cell`)
        document.getElementById('root').appendChild(div)
    }
}

makeRows(12)
