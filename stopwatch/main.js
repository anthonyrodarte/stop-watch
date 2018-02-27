/* eslint-disable no-unused-vars */
var start = document.querySelector('#start-btn')
var time = document.querySelector('#timer')

var sec = 0, min = 0, hour = 0

start.addEventListener('click', timer)

function timer () {
  i = setInterval(count, 1000)
}

function count() {
  sec++
  if (sec == 60) {
    sec = 0
    min++
    if (min == 60) {
      min = 0
      hour++
    }
  }
  time.textContent = hour + ':' + min + ':' + sec
}
