'use strict'

let text = prompt('Введите аргумент', "sum");

const argumentDeterminer = function(a) {
    if (typeof a !== 'string') {
        alert("Пользователь, ты ввел не строку!");
    } else if (typeof a === 'string' && a.length < 30) {
        console.log("Ты ввел строчку, молодец")
        a = text.trim();
        console.log(a);
    } else if (typeof a === 'string' && a.length > 30 ) {
        console.log("Ты ввел строчку, но она больше, чем 30 символов")
        a = text.trim();
        a = text.slice(0, 30) + '...';
        console.log(a);  
    };
};

argumentDeterminer(text);