const mybtn1 = document.getElementById('b1');
const mybtn2 = document.getElementById('b2');
const mybtn3 = document.getElementById('b3');
const mybtn4 = document.getElementById('b4');
const mybtn5 = document.getElementById('b5');
const county1 = document.querySelector('.county1');
const county2 = document.querySelector('.county2');
const county3 = document.querySelector('.county3');
const county4 = document.querySelector('.county4');
const county5 = document.querySelector('.county5');
// const buttons = document.querySelectorAll('button');

  function count() {
    let counter = 0;
    return function() {
      return counter+=1;
    };
  }

    const counter1 = count();
    const counter2 = count();
    const counter3 = count();
    const counter4 = count();
    const counter5 = count();
    
  //   for (let button of buttons) {
  //   button.addEventListener('click', function() {
  //     if (button === mybtn1) {
  //     county1.textContent = counter1();
  //     } else if (button === mybtn2){
  //       county2.textContent = counter2();
  //     } else if (button === mybtn3){
  //       county3.textContent = counter3();
  //     } else if (button === mybtn4){
  //       county4.textContent = counter4();
  //     } else if (button === mybtn5){
  //       county5.textContent = counter5();
  //     }
  //   });
  // }


document.getElementById("vot").addEventListener("click", function(event) {
  
  let targetElement = event.target;

  if (targetElement === mybtn1) {
      county1.textContent = counter1();
    } else if (targetElement === mybtn2){
      county2.textContent = counter2();
    } else if (targetElement === mybtn3){
      county3.textContent = counter3();
    } else if (targetElement === mybtn4){
      county4.textContent = counter4();
    } else if (targetElement === mybtn5){
      county5.textContent = counter5();
    }
});
