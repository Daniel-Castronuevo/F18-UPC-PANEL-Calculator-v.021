"use strict"

// CARGAR CALCULADORA //

const calculator = document.querySelector(".container-calc");

addEventListener("load",()=>{
    calculator.style.opacity = 1
});

// PANTALLA //

const botonesNumeros = document.querySelectorAll(".button-num");
const mainScreen = document.querySelector(".tipping")

botonesNumeros.forEach(boton => {
    boton.addEventListener("click",()=>{
        if(boton.value == 1){
        mainScreen.innerHTML += `<p class="tipping-on tipping-on-1">${boton.value}</p>`
        }
        else if(boton.value == 7){
            mainScreen.innerHTML += `<p class="tipping-on tipping-on-7">${boton.value}</p>`
        }
        else if(boton.value == 2){
            mainScreen.innerHTML += `<p class="tipping-on tipping-on-2">${boton.value}</p>`
        }
        else {
            mainScreen.innerHTML += `<p class="tipping-on">${boton.value}</p>`
        }
    })
});

const botonesOperadores = document.querySelectorAll(".button-op");

botonesOperadores.forEach(botonOP => {
    botonOP.addEventListener("click",()=>{
        if(botonOP.value == `+`){
        mainScreen.innerHTML += `<p class="tipping-on tipping-on--plus-sign">${botonOP.value}</p>`
        }
        else if(botonOP.value == `-`){
            mainScreen.innerHTML += `<p class="tipping-on tipping-on--minus-sign">${botonOP.value}</p>`
        }
        else if(botonOP.value == `/`){
            mainScreen.innerHTML += `<p class="tipping-on tipping-on--division-sign">${botonOP.value}</p>`
        }
        else if(botonOP.value == `x`){
            mainScreen.innerHTML += `<p class="tipping-on tipping-on--multiplication-sign">${botonOP.value}</p>`
        }
    })
});

const buttonAC = document.querySelector(".AC-button");

buttonAC.addEventListener("click",()=>{
    mainScreen.innerHTML = ``
})