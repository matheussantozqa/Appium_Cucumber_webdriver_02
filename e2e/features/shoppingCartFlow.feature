Feature: Shopping Cart Flow

  @focus
  Scenario: Successfully add and remove a product from the cart

    Given the user is on the main product listing page
    When the user clicks on a product
    Then the product details screen is displayed
    When the user clicks the "Add To Cart" button
    Then the shopping cart icon displays an item count
    When the user opens the shopping cart
    Then the "Shopping Cart" screen is displayed
    When the user clicks the "Remove Item" button
    Then the "Go Shopping" screen is displayed
    When the user navigates back to the main screen
    Then the user is on the home page
