Feature: login to Application

    As a valid user
    I want to login to the application
    As a invalid user
    I should be shown appropriate error message

    @focus
    Scenario: valid login
      Given I navigate to login page
      And I should see "/login" in the url
      And I view "eToro" in the title
      When I sign in with valid "mammachetorro@gmail.com" and "Goalburn"
      Then I should see homepage

    Scenario: Invalid login
      Given I navigate to login page
      When I sign in with valid "xxx@dummy" and "xxxxx"
      Then I should be shown an error message


