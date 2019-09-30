@Claims
@161676
Feature: As a claims assessor
I want to replicate the date of death as stated on the DC
so that we have an accurate record

@161676_Death_of_Death_001
Scenario: Verify summary screen displays selected date of death when the valid date is selected through date picker icon
Given I start the Application
	And I click New claim on the Landing page
	And I fill all the details in ID and Verification page
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

@161676_Death_of_Death_002
Scenario: Verify that the error message is displayed when the future date is selected through date picker icon
Given I start the Application
	And I click New claim on the Landing page
	And I fill all the details in ID and Verification page
	And I land on Death Certificate Details page
	And I select a Death Certificate type "Full" on the Death Details page
	And I select Future date on Death Details page
	And I enter Country of death as "Scotland" on the Death Details page
    And I enter Place of death as "test data" on the Death Details page
    And I enter ia as "apple" on the Death Details page
	And I add a Death Certificate Reference "Test Pass" on the Death Details page
	When I click Proceed on the Death Details page
	Then I should get an error message "Date of death can only be either today or a past day" for "dateOfDeath"

@161676_Death_of_Death_003
Scenario Outline:  Verify that the error message is displayed when the invalid date is inputted through date picker input field
Given I start the Application
	And I click New claim on the Landing page
	And I fill all the details in ID and Verification page
	And I land on Death Certificate Details page
	And I select a Death Certificate type "Full" on the Death Details page
	And I enter a date "<InvalidDate>" on the Death Details page
	And I enter Country of death as "Scotland" on the Death Details page
    And I enter Place of death as "test data" on the Death Details page
    And I enter ia as "apple" on the Death Details page
	And I add a Death Certificate Reference "Test Pass" on the Death Details page
	When I click Proceed on the Death Details page
	Then I should get an error message "Please select the date of death" for "dateOfDeath"

Examples:
|Test Case | InvalidDate                | 
|01		   |01feb2018                   |
|02		   |30/02/2018                  |
|03		   |27/13/2018                  |

@161676_Death_of_Death_004
Scenario:  Verify that the error message is displayed when the date is blank
Given I start the Application
	And I click New claim on the Landing page
	And I fill all the details in ID and Verification page
	And I land on Death Certificate Details page
	And I select a Death Certificate type "Full" on the Death Details page
	And I enter Country of death as "Scotland" on the Death Details page
    And I enter Place of death as "test data" on the Death Details page
    And I enter ia as "apple" on the Death Details page
	And I add a Death Certificate Reference "Test Pass" on the Death Details page
	When I click Proceed on the Death Details page
	Then I should get an error message "Please select the date of death" for "dateOfDeath"
