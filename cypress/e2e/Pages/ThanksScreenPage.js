class ThanksScreenPage {
elements = {
orderNumber : () => cy.get('.order-number > strong')
}

checkOrderNumberExistInSuccessScreen () {
    this.elements.orderNumber().should('be.visible');
}

}

module.exports = new ThanksScreenPage();
