const display = document.querySelector(".display");
const buttons= document.querySelectorAll(".button");
const history = document.querySelector(".historycalc");
let decision = "";
let output = "";
const addNumber = (num) => {
    display.value += num;
};

const addChar = (char) => {
    display.value += char;
}

const erase = () =>{
    display.value = null;
};

const erasehistory = () =>{
    history.value = null;
}

const deleteOne = () =>{
    display.value = display.value.toString().slice(0, -1);
};

const deleteX = () =>{
    history.value += `\n1/(${display.value.toString()}) `;
    display.value = eval(1/eval(display.value));
    decision = display.value;
    history.value += `= ${decision}\n`;
}

const multiply = ()=>{
    history.value += `\n(${display.value.toString()})^2 `;
    display.value = eval(display.value)**2;
    decision = eval(display.value);
    history.value += `= ${decision}\n`;
}
const sqrt = () =>{
    history.value += `\n√(${display.value.toString()}) `;
    display.value = Math.sqrt(eval(display.value), 2);
    decision = eval(display.value);
    history.value += `= ${decision}\n`;
}
const Nigate = () =>{
    history.value += `\n(${display.value.toString()})*-1 `;
    display.value = eval(display.value)*-1;
    decision = eval(display.value);
    history.value += `= ${decision}\n`;
}
const precent = () =>{
    history.value += `\n(${display.value.toString()})% `;
    display.value = eval(display.value)/100;
    decision = eval(display.value);
    history.value += `= ${decision}\n`;
}
const calculate = () => {
    display.focus();
    if(display.value.includes(undefined) || display.value.includes(NaN)||display.value.includes(null)){
        alert("😭🐟???");
    }
    else{
        history.value += `\n${display.value.toString()} `;
        decision = eval(display.value);
        history.value += `= ${decision}\n`;
        display.value = decision;
    }
    
};

document.addEventListener('keydown', function(event){
        if(event.code == "Enter"){calculate();}
    });

