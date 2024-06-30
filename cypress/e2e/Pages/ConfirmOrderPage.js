class ConfirmOrderPage {
elements = {
confrimButton : () => cy.get('#confirm-order-buttons-container > .button-1'),
orderTotal: () => cy.get('.order-total > .cart-total-left > label'),
taxValue: () => cy.get('.tax-value > .cart-total-left'),
paymentMethodValue: () => cy.get('.payment-method > .value'),
shippingMethodValue: () => cy.get('.shipping-method > .value'),
productName: () => cy.get('.product-name'),
}
// methods 

checkElementVisibility(element) {
     element.should('be.visible');
    }
    
     checkOrderDetailsAndPaymentMethodValueExist() {
     const elementsToCheck = [
    this.elements.orderTotal(),
    this.elements.paymentMethodValue(),
    this.elements.productName(),
    this.elements.shippingMethodValue(),
    this.elements.taxValue()
    ];
    // The array contains different elements you want to check
     elementsToCheck.forEach((element) => {
     this.checkElementVisibility(element);
     }); //  forEach loops over array elements, calling a method to check each element's existence.
     }

     clickConfirmOrder () {
        this.elements.confrimButton().click();
     }
}


module.exports = new ConfirmOrderPage();
