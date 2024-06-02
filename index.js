// CALCULATOR PROGRAM

function addToInput(num){
    let display = document.getElementById("calcInput"); 
    display.value += num;
}

function clearInput(){
    let display = document.getElementById("calcInput"); 
    display.value = '';
}

function calculate(){
    let display = document.getElementById("calcInput"); 
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "Error";
    }
}