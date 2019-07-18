// slider !!

// let images = document.querySelectorAll('.musician');
// let current = 0;
//
// function slider () {
//   for (let i = 0; i < images.length; i++) {
//     images[i].classList.add('opacity0');
//   }
//   images[current].classList.remove('opacity0');
// }
//
// slider();
//
// document.querySelector('.up').onclick = function() {
//   if (current - 1 == -1) {
//     current = images.length - 1;
//   }
//   else {
//     current--;
//   }
//   slider();
// }
//
// document.querySelector('.down').onclick = function() {
//   if (current + 1 == images.length) {
//     current = 0;
//   }
//   else {
//     current++;
//   }
//   slider();
// };

////////////////////////////////////////////////////////////////////

document.getElementById('left').onclick = sliderLeft;
document.getElementById('right').onclick = sliderRight;

var left = 0;

function sliderLeft () {
  var polosa = document.getElementById('members');
  left += 405;
  if (left > 0) {
    left = -1215;
  }
  polosa.style.left = left +'px';
}


function sliderRight () {
  var polosa = document.getElementById('members');
  left -= 405;
  if (left < -1215) {
    left = 0;
  }
  polosa.style.left = left +'px';
}



// window.addEventListener("resize", function() {
//   if (window.matchMedia("(min-width: 1200px)").matches) {
//
//     console.log("условие на большой экран");
//
//   } else {
//
//     console.log("условие на small экран");
//   }
// });

// if(window.innerWidth >= 1200) {
//
// } else {
//   left += 105;
//   if (left > 0) {
//     left = -1215;
//   }
// }