import inputs from "../../data/inputs.json"
import loginPage from "../../pages/login.page";
import createAnAccountPage from "../../pages/createAnAccount.page";
import myAccountPage from "../../pages/myAccount.Page";

describe('As a New Shopper, I Create an Account', () => {
   
    it('Given, I am on the Login page', () => {
        loginPage.goToSignin()
    });

    it('When, I enter my email address', () => {

        loginPage.createAnAccountBtn.waitForDisplayed();
        
        loginPage.emailFormField.setValue(inputs[0].emailAddress);
        
    });

    it('And, I click the Create an account button', () => {

        loginPage.createAnAccountBtn.waitForDisplayed();

        loginPage.createAnAccountBtn.click();
    });

    
    it('Then, I validate that i am on the Create An Account Page', () => {
        createAnAccountPage.registerBtn.waitForDisplayed();

        createAnAccountPage.assert(createAnAccountPage.requiredPhoneNumber.getText().includes('You must register at least one phone number.'));

    });

    it('And, I enter my First Name', () => {

        createAnAccountPage.firstNameFormField .waitForDisplayed();

        createAnAccountPage.firstNameFormField.setValue(inputs[1].firstName);
    });

    
    it('And, I enter my Last Name', () => {
        createAnAccountPage.lastNameFormField.waitForDisplayed();

        createAnAccountPage.lastNameFormField.setValue(inputs[1].lastName);

    });

    it('And, I enter my Email Address', () => {

        createAnAccountPage.emailFormField.waitForDisplayed();

        createAnAccountPage.emailFormField.setValue(inputs[0].emailAddress);
    });

    
    it('And, I enter my Password', () => {
        createAnAccountPage.passwordFormField.waitForDisplayed();

        createAnAccountPage.passwordFormField.setValue(inputs[0].pw);

    });

    it('And, I enter my First Name in the Your Address section', () => {

        createAnAccountPage.yourAddressFirstaNameFormField.waitForDisplayed();

        createAnAccountPage.yourAddressFirstaNameFormField.setValue(inputs[1].firstName);
    });

    
    it('And, I enter my Last Name in the Your Address section', () => {

        createAnAccountPage.yourAddressLastNameFormField.waitForDisplayed();

        createAnAccountPage.yourAddressLastNameFormField.setValue(inputs[1].lastName);
    });

    it('And, I enter my Street Address', () => {

        createAnAccountPage.streetAddressFormField.waitForDisplayed();

        createAnAccountPage.streetAddressFormField.setValue(inputs[2].streetAddress);
    });

    
    it('And, I enter my City', () => {

        createAnAccountPage.cityFormField.waitForDisplayed();

        createAnAccountPage.cityFormField.setValue(inputs[2].city);
    });

    it('And, I select my State from the DropDown since it is not prepopulated', () => {
        createAnAccountPage.stateDropDownField.selectByVisibleText('Maryland')
    });
    
    it('And, I enter my Zip Code', () => {

        createAnAccountPage.zipCodeFormField.waitForDisplayed();

        createAnAccountPage.zipCodeFormField.setValue(inputs[2].zipCode);
    });

    
    it('Then, I verify that United Stated is selected since it is prepopulated', () => {
        
        createAnAccountPage.assert(createAnAccountPage.countryDropDownField.$$('option')[1].isSelected()); 

        createAnAccountPage.countryDropDownField.$$('option').forEach((opt)=>{
            if (opt.getText()!== 'United States') {
                createAnAccountPage.assert(!opt.isSelected())                
            }
        })
    });

    it('And, I enter my Mobile Phone Number', () => {

        createAnAccountPage.mobilePhoneFormField.waitForDisplayed();

        createAnAccountPage.mobilePhoneFormField.setValue(inputs[3].mobilePhoneNumber);
    });

    it('And, I enter my Address Alias', () => {

        createAnAccountPage.addressAliasFormField.waitForDisplayed();

        createAnAccountPage.addressAliasFormField.setValue(inputs[3].addressAlias);
    });

    it('And, I click the Register button', () => {
        createAnAccountPage.registerBtn.waitForDisplayed();

        createAnAccountPage.registerBtn.click();
    });    

    it('Then, I Validate that I have Completed Registration by moving on to the next webpage', () => {
        myAccountPage.myAccountHeader.waitForExist();

        browser.getAllCookies()

    });

    
});



