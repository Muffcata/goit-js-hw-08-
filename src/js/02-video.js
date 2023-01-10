import throttle from 'lodash.throttle';
const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

player.on('play', function () {
  console.log('played the video!');
});

player.getVideoTitle().then(function (title) {
  console.log('title:', title);
});

player.on(
  'timeupdate',
  throttle(e => {
    console.log(e.seconds);
    localStorage.setItem('videoplayer-current-time', `${e.seconds}`);
  }, 2500)
);
player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));
