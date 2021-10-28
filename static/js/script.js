(()=>{
  let counter = 0;
  let first = 0, second = 0, third = 0;

  const timer = setInterval(()=>{
    switch (counter) {
      case 3:
        third += 0.1;
      case 2:
        second += 0.1;
      case 1:
        first += 0.1;
      case 0:
        break;
    }
    document.querySelector('.time.first').innerHTML = first.toFixed(1);
    document.querySelector('.time.second').innerHTML = second.toFixed(1);
    document.querySelector('.time.third').innerHTML = third.toFixed(1);
    if (second <= 30 && counter >= 2) {
      document.querySelector('.v-three').innerHTML = (30 - second).toFixed(1);
      document.body.style.backgroundColor = '#F44';
    } else {
      document.querySelector('.v-three').innerHTML = (0).toFixed(1);
      document.body.style.backgroundColor = '#FFF';
    }
  }, 100);

  const cng = () => {
    counter = counter>=3 ? counter : counter + 1;
    third = second;
    second = first;
    first = 0;
  }

  window.addEventListener('click', cng);
  window.addEventListener('keydown', cng);
  window.addEventListener('touchstart', cng);
})();
