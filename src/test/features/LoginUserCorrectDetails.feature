@TC02

Feature: Login User with correct
  Scenario: Login User with correct email and password

  Given User navigate to the AutomationExercise page"
  And Click on Signup Login button
  And Enter correct email address and password
  Then Click login button
  Then Verify that Logged in as username is visible