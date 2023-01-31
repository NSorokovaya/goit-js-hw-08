import throttle from 'lodash.throttle';
import Player from '@vimeo/player';


const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const KEY = "videoplayer-current-time";


player.on('timeupdate', throttle (function(time) {
    localStorage.setItem('videoplayer-current-time', time.seconds);
}, 1000)
)



  player.setCurrentTime(localStorage.getItem(KEY)||0);

