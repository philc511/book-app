@Claims
@160880
Feature: As a claims assessor
I want to replicate the place of death as stated on the DC
so that we have an accurate record


@160880_Country_And_Place_of_Death_Positive_Validation
Scenario: Verify summary screen displays inputted country and place of death when a valid country is selected from the drop down and place of death is populated
	Given I start the Application
	And I click New claim on the Landing page
	And I fill all the details in ID and Verification page
	And I land on Death Certificate Details page
	And I select a Death Certificate type "Full" on the Death Details page
	And I enter a date "10/09/2018" on the Death Details page
	And I add a Death Certificate Reference "Test Pass" on the Death Details page
	And I enter Country of death as "Scotland" on the Death Details page
	And I enter Place of death as "test data" on the Death Details page
	And I enter ia as "a" on the Death Details page
	And I click Proceed on the Death Details page
	When I click to see the Claim Summary
	Then I should see Claims Summary page with correct claim data displayed

@160880_Place_of_Death_Negative_Validation
Scenario: Verify that the error message is displayed when Place Of Death is left blank
	Given I start the Application
	And I click New claim on the Landing page
	And I fill all the details in ID and Verification page
	And I land on Death Certificate Details page
	And I select a Death Certificate type "Full" on the Death Details page
	And I enter a date "10/09/2018" on the Death Details page
	And I add a Death Certificate Reference "Test Pass" on the Death Details page
	And I enter Country of death as "Scotland" on the Death Details page
	And I enter Place of death as "" on the Death Details page
	And I enter ia as "a" on the Death Details page
	When I click Proceed on the Death Details page
	Then I should get an error message "Please enter the place of death" for "placeOfDeath"

@160880_Country_of_Death_Negative_Validation_One
Scenario: Verify that the error message is displayed when an invlaid country is selected from the drop down
	Given I start the Application
	And I click New claim on the Landing page
	And I fill all the details in ID and Verification page
	And I land on Death Certificate Details page
	And I select a Death Certificate type "Full" on the Death Details page
	And I enter a date "10/09/2018" on the Death Details page
	And I add a Death Certificate Reference "Test Pass" on the Death Details page
	And I enter Country of death as "error" on the Death Details page
	And I enter Place of death as "test data" on the Death Details page
	And I enter ia as "a" on the Death Details page
	When I click Proceed on the Death Details page
	Then I should get an error message "Please select a valid country of death" for "countryOfDeathId"

@160880_Country_of_Death_Negative_Validation_Two
Scenario: Verify that the error message is displayed when no country is selected from the drop down
	Given I start the Application
	And I click New claim on the Landing page
	And I fill all the details in ID and Verification page
	And I land on Death Certificate Details page
	And I select a Death Certificate type "Full" on the Death Details page
	And I enter a date "10/09/2018" on the Death Details page
	And I add a Death Certificate Reference "Test Pass" on the Death Details page
	And I enter Country of death as "" on the Death Details page
	And I enter Place of death as "test data" on the Death Details page
	And I enter ia as "a" on the Death Details page
	When I click Proceed on the Death Details page
	Then I should get an error message "Please select a valid country of death" for "countryOfDeathId"
