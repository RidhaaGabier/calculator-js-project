// let display = document.getElementById('screen');

// const wipe = () => {
//   display.value = '';
// }

// const show = (n) => {
//   display.value += n;
// }

// const calc = () => {
//   display.value = eval(display.value);
// }

let display = document.getElementById('screen');


function wipe() {
    display.value = '';
}

function show(anyValue) {
    display.value += anyValue;
}


function calc(){
    display.value = eval(display.value);
}
  
function del(){
    display.value = display.value.slice(0, -1);
}