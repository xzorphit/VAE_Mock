

export default class basePage {

    get signInAnchor(){
        return $('//*[@id="header"]/div[2]/div/div/nav/div[1]/a')
    }
    get bestSellers(){
        return $('//*[@id="home-page-tabs"]/li[2]/a')
    }
    get ContentAnchor(){
        return $('//*[@id="htmlcontent_home"]/ul/li[2]/a')
    }
   
    get editorialH1(){
        return $('//*[@id="editorial_block_center"]/h1')
    }

    get signInBtn(){
        return $('//*[@id="header"]/div[2]/div/div/nav/div[1]/a')
    }

    get fSSTSAddToCartBtn(){
        return $('//*[@id="homefeatured"]/li[1]/div/div[2]/div[2]/a[1]')
    }

    get fSSTSProductName(){
        return $('//*[@id="homefeatured"]/li[1]/div/div[2]/h5/a')
    }

    get fSSTSProductNameSummaryWindow(){
        return $('//*[@id="layer_cart_product_title"]')
    }

    get summaryWindowAddToCartLink(){
        return $('//*[@id="layer_cart"]/div[1]/div[2]/div[4]/a')
    }

    goToHomePage() {
        console.log('step: going to Home Page')
        browser.url('/')
        this.signInAnchor.waitForDisplayed()
        console.log('step: On the Home Page')
    }

    //* Utilities */

    assert (assertion, timeout) {
        browser.waitUntil(()=>{
            return assertion;
        }, timeout)
        } 

    
    
    
    


    
}