class ProductDetailsPage{
    elements = {
    addToCartButton : () => cy.get('#add-to-cart-button-18'),
    priceValue: () => cy.get('#price-value-4'),
    HomePageIcon: () => cy.xpath("//img[@alt='nopCommerce demo store']"),
    cartLink: () => cy.get('#topcartlink'),
    }

    clickAddToCart() {
    this.elements.addToCartButton().click();
    cy.wait (700);
    }

    navigateToShoppingCart() {
        this.elements.cartLink().click();
    }

    ClickHomePageIcon() {
    this.elements.HomePageIcon().click({force:true});
    }
    
    }

    module.exports = new ProductDetailsPage();