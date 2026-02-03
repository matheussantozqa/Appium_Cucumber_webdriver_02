import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect, $ } from '@wdio/globals';
import pomUserAuth from '../../fixtures/pomUserAuth.json' assert { type: 'json' };


/////////-----Backgroung-------/////////

Given(/^the user is on the app home screen$/, async () => {
    await expect($(pomUserAuth.menuIcon)).toBeDisplayed();
});

When(/^the user clicks the Hamburger Menu icon$/, async () => {
    await $(pomUserAuth.menuIcon).click();    
});

When(/^the user clicks the "Log In" option$/, async () => {
    await $(pomUserAuth.loginButtonMenu).click();    
});

Then(/^the user should be redirected to the Login screen$/, async () => {
    await expect($(pomUserAuth.loginPageTitle)).toBeDisplayed();    
});

/////////---------------INVALID USER-----------------

When(/^the user enters "nonexistent@example.com" into the "Username" field$/, async () => {
    await $(pomUserAuth.usernameField).addValue(pomUserAuth.wrongUser);
});

Then(/^the user enters "invalidpassword" into the "Password" field$/, async () => {
    await $(pomUserAuth.passwordField).addValue(pomUserAuth.wrongPassword);
});

When(/^the user clicks the "Login" button$/, async () => {
    await $(pomUserAuth.loginButton).click();   
});

Then(/^the system should display an error message indicating invalid credentials$/, async () => {
    await expect($(pomUserAuth.invalidCredentialsMessage)).toBeDisplayed();  
    await $(pomUserAuth.usernameField).clearValue();
    await $(pomUserAuth.passwordField).clearValue(); 
});

/////////---------------------TRY TO LOGIN EMPTY FIELDS-------------------------------

When(/^the user clicks the "Login" button without fill the fields$/, async () => {
    await $(pomUserAuth.loginButton).click();
    
});

Then(/^the system should display error message "username or password is required"$/, async () => {
    await expect($(pomUserAuth.noCredentialsMessage)).toBeDisplayed(); 
});

/////////--------------LOGIN VALID--------------------------------------


When(/^the user enters "bob@example.com" into the "Username" field$/, async () => {
    await $(pomUserAuth.usernameField).addValue(pomUserAuth.validUser);   
}); 

Then(/^the user enters "10203040" into the "Password" field$/, async () => {
    await $(pomUserAuth.passwordField).addValue(pomUserAuth.validPassword);    
});

When(/^the user click in the "Login" button$/, async () => {
    await $(pomUserAuth.loginButton).click(); 
});

Then(/^the user should be redirected to the "Product Catalog" screen$/, async () => {
    await expect($(pomUserAuth.menuIcon)).toBeDisplayed(); 
});

/////////----------------------LOGOUT APP------------------------------

When(/^the user clicks the Menu Hamburger icon$/, async () => {
    await $(pomUserAuth.menuIcon).click();   
});

Then(/^the user clicks the "Log Out" button$/, async () => {
    await $(pomUserAuth.logoutButton).click();     
});

Then(/^a pop up screen is shown asking "are you sure"$/, async () => {
    await expect($(pomUserAuth.popUpAreYouSure)).toBeDisplayed(); 
});

When(/^the user clicks the "log out" button$/, async () => {
    await $(pomUserAuth.popUpConfirmLogout).click();  
});

Then(/^a "successfully logout" message appears$/, async () => {
    await expect($(pomUserAuth.popUpAreYouSure)).toBeDisplayed(); 
    await $(pomUserAuth.popUpConfirmLogout).click();
});

Then(/^the user is redirected to the login screen$/, async () => {
    await expect($(pomUserAuth.loginPageTitle)).toBeDisplayed(); 
});

