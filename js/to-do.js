
// DARK MODE FUNCTION

// Create a var checkbox linked to the input checkbox
const checkbox = document.getElementById('check');
// Create darkmode Functions
function darkModeOn(){
  document.body.classList.add('darkmode');
}

function darkModeOff(){
  document.body.classList.remove('darkmode');
}

//  Create a Function checkMode 
function checkMode(){
    if(check.checked){
        darkModeOff()
    }else{
        darkModeOn()
    }
  }
  // Add an event listener to the click and check
checkbox.addEventListener('click', checkMode)
  

// Edit Bar Function
const notepad = document.getElementById("write-area") 


// Bold Function

const boldBttn = document.getElementById("bold-btn");
// Bolding Funcion

let isBold = false;

boldBttn.addEventListener('click', function() {
  if (isBold) {
    notepad.classList.remove('bold-text');
    isBold = false;
  } else {
    notepad.classList.add('bold-text');
    isBold = true;
  }
});


// italic functiom
lineBttn = document.getElementById("underline-btn")

// Italizing Function

let isLine = false;

lineBttn.addEventListener('click', function() {
  if (isLine){
    notepad.classList.remove('underline');
    isLine = false;
  } else {
    notepad.classList.add('underline');
    isLine = true;
  }
});

// stroke functiom
strokeBttn = document.getElementById("strike-btn")

// stroking Function

let isStroke = false;

strokeBttn.addEventListener('click', function() {
  if (isStroke){
    notepad.classList.remove('stroke');
    isStroke = false;
  } else {
    notepad.classList.add('stroke');
    isStroke = true;
  }
});