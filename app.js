// Массивы
// https://youtu.be/Bluxbh9CaQ0?t=11055

const cars = ['Мазда', 'Форд', 'БМВ', 'Мерседес']
const people = [
    {name: 'Alexandr', budget: 4200},
    {name: 'Elena', budget: 6700},
    {name: 'Ivan', budget: 1000}
];
const fib = [1, 1, 2, 3, 5, 8, 13]

//Function
// function addItemToEnd() {
//
// }

//Method
// cars.push('Рено') //добавляет элемент в конец массива
// cars.unshift('Волга') //добавляет элемент в начало массива
// cars.shift() //удаляет первый элемент массива
//
// const firstItem = cars.shift()
// const lastCar = cars.pop() // удаляет последний элемент массива
// console.log(firstItem)
// console.log(cars)

// console.log(cars.reverse()) //реверс массива

// const index = cars.indexOf("БМВ") //нашли БМВ в массиве
// cars[index] = 'porsche' //заменили БМВ на Порш
// console.log(cars);

const index = people.findIndex(function(person){
    return person.budget === 6700
})
const person = people.find(function (person) {
    return person.budget === 6700

})
console.log(person)


// Задача 1
// const text = 'Привет, мы изучаем JavaScript'
// const reverseText = text.split('').reverse().join('') // split() - делит строчку и возвращает массив, join - соединяет
// console.log(reverseText)