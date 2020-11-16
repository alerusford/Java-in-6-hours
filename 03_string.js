//strings строки
//https://youtu.be/Bluxbh9CaQ0?t=8536

// const name = 'Александр'
// const age = 29
//
// function getAge() {
//     return age
// }

// const output = 'Привет, меня зовут ' + name + ' и мой возраст ' + age + ' лет.'
// const output = `Привет, меня зовут ${name} и мой возраст ${getAge()} лет.`
// console.log(output)

// const name = 'Александр'
// console.log(name.length)
// console.log(name.toUpperCase())
// console.log(name.toLocaleLowerCase())
// console.log(name.charAt(2))
// console.log(name.indexOf('а'))
// console.log(name.startsWith('алекс'))
// console.log(name.startsWith('Алекс'))
// console.log(name.toLocaleLowerCase().startsWith('алекс'))
// console.log(name.repeat(3))
// const string = '     password'
// console.log(string.trim())

function logPerson(s, name, age) {
    // console.log(s, name, age)
    return `${s[0]}${name}${s[1]}${age}${s[2]}`
}
const personName = 'Александр'
const personAge = 29

const output = logPerson `Имя: ${personName}, Возраст: ${personAge}!`
console.log(output)