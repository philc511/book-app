@Claims
@160298
Feature: Create Claims Summary Page
    As a claims assessor
	I want a claims summary to be created with the info we collect: Policy Number, Claimant Name and Relationship to deceased.
	So that it saves me time and I can access it again 

@160298_Summary_Screen_001
Scenario Outline: Summary Screen Displays Maximum Field Length For Policy Number, Claimant Name and Relationship
    Given I start the Application
	And I click New claim on the Landing page
 	And I add Policy Number "<Policy Number>" on the ID and Verification page
	And I add a Claimant FirstName "<First name>" on the ID and Verification page
	And I add a Claimant Surname "<Surname>" on the ID and Verification page
	And I add a Claimant Relationship "<Relationship>"
	And I click Proceed on the ID and Verification page
	And I land on Death Certificate Details page
	And I select a Death Certificate type "Full" on the Death Details page
	And I select Current date on Death Details page
	And I enter Country of death as "Scotland" on the Death Details page
    And I enter Place of death as "test data" on the Death Details page
    And I enter ia as "apple" on the Death Details page
	And I add a Death Certificate Reference "Test Pass" on the Death Details page
	And I click Proceed on the Death Details page
	When I click to see the Claim Summary
	Then I should see Claims Summary page with correct claim data displayed

Examples:
|Test Case|	Policy Number		| First name			  | Surname												|Relationship   |
|1	      |	11111111112222222222| Test					  | Test												|Spouse		    |
|2        |	12345678			| aaaaaaaaaabbbbbbbbbbcccc| Test												|Partner        |
|3	      |	23456789			| Test					  | aaaaaaaaaabbbbbbbbbbccccccccccddddddddddeeeeeeeeee  |Child          |


@160298_Summary_Screen_002
Scenario Outline: Summary Screen Displays Minimum Field Length For Policy Number, Claimant Name and Relationship
    Given I start the Application
	And I click New claim on the Landing page
 	And I add Policy Number "<Policy Number>" on the ID and Verification page
	And I add a Claimant FirstName "<First name>" on the ID and Verification page
	And I add a Claimant Surname "<Surname>" on the ID and Verification page
	And I add a Claimant Relationship "<Relationship>"
	And I click Proceed on the ID and Verification page
	And I land on Death Certificate Details page
	And I select a Death Certificate type "Full" on the Death Details page
	And I select Current date on Death Details page
	And I enter Country of death as "Scotland" on the Death Details page
    And I enter Place of death as "test data" on the Death Details page
    And I enter ia as "apple" on the Death Details page
	And I add a Death Certificate Reference "Test Pass" on the Death Details page
	And I click Proceed on the Death Details page
	When I click to see the Claim Summary
	Then I should see Claims Summary page with correct claim data displayed

Examples:
|Test Case|	Policy Number		| First name			  | Surname		|Relationship   |
|1	      |	1                   | Test					  | Test		|Grandchild	    |
|2        |	12345677			| aa					  | Test		|Parent         |
|3	      |	23456788			| Test					  | b		    |Sibling        |



@160298_Summary_Screen_003
Scenario: Summary Screen Displays Inputted Text When "Other" Is Selected For Relationship
Given I start the Application
	And I click New claim on the Landing page
 	And I add Policy Number "98765432" on the ID and Verification page
	And I add a Claimant FirstName "Murray" on the ID and Verification page
	And I add a Claimant Surname "Lyons" on the ID and Verification page
	And I add a Claimant Relationship "Other"
	And I add a Claimant Other Relationship "hello"
	And I click Proceed on the ID and Verification page
	And I land on Death Certificate Details page
	And I select a Death Certificate type "Full" on the Death Details page
	And I select Current date on Death Details page
	And I enter Country of death as "Scotland" on the Death Details page
    And I enter Place of death as "test data" on the Death Details page
    And I enter ia as "apple" on the Death Details page
	And I add a Death Certificate Reference "Test Pass" on the Death Details page
	And I click Proceed on the Death Details page
	When I click to see the Claim Summary
	Then I should see Claims Summary page with correct claim data displayed

@160298_Summary_Screen_004
Scenario: User Returned To Landing Page When Exit Is Selected
Given I start the Application
	And I click to see a Claim Summary
	When I click Exit
	Then I am on the Dashboard
