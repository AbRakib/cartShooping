function updatePhoneNumber(isIncrisePhone) {
    const phoneNumberField = document.getElementById('phone-number-field');
    const phoneNumberString = phoneNumberField.value;
    const previusPhoneNumber = parseInt(phoneNumberString);

    let newPhoneNumber;
    if (isIncrisePhone === true) {
        newPhoneNumber = previusPhoneNumber + 1;
    } else{
        newPhoneNumber = previusPhoneNumber - 1;
        if(newPhoneNumber < 0){
            newPhoneNumber = 0;
        }
    }
    phoneNumberField.value = newPhoneNumber;
    return newPhoneNumber;
}

function updatePhoneAmount(isIncariseAmount) {
    const newPhoneNumber = updatePhoneNumber(isIncariseAmount);

    const phoneTotalField = document.getElementById('phone-total');

    const newPhoneAmount = newPhoneNumber * 1219;
    phoneTotalField.innerText = newPhoneAmount;
}

document.getElementById('btn-phone-plus').addEventListener('click', function() {
    updatePhoneAmount(true);
    calcucationSubTotal();
});

document.getElementById('btn-phone-minus').addEventListener('click', function () {
    updatePhoneAmount(false);
    calcucationSubTotal();
});