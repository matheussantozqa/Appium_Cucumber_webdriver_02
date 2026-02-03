Feature: User Authentication

  @focus
  Scenario: Login Attempt with Invalid Credentials
    Given the user is on the app home screen
    When the user clicks the Hamburger Menu icon
    When the user clicks the "Log In" option
    Then the user should be redirected to the Login screen
    When the user enters "nonexistent@example.com" into the "Username" field
    Then the user enters "invalidpassword" into the "Password" field
    When the user clicks the "Login" button
    Then the system should display an error message indicating invalid credentials
  
  Scenario: Login Attempt with Empty Fields
    Given the user is on the app home screen
    When the user clicks the Hamburger Menu icon
    When the user clicks the "Log In" option
    Then the user should be redirected to the Login screen
    When the user clicks the "Login" button without fill the fields
    Then the system should display error message "username or password is required"
  
  Scenario: Successful Login with Valid Credentials
    Given the user is on the app home screen
    When the user clicks the Hamburger Menu icon
    When the user clicks the "Log In" option
    Then the user should be redirected to the Login screen
    When the user enters "bob@example.com" into the "Username" field
    Then the user enters "10203040" into the "Password" field
    When the user click in the "Login" button
    Then the user should be redirected to the "Product Catalog" screen

  Scenario: User logout successfully
    Given the user is on the app home screen
    When the user clicks the Hamburger Menu icon
    Then the user clicks the "Log Out" button
    Then a pop up screen is shown asking "are you sure"
    When the user clicks the "log out" button
    Then a "successfully logout" message appears
    Then the user is redirected to the login screen
    
