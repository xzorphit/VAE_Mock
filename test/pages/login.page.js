import basePage from "./base.page";

class login extends basePage{

    get emailFormField(){
        return $('//*[@id="email_create"]') }
        
    get createAnAccountBtn(){
        return $('//*[@id="SubmitCreate"]') }

    get alreadyRegisteredEmailFormField(){
        return $('//*[@id="email"]')
    }    

    get passwordFormField(){
        return $('//*[@id="passwd"]')
        }

    get signInBtn(){
        return $('//*[@id="SubmitLogin"]') }    

    goToSignin() {

        console.log('step: going to Sign in page')

        browser.url('/?controller=authentication&back=my-account')

        this.createAnAccountBtn.waitForDisplayed()

        console.log('Result: on the Signin page')
    };


}

export default new login()