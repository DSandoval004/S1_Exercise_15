"use strict";

/*
   New Perspectives on HTML5, CSS3, and JavaScript 6th Edition
   Tutorial 13
   Tutorial Case

   Order Form Script
   
   Author: Diego Sandoval
   Date:   April 11, 2019 (04/11/19)
   
   Filename: co_order.js
   
   Function List
   =============
   
   calcOrder()
      Calculates the cost of the customer order
      
   formatNumber(val, decimals)
      Format a numeric value, val, using the local
      numeric format to the number of decimal
      places specified by decimals
      
   formatUSACurrency(val)
      Formats val as U.S.A. currency
   
*/
// DDOES:
window.addEventListener('load', function () {
      // DVARL:
      var orderForm = document.forms.orderForm,
            planOptions = document.querySelectorAll('input[name= "protection"]');
      // DVARO:
      orderForm.elements.orderDate.value = new Date().toDateString();
      // DDOES:
      orderForm.elements.model.focus();
      // DFUNC:
      calcOrder();
      // DDOES:
      orderForm.elements.model.onchange = calcOrder;
      orderForm.elements.qty.onchange = calcOrder;
      // DLOOP:
      for (var i = 0; i < planOptions.length; i++) {
            planOptions[i].onclick = calcOrder;
      };
});
// DFUNC:
function calcOrder() {
      // DVARL:
      var orderForm = document.forms.orderForm,
            mIndex = orderForm.elements.model.selectedIndex,
            mCost = orderForm.elements.model.options[mIndex].value,
            qIndex = orderForm.elements.qty.selectedIndex,
            quantity = orderForm.elements.qty[qIndex].value,
            initialCost = mCost * quantity,
            pCost = document.querySelector('input[name="protection"]:checked').value * quantity,
            salesTax = 0.05 * (initialCost + pCost),
            totalCost = initialCost + pCost + salesTax;
      // DDOES:
      orderForm.elements.initialCost.value = formatUSACurrency(initialCost);
      orderForm.elements.protectionCost.value = formatNumber(pCost, 2);
      orderForm.elements.subtotal.value = formatNumber(initialCost + pCost, 2);
      orderForm.elements.salesTax.value = formatNumber(salesTax, 2);
      orderForm.elements.totalCost.value = formatUSACurrency(totalCost);
      // DDOES:
      orderForm.elements.modelName.value = orderForm.elements.model.options[mIndex].text;
      orderForm.elements.protectionName.value = document.querySelector('input[name="protection"]:checked').nextSibling.nodeValue;
};
// DFUNC:
function formatNumber(val, decimals) {
      return val.toLocaleString(undefined, {
            minumumFractionDigits: decimals,
            maximumFractionDigits: decimals
      });
};
// DFUNC:
function formatUSACurrency(val) {
      return val.toLocaleString('en-us', {
            style: 'currency',
            currency: "USD"
      });
};