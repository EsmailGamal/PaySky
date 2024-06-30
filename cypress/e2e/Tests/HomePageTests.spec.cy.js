import HomePage from "../Pages/HomePage"

it('Ensure User can navigate to Demo Website and Welcome Message Displayed ', () => {
    HomePage.checkDashboardURL();
    HomePage.ensureWelcomeMessageDisplayed;
  });

  it('Ensure Featured Product Title Exist ', () => {
    HomePage.ensureFeaturedProductsMessageDisplayed();
  });

  it('Ensure News Section Exist ', () => {
    HomePage.ensureNewsSectionDisplayed();
  });
