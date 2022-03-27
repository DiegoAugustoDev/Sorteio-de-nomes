let btn = document.getElementById("btn")
let enterNames = document.getElementById("enterNames")
let result = document.getElementById("result")

function formNames(){
    let valueCamp = enterNames.value
    let listNames = valueCamp.split(",")
    let arraySize = listNames.length
    let positionName = randomNumber(arraySize)
    let name = listNames[positionName]
    showResult(name)

    enterNames.value = ""
}

btn.addEventListener("click", formNames)

function randomNumber(arraySize){
    return Math.floor(Math.random() * (arraySize - 0) + 0)
}

function showResult(name){
    result.innerText = `Resultado: ${name}`
}