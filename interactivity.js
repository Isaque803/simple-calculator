var signal = false

//Input operators -----------------------
function inputOperator(oper){
    let display = document.getElementById("display")
    if (signal == false){
        if (maxString() == true){
            display.innerHTML += oper
            signal = true
        }
    }
 
}

//Input number -----------------------
function inputNumber(num){
    let display = document.getElementById("display")
    if (maxString() == true){
        display.innerHTML += `${num}`
        signal = false
    }
}

//Maximum strings on screen
function maxString(){
    let display = document.getElementById("display")
    if(display.innerHTML.length <= 18){
        return true
    }else{
        return false
    }
}

//Numbers ----------------------------
function zero(){
    inputNumber(0)
}

function one(){
    inputNumber(1)
}

function two(){
    inputNumber(2)
}

function three(){
    inputNumber(3)
}

function four(){
    inputNumber(4) 
}

function five(){
    inputNumber(5)
}

function six(){
    inputNumber(6)
}

function seven(){
    inputNumber(7)
}

function eight(){
    inputNumber(8)
}

function nine(){
    inputNumber(9)
}

//Operators ----------------------------
function addition(){
    inputOperator("+")
}

function subtraction(){
    inputOperator("-")
}

function multiplication(){
    inputOperator("*")
}

function division(){
    inputOperator("/")
}

//Screen clear  ----------------------------
function clearC(){
    let display = document.getElementById("display")
    let indexEnd = display.innerHTML.length-1
    display.innerHTML = display.innerHTML.substring(0, indexEnd)
    signal = false
    
}

function clearAll(){
    let display = document.getElementById("display")
    display.innerHTML = ""
    signal = false
}

//Point ---------------------------------
function point(){
    inputOperator(".")
}

//Result ---------------------------------
function equal(){
    let display= document.getElementById("display")
    if (error() == true){
        display.innerHTML = "Error"
    }else{
        if (display.innerHTML != "Error"){
            let calculate = eval(display.innerHTML)
            display.innerHTML = calculate 
        }
    }
    signal = false
}

//Error verification ---------------------
function error(){
    let display = document.getElementById("display")
    let valueEnd = display.innerHTML[display.innerHTML.length-1]
    if (valueEnd == "+" 
    || valueEnd == "-"
    || valueEnd == "/"
    || valueEnd == "*"
    || valueEnd == "."  
    || display.innerHTML[0] == "*" 
    || display.innerHTML[0] == "/"){
        return true
    }else{
        return false
    }
}