"use strict";
exports.__esModule = true;
var Invoice_js_1 = require("./classes/Invoice.js");
var Payment_js_1 = require("./classes/Payment.js");
var ListTemplate_js_1 = require("./classes/ListTemplate.js");
var form = document.querySelector('.new-item-form');
console.log(form.children);
// inputs
var type = document.querySelector('#type');
var tofrom = document.querySelector('#tofrom');
var details = document.querySelector('#details');
var amount = document.querySelector('#amount');
// list template instance
var ul = document.querySelector('ul');
var list = new ListTemplate_js_1.ListTemplate(ul);
form.addEventListener('submit', function (e) {
    e.preventDefault();
    var doc;
    if (type.value === 'invoice') {
        doc = new Invoice_js_1.Invoice(tofrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment_js_1.Payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    list.render(doc, type.value, 'end');
});
