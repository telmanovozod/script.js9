//let text = document.getElementById("title")

//let bgColor = prompt("body background")
//let textColor = prompt("Text COlor")
//let fontsize = prompt("fontsize")

//text.style.backgroundColor = bgColor
//text.style.color = textColor
//text.style.fontSize = fontsize



//let number = document.getElementById("number")

//let number1 = prompt("Birinchi sonni kiriting")
//let nunber2 = prompt("Ikkinchi sonni kiriting")
//let number3 = prompt("Kerakli operatorni kiriting")

//number.textContent = (Number(number1) + Number(nunber2))

//if()

let number1 = prompt("Birinchi sonni kiriting")
let number2 = prompt("Ikkinchi sonni kiriting")
let number3 = prompt("Kerakli operatorni kiriting \n 1)+ \n 2)- \n 3)* \n 4)/")


let num1 = document.getElementById("number1")
num1.textContent = number1

let num2 = document.getElementById("number2")
num2.textContent = number3

let num3 = document.getElementById("number3")
num3.textContent = number2



let btn = document.getElementById("btn-1")


btn.onclick = getName


function getName(){
    if(number3 === "+"){
        document.getElementById("btn-2").textContent =   (Number(number1) +  Number(number2))
    }
    else if(number3 === "-"){
         document.getElementById("btn-2").textContent =   (Number(number1) -  Number(number2))
    }
    
       else if(number3 === "*"){
        document.getElementById("btn-2").textContent =   (Number(number1) *  Number(number2))
    }
    else if(number3 === "/"){
         document.getElementById("btn-2").textContent =   (Number(number1) /  Number(number2))
    }
    else{
        alert("Siz notog'ri operator tanladingiz")
    }
}




