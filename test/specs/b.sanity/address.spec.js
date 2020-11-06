import addressPage from "../../pages/address.page";
import inputs from "../../data/inputs.json"
import basePage from "../../pages/base.page";
import loginPage from "../../pages/login.page";
import summaryPage from "../../pages/summary.page";


const homePage = new basePage()

describe('As a Shopper with an established account, I can review my Shipping and Billing Address', () => {
    
    before('Setting Up',() => {
        homePage.goToHomePage();
        homePage.fSSTSAddToCartBtn.click();
        homePage.summaryWindowAddToCartLink.waitForDisplayed();
        homePage.summaryWindowAddToCartLink.click();
        summaryPage.proceedToCheckoutBtn.click();
        addressPage.signInBtn.click();
        loginPage.alreadyRegisteredEmailFormField.setValue(inputs[0].emailAddress);
        loginPage.passwordFormField.setValue(inputs[0].pw);
        loginPage.signInBtn.click();
        homePage.goToHomePage();
        
    });

    it('Given, I am on the Address Page', () => {  
        addressPage.goToAddressPage();      
        addressPage.addressDeliverySelector.waitForDisplayed();
    });

    it('And, I Validate that the Delivery Steet Address matches the address used during Signup', () => {

        addressPage.deliveryAddressStreetAddress.getText() == inputs[2].streetAddress;
                
    });

    it('And, I Validate that the Billing Address Phone Number matches the Phone Number used during Signup', () => {

        addressPage.billingAddressMobilePhoneNumber.getText() == inputs[3].mobilePhoneNumber;
                
    });

    it('Then, I click Proceed to checkout on the Address Page', () => {

        addressPage.proceedToCheckoutBtn.waitForDisplayed();

        addressPage.proceedToCheckoutBtn.click();
    });

    
    
});