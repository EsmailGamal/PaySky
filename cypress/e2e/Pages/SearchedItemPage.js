class SearchedItemPage {
    /// Locators 
    elements = {
      searchedProductTitle: () => cy.get('.product-title > a').should('be.visible'),
      searchedProductPrice: () => cy.xpath("//span[@class='price actual-price']").should('be.visible'),
      addToCartActionButton: () => cy.get('.product-box-add-to-cart-button').should('be.visible'),
      addToCartConfirmButton: () => cy.xpath("//button[@id='add-to-cart-button-4']"),
      addToWishListActionButton: () => cy.xpath("//button[@title='Add to wishlist']").should('be.visible'),
      compareActionButton: () => cy.xpath("//button[@title='Add to compare list']").should('be.visible')
    }
    
      clickAddToCartAndConfirm() {
        cy.wait (800);
        this.elements.addToCartActionButton().click({force:true});
        cy.wait(800);
      }
    
      clickAddToWishList() {
        this.elements.addToWishListActionButton().click();
      }
    
      clickAddToCompareProducts() {
        this.elements.compareActionButton().click();
      }
    
      clickToOpenProductDetails() {
        this.elements.searchedProductTitle().click();
      }
     
     
      checkURLForSearchedProductScreen(){
        cy.url().should('include','search')
      } 
    }
     
    module.exports = new SearchedItemPage();
    