//                Set Variable

const screen = document.querySelector('.screen');
const decrement = document.querySelector('.btn1');
const crement = document.querySelector('.btn2');
const btns = document.querySelectorAll('button')
let counter = 0; // this will be changed when clicked


//    Set function 

//      1 *** methode


// decrement.onclick = function () {
//   counter--
//   screen.innerText = ` ${counter}`
// }
// crement.onclick = function () {
//   counter++
//   screen.innerText = ` ${counter}`
// }

// methode1  ok success

//      2 *** methode

btns.forEach( function(btn){
  btn.onclick = function () {
    btn.textContent === "Décrément"? counter--:counter++;
    screen.innerText = ` ${counter}`
  }
})
// methode2  ok success

