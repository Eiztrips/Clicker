let User = {
    cash: (localStorage.getItem('cash') !== null) ? +localStorage.getItem('cash') : 200,
    xp: (localStorage.getItem('xp') !== null) ? +localStorage.getItem('xp') : 0,
    lvl: (localStorage.getItem('lvl') !== null) ? +localStorage.getItem('lvl') : 1,
    click: (localStorage.getItem('click') !== null) ? +localStorage.getItem('click') : 0,
    multiplier: (localStorage.getItem('multipler') !== null) ? +localStorage.getItem('multipler') : 1,
    buttons: [
        (localStorage.getItem('b1') !== null) ? localStorage.getItem('b1') : false, 
        (localStorage.getItem('b2') !== null) ? localStorage.getItem('b2') : false, 
        (localStorage.getItem('b3') !== null) ? localStorage.getItem('b3') : false],
    styles: [
        (localStorage.getItem('s1') !== null) ? localStorage.getItem('s1') : false,
        (localStorage.getItem('s2') !== null) ? localStorage.getItem('s2') : false,
        (localStorage.getItem('s3') !== null) ? localStorage.getItem('s3') : false,]
}

function BuyButton() {
    if (User.buttons.every(button => button === 'true')) {alert('Получены все сущетвующие кнопки!')}
    else if (User.cash >= 5000) {
        User.cash -= 5000;
        win = Math.floor(Math.random() * 3);
        if (User.buttons[win] == 'true') {
            alert('Вы проиграли, выпала уже существующая кнопка.');
        }
        else {
            alert('Вы выйграли новую кнопку!');
            User.buttons[win] = 'true';
            console.log(`A new item! [b${win}]`)
            if(final()){alert('ПОЗДРАВЛЯЕМ, ВЫ ПРОШЛИ ИГРУ!')}
        }
    } else {alert(`У вас недостаточно средств: ${User.cash}$/${5000}$`)}
    SaveAttr()
}


function BuyStyle() {
    console.log()
    if (User.styles.every(style => style === 'true')) {alert('Получены все сущетвующие стили!')}
    else if (User.cash >= 10000) {
        User.cash -= 10000;
        win = Math.floor(Math.random() * 3);
        if (User.styles[win] == 'true') {alert('Вы проиграли, выпал уже существующий стиль.')}
        else {
            alert('Вы выйграли новый стиль!');
            User.styles[win] = 'true';
            
            if(final()){alert('ПОЗДРАВЛЯЕМ, ВЫ ПРОШЛИ ИГРУ!')}
        }
    } else {alert(`У вас недостаточно средств: ${User.cash}$/${10000}$`)}
    SaveAttr()
}

function BuyX() {
    if (User.multiplier > 7) {alert('Достигнут максимальный множитель!')}
    else if (User.cash >= 1000) {
        User.cash -= 1000;
        User.multiplier += 2
        alert("Успешная покупка!")
        if(final()){alert('ПОЗДРАВЛЯЕМ, ВЫ ПРОШЛИ ИГРУ!')}
    } else {alert(`У вас недостаточно средств: ${User.cash}$/${1000}$`)}
    SaveAttr()
}

function final() {
    return(User.multiplier > 7 && User.styles.every(style => style === 'true') && User.buttons.every(button => button === 'true'))
}

function SaveAttr() {
    localStorage.setItem('cash', User.cash);
    localStorage.setItem('xp', User.xp);
    localStorage.setItem('lvl', User.lvl);
    localStorage.setItem('click', User.click);
    localStorage.setItem('multipler', User.multiplier);
    localStorage.setItem('b1', User.buttons[0]);
    localStorage.setItem('b2', User.buttons[1]);
    localStorage.setItem('b3', User.buttons[2]);
    localStorage.setItem('s1', User.styles[0]);
    localStorage.setItem('s2', User.styles[1]);
    localStorage.setItem('s3', User.styles[2]);
}

console.log(User)