/* eslint-disable no-unused-vars */

var startButton = document.querySelector('button.start')
startButton.addEventListener('click', function () {
  var timer = {
    seconds: 0
  }
  startTimer(timer, document.querySelector('p.timer'))
})

function startTimer(timer, location) {
  setInterval(function() {
    timer.seconds++
    location.textContent = readTime(timer)
  }, 1000)
}

function readTime(timePassed) {
  var minutes = Math.floor(timePassed.seconds / 60)
  var seconds = timePassed.seconds - minutes * 60
  return minutes + ':' + seconds
}
