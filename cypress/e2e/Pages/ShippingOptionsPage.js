class ShippingOptionsPage {
elements = {
shippingOption: (index) => cy.get(`#shippingoption_${index}`),
continueButton: () => cy.get('#shipping-method-buttons-container')
}
//methods
selectShippingOption (index) {
    this.elements.shippingOption(index).click();
}
clickContinueButtonToPaymentMethod() {
    this.elements.continueButton().click();

}
}

module.exports = new ShippingOptionsPage();