const keys = document.querySelector(".keys");
const result = document.querySelector(".result");
const reset = document.querySelector(".cell1");
const back = document.querySelector(".cell3");
const makeNegativeNumber = document.querySelector(".cell2");
const zero = document.querySelector(".cell17");
const dot = document.querySelector(".cell18");




reset.addEventListener("click", resetAll);
keys.addEventListener("click", calculator);
back.addEventListener("click", comeBack);
zero.addEventListener("click", startZero);
dot.addEventListener("click", dotAdd);






let carpım1;
let carpım2;
let operator;
let sum = 0;
let targetArray = [];
let numberArray = [];


function calculator(e) {
    let value = e.target.innerText;
    targetArray.push(value);

    if ("123456789".includes(value)) {
        result.innerText += value;
    } else if ("x+-÷".includes(value) && result.innerText != "") {
        carpım1 = Number(result.innerText);
        operator = value;
        numberArray.push(Number(result.innerText));
        numberArray.push(operator)
        result.innerText = "";
    } else if (value == "+/-") {
        if (result.innerText == "") {
            result.innerText += "-";
        } else if (result.innerHTML != "") {
            result.innerHTML = -Math.abs(result.innerHTML);
        }
    } else if ("=".includes(value) && result.innerHTML != "" && targetArray[targetArray.length - 2] != "=") {
        carpım2 = Number(result.innerText);
        numberArray.push(carpım2);
        result.innerText = "";
        if (numberArray.length != 3) {
            sum += numberArray[0];
            for (let i = 1; i < targetArray.length - 2; i += 2) {
                switch (numberArray[i]) {
                    case "+":
                        sum += numberArray[i + 1];
                        break
                    case "-":
                        sum -= numberArray[i + 1];
                        break
                    case "x":
                        sum *= numberArray[i + 1];
                        break
                    case "÷":
                        sum /= numberArray[i + 1];
                        break
                };


            };
            console.log(numberArray);
            result.innerHTML = sum;
        } else {
            console.log("ne")
            switch (operator) {
                case "+":
                    result.innerHTML = carpım1 + carpım2;
                    // numberArray.push("+")
                    numberArray.push(-Math.abs(result.innerHTML))
                    numberArray.push("+")


                    break
                case "-":
                    result.innerHTML = carpım1 - carpım2;

                    break
                case "x":
                    result.innerHTML = carpım1 * carpım2;

                    break
                case "÷":
                    result.innerHTML = carpım1 / carpım2;

                    break
            };
            console.log(numberArray);
        };
    };


};


function dotAdd(e) {
    if (result.innerText == "") {
        result.innerText = "0."
    } else if (!result.innerText.includes(".")) {
        result.innerText += "."
    }
    e.stopPropagation()
}


function startZero(e) {
    if (result.innerText == "") {
        result.innerText = "0,"
    } else {
        result.innerText += "0"
    }
    e.stopPropagation()
}


function comeBack(e) {
    result.innerHTML = result.innerHTML.slice(0, result.innerHTML.length - 1);
    e.stopPropagation()
}

function resetAll(e) {

    result.innerHTML = "";
    carpım1 = 0;
    carpım2 = 0;
    sum = 0;
    operator = "";
    targetArray = []
    numberArray = []
    e.stopPropagation()
}