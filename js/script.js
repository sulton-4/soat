// const s = document.querySelector('.s')
// let m = document.querySelector('.m')
// let  h = document.querySelector('.h')
//   hour = document.querySelector('.hours')
//   minutes = document.querySelector('.minutes')

// function clock() {
//   let data = new Date(),
//     hour = data.getHours(),
//     min = data.getMinutes(),
//     sec = data.getSeconds();

//   s.style.transform = `ratate(${sec * 6}deg)`
//   m.style.transform = `ratate(${min * 6}deg)`
//   h.style.transform = `ratate(${hour * 30}deg)` 
//   hours.innerHTML = hour < 10 ? '0' + hour : hour
//   minutes.innerHTML = min < 10 ? '0' + min : min
//   setTimeout(() => clock(),1000 )
// }
// clock()
// tabsItem.forEach((el, i) =>{
//   el.addEventListener('click', function () {
//     tabsItem.forEach((elem, index) => {
//       elem.classList.remove('active')
//       tabs[index].classList.remove('active')
//     })
//     this.classList.add('active')
//     tabs[i].classList.add('active')
//   })
// })


let s = document.querySelector(".s"),
m = document.querySelector(".m"),
h = document.querySelector(".h");
hours = document.querySelector('.hours')
minutes = document.querySelector('.minutes')

function clock() {
    let data = new Date(),
    hour = data.getHours(),
    min = data.getMinutes(),
    sec = data.getSeconds();
    s.style.transform = `rotate(${sec * 6}deg)`
    m.style.transform = `rotate(${min * 6}deg)`
    h.style.transform = `rotate(${hour * 30}deg)`
    hours.innerHTML = hour < 10 ? '0' + hour : hour
    minutes.innerHTML = min < 10 ? '0' + min : min
    setTimeout(()=> clock(),1000)
}
clock()
let tabsItem = document.querySelectorAll('.tabsItem')
let tabs = document.querySelectorAll('.tabsContentItem')

tabsItem.forEach((el, i) => {
  el.addEventListener('click', function () {
    tabsItem.forEach((elem, index) => {
      elem.classList.remove('active')
      tabs[index].classList.remove('active')
    })
    this.classList.add('active')
    tabs[i].classList.add('active')
  })
})




// const sogot = document.querySelector('.stopwatch__hours'),
//       minute = document.querySelector('.stopwatch__mintes'),
//       sekund = document.querySelector('.stopwatch__seconds'),
//       span = document.querySelector('.tabsLink__span');
//       let clearWatch;

// let btn = document.querySelector('.stopwatch__btn')
// btn.addEventListener('click', function () {
//   if (btn.innerHTML == 'start') {
//   btn.innerHTML = 'stop'
//   stopWatch()
//   span.classList.add('active')
//   }else if (btn.innerHTML == 'stop') {
//     btn.innerHTML = 'clear'
//     clearTimeout(clearWatch)
//     span.classList.remove('active')
//     span.classList.add('active_clear')
//   }else if (btn.innerHTML == 'clear') {
//     btn.innerHTML = 'start'
//     span.classList.remove('active_clear')
//     sogot.innerHTML = 0
//     minute.innerHTML = 0
//     sekund.innerHTML = 0
//   }
// })      
// function stopWatch() {
//   sekund.innerHTML++
//   if (sekund.innerHTML > 60) {
//     sekund.innerHTML = 0
//     minute.innerHTML++
//     if ( minute.innerHTML > 60) {
//      sogot.innerHTML++  
//     }
//   }
//   clearWatch = setTimeout(() => {
//     stopWatch()
//   }, 1000 )
// }




const soat = document.querySelector(".stopwatch__hours"),
  minute = document.querySelector(".stopwatch__minutes"),
  sekund = document.querySelector(".stopwatch__seconds"),
  span = document.querySelector('.tabsLink__span');
  let clearWatch;


  let btn = document.querySelector('.stopwatch__btn')
btn.addEventListener('click', function () {
  if (btn.innerHTML == 'start') {
    btn.innerHTML = 'stop'
    stopWatch()
    span.classList.add('active')
  } else if (btn.innerHTML == 'stop') {
    btn.innerHTML = 'clear'
    clearTimeout(clearWatch)
    span.classList.remove('active')
    span.classList.add('active_clear')
  } else if (btn.innerHTML == 'clear') {
    btn.innerHTML = 'start'
    span.classList.remove('active_clear')
    soat.innerHTML = 0
    minute.innerHTML = 0
    sekund.innerHTML = 0
  }
})

function stopWatch() {
  sekund.innerHTML++
  if (sekund.innerHTML > 60) {
    sekund.innerHTML = 0
    minute.innerHTML++
    if (minute.innerHTML > 60) {
      soat.innerHTML++
    }
  }
  clearWatch = setTimeout(() => {
    stopWatch()
  }, 1000);
}