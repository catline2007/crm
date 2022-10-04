const tax_2 = Number(prompt('Сколько вы получаете?'))

if (tax_2 < 15000) {
	console.log(`${tax_2 * 0.13
}`)
} else if (tax_2 > 15000 && tax_2 < 50000) {
   console.log(`${(tax_2 - 15000) * 0.2 + 15000 * 0.13
}`)
} else if (tax_2 > 50000) {
	console.log(`${(tax_2 - 50000) * 0.3 + 15000 * 0.13 + 35000 * 0.2 
}`)
} else {
	console.log(`Налог 20% - ${tax_2 * 0.20
}`)
}