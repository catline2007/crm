const tax_1 = Number(prompt('Сколько вы получаете?'))

if (tax_1 < 15000) {
	console.log(`Налог 13% - ${tax_1 * 0.13
}`)
} else if (tax_1 > 50000) {
	console.log(`Налог 30% - ${tax_1 * 0.3
}`)
} else {
	console.log(`Налог 20% - ${tax_1 * 0.20
}`)
}