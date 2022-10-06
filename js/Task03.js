
const summa = Number(prompt('Введите итоговую сумму покупок'))
const n = Number(prompt('Введите количество покупок'))
const promo = prompt('Введите промо-код')

const calculate = (summa, n, promo) => {
    let calc_summa = summa;
    if (n > 10) {
        calc_summa *= 0.97;
    } 
    if (summa > 30000) {
        calc_summa = calc_summa - (summa - 30000) * 0.15;
    }
    if (promo === 'METHED') {
        calc_summa *= 0.85;
    }
    if (calc_summa > 2000 && promo === 'G3H2Z1') {
        calc_summa -= 500;
    }
    return calc_summa;
}

console.log(calculate(summa, n, promo))