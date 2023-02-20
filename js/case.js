function updateCaseNumber(isIncrise) {
    const caseNumberField = document.getElementById('case-number-field');
    const caseNumberString = caseNumberField.value;
    const previousCaseNumber = parseInt(caseNumberString);

    let newCaseNumber;
    if(isIncrise === true){
        newCaseNumber = previousCaseNumber + 1;
    } else {
        newCaseNumber = previousCaseNumber - 1;
        if(newCaseNumber < 0){
            newCaseNumber = 0;
        }
    }

    caseNumberField.value = newCaseNumber;
    return newCaseNumber;
}

function updateAmount(isAmount) {
    const newCaseNumber = updateCaseNumber(isAmount);
    const caseTotalPriceElement = document.getElementById('case-total');
    const caseTotal = newCaseNumber * 59;
    caseTotalPriceElement.innerText = caseTotal;
}

/***
 * 1st set event listenes in case button
 * get the value from card
 * convert text to integer
 * added value +1
 * Output value this field
 */
document.getElementById('btn-case-plus').addEventListener('click', function () {
    updateAmount(true);
    calcucationSubTotal();
});


/***
 * 1st set event listenes in case button
 * get the value from card
 * convert text to integer
 * added value -1
 * Output value this field
 */
document.getElementById('btn-case-minus').addEventListener('click', function () {
    updateAmount(false);
    calcucationSubTotal();
});

/**
 * set event listener for click
 * 
 * 
 */
document.getElementById('btn-case-plus').addEventListener('click', function() {
    const totalAmountField = document.getElementById('case-total');
    const totalAmountString = totalAmountField.innerText;
    const previousTotalAmount = parseInt(totalAmountString);
    totalAmountField.value = previousTotalAmount * 2;
});