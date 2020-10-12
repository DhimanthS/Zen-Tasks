const calcContain = document.createElement("div");
calcContain.id = "calc-contain";
document.body.append(calcContain);

const form = document.createElement("form");
form.setAttribute("name", "calculator");

var answer = document.createElement("input");
answer.id = "ans";
answer.setAttribute("type", "text");
answer.setAttribute("name","answer");
answer.setAttribute("value","");
answer.addEventListener("onkeyup", isNumberKey);
function isNumberKey(event){
    var charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        return false
    }
    return true;
}

var brTag = document.createElement("br");

var but1 = document.createElement("input"); 
    but1.setAttribute("type", "button"); 
    but1.setAttribute("value", "1"); 
    but1.addEventListener("click", changeAns1);

function changeAns1(){
    let val = document.getElementById("ans").value;
    document.getElementById("ans").value=val + "1";
}

var but2 = document.createElement("input"); 
    but2.setAttribute("type", "button"); 
    but2.setAttribute("value", "2"); 
    but2.addEventListener("click", changeAns2);

function changeAns2(){
    let val = document.getElementById("ans").value;
    document.getElementById("ans").value=val + "2";
}

var but3 = document.createElement("input"); 
    but3.setAttribute("type", "button"); 
    but3.setAttribute("value", "3"); 
    but3.addEventListener("click", changeAns3);

function changeAns3(){
    let val = document.getElementById("ans").value;
    document.getElementById("ans").value=val + "3";
}

var but4 = document.createElement("input"); 
    but4.setAttribute("type", "button"); 
    but4.setAttribute("value", "4"); 
    but4.addEventListener("click", changeAns4);

function changeAns4(){
    let val = document.getElementById("ans").value;
    document.getElementById("ans").value=val + "4";
}
var but5 = document.createElement("input"); 
    but5.setAttribute("type", "button"); 
    but5.setAttribute("value", "5"); 
    but5.addEventListener("click", changeAns5);

function changeAns5(){
    let val = document.getElementById("ans").value;
    document.getElementById("ans").value=val + "5";
}
var but6 = document.createElement("input"); 
    but6.setAttribute("type", "button"); 
    but6.setAttribute("value", "6"); 
    but6.addEventListener("click", changeAns6);

function changeAns6(){
    let val = document.getElementById("ans").value;
    document.getElementById("ans").value=val + "6";
}
var but7 = document.createElement("input"); 
    but7.setAttribute("type", "button"); 
    but7.setAttribute("value", "7"); 
    but7.addEventListener("click", changeAns7);

function changeAns7(){
    let val = document.getElementById("ans").value;
    document.getElementById("ans").value=val + "7";
}
var but8 = document.createElement("input"); 
    but8.setAttribute("type", "button"); 
    but8.setAttribute("value", "8"); 
    but8.addEventListener("click", changeAns8);

function changeAns8(){
    let val = document.getElementById("ans").value;
    document.getElementById("ans").value=val + "8";
}
var but9 = document.createElement("input"); 
    but9.setAttribute("type", "button"); 
    but9.setAttribute("value", "9"); 
    but9.addEventListener("click", changeAns9);

function changeAns9(){
    let val = document.getElementById("ans").value;
    document.getElementById("ans").value=val + "9";
}
var but0 = document.createElement("input"); 
    but0.setAttribute("type", "button"); 
    but0.setAttribute("value", "0"); 
    but0.addEventListener("click", changeAns0);

function changeAns0(){
    let val = document.getElementById("ans").value;
    document.getElementById("ans").value=val + "0";
}
var butPlus = document.createElement("input"); 
    butPlus.setAttribute("type", "button"); 
    butPlus.setAttribute("value", "+"); 
    butPlus.addEventListener("click", changeAnsPlus);

function changeAnsPlus(){
    let val = document.getElementById("ans").value;
    document.getElementById("ans").value=val + "+";
}
var butMinus = document.createElement("input"); 
    butMinus.setAttribute("type", "button"); 
    butMinus.setAttribute("value", "-"); 
    butMinus.addEventListener("click", changeAnsMinus);

function changeAnsMinus(){
    let val = document.getElementById("ans").value;
    document.getElementById("ans").value=val + "-";
}
var butMulti = document.createElement("input"); 
    butMulti.setAttribute("type", "button"); 
    butMulti.setAttribute("value", "*"); 
    butMulti.addEventListener("click", changeAnsMultiply);

function changeAnsMultiply(){
    let val = document.getElementById("ans").value;
    document.getElementById("ans").value=val + "*";
}

var butDivide = document.createElement("input"); 
    butDivide.setAttribute("type", "button"); 
    butDivide.setAttribute("value", "/"); 
    butDivide.addEventListener("click", changeAnsDivide);

function changeAnsDivide(){
    let val = document.getElementById("ans").value;
    document.getElementById("ans").value=val + "/";
}
var butClear = document.createElement("input"); 
    butClear.setAttribute("type", "button"); 
    butClear.setAttribute("value", "C"); 
    butClear.addEventListener("click", changeAnsClear);

function changeAnsClear(){
    let val = document.getElementById("ans").value;
    document.getElementById("ans").value="";
}

var butEqual = document.createElement("input"); 
    butEqual.setAttribute("type", "button"); 
    butEqual.setAttribute("value", "="); 
    butEqual.addEventListener("click", changeAns);

function changeAns(){
    let val = document.getElementById("ans").value;
    document.getElementById("ans").value=eval(val);
}

form.appendChild(answer);



form.appendChild(but1);
form.appendChild(but2);
form.appendChild(but3);
form.appendChild(butPlus);
form.appendChild(brTag);
form.appendChild(but4);
form.appendChild(but5);
form.appendChild(but6);
form.appendChild(butMinus);
form.appendChild(brTag);
form.appendChild(but7);
form.appendChild(but8);
form.appendChild(but9);
form.appendChild(butMulti);
form.appendChild(brTag);
form.appendChild(butClear);
form.appendChild(but0);
form.appendChild(butEqual);
form.appendChild(butDivide);


document.getElementById("calc-contain").appendChild(form);


document.getElementById("calc-contain").appendChild(form);


const botDiv = document.createElement("div");
botDiv.id = "botDiv";
document.getElementById("calc-contain").appendChild(botDiv);

const para = document.createElement("p");
para.id="para";
let txt = "Javascript Calculator".bold();
para.innerHTML = txt;

document.getElementById("botDiv").appendChild(para);
document.getElementById("para").style.textAlign = "center"; 


    

