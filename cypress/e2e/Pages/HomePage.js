class HomePage {  
    // lOCATORS 
    elements = {
      searchInputField: () => cy.get('#small-searchterms'),
      searchIcon: () => cy.xpath("//button[@type='submit']"),
      welcomeMessage: () => cy.xpath("//h2[normalize-space()='Welcome to our store']"),
      loginLink: () => cy.get('.ico-login'),
      wishListLinK: () => cy.xpath("//span[@class='wishlist-label']"),
      registerLink: () => cy.xpath("//a[@class='ico-register']"),
      shoppingCartLink: () => cy.xpath("//span[@class='cart-label']"),
      featureProductMessage: () => cy.xpath("//strong[normalize-space()='Featured products']"),
      newsMessage: () => cy.xpath("//strong[normalize-space()='News']"),
    }
  
    // Methods    
      navigateToDemoCommerceWebsite() {
      cy.visit('/');
    }

    navigateToLoginPage() {
        cy.visit('/login?returnUrl=%2F');
    }

    clickToLogin() {
        cy.wait(500);
        this.elements.loginLink().click();
      }
    
      navigateToWhishlist(){
        this.elements.wishListLinK().click();
      }
  
      navigateToRegister(){
        this.elements.registerLink().click();
      }
  
      navigateToShoppingCart(){
        this.elements.shoppingCartLink().click();
      }
  
      checkDashboardURL(){
          cy.url().should('include','nopcommerce')
      }
  
      ensureWelcomeMessageDisplayed() {
        this.elements.welcomeMessage().should('be.visible')
      }
  
      ensureNewsSectionDisplayed() {
        this.elements.newsMessage().should('be.visible')
      }
  
      ensureFeaturedProductsMessageDisplayed() {
        this.elements.featureProductMessage().should('be.visible')
      }
      searchForSpecificProduct(productName) {
        this.elements.searchInputField().type(`${productName}{enter}`);
      }    
    }

    
    module.exports= new HomePage();     