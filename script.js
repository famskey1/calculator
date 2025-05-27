const display = document.querySelector(".display");
const buttons= document.querySelectorAll(".button");
const history = document.querySelector(".historycalc");

let output = "";
const addNumber = (num) => {
    display.value += num;
};

const addChar = (char) => {
    display.value += char;
}

const erase = () =>{
    display.value = "";
};

const erasehistory = () =>{
    history.value = "";
}

const deleteOne = () =>{
    display.value = display.value.slice(0, -1);
};

const multiply_1 = () =>{
    try {
        const value = eval(display.value);
        if (isNaN(value) || !isFinite(value) || value === 0) {
            display.value = "🐟???";
            return;
        }
        const result = 1 / value;
        history.value += `\n1/(${display.value}) = ${result}\n`;
        display.value = result;
    } catch (error) {
        display.value = "🐟???";
        console.error("Ошибка при вычислении 1/x:", error);
    }
}

const multiply = ()=>{
    try {
        const value = eval(display.value);
        if (isNaN(value) || !isFinite(value)) {
            display.value = "🐟???";
            return;
        }
        const result = value * value;
        history.value += `\n(${display.value})^2 = ${result}\n`;
        display.value = result;
    } catch (error) {
        display.value = "🐟???";
        console.error("Ошибка при вычислении x^2:", error);
    }
}
const sqrt = () =>{
    try {
        const value = eval(display.value);
        if (isNaN(value) || !isFinite(value) || value < 0) {
            display.value = "🐟???";
            return;
        }
        const result = Math.sqrt(value);
        history.value += `\n√(${display.value}) = ${result}\n`;
        display.value = result;
    } catch (error) {
        display.value = "🐟???";
        console.error("Ошибка при вычислении √x:", error);
    }
}
const Nigate = () =>{
    try {
        const value = eval(display.value);
        if (isNaN(value) || !isFinite(value)) {
            display.value = "🐟???";
            return;
        }
        const result = value * -1;
        history.value += `\n-(${display.value}) = ${result}\n`;
        display.value = result;
    } catch (error) {
        display.value = "🐟???";
        console.error("Ошибка при вычислении -x:", error);
    }
}
const precent = () =>{
    try {
        const value = eval(display.value);
        if (isNaN(value) || !isFinite(value)) {
            display.value = "🐟???";
            return;
        }
        const result = value / 100;
        history.value += `\n(${display.value})% = ${result}\n`;
        display.value = result;
    } catch (error) {
        display.value = "🐟???";
        console.error("Ошибка при вычислении %:", error);
    }
}
const calculate = () => {
    display.focus();
    try {
        const expression = display.value; 
        const result = eval(expression); 

        if (isNaN(result) || !isFinite(result)) { 
            display.value = "🐟???"; 
            return; 
        }

        history.value += `\n${expression} = ${result}\n`; 
        display.value = result; 
    } catch (error) {
        display.value = "🐟???"; 
        console.error("Ошибка при вычислении:", error); 
        }
};

document.addEventListener('keydown', function(event){
        if(event.code == "Enter"){calculate();}
    });

