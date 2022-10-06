const USD = 73 
const EURO = 1.2 

sum_of_product = prompt('Введите сумму покупки в евро')

const product_price = (sum_of_product) => {
    return `Сумма в рублях - ${sum_of_product * EURO * USD}`
}

console.log(product_price(sum_of_product))
