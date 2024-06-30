class BillingPage {
    elements = {
    billingCity: () => cy.get('#BillingNewAddress_City'),
    billingAddress: () => cy.get('#BillingNewAddress_Address1'),
    billingZipCode: () => cy.get('#BillingNewAddress_ZipPostalCode'),
    billingPhoneNumber: () => cy.get('#BillingNewAddress_PhoneNumber'),
    billingCountry: () => cy.get('#BillingNewAddress_CountryId'),
    firstName: () => cy.get('#BillingNewAddress_FirstName'),
    lastName: () => cy.get('#BillingNewAddress_LastName'),
    emailField: () => cy.get('#BillingNewAddress_Email'),
    billingContinueButton: () => cy.get('#billing-buttons-container > .new-address-next-step-button'),
    }
    
    introduceUserData (Name,LastName,Email) {
    this.elements.firstName().type(Name);
    this.elements.lastName().type(LastName);
    this.elements.emailField().type(Email);
    }

    introduceBillingCity (city) {
        this.elements.billingCity().type(city);
    }
    
    introduceBillingAddress(address) {
        this.elements.billingAddress().type(address);
    }
    
    introduceBillingZipCode(number) {
        this.elements.billingZipCode().type(number);
    }
    
    introduceBillingPhoneNumber(phonenumber) {
        this.elements.billingPhoneNumber().type(phonenumber);
    }
    
    selectCountry(country) {
        this.elements.billingCountry().select(country); // Select an option by its text
      }

    continueToCheckOut() { 
        this.elements.billingContinueButton().click();
    }
    
    }
    
    module.exports = new BillingPage();