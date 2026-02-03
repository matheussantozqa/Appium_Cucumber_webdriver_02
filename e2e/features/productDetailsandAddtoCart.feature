Feature: Product Details and Add to Cart   


  @focus
  Scenario: Attempting to Add Zero or Negative Quantity
    Given the user is on the "Product Catalog" screen
    When the user clicks on the second product of the list
    Then the user is on the "Product Details" screen
    When the user attempts to decrease the quantity below 1
    Then the button should be disabled to click


  Scenario: Item Persistence in the Cart
    Given the user is on the "Product Catalog" screen
    When the user clicks on the second product of the list
    Then the user is on the "Product Details" screen
    When the user has added 1 item to the cart
    Then the user clicks on the burger menu and clicks the "about" button
    When the user redirected to the "About" screen
    Then the user clicks on the burger menu and clicks the "Catalog" button
    When the user returns to the "Product Catalog" screen
    Then the Shopping Cart counter should still display 1


  Scenario: Adding Multiple Items to the Cart
    Given the user is on the "Product Catalog" screen
    When the user clicks on the second product of the list
    Then the user is on the "Product Details" screen
    When the user increases the quantity to 3
    When the user click the "Add To Cart" button
    Then the Shopping Cart counter in the header should be updated to 3


