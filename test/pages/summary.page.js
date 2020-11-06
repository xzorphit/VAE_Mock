import basePage from "./base.Page";

class summary extends basePage{

        get productImgDescription(){
        return $('//img[@alt="Faded Short Sleeve T-shirts"]')
    }
        
    get summaryStep(){
        return $('//*[@id="order_step"]/li[1]/span')
    }    
    
    get signInStep(){
        return $('//*[@id="order_step"]/li[2]')
    }

    get signInStepCurrent(){
        return $('//*[@class="step_current second"]')
    }

    get proceedToCheckoutBtn(){
        return $('//*[@id="center_column"]/p[2]/a[1]')
    }

    goToSummary(){

        console.log('step: going to the Summary Page')

        browser.url('/?controller=order')

        this.proceedToCheckoutBtn.waitForDisplayed()

        console.log('Result: on the Summary page')

    };    


}

export default new summary()