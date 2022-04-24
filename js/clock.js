const clockArea = document.querySelector('.clock-area');
const clock = clockArea.querySelector('.clock');

function padSetting(value) {
  value = String(value).padStart(2, 0);
  return value;
}

function getClock() {
  const today = new Date();
  const hour = padSetting(today.getHours());
  const min = padSetting(today.getMinutes());
  const sec = padSetting(today.getSeconds());
  clock.innerText = `${hour}:${min}:${sec}`;
}

getClock();
setInterval(() => { getClock(); }, 1000);
