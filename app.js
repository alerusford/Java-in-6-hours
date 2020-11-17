// 04 Functions Функции
// https://youtu.be/Bluxbh9CaQ0?t=9731

// Function Declaration
// function greet(name){
//     console.log('Привет - ', name)
// }

//Function Expression
// const greet2 = function greet2(name){
//     console.log('Привет - ', name)
// }

// greet('Лена')
// greet2('Лена2')

// console.log(typeof greet)
// console.dir(greet)

// Анонимные функции
// let counter = 0
// const interval = setInterval(function () {
//     if (counter === 5) {
//         clearInterval(interval)
//     } else {
//         console.log(++counter)
//     }
// }, 1000)

// Стрелочные функции
function greet(name){
    //console.log('Привет - ', name)
}

const arrow = (name) => {
    //console.log('Привет - ', name)
}
arrow('Alexandr')

const arrow2 = name => console.log('Привет - ', name)
arrow2('alexandr2')

const pow2 = num => num ** 2
console.log(pow2(5))

// Параметры по умолчанию