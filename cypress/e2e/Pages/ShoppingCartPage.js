class ShoppingCartPage {  
    // lOCATORS 
    elements = {
      shoppingCartMessage: () => cy.xpath("//h1[normalize-space()='Shopping cart']"),
      continueShoppingButton: () => cy.xpath("//button[@name='continueshopping']"),
      estimateShippingButton: () => cy.xpath("//a[@id='open-estimate-shipping-popup']"),
      unitPrice: () => cy.xpath("//span[@class='product-unit-price']"),
      totalPrice: () => cy.xpath("//span[@class='product-subtotal']"),
      checkoutButton: () => cy.get("#checkout"),
      termsAndServices: () => cy.get("#termsofservice"),
      continueAsGuestButton: () => cy.get('.checkout-as-guest-button')
    }
  
    // Methods    
     
      navigateToCartAndCheckURL() {
      cy.visit('/cart');
      cy.url().should('include','cart')
    }
     
    continueAsGuest() {
      this.elements.continueAsGuestButton().click();
    }

      ensureUnitPriceIsDisplayed(){
        this.elements.unitPrice().should('be.visible');
      }
  
      ensureTotalPriceIsDisplayed(){
        this.elements.totalPrice().should('be.visible');
      }
  
      checkTheServicesTermsBox(){
        this.elements.termsAndServices().check();
      }

      clickonCheckoutButton(){
        this.elements.checkoutButton().click();
      }
    
      ensureUnitPriceIsDisplayed() {
        this.elements.unitPrice().should('be.visible')
      }
  
      ensureTotalPriceIsDisplayed() {
        this.elements.totalPrice().should('be.visible')
      }
      
    }

    module.exports= new ShoppingCartPage();     