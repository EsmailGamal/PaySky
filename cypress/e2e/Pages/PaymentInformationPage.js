class PaymentInformationPage {
elements = {
continueButton : () => cy.xpath("//button[@class='button-1 payment-info-next-step-button']")
} 

clickContinueToNavigateToConfirmOrderScreen() {
this.elements.continueButton().click();
}

}


module.exports = new PaymentInformationPage();