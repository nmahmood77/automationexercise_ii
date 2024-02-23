@TC05
Feature: Search
  Scenario: Search Product

    Given User navigate to the AutomationExercise page
    When The user clicks Products menu button
    Then Verify user is navigated to ALL PRODUCTS page successfully
    When The user enters product name in search input and click search button
    Then Verify SEARCHED PRODUCTS is visible
