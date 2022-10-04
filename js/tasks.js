
{
const rain = Math.round(Math.random())

if (rain === 1) {
    console.log('Пошёл дождь. Возьмите зонт!')
} else {
    console.log('Дождя нет!')
}
}


{
const mathematics = Number(prompt('Введите кол-во баллов по математике'))
const russian = Number(prompt('Введите кол-во баллов по русскому языку'))
const IT = Number(prompt('Введите кол-во баллов по информатике'))

const sum = (mathematics + russian + IT)

if (sum >= 265) {
    console.log('Поздравляю, вы поступили на бюджет!')
}
}


{
const summ = Number(prompt('Какую сумму вы хотите снять?'))

if (summ < 100) {
    console.log('Минимальная сумма для выдачи - 100');
} else if (summ % 100 !== 0) {
    console.log('Введите сумму кратную 100');
} else {
    console.log('Сумма готова к выдаче')
}

}


