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
document.getElementById('left').onclick=sliderLeft;document.getElementById('right').onclick=sliderRight;var left=0;function sliderLeft(){var polosa=document.getElementById('members');left+=405;if(left>0){left=-1215;}polosa.style.left=left+'px';}function sliderRight(){var polosa=document.getElementById('members');left-=405;if(left<-1215){left=0;}polosa.style.left=left+'px';}// window.addEventListener("resize", function() {
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIm9uY2xpY2siLCJzbGlkZXJMZWZ0Iiwic2xpZGVyUmlnaHQiLCJsZWZ0IiwicG9sb3NhIiwic3R5bGUiXSwibWFwcGluZ3MiOiJBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBQSxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsTUFBeEIsRUFBZ0NDLE9BQWhDLENBQTBDQyxVQUExQyxDQUNBSCxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsT0FBeEIsRUFBaUNDLE9BQWpDLENBQTJDRSxXQUEzQyxDQUVBLEdBQUlDLENBQUFBLElBQUksQ0FBRyxDQUFYLENBRUEsUUFBU0YsQ0FBQUEsVUFBVCxFQUF1QixDQUNyQixHQUFJRyxDQUFBQSxNQUFNLENBQUdOLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixTQUF4QixDQUFiLENBQ0FJLElBQUksRUFBSSxHQUFSLENBQ0EsR0FBSUEsSUFBSSxDQUFHLENBQVgsQ0FBYyxDQUNaQSxJQUFJLENBQUcsQ0FBQyxJQUFSLENBQ0QsQ0FDREMsTUFBTSxDQUFDQyxLQUFQLENBQWFGLElBQWIsQ0FBb0JBLElBQUksQ0FBRSxJQUExQixDQUNELENBR0QsUUFBU0QsQ0FBQUEsV0FBVCxFQUF3QixDQUN0QixHQUFJRSxDQUFBQSxNQUFNLENBQUdOLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixTQUF4QixDQUFiLENBQ0FJLElBQUksRUFBSSxHQUFSLENBQ0EsR0FBSUEsSUFBSSxDQUFHLENBQUMsSUFBWixDQUFrQixDQUNoQkEsSUFBSSxDQUFHLENBQVAsQ0FDRCxDQUNEQyxNQUFNLENBQUNDLEtBQVAsQ0FBYUYsSUFBYixDQUFvQkEsSUFBSSxDQUFFLElBQTFCLENBQ0QsQ0FJRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIHNsaWRlciAhIVxuXG4vLyBsZXQgaW1hZ2VzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm11c2ljaWFuJyk7XG4vLyBsZXQgY3VycmVudCA9IDA7XG4vL1xuLy8gZnVuY3Rpb24gc2xpZGVyICgpIHtcbi8vICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpbWFnZXMubGVuZ3RoOyBpKyspIHtcbi8vICAgICBpbWFnZXNbaV0uY2xhc3NMaXN0LmFkZCgnb3BhY2l0eTAnKTtcbi8vICAgfVxuLy8gICBpbWFnZXNbY3VycmVudF0uY2xhc3NMaXN0LnJlbW92ZSgnb3BhY2l0eTAnKTtcbi8vIH1cbi8vXG4vLyBzbGlkZXIoKTtcbi8vXG4vLyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudXAnKS5vbmNsaWNrID0gZnVuY3Rpb24oKSB7XG4vLyAgIGlmIChjdXJyZW50IC0gMSA9PSAtMSkge1xuLy8gICAgIGN1cnJlbnQgPSBpbWFnZXMubGVuZ3RoIC0gMTtcbi8vICAgfVxuLy8gICBlbHNlIHtcbi8vICAgICBjdXJyZW50LS07XG4vLyAgIH1cbi8vICAgc2xpZGVyKCk7XG4vLyB9XG4vL1xuLy8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRvd24nKS5vbmNsaWNrID0gZnVuY3Rpb24oKSB7XG4vLyAgIGlmIChjdXJyZW50ICsgMSA9PSBpbWFnZXMubGVuZ3RoKSB7XG4vLyAgICAgY3VycmVudCA9IDA7XG4vLyAgIH1cbi8vICAgZWxzZSB7XG4vLyAgICAgY3VycmVudCsrO1xuLy8gICB9XG4vLyAgIHNsaWRlcigpO1xuLy8gfTtcblxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xlZnQnKS5vbmNsaWNrID0gc2xpZGVyTGVmdDtcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyaWdodCcpLm9uY2xpY2sgPSBzbGlkZXJSaWdodDtcblxudmFyIGxlZnQgPSAwO1xuXG5mdW5jdGlvbiBzbGlkZXJMZWZ0ICgpIHtcbiAgdmFyIHBvbG9zYSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZW1iZXJzJyk7XG4gIGxlZnQgKz0gNDA1O1xuICBpZiAobGVmdCA+IDApIHtcbiAgICBsZWZ0ID0gLTEyMTU7XG4gIH1cbiAgcG9sb3NhLnN0eWxlLmxlZnQgPSBsZWZ0ICsncHgnO1xufVxuXG5cbmZ1bmN0aW9uIHNsaWRlclJpZ2h0ICgpIHtcbiAgdmFyIHBvbG9zYSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZW1iZXJzJyk7XG4gIGxlZnQgLT0gNDA1O1xuICBpZiAobGVmdCA8IC0xMjE1KSB7XG4gICAgbGVmdCA9IDA7XG4gIH1cbiAgcG9sb3NhLnN0eWxlLmxlZnQgPSBsZWZ0ICsncHgnO1xufVxuXG5cblxuLy8gd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgZnVuY3Rpb24oKSB7XG4vLyAgIGlmICh3aW5kb3cubWF0Y2hNZWRpYShcIihtaW4td2lkdGg6IDEyMDBweClcIikubWF0Y2hlcykge1xuLy9cbi8vICAgICBjb25zb2xlLmxvZyhcItGD0YHQu9C+0LLQuNC1INC90LAg0LHQvtC70YzRiNC+0Lkg0Y3QutGA0LDQvVwiKTtcbi8vXG4vLyAgIH0gZWxzZSB7XG4vL1xuLy8gICAgIGNvbnNvbGUubG9nKFwi0YPRgdC70L7QstC40LUg0L3QsCBzbWFsbCDRjdC60YDQsNC9XCIpO1xuLy8gICB9XG4vLyB9KTtcblxuLy8gaWYod2luZG93LmlubmVyV2lkdGggPj0gMTIwMCkge1xuLy9cbi8vIH0gZWxzZSB7XG4vLyAgIGxlZnQgKz0gMTA1O1xuLy8gICBpZiAobGVmdCA+IDApIHtcbi8vICAgICBsZWZ0ID0gLTEyMTU7XG4vLyAgIH1cbi8vIH0iXX0=
