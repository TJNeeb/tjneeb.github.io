/* define your functions here */




function calculateTotal(quantity, price) {
    return quantity * price;
}

function outputCartRow(item, total) {
    document.write("<tr>");
    document.write(`<td><img src="images/${item.product.filename}"></td>`);
    document.write(`<td>${item.product.title}</td>`);
    document.write(`<td class="center">${item.quantity}</td>`);
    document.write(`<td class="right">$${item.product.price.toFixed(2)}</td>`);
    document.write(`<td class="right">$${total.toFixed(2)}</td>`);
    document.write("</tr>");
}




        
