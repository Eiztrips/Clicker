let Style = {
    body: (localStorage.getItem('body') !== null) ? localStorage.getItem('body') : '#3914AF',
    clicker: (localStorage.getItem('clicker') !== null) ? localStorage.getItem('clicker') : '#FFD300',
    menu: (localStorage.getItem('menu') !== null) ? localStorage.getItem('menu') : '#7109AA',
    text: (localStorage.getItem('text') !== null) ? localStorage.getItem('text') : 'white',
    buttons: (localStorage.getItem('buttons') !== null) ? localStorage.getItem('buttons') : '#48036F',
    mainbutton: (localStorage.getItem('mainbutton') !== null) ? localStorage.getItem('mainbutton') : "fa-solid fa-ghost"
}

console.log(Style)

function SetStyle(body, clicker, menu, text, buttons) {
    document.getElementById('button').setAttribute('class', Style.mainbutton)

    document.getElementById('body').style.background = (body); // Фон

    document.getElementById('button').style.color = (clicker); // Кнопка

    for(let i = 0; i<3;i++) {document.getElementsByClassName('menus')[i].style.background = (menu);}

    for(let i = 0; i<9;i++) {document.getElementsByClassName('text')[+i].style.color = (text);}

    for(let i = 0; i<4;i++) {document.getElementsByClassName('score-button')[+i].style.background = (buttons);}
}

SetStyle(Style.body, Style.clicker, Style.menu, Style.text, Style.buttons)

let User = {
    cash: (localStorage.getItem('cash') !== null) ? +localStorage.getItem('cash') : 200,
    xp: (localStorage.getItem('xp') !== null) ? +localStorage.getItem('xp') : 0,
    lvl: (localStorage.getItem('lvl') !== null) ? +localStorage.getItem('lvl') : 1,
    click: (localStorage.getItem('click') !== null) ? +localStorage.getItem('click') : 0,
    multiplier: (localStorage.getItem('multipler') !== null) ? +localStorage.getItem('multipler') : 1
}
console.log(User.multiplier)
function ButtonClicker() {
    User.multiplier = (localStorage.getItem('multipler') !== null) ? +localStorage.getItem('multipler') : 1
    User.click++;
    User.cash+=User.lvl*2*User.multiplier;
    User.xp+=Math.ceil(User.lvl/2)*User.multiplier;
    if (User.xp >= User.lvl*100) {
        User.xp=User.xp-User.lvl*100
        User.lvl++
    }
    console.log(`cash:${User.cash} xp:${User.xp} lvl:${User.lvl} click:${User.click} multiplier:${User.multiplier}`);
    Click()
    SaveAttr()
}

function SaveAttr() {
    localStorage.setItem('cash', User.cash);
    localStorage.setItem('xp', User.xp);
    localStorage.setItem('lvl', User.lvl);
    localStorage.setItem('click', User.click);
    localStorage.setItem('multipler', User.multiplier);
}

function RemoveAttr() {
    items = ['cash', 'xp', 'lvl', 'click', 'multipler', 'body', 'clicker', 'menu', 'text', 'buttons', 'mainbutton']
    for(const item of items) {localStorage.removeItem(item);}
    for(let i = 0; i < 4; i++) {localStorage.removeItem(`b${i}`);}
    for(let i = 0; i < 4; i++) {localStorage.removeItem(`s${i}`);}
    location.reload();
}

function Click() {
    document.getElementById("progress").setAttribute('max', User.lvl*100);
    document.getElementById("progress").setAttribute('value', User.xp);
    document.getElementById("jscash").innerHTML = User.cash; 
    document.getElementById("jslvl").innerHTML = User.lvl; 
    document.getElementById("jscount-click").innerHTML = User.click; 
    document.getElementById("jsxpmax").innerHTML = User.lvl*100;
    document.getElementById("jsxp").innerHTML = User.xp;
    document.getElementById("x").innerHTML = User.multiplier;
}

Click()