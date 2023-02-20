function setTextElementValueById(elementId, value) {
    const subTotalElement = document.getElementById(elementId);
    subTotalElement.innerText = value;
}

function calcucationSubTotal() {
    // calculate total phone amount
    const phoneAmountField = document.getElementById('phone-total');
    const caseAmountField = document.getElementById('case-total');

    const phoneAmountString = phoneAmountField.innerText;
    const caseAmountString = caseAmountField.innerText;

    const currentPhoneAmount = parseInt(phoneAmountString);
    const currentcaseAmount = parseInt(caseAmountString);

    const subTotalAmount = currentPhoneAmount + currentcaseAmount;
    setTextElementValueById('sub-total', subTotalAmount);

    const taxTotalAmount = (subTotalAmount * 0.1).toFixed(2);
    const taxAmount = parseFloat(taxTotalAmount);
    setTextElementValueById('tax-amount', taxAmount);

    const totalAmount = subTotalAmount + taxAmount;
    setTextElementValueById('final-total', totalAmount);
}

document.getElementById('check-out').addEventListener('click', function () {
    alert('Thanks For Check Out');
    const phoneNumberField = document.getElementById('phone-number-field');
    phoneNumberField.value = 1;
    const caseNumberField = document.getElementById('case-number-field');
    caseNumberField.value = 1;
    history.go();
});