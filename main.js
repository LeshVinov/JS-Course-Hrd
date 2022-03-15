'use strict';

let lang = prompt('Русский или английский?', "ru");

if (lang == "ru") {
    console.log('Понедельник' + ' ' + 'Вторник' + ' ' + 'Среда' + ' ' + 'Четверг' + ' ' + 'Пятница' + ' ' + 'Суббота' + ' ' + 'Воскресенье');
} else if (lang == "en") {
    console.log('Monday' + ' ' + 'Tuesday' + ' ' + 'Wednesday' + ' ' + 'Thursday' + ' ' + 'Friday' + ' ' + 'Saturday' + ' ' + 'Sunday');
} else {
    console.log('Ошибка');
};

switch (lang) {
    case "ru":
        console.log('Понедельник' + ' ' + 'Вторник' + ' ' + 'Среда' + ' ' + 'Четверг' + ' ' + 'Пятница' + ' ' + 'Суббота' + ' ' + 'Воскресенье');
        break;

    case "en":
        console.log('Monday' + ' ' + 'Tuesday' + ' ' + 'Wednesday' + ' ' + 'Thursday' + ' ' + 'Friday' + ' ' + 'Saturday' + ' ' + 'Sunday');
        break;

    default:
        console.log('Ошибка');
        break;
};

const languageOfWD = {
    ru: ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
    en: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
};
console.log(languageOfWD[lang]);

let firstName = prompt('Введите имя требуемого человека');
let post = "Позиция";

firstName === "Артем" ? (
    post = "директор",
    console.log(firstName + ' ', 'его должность:' + ' ' + post)
) : (
    firstName === "Александр" ? (
        post = "преподаватель",
        console.log(firstName + ' ', 'его должность:' + ' ' + post)
    ) : (
        post = "студент",
        console.log(firstName + ' ', 'его должность:' + ' ' + post)
    )
);