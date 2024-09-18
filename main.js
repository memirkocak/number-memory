const number = document.querySelector('#number')
const timeBar = document.querySelector('.time-bar')
const bar = document.querySelector('.bar')
const box = document.querySelector('.box')
const boxBox = document.querySelector('.boxbox')
const valide = document.querySelector('#valide')
const newBox = document.querySelector('.newBox')
const numberInput = document.querySelector('#numberInput')
const scoreText = document.querySelector('.score')

function game(){
let score = 0;
scoreText.textContent = `score : ${score}`
let BarWidth = 95;
let numbers = ''

//cette fonction sert a diminuer le temps (width) du time-bar
function time(){
    setTimeout(() => {
        bar.style.width = BarWidth + '%'
        BarWidth--
        time()
    }, 20);
    if(BarWidth === 0){ 
        box.remove()
        newBox.style.display = 'flex'
    }
}
time()

// cette fonction permet d'avoir un chiffre entre 1 et 9
function createNumber(){   
    let random = Math.floor(Math.random() * 1 * 9 + 1)
    numbers = numbers + random
    number.textContent = numbers
    console.log(numbers);
}
createNumber()

valide.addEventListener('click',()=>{
    if(numberInput.value === numbers){
        score++;
        scoreText.textContent = `score : ${score}`
        createNumber()
        BarWidth = 95
        boxBox.appendChild(box)
        newBox.style.display = 'none'
        numberInput.value = ''
    }
    if(numberInput.value !== numbers){
        newBox.remove()
        scoreText.textContent = `score : ${score}`
        const restartBtn = document.createElement('button')
        restartBtn.textContent = 'restart'
        restartBtn.className = 'restartBtn'
        boxBox.appendChild(restartBtn)

        restartBtn.addEventListener('click',()=>{
            window.location.reload()
        })
    }
})

//cette fonction permet de valider la réponse en cliquant sur entrer

function handleEnterKey(event) {
    if (event.key === "Enter" && numberInput.value >= 1) {
        if(numberInput.value === numbers){
            score++;
            scoreText.textContent = `score : ${score}`
            createNumber()
            BarWidth = 95
            boxBox.appendChild(box)
            newBox.style.display = 'none'
            numberInput.value = ''
        }else{
            newBox.remove()
            scoreText.textContent = `score : ${score}`
            const restartBtn = document.createElement('button')
            restartBtn.textContent = 'restart'
            restartBtn.className = 'restartBtn'
            boxBox.appendChild(restartBtn)
    
            restartBtn.addEventListener('click',()=>{
                window.location.reload()
            })
        }
    }
}
document.addEventListener("keydown", handleEnterKey);


}
game()

