export default (productField, fields = false) => {
    let total = 0;
    let totalCount = 0;
    let format = ':price';
    let formatSeparator = '.';
    const formIds = Object.keys(fields);

    console.log(fields);

    for (let i = 0; i < formIds.length; i++) {
        let item = fields[formIds[i]];

        if (item.type == 'product') {
            if (item.basePrice.includes(',')) {
                formatSeparator = ',';
            }

            let price = item.basePrice.replace(',', '.');
            let priceRaw = price.match(/-?(?:\d+(?:\.\d*)?|\.\d+)/)[0];

            format = price.replace(priceRaw, ':price');

            break;
        }
    }

    for (let i = 0; i < formIds.length; i++) {
        let item = fields[formIds[i]];

        if (item.type == 'quantity') {
            let parent = fields[item.productField];
            let price = parseFloat(parent.basePrice.replace(',', '.').match(/-?(?:\d+(?:\.\d*)?|\.\d+)/)[0]);

            for (let j = 0; j < formIds.length; j++) {
                let optionItem = fields[formIds[j]];

                if (optionItem.type == 'option' && optionItem.productField == item.productField) {
                    if (optionItem.value?.value) {
                        price += parseFloat(optionItem.value.value.split('|')[1])
                    }
                }
            }

            totalCount += parseFloat(item.value);
            total += price * parseFloat(item.value);
        }

        if (item.type == 'shipping') {
            if (item.value?.value) {
                total += parseFloat(item.value.value.split('|')[1])
            } else {
                let price = parseFloat(item.basePrice.replace(',', '.').match(/-?(?:\d+(?:\.\d*)?|\.\d+)/)[0]);
                total += price;
            }
        }
    }

    for (let i = 0; i < formIds.length; i++) {
        let item = fields[formIds[i]];

        if (item.type == 'total') {
            let totalPrice = total.toFixed(2);

            if (totalCount > 0) {
                if (formatSeparator == ',') {
                    totalPrice = totalPrice.toString().replace('.', ',')
                }
            }
            else {
                totalPrice = 0;
            }

            fields[formIds[i]].value = format.replace(':price', totalPrice);
        }
    }

    return fields;
}
