@Claims
@160303
Feature: Store and Retrieve Initial Details: Relationship
    As a claims assessor
	I want to collect the relationship to the person calling
	So that I can record and retrieve it

@160303_Relationship_002
Scenario Outline: Relationship to Deceased Options Accepted and User Moved To Landing Page
    Given I start the Application
	And I click New claim on the Landing page
	And I add a valid Policy Number on the ID and Verification page
	And I add a Claimant FirstName "ValidFirstName" on the ID and Verification page
	And I add a Claimant Surname "ValidSurname" on the ID and Verification page
	And I add a Claimant Relationship "<Relationship>"
	When I click Proceed on the ID and Verification page
	Then I land on Death Certificate Details page


Examples:
|Test Case|Relationship     |
|1	      |Spouse           |
|2        |Partner          |
|3	      |Child            |
|4        |Grandchild       |
|5	      |Parent           |
|6	      |Sibling		    |
|7        |Adviser          |

@160303_Relationship_003
Scenario: Relationship to Deceased Option "Other" Returns Freetext Box That Can Be Populated
    Given I start the Application
	And I click New claim on the Landing page
	And I add a valid Policy Number on the ID and Verification page
	And I add a Claimant FirstName "ValidFirstName" on the ID and Verification page
	And I add a Claimant Surname "ValidSurname" on the ID and Verification page
	And I add a Claimant Relationship "Other"
	And I add a Claimant Other Relationship "hello"
	When I click Proceed on the ID and Verification page
	Then I land on Death Certificate Details page

@160303_Relationship_004
Scenario: Relationship to Deceased Option "Other" Returns Freetext Box That Cant Be Blank
    Given I start the Application
	And I click New claim on the Landing page
	And I add a valid Policy Number on the ID and Verification page
	And I add a Claimant FirstName "ValidFirstName" on the ID and Verification page
	And I add a Claimant Surname "ValidSurname" on the ID and Verification page
	And I add a Claimant Relationship "Other" 
	And I add a Claimant Other Relationship ""
	When I click Proceed on the ID and Verification page  
	Then I should get an error message "Please enter the claimant's relationship to the deceased" for "otherRelationship"

@160303_Relationship_005
Scenario: Relationship to Deceased Option Must Be Selected
    Given I start the Application
	And I click New claim on the Landing page
	And I add a valid Policy Number on the ID and Verification page
	And I add a Claimant FirstName "ValidFirstName" on the ID and Verification page
	And I add a Claimant Surname "ValidSurname" on the ID and Verification page
	When I click Proceed on the ID and Verification page  
	Then I should get an error message "Please select the claimant's relationship to the deceased" for "relationship"