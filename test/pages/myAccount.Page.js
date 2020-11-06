import basePage from "./base.page";

class myAccount extends basePage{

    get myAccountHeader(){
        return $('//*[@id="center_column"]/h1') }
    
    get createAnAccountBtn(){
        return $('//*[@id="center_column"]/div/div[1]/ul/li[4]/a') }


    goToMyAccountPage() {

        console.log('step: going to My Account page')

        browser.url('/?controller=my-account')

        this.myAccountHeader.waitForExist(),
        this.myPersonalInfLink.waitForDisplayed()

        console.log('Result: on the My Account page')
    };


}

export default new myAccount()