import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect, $ } from '@wdio/globals'
import pomshoppingCart from '../../fixtures/pomshoppingCart.json' assert { type: 'json' };

Given('the user is on the main product listing page', async () => {
  await $(pomshoppingCart.menuIcon).waitForDisplayed();
});
When(`the user clicks on a product`, async () => {
    await $(pomshoppingCart.secondProduct).click();
});
Then(`the product details screen is displayed`, async () => {
    await expect($(pomshoppingCart.addToCartButton)).toBeDisplayed();
});
When(/^the user clicks the "Add To Cart" button$/, async () => {
  await $(pomshoppingCart.addToCartButton).click();
});
Then(`the shopping cart icon displays an item count`, async () => {
    await expect($(pomshoppingCart.itemCount)).toBeDisplayed();
});
When(`the user opens the shopping cart`, async () => {
    await $(pomshoppingCart.cartBadge).click();
});
Then(/^the "Shopping Cart" screen is displayed$/, async () => {
    await expect($(pomshoppingCart.myCartTitle)).toBeDisplayed();
});
When(/^the user clicks the "Remove Item" button$/, async () => {
    await $(pomshoppingCart.removeItemButton).click();
});
Then(/^the "Go Shopping" screen is displayed$/, async () => {
    await expect($(pomshoppingCart.goShoppingButton)).toBeDisplayed();
});
When(`the user navigates back to the main screen`, async () => {
    await $(pomshoppingCart.goShoppingButton).click();
});
Then(`the user is on the home page`, async () => {
    await expect($(pomshoppingCart.menuIcon)).toBeDisplayed();
});





