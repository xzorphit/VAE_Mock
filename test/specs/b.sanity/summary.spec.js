import basePage from "../../pages/base.page";
import summaryPage from "../../pages/summary.page";

const homePage = new basePage()

describe('As a Shopper with an established account, I can view the summary of a newly added item', () => {
    
    before(() => {
        homePage.goToHomePage();        

    });


    it('Given, I am on the Home page', () => {        
        homePage.editorialH1.waitForDisplayed()
    });

    it('When, I add the Faded Short Sleeve T-shirt to my cart', () => {

        homePage.fSSTSAddToCartBtn.waitForDisplayed();
        
        homePage.fSSTSAddToCartBtn.click();
        
    });

    it('And, I click Proceed to checkout in the Summary Window', () => {

        homePage.summaryWindowAddToCartLink.waitForDisplayed();

        homePage.summaryWindowAddToCartLink.click();
    });

    it('Then, I click Proceed to checkout on the Summary Page', () => {

        summaryPage.proceedToCheckoutBtn.waitForDisplayed();

        summaryPage.proceedToCheckoutBtn.click();
        
    });

    it('Then, I Validate that I am on Step 02. Sign In Page', () => {

        summaryPage.signInStepCurrent.isExisting();
        
        browser.pause(2000)
    });
    
    
});