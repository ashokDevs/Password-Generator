const SYMBOLS="!@#$%^&*"
const NUMBERS="123456789"
const LOWERCASE="abcdefghijklmnopqrstuvwxyz"
const UPPERCASE="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const pwd=document.querySelector("#pwd");
const Btn=document.querySelector("#submit");
const select=document.querySelector("#select");
const upper=document.querySelector("#upper");
const lower=document.querySelector("#lower");
const number=document.querySelector("#num");
const symbol=document.querySelector("#sym");

Btn.addEventListener("click", generatePwd)

function generatePwd(){
    const l=select.value;
    let password='';
    for(let i=0;i<l;i++){
        let randpwd=generator();
        password+=randpwd
    }
    pwd.innerHTML=password;
}

function generator(){
    const a=[];
    if(upper.checked){
        a.push(GetUpperCase())
    }
    if(lower.checked){
        a.push(GetLowerCase())
    }
    if(number.checked){
        a.push(GetNumbers())
    }
    if(symbol.checked){
        a.push(GetSymbols())
    }
    return a[Math.floor(Math.random()*a.length)]
}

function GetUpperCase(){
    return UPPERCASE[Math.floor(Math.random()*UPPERCASE.length)]
}
function GetLowerCase(){
    return LOWERCASE[Math.floor(Math.random()*LOWERCASE.length)]
}
function GetNumbers(){
    return NUMBERS[Math.floor(Math.random()*NUMBERS.length)]
}
function GetSymbols(){
    return SYMBOLS[Math.floor(Math.random()*SYMBOLS.length)]
}
