const HomePage = require('../Pages/HomePage');
const SignInPage = require('../Pages/SignInPage');

it('Ensure User can Login To Demo Website ', () => {
    HomePage.navigateToLoginPage()
    SignInPage.introduceUserNameAndPassword('user1');
    SignInPage.ensureUserNavigatedToHomeScreenAfterLogin();
  });
