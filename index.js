// function getPint (){
//    const random =  Math.random() * 10000;
//    const pin = (random + '').split('.')[0];
//    if(pin.length === 4){
//        return pin;
//    }
//    else{
//     //    console.log('shorter ', pin)
//        return getPint;
//    }
//    console.log(pin)
// }
// getPint ()
// // display generated pin 


// function pinGenerate() {
//     const pinInput = document.getElementById("pin");
//     pinInput.value = getPint();
// }

function getPin (){
    const random = Math.random()* 10000;
    const pin = (random + '').split('.')[0];
    if(pin.length === 4){
        return pin;
    }
    else{
        return getPin();
    }

   
}
getPin()

// display generated pin
function pinGenerate (){
    const pinInput = document.getElementById("pin");
    pinInput.value = getPin();
}
  
// display button handler event 

const digitsContainer = document.getElementById("digitsContainer");
digitsContainer.addEventListener("click", function(event){
    const digit =  event.target.innerText;
    if(isNaN(digit)){
        // handle backspace 
        //  handle clear 
    }else{
        const  typeInput = document.getElementById("typedPin");
        typeInput.value = typeInput.value + digit;
        
}


})


// varify pin event
function varifyPin(){
    const madePin = document.getElementById("pin").value;
    const  generatedPin = document.getElementById("typedPin").value;
    if(madePin === generatedPin){
        // const correct = document.getElementById('correct');
        // correct.style.display = 'block';
        // const incorrect = document.getElementById('incorrect');
        // incorrect.style.display = 'none';
        displayMatchResult('block', 'none')
    }
    else{
        // const correct = document.getElementById('correct');
        // correct.style.display = 'none';
        // const incorrect = document.getElementById('incorrect');
        // incorrect.style.display = 'block';
        displayMatchResult('none', 'block')
    }
}

// display matching function 
    function displayMatchResult (correctStatus, incorrectStatus){
        const correct = document.getElementById('correct');
        correct.style.display = correctStatus;
        const incorrect = document.getElementById('incorrect');
        incorrect.style.display = incorrectStatus;
    }


// clear event 
function displayClear(){
    const  generatedPin = document.getElementById("typedPin");
    generatedPin.value ='';
}