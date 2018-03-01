/* eslint-disable no-unused-vars */

var startButton = document.querySelector('button.start')
var pauseButton = document.querySelector('button.pause')
var resetButton = document.querySelector('button.reset')
var slide = document.querySelector('input.slider')
var input = document.querySelector('input.textInput')
var interval
var timer = {
  seconds: 0
}

startButton.addEventListener('click', function () {
  startTimer(timer, document.querySelector('p.timer'))
})

pauseButton.addEventListener('click', function() {
  clearInterval(interval)
})

resetButton.addEventListener('click', function() {
  resetTime(document.querySelector('p.timer'))
})

slide.addEventListener('change', function(event) {
  var newValue = event.target.value
  var limit = Number(newValue)
  document.querySelector('input.textInput').value = newValue
  limitTime(limit)
})

input.addEventListener('change', function(event) {
  var newValue = event.target.value
  var limit = Number(newValue)
  document.querySelector('input.slider').value = newValue
  limitTime(limit)
})

function startTimer(timer, location) {
  clearInterval(interval)
  interval = setInterval(function() {
    limitTime(document.querySelector('input.slider').value)
    timer.seconds++
    location.textContent = readTime(timer)
  }, 1000)
}

function readTime(timePassed) {
  var minutes = Math.floor(timePassed.seconds / 60)
  var seconds = timePassed.seconds - minutes * 60
  return minutes + ':' + seconds
}

function resetTime(location) {
  location.textContent = '0:0'
  timer.seconds = 0
}

function limitTime(max) {
  if (max - 1 <= timer.seconds) {
    clearInterval(interval)
  }
}
