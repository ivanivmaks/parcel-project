import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const player = new Player(document.querySelector('iframe'));
console.log(player);
function onTimeUpdate(event) {
  localStorage.setItem('videoplayer-current-time', event.seconds);
}

player.on('timeupdate', throttle(onTimeUpdate, 1000));

player.setCurrentTime(localStorage.getItem('videoplayer-current-time') || 0);
