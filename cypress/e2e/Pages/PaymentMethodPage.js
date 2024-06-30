class PaymentMethodPage{
    elements = {
        paymentOption: (index) => cy.get(`#paymentmethod_${index}`),
        continueButton: () => cy.xpath("//button[@class='button-1 payment-method-next-step-button']")
        }
        //methods
        selectPaymentOption (index) {
            this.elements.paymentOption(index).click();
        }
        clickContinueButtonToPaymentInformation() {
            this.elements.continueButton().click();
        
        }
}


module.exports = new PaymentMethodPage();

