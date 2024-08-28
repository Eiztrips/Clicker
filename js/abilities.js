let User = {
    lvl: (localStorage.getItem('lvl') !== null) ? +localStorage.getItem('lvl') : 1,
}

if (+User.lvl>=5) {
    lvl = document.getElementById('lvl5')
    lvl.classList.add('--getting')
    lvl.setAttribute('data-tooltip', '5 lvl')
}
if (+User.lvl>=10) {
    lvl = document.getElementById('lvl10')
    lvl.classList.add('--getting')
    lvl.setAttribute('data-tooltip', '10 lvl')
}
if (+User.lvl>=25) {
    lvl = document.getElementById('lvl25')
    lvl.classList.add('--getting')
    lvl.setAttribute('data-tooltip', '25 lvl')
}
if (+User.lvl>=50) {
    lvl = document.getElementById('lvl50')
    lvl.classList.add('--getting')
    lvl.setAttribute('data-tooltip', '50 lvl')
}
if (+User.lvl>=100) {
    lvl = document.getElementById('lvl100')
    lvl.classList.add('--getting')
    lvl.setAttribute('data-tooltip', '100 lvl')
}