Feature: Product Search Filters

  @focus
  Scenario: Sorting by Name-Descending
    Given the user is on the "Catalog" screen
    When the user clicks the Sorting icon filter
    Then the user selects the option "Name - Descending"
    Then the products should be displayed in descending alphabetical order by name

  Scenario: Sorting by Name-Ascending
    Given the user is on the "Catalog" screen
    When the user clicks the Sorting icon filter
    When the user selects the option "Name - Ascending"
    Then the products should be displayed in ascending alphabetical order by name
    
  Scenario: Sorting by Price-Ascending
    Given the user is on the "Catalog" screen
    When the user clicks the Sorting icon filter
    When the user selects the option "Price - Ascending"
    Then the products should be displayed in ascending alphabetical order by price

  Scenario: Sorting by Price-Descending
    Given the user is on the "Catalog" screen
    When the user clicks the Sorting icon filter
    When the user selects the option "Price - Descending"
    Then the products should be displayed in descending alphabetical order by price