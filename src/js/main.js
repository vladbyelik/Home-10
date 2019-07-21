// slider for members of group

// document.addEventListener('keydown', onKeyDown)
// const onKeyDown = (ev) => {
//   if (ev.keyCode === 39) sliderRight();
//   if (ev.keyCode === 37) sliderLeft();
// }

document.getElementById('left').onclick = sliderLeft;
document.getElementById('right').onclick = sliderRight;

let move = 0;
let members = document.getElementById('members');
let musicians = document.getElementsByClassName('musician'); //весь массив из музыкантов по классам
let musiciansSum = document.getElementsByClassName('musician').length; // количество блоков с музыкантами (6)
const musicianWidth = musicians[0].offsetWidth + 45; // ширина 1го блока с отступами 45px (405)

let membersWidth = musicianWidth * musiciansSum;
members.style.width = membersWidth +'px';

function sliderLeft () {
  move += musicianWidth;
  if (move > 0) {
    move = -(membersWidth - (musicianWidth * 3));
    if(window.innerWidth <= 1200) {
      move = -membersWidth + musicianWidth;
    }
  }
  members.style.left = move +'px';
}

function sliderRight () {
  move -= musicianWidth;
  if(window.innerWidth <= 1200) {
    if (move < -(membersWidth - musicianWidth)) {
      move = 0;
    }
  } else {
    if (move < -(membersWidth - (musicianWidth * 3))) {
      move = 0;
    }
  }
  members.style.left = move +'px';
}

// slider for video content

let videos = document.querySelectorAll('.stage-video');
let current = 0;

function sliderVideo () {
  for (let i = 0; i < videos.length; i++) {
    videos[i].classList.add('d-none');
  }
  videos[current].classList.remove('d-none');
}

sliderVideo();

document.querySelector('.left-video').onclick = function() {
  if (current - 1 === -1) {
    current = videos.length - 1;
  } else {
    current--;
  }
  sliderVideo();
};

document.querySelector('.right-video').onclick = function() {
  if (current + 1 === videos.length) {
    current = 0;
  } else {
    current++;
  }
  sliderVideo();
};