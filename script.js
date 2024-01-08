let buttons = document.querySelectorAll("button");
let output = document.querySelector("input");
let string = "";

let arr = Array.from(buttons);

arr.forEach((buttons) => {
    buttons.addEventListener("click", (e) => {
        if(e.target.innerHTML === "="){
            string = eval(string);
            output.value = string;
        }else if(e.target.innerHTML === "AC"){
            string = "";
            output.value = string;
        }else if(e.target.innerHTML === "00"){
            string += "00";
            output.value = string;
        }else if(e.target.innerHTML === "DEL"){
            string = string.substring(0, string.length-1);
            output.value = string;
        }else{
            string = string + e.target.innerHTML;
            output.value = string;
        }
    })
})