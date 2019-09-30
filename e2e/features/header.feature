@header
Feature: Template Application Header
    As a user of Protractor
    I should be able to use Cucumber
    In order to run my E2E tests

Scenario: Validate the header text
    Given I start the Application
    Then the header text will be displayed