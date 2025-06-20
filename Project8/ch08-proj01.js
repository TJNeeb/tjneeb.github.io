
const tax_rate = prompt('Enter tax rate (0.10)');
const shipping_threshold = prompt('Enter shipping threshold (1000)');

/* add loop and other code here ... in this simple exercise we are not
   going to concern ourselves with minimizing globals, etc */

const taxRate = parseFloat(tax_rate);
const shippingThreshold = parseFloat(shipping_threshold);

let subtotal = 0;

for (let i = 0; i < cart.length; i++) {
    const item = cart[i];
    const total = calculateTotal(item.quantity, item.product.price);
    subtotal += total;
    outputCartRow(item, total);
}

const shippingCost = subtotal > shippingThreshold ? 0 : 40;
const tax = subtotal * taxRate;
const grandTotal = subtotal + tax + shippingCost;

document.write(`<tr class="totals"><td colspan="4">Subtotal</td><td class="right">$${subtotal.toFixed(2)}</td></tr>`);
document.write(`<tr class="totals"><td colspan="4">Tax</td><td class="right">$${tax.toFixed(2)}</td></tr>`);
document.write(`<tr class="totals"><td colspan="4">Shipping</td><td class="right">$${shippingCost.toFixed(2)}</td></tr>`);
document.write(`<tr class="totals"><td colspan="4" class="focus">Grand Total</td><td class="right focus">$${grandTotal.toFixed(2)}</td></tr>`);