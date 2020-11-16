// 1 Number
// const num = 42 //integer
// const float = 42.42 //float
// const pow = 10e3
//
// console.log ('MAX_SAFE_INTEGER', Number.MAX_SAFE_INTEGER)
// console.log('Mach.pow 53', Math.pow(2, 53)-1) // Number.MAX_SAFE_INTEGER (максимально возможное число в JS)
// console.log('MIN_SAFE_INTEGER', Number.MIN_SAFE_INTEGER)
// console.log('MAX_VALUE', Number.MAX_VALUE)
// console.log('MIN_VALUE', Number.MIN_VALUE)
// console.log('POSITIVE_INFINITY', Number.POSITIVE_INFINITY)
// console.log('NEGATIVE_INFINITY', Number.NEGATIVE_INFINITY)
// console.log('2 / 0', 2 / 0)
// console.log(Number.NaN) // Not A Number
// console.log(typeof NaN)
// const weird = 2 / undefined
// console.log(Number.isNaN(weird))
// console.log(Number.isNaN(42))
// console.log(Number.isFinite(Infinity))
// console.log(Number.isFinite(42))
//
// const stringInt = '40'
// const stringFloat = '40.42'
//
// console.log(Number.parseInt(stringInt) + 2) // парсим строку в число
// console.log(parseInt(stringInt) + 2)
// console.log(Number(stringInt) + 2)
// console.log(+stringInt + 2)
//
// console.log(Number.parseFloat(stringFloat) + 2)
// console.log(parseFloat(stringFloat) + 2)
// console.log(Number(stringFloat) + 2)
// console.log(+stringFloat / 2)

// console.log(0.4 + 0.2) // 0.6
// console.log(+(0.4 + 0.2).toFixed(1))
// console.log(parseFloat((0.4 + 0.2).toFixed(1))) //еще можно Math.trunc

// 2 BigInt
//console.log(900719925474099199999n - 90071992547409919999n)

// 3 Math объект
// console.log(Math.E) // экспонента
// console.log(Math.PI) // пи
// console.log(Math.sqrt(25)) // 5
// console.log(Math.pow(5, 3)) // 125
// console.log(Math.abs(-42)) // отсекаем негативную часть
// console.log(Math.max(42, 11, 35, 400))
// console.log(Math.min(42, 11, 35, 400))
// console.log(Math.floor(4.9)) // округление в меньшую сторону
// console.log(Math.ceil(4.9)) // округление в большую сторону
// console.log(Math.random())

// 4 Пример Example
// function getRandomBetween (min, max) {
//     return Math.floor(Math.random() * (max-min+1) + min) //теряется единица, необходимо добавить +1
// }
// console.log(getRandomBetween(10, 42));

