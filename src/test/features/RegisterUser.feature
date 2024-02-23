@TC01
Feature: Register New User

  Scenario: Register New User

    Given User navigate to the AutomationExercise page
    And Click on Signup_Login button
    And Enter name and email address
    And Click Signup button
    Then Verify that ENTER ACCOUNT INFORMATION is visible
    And Fill details: Title, Name, Email, Password, Date of birth ,First name, Last name, Company, Address, Address2, Country, State, City, Zipcode, Mobile Number
     And Click Create Account button
    And Click Continue button
    And Click Delete Account button
    Then Verify that ACCOUNT DELETED! is visible and click Continue button

