'use strict'

var money = +prompt("Ваш бюджет на месяц?");
var time  = prompt("Введите дату в формате YYYY-MM-DD");

// console.log(money);
// console.log(typeof(money));
var firstq = prompt("Введите обязательную статью расходов в этом месяце");
var secondq = prompt("Во сколько обойдется?");

var appData = {
    Money: money,
    timeDate: time,
    expenses: {"ответ на первый вопрос" : "ответ на второй вопрос"},
    optionalExpenses:{},
    income: [],
    savings: false
     

};
console.log(appData);

alert(money / 30);

