const SearchedItemPage = require('../Pages/SearchedItemPage');
const HomePage = require('../Pages/HomePage');
const SignInPage = require('../Pages/SignInPage');
const ShoppingCartPage = require ('../Pages/ShoppingCartPage');
const ProductDetailsPage = require ('../Pages/ProductDetailsPage');
const BillingPage = require ('../Pages/BillingPage');
const ShippingOptionsPage = require('../Pages/ShippingOptionsPage');
const PaymentMethodPage = require ('../Pages/PaymentMethodPage');
const PaymentInformationPage = require ('../Pages/PaymentInformationPage');
const ConfirmOrderPage = require ('../Pages/ConfirmOrderPage');
const ThanksScreenPage = require ('../Pages/ThanksScreenPage')

it('Ensure User can Search For Specific Product and add proceed till ordering ', () => {
    HomePage.searchForSpecificProduct('HTC One M8 Android L 5.0 Lollipop');
    SearchedItemPage.checkURLForSearchedProductScreen();
    SearchedItemPage.clickAddToCartAndConfirm();
    ProductDetailsPage.navigateToShoppingCart();
    ShoppingCartPage.checkTheServicesTermsBox();
    ShoppingCartPage.clickonCheckoutButton();
    ShoppingCartPage.continueAsGuest();
    BillingPage.introduceUserData('Esmail','Gamal','esmailgamal17@gmail.com');
    BillingPage.introduceBillingAddress('Maadi');
    BillingPage.introduceBillingCity('Cairo');
    BillingPage.introduceBillingPhoneNumber('01000619513');
    BillingPage.introduceBillingZipCode('1000');
    BillingPage.selectCountry('Egypt');
    BillingPage.continueToCheckOut();
    ShippingOptionsPage.selectShippingOption(1);
    ShippingOptionsPage.clickContinueButtonToPaymentMethod();
    PaymentMethodPage.selectPaymentOption(0);
    PaymentMethodPage.clickContinueButtonToPaymentInformation();
    PaymentInformationPage.clickContinueToNavigateToConfirmOrderScreen();
    ConfirmOrderPage.checkOrderDetailsAndPaymentMethodValueExist();
    ConfirmOrderPage.clickConfirmOrder();
    ThanksScreenPage.checkOrderNumberExistInSuccessScreen();
  });
