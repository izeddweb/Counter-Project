//                Set Variable

const screen = document.querySelector('.screen');
const decrement = document.querySelector('.btnDécrém');
const crement = document.querySelector('.btnCrém');
const Reset = document.querySelector('.btnReset');
const Set = document.querySelector('.btnSet');
const spanSet = document.querySelector('button .spanSet');
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
    let btnName = btn.getAttribute('class')   ;
    btnName === "btnDécrém"?screen.innerText = ` ${--counter}`:"";
    btnName === "btnCrém"?screen.innerText = ` ${++counter}`:"";
    btnName === "btnReset"?screen.innerText = ` ${counter =0}`:"";
    if(btnName === "btnSet"){
      let newNum = Number(screen.innerText);
      spanSet.innerText =`: ${newNum}`;
      btn.onclick = function () {
      if(btnName === "btnDécrém"){
        console.log(newNum);
        console.log(counter);
        counter -= newNum;
        screen.innerText = ` ${counter}`;
      }
      else if(btnName === "btnCrém"){
        // ?screen.innerText = ` ${counter += newNum}`:"";
      }
    }
      
    }
    



  }
})
// methode2  ok success

