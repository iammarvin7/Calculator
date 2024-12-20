
const display = document.getElementById("display");

function appendToDisplay(input){
    display.value += input;
}

function calculate(){
    try{
        display.value = eval(display.value)
    }
    catch(error){
        display.value = "Error"
    }
    

}

function removeLast(){
    display.value = display.value.slice(0, -1);
}

function clearDis(){
    display.value="";
}