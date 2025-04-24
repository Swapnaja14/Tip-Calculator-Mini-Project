

document.getElementById('calculate-btn').addEventListener('click', calculateTip);
document.getElementById('bill-amount').addEventListener('input', calculateTip);
document.getElementById('tip-percentage').addEventListener('input', calculateTip);

function calculateTip() {
    const billAmount = parseFloat(document.getElementById('bill-amount').value) || 0;
    const tipPercentage = parseFloat(document.getElementById('tip-percentage').value) || 0;
    const tipAmount = (tipPercentage/100) * billAmount;
    const total = tipAmount + billAmount;

    document.getElementById('tip-amount').textContent = `₹${tipAmount.toFixed(2)}`;
    document.getElementById('total-amount').textContent = `₹${total.toFixed(2)}`;
}

calculateTip();