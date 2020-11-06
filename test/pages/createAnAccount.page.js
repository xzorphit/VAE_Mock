import basePage from "./base.page"

class createAnAccount extends basePage{
    
    get firstNameFormField(){
        return $('//*[@id="customer_firstname"]') }

    get lastNameFormField(){
        return $('//*[@id="customer_lastname"]') }

    get emailFormField(){
        return $('//*[@id="email"]') }

    get passwordFormField(){
        return $('//*[@id="passwd"]') }

    get yourAddressFirstaNameFormField(){
        return $('//*[@id="firstname"]') }

    get yourAddressLastNameFormField(){
        return $('//*[@id="lastname"]') }

    get streetAddressFormField(){
        return $('//*[@id="address1"]') }
        

    get cityFormField(){
        return $('//*[@id="city"]') }

    get stateDropDownField(){
        return $('//*[@id="id_state"]')    }

    get stateDropDownMD(){
        return $('//*[@id="id_state"]/option[22]') }

    get zipCodeFormField(){
        return $('//*[@id="postcode"]') }

    get countryDropDownField(){
        return $('//*[@id="id_country"]') }    
        
    get countryDropDownUS(){
        return $('//*[@id="id_country"]/option[2]') }

    get mobilePhoneFormField(){
        return $('//*[@id="phone_mobile"]') }

    get addressAliasFormField(){
        return $('//*[@id="alias"]') } 
        
    get registerBtn(){
        return $('//*[@id="submitAccount"]') }

    get requiredPhoneNumber(){
        return $('//*[@id="account-creation_form"]/div[2]/p[11]')}    
        

}

export default new createAnAccount()