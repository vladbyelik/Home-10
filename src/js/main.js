// slider for members of group

const onKeyDown = (ev) => {
  if (ev.keyCode === 39) sliderRight();
  if (ev.keyCode === 37) sliderLeft();
}

document.getElementById('left').onclick = sliderLeft;
document.getElementById('right').onclick = sliderRight;
document.addEventListener('keydown', onKeyDown)

let move = 0;
let members = document.getElementById('members');

function sliderLeft () {
  move += 405;
  if (move > 0) {
    move = -1215;
    if(window.innerWidth <= 1200) {
      move = -2025;
    }
  }
  members.style.left = move +'px';
}

function sliderRight () {
  move -= 405;
  if(window.innerWidth <= 1200) {
    if (move < -2025) {
      move = 0;
    }
  } else {
    if (move < -1215) {
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