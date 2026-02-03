import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect, $ } from '@wdio/globals'
import pomshoppingCart from '../../fixtures/pomshoppingCart.json' assert { type: 'json' };

/////////-----Backgroung-------/////////

Given(/^the user is on the "Product Catalog" screen$/, async () => {
    await expect($(pomshoppingCart.menuIcon)).toBeDisplayed();
});

When(`the user clicks on the second product of the list`, async () => {
    await $(pomshoppingCart.secondProduct).click();    
});

Then(/^the user is on the "Product Details" screen$/, async () => {
    await expect($(pomshoppingCart.addToCartButton)).toBeDisplayed();    
});

/////////----------------------------------------------------

When(/^the user has added 1 item to the cart$/, async () => {
    await $(pomshoppingCart.counterPlus).click();
    await $(pomshoppingCart.addToCartButton).click();    
});

Then(/^the user clicks on the burger menu and clicks the "about" button$/, async () => {
    await $(pomshoppingCart.menuIcon).click(); 
    await $(pomshoppingCart.aboutButton).click();    

});

When(/^the user redirected to the "About" screen$/, async () => {
    await expect($(pomshoppingCart.aboutScreenTitle)).toBeDisplayed()    
});

Then(/^the user clicks on the burger menu and clicks the "Catalog" button$/, async () => {
    await $(pomshoppingCart.menuIcon).click(); 
    await $(pomshoppingCart.catalogButton).click();
});

When(/^the user returns to the "Product Catalog" screen$/, async () => {
    await expect($(pomshoppingCart.catalogScreen)).toBeDisplayed()     
});

Then(/^the Shopping Cart counter should still display 1$/, async () => {
    await expect($(pomshoppingCart.cartCounter)).toBeDisplayed();
    
    
}); 

/////////----------------------------------------------------

When(/^the user attempts to decrease the quantity below 1$/, async () => {
    await $(pomshoppingCart.counterMinus).click();
    await expect($(pomshoppingCart.counterProducts)).toBeDisplayed();
    
});

Then(`the button should be disabled to click`, async () => {
    const addToCart = await $(pomshoppingCart.addToCartButton);
    await expect($(addToCart)).not.toBeEnabled();
});

/////////----------------------------------------------------


When(/^the user increases the quantity to 3$/, async () => {
    await $(pomshoppingCart.counterMinus).click();
    const btn = await $(pomshoppingCart.counterPlus);
    await btn.click();
    await btn.click();   
    
});

When(/^the user click the "Add To Cart" button$/, async () => {
    await $(pomshoppingCart.addToCartButton).click();   
});

Then(/^the Shopping Cart counter in the header should be updated to 3$/, async () => {
    await expect($(pomshoppingCart.headerCartCounter)).toBeDisplayed(); 
});