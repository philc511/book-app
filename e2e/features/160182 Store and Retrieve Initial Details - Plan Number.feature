@Claims
@160182
Feature: Store and Retrieve Initial Details: Plan Number
    As a claims assessor
	I want to collect the plan number
	So that I can record and retrieve it

@160182_Policy_Number_001
Scenario: Valid Policy Number
    Given I start the Application
	And I click New claim on the Landing page
    And I add a valid Policy Number on the ID and Verification page
	And I add a Claimant FirstName "ValidFirstName" on the ID and Verification page
	And I add a Claimant Surname "ValidSurname" on the ID and Verification page
	And I add a Claimant Relationship "Spouse" 
	When I click Proceed on the ID and Verification page
	Then I land on Death Certificate Details page


@160182_Policy_Number_002
Scenario: Invalid Policy Number Blank
    Given I start the Application
	And I click New claim on the Landing page
    And I add Policy Number "" on the ID and Verification page
	When I click Proceed on the ID and Verification page 
	Then I should get an error message "Please enter a valid policy number" for "policyNumber"

@160182_Policy_Number_003
Scenario: Invalid Policy Number 21 Characters
    Given I start the Application
	And I click New claim on the Landing page
	And I add Policy Number "123456789123456789123" on the ID and Verification page
	When I click Proceed on the ID and Verification page 
	Then I should get an error message "Maximum 20 characters only (21 characters entered)" for "policyNumberMaxLength"
