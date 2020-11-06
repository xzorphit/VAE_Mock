import basePage from "./base.Page";

class address extends basePage{

    get addressDeliverySelector(){
        return $('//*[@id="uniform-id_address_delivery"]')
    }
      
    get proceedToCheckoutBtn(){
        return $('//*[@id="center_column"]/form/p/button')    
    }

    get deliveryAddressStreetAddress(){
        return $('//*[@id="address_delivery"]/li[3]')
    }

    get billingAddressMobilePhoneNumber(){
        return $('//*[@id="address_invoice"]/li[6]')
    }



    goToAddressPage(){

        console.log('step: going to the Address Page')

        browser.url('/?controller=order&step=1')

        this.proceedToCheckoutBtn.waitForDisplayed()

        console.log('Result: on the Address page')

    };    


}

export default new address()