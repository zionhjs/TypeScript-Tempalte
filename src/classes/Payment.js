"use strict";
exports.__esModule = true;
var Payment = /** @class */ (function () {
    function Payment(recipient, details, amount) {
        this.recipient = recipient;
        this.details = details;
        this.amount = amount;
    }
    ;
    Payment.prototype.format = function () {
        return this.recipient + " is owed \u00A3" + this.amount + " for " + this.details;
    };
    return Payment;
}());
exports.Payment = Payment;
