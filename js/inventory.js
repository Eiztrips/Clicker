let User = {
    b1: (localStorage.getItem('b1') !== null) ? localStorage.getItem('b1') : false,
    b2: (localStorage.getItem('b2') !== null) ? localStorage.getItem('b2') : false,
    b3: (localStorage.getItem('b3') !== null) ? localStorage.getItem('b3') : false,
    s1: (localStorage.getItem('s1') !== null) ? localStorage.getItem('s1') : false,
    s2: (localStorage.getItem('s2') !== null) ? localStorage.getItem('s2') : false,
    s3: (localStorage.getItem('s3') !== null) ? localStorage.getItem('s3') : false,
    body: (localStorage.getItem('body') !== null) ? localStorage.getItem('body') : '#3914AF',
    clicker: (localStorage.getItem('clicker') !== null) ? localStorage.getItem('clicker') : '#FFD300',
    menu: (localStorage.getItem('menu') !== null) ? localStorage.getItem('menu') : '#7109AA',
    text: (localStorage.getItem('text') !== null) ? localStorage.getItem('text') : 'white',
    buttons: (localStorage.getItem('buttons') !== null) ? localStorage.getItem('buttons') : '#48036F',
    mainbutton: (localStorage.getItem('mainbutton') !== null) ? localStorage.getItem('mainbutton') : "fa-solid fa-ghost"
}

button1 = document.getElementById('button1');
button2 = document.getElementById('button2');
button3 = document.getElementById('button3');

style1 = document.getElementById('style1');
style2 = document.getElementById('style2');
style3 = document.getElementById('style3');

if (User.b1 == 'true') {button1.classList.add('--allow')}
if (User.b2 == 'true') {button2.classList.add('--allow')}
if (User.b3 == 'true') {button3.classList.add('--allow')}
if (User.s1 == 'true') {style1.classList.add('--allow')}
if (User.s2 == 'true') {style2.classList.add('--allow')}
if (User.s3 == 'true') {style3.classList.add('--allow')}

console.log(User)

function EquipItem(item) {
    switch (JSON.stringify(item)) {
        case (JSON.stringify(['User.b1', User.b1])):
            {User.mainbutton="fa-solid fa-snowflake"; break}
        case (JSON.stringify(['User.b2', User.b2])):
            {User.mainbutton="fa-solid fa-star"; break}
        case (JSON.stringify(['User.b3', User.b3])):
            {User.mainbutton="fa-solid fa-otter"; break}
    
        case (JSON.stringify(['User.s1', User.s1])):
            {
                User.body = 'linear-gradient(#FFBB7B, #FFA34B)';
                User.clicker = '#FF840F';
                User.menu = '#E5C471';
                User.text = 'black';
                User.buttons = '#FF840F';
                break
            }
        case (JSON.stringify(['User.s2', User.s2])):
            {
                User.body = 'linear-gradient(#0202F0, #EF03EF)';
                User.clicker = '#320C99';
                User.menu = '#5F42B1';
                User.text = 'white';
                User.buttons = '#320C99';
                break
            }
        case (JSON.stringify(['User.s3', User.s3])):
            {
                {
                    User.body = 'linear-gradient(#279D95, #0B282C)';
                    User.clicker = '#002724';
                    User.menu = '#003B37';
                    User.text = 'white';
                    User.buttons = '#002724';
                    break
                }
            }
        case (JSON.stringify(item)):
            {alert('У вас нет этого предмета!'); break}
    }
    SaveAttr()
}
function SaveAttr() {
    localStorage.setItem('body', User.body);
    localStorage.setItem('clicker', User.clicker);
    localStorage.setItem('menu', User.menu);
    localStorage.setItem('text', User.text);
    localStorage.setItem('buttons', User.buttons);
    localStorage.setItem('mainbutton', User.mainbutton);
    console.log(User.mainbutton)
}