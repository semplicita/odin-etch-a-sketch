const container = document.querySelector('#container')

function createGrid(width) {
    for (let i = 0; i < width*width; i++) {
        const square = document.createElement('div')
        square.classList.add('square')
        
        square.style.padding = 960/width/2 + "px"
    
        square.addEventListener('mouseover', () => {
            square.classList.add('colored')
        })
        container.appendChild(square)
    }
}

createGrid(16)

const btn = document.querySelector('#btn')
btn.onclick = () => {
    let size = prompt("Set grid size: ")
    if (size > 100) {
        alert("Grid size can't be larger than 100!")
    } else {
        while (container.firstChild) {
            container.removeChild(container.lastChild);
        }
        createGrid(size)
    }
}