const music = document.getElementById('music');
const playBtn = document.getElementById('playMusic');
const openBtn = document.getElementById('openInvite');
const details = document.getElementById('details');

function startMusic(){
  music.play().catch(() => {});
}

playBtn.addEventListener('click', startMusic);

openBtn.addEventListener('click', () => {
  details.scrollIntoView({ behavior: 'smooth' });
});
