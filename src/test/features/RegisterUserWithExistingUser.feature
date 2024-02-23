@TC04
Feature: Register user with existing user

  Scenario: Register with existing mail

    Given User navigate to the AutomationExercise page
    Then Verify that home page is visible successfully
    And Click on Signup Login button
    Then Verify New User Signup! is visible
    And Enter name and already registered email address
    Then Click newuser Signup button
    And Verify error Email Address already exist! is visible