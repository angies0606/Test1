const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');
const textEl = document.querySelector('p');

// Напишите реализацию createTimerAnimator
// который будет анимировать timerEl
const createTimerAnimator = () => {
  return (seconds) => {
    let timerId = null;
    let secondsLeft = seconds;    
    buttonEl.disabled = true;
    inputEl.disabled = true;
    function calculateTime () {
      if (secondsLeft === 0) {
        clearInterval(timerId);
        textEl.innerHTML = '';
        timerEl.innerHTML = 'Time is over';
        buttonEl.disabled = false;
        inputEl.disabled = false;
      } else {
        let hours = Math.floor(secondsLeft/3600) > 0 ? Math.floor(secondsLeft/3600) % 24 : 0;
        let minutes = Math.floor(secondsLeft/60) > 0 ? Math.floor(secondsLeft/60) % 60 : 0;
        let seconds = secondsLeft % 60 > 0 ? secondsLeft % 60 : 0;
        let hoursString = hours < 10 ? '0' + hours : hours;
        let minutesString = minutes < 10 ? '0' + minutes : minutes;
        let secondsString = seconds < 10 ? '0' + seconds : seconds;
        timerEl.innerHTML = `${hoursString}:${minutesString}:${secondsString}`;
        secondsLeft--;
      }
    }
    calculateTime();
    textEl.innerHTML = 'Here goes!'
    timerId = setInterval(calculateTime, 1000);
  };
};

const animateTimer = createTimerAnimator();

inputEl.addEventListener('input', (e) => {
  // Очистите input так, чтобы в значении
  // оставались только числа
  e.target.value = e.target.value.replace(/[^0-9+]/g, '');
  let inputValue = typeof Number(e.target.value) === 'number' && e.target.value !== ''
    ? Number(e.target.value)
    : null
  ;

  if(86400 > inputValue >= 1 || !inputValue) {
    textEl.innerHTML = '';
    buttonEl.disabled = false;
  }

  if(inputValue === 0) {
    textEl.innerHTML = 'Please, enter more than 0 seconds';
    buttonEl.disabled = true;
  }

  if(inputValue > 86400) {
    textEl.innerHTML = 'Please, enter the number of seconds less than in 24 hours';
    buttonEl.disabled = true;
  }
});

buttonEl.addEventListener('click', () => {
  const seconds = Number(inputEl.value);

  animateTimer(seconds);

  inputEl.value = '';
});