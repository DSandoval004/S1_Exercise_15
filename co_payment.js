"use strict";

/*
   New Perspectives on HTML5, CSS3, and JavaScript 6th Edition
   Tutorial 13
   Tutorial Case

   Payment Form Script
   
   Author: Diego Sandoval
   Date:   April 11, 2019 (04/11/19)
   
   Filename: co_payment.js
   
   Function List
   =============
   
   runSubmit()
      Runs validation tests when the submit button is clicked
      
   validateCVC()
      Validates the credit card CVC number
      
   validateMonth()
      Validates that the user has selected the expiration month of the credit card
      
   validateYear()
      Validates that the user has selected the expiration year of the credit card
      
   validateNumber()
      Validates that the user has entered a valid and legitimate card number
      
   validateCredit()
      Validates that the user has selected a credit card type
      
   validateName()
      Validates that the user has specified the name on the credit card
      
   sumDigits(numStr)
      Sums the digits characters in a text string
      
   luhn(idNum)
      Returns true of idNum satisfies the Luhn Algorithm
      
      6011280768434856
*/
window.addEventListener('load', function () {
      // DVARA:
      var formData = location.search.slice(1);
      formData = formData.replace(/\+/g, " ");
      formData = decodeURIComponent(formData);
      var formFields = formData.split(/[&=]/g),
            form = document.forms.order.elements;
      // DDOES: Write the field values to the order form 
      form.orderDate.value = formFields[1];
      form.modelName.value = formFields[5];
      form.qty.value = formFields[7];
      form.initialCost.value = formFields[9];
      form.protectionName.value = formFields[13];
      form.protectionCost.value = formFields[15];
      form.subtotal.value = formFields[17];
      form.salesTax.value = formFields[19];
      form.totalCost.value = formFields[21];
});

window.addEventListener('load', function () {
      document.getElementById('subButton').onclick = runSubmit;
      document.getElementById('cardName').oninput = validateName;
      document.getElementById('cardNumber').oninput = validateNumber;
      document.getElementById('expYear').onchange = validateYear;
      document.getElementById('expMonth').onchange = validateMonth;
      document.getElementById('cvc').oninput = validateCVC;
});

function runSubmit() {
      console.log("----------------")
      validateName();
      validateCredit();
      validateNumber();
      validateYear();
      validateMonth();
      validateCVC();
      console.log(6011280768434856)
}

function validateCVC() {
      var cardCVC = document.getElementById('cvc');
      var creditCard = document.querySelector('input[name="credit"]:checked').value;
      if (cardCVC.validity.valueMissing) {
            cardCVC.setCustomValidity("Enter your CVC number");
      } else if ((creditCard === 'amex') && (/^\d{4}$/.test(cardCVC.value) === false)) {
            cardCVC.setCustomValidity("Enter a 4 - digit CVC number");
      } else if ((creditCard !== 'amex') &&
            (/^\d{3}$/.test(cardCVC.value) === false)) {
            cardCVC.setCustomValidity("Enter a 3 - digit CVC number");
      } else {
            cardCVC.setCustomValidity("");
      }
}

function validateMonth() {
      var cardMonth = document.getElementById("expMonth");
      if (cardMonth.selectedIndex === 0) {
            console.log(51)
            cardMonth.setCustomValidity("Select the expiration month");

      } else {
            console.log(52)
            cardMonth.setCustomValidity("");
      }
}

function validateYear() {
      var cardYear = document.getElementById("expYear");
      if (cardYear.selectedIndex === 0) {
            console.log(41)
            cardYear.setCustomValidity("Select the expiration year");
      } else {
            console.log(42)
            cardYear.setCustomValidity(" ");
      }
}

function validateNumber() {
      var cardNumber = document.getElementById("cardNumber");
      if (cardNumber.validity.valueMissing) {
            console.log(31)
            cardNumber.setCustomValidity("Enter your card number");
      } else if (cardNumber.validity.patternMismatch) {
            console.log(32)
            cardNumber.setCustomValidity("Enter a valid card number");
      } else {
            console.log(33)
            cardNumber.setCustomValidity(" ");
      }
}

function validateCredit() {
      var creditCard = document.forms.payment.elements.credit[0];
      if (creditCard.validity.valueMissing) {
            console.log(21)
            creditCard.setCustomValidity("Select your credit card");
      } else {
            console.log(22)
            creditCard.setCustomValidity("");
      }

}

function validateName() {
      var cardName = document.getElementById("cardName");
      if (cardName.validity.valueMissing) {
            console.log(11)
            cardName.setCustomValidity("Enter your name as it appears on the card");
      } else {
            console.log(12)
            cardName.setCustomValidity("");
      }
}