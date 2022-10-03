
let currency = "руб."

const product_name = prompt('Введите наименование товара', '')
const category = prompt('Введите категорию товара', '')
const price = Number(prompt('Введите цену товара', ''))
const unit = prompt('Введите единицу измерения', 'шт.')
const count = Number(prompt('Введите количество товара', '1'))



console.log(`Наименование: ${product_name} - это тип: ${typeof product_name}`)
console.log(`Категория: ${category} - это тип: ${typeof category}`)
console.log(`Цена: ${price} - это тип: ${typeof price}`)
console.log(`Количество: ${count} - это тип: ${typeof price}`)
console.log("Сумма товаров: ", count * price, currency)
console.log(`На складе ${count} ${unit} товара "${product_name}" на сумму ${count * price} ${currency}`)


