var disInput = document.getElementById("displayInput");

function getvalue(val){
  disInput.value += val;
}

function calculate(){
  disInput.value = eval(disInput.value);
}

function nill(){disInput.value=""}