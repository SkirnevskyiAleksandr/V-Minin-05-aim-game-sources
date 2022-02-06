'use strict'
const startBtn = document.querySelector('#start');
const screens = document.querySelectorAll('.screen')
const timeList = document.querySelector('#time-list')
let time = 0;

startBtn.addEventListener('click', (event) => {
    event.preventDefault();
    screens[0].classList.add('up')
})

timeList.addEventListener('click', (event) => {
    if (event.target.classList.contains('time-btn')) {
        console.log(event.target)
    }
})