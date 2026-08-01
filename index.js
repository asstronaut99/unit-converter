
// 1 meter = 3.281 feet
// 1 liter = 0.264 gallon
// 1 kilogram = 2.204 pound


let inputEl =  document.getElementById("input-el")
let btnEl = document.getElementById("btn")
let lengthEl = document.getElementById("length-el")
let volumeEl = document.getElementById("volume-el")
let massEl = document.getElementById("mass-el")
let inputValue = 0


btnEl.addEventListener("click", function() {
    inputValue = inputEl.value
    let feet = Number(inputValue) * 3.28084
    let meter = Number(inputValue) * 1/3.28084
    let gallon = Number(inputValue) * 0.26417
    let liter = Number(inputValue) * 1/0.26417
    let pound = Number(inputValue) * 2.20462
    let kilo = Number(inputValue) * 1/2.20462

    if (inputValue === "1") {
        lengthEl.innerHTML = `${inputValue} meter = 
        ${feet.toFixed(3)}  feet | ${inputValue} foot = ${meter.toFixed(3)} meters` 
        volumeEl.innerHTML = `${inputValue} liter = 
        ${gallon.toFixed(3)} gallons | ${inputValue} gallon = ${liter.toFixed(3)} liters`
        massEl.innerHTML = `${inputValue} kilo = 
        ${pound.toFixed(3)} pounds | ${inputValue} pound = ${kilo.toFixed(3)} kilos`
    }else {
        lengthEl.innerHTML = `${inputValue} meters = 
        ${feet.toFixed(3)}  feet | ${inputValue} feet = ${meter.toFixed(3)} meters` 
        volumeEl.innerHTML = `${inputValue} liters = 
        ${gallon.toFixed(3)} gallons | ${inputValue} gallons = ${liter.toFixed(3)} liters`
        massEl.innerHTML = `${inputValue} kilos = 
        ${pound.toFixed(3)} pounds | ${inputValue} pounds = ${kilo.toFixed(3)} kilos`
    }

})



