
// DARK MODE FUNCTION

// Create a var checkbox linked to the input checkbox
const checkbox = document.getElementById('ceck');
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
  