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
      var orderForm = document.forms.orderForm;
      // DVARO:
      orderForm.elements.orderDate.value = new Date().toDateString();
      // DDOES:
      orderForm.elements.model.focus();
      // DFUNC:
      calcOrder();
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
      orderForm.elements.initialCost.value = initialCost;
      orderForm.elements.protectionCost.value = pCost;
      orderForm.elements.subtotal.value = initialCost + pCost;
      orderForm.elements.salesTax.value = salesTax;
      orderForm.elements.totalCost.value = totalCost;

};