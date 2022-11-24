const container = document.querySelector('#container')

for (let i = 0; i < 16*16; i++) {
    const square = document.createElement('div')
    square.classList.add('square')
    
    square.style.padding = 960/16/2 + "px"

    square.addEventListener('mouseover', () => {
        square.classList.add('colored')
    })
    container.appendChild(square)
}