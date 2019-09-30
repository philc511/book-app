@Claims
@160879
Feature: As a claims assessor
I want to replicate the cause of death as stated on the DC
So that we have an accurate record



@160879_Cause_of_Death_001
Scenario: Verify that Death Certificate details field 1a positive minimum validation is correct
	Given I start the Application
	And I click New claim on the Landing page
	And I fill all the details in ID and Verification page
	And I land on Death Certificate Details page
	And I select a Death Certificate type "Full" on the Death Details page
	And I select Current date on Death Details page
	And I add a Death Certificate Reference "Test Pass" on the Death Details page
	And I enter Country of death as "Scotland" on the Death Details page
	And I enter Place of death as "test data" on the Death Details page
	And I enter ia as "a" on the Death Details page
	And I enter ib as "" on the Death Details page
	And I enter ic as "" on the Death Details page
	And I enter ii as "" on the Death Details page
	And I enter further secondary details as "" on the Death Details page
	And I click Proceed on the Death Details page
	When I click to see the Claim Summary
	Then I should see Claims Summary page with correct claim data displayed



@160879_Cause_of_Death_003
Scenario: Verify that Death Certificate details all fields positive maximum validation is correct
	Given I start the Application
	And I click New claim on the Landing page
	And I fill all the details in ID and Verification page
	And I land on Death Certificate Details page
	And I select a Death Certificate type "Full" on the Death Details page
	And I select Current date on Death Details page
	And I add a Death Certificate Reference "Test Pass" on the Death Details page
	And I enter Country of death as "Scotland" on the Death Details page
	And I enter Place of death as "test data" on the Death Details page
	And I enter ia as "11111111112222222222333333333344444444445555555555666666666677777777778888888888999999999900000000001111111111222222222233333333334444444444555555555566666666667777777777888888888899999999990000000000" on the Death Details page
	And I enter ib as "11111111112222222222333333333344444444445555555555666666666677777777778888888888999999999900000000001111111111222222222233333333334444444444555555555566666666667777777777888888888899999999990000000000" on the Death Details page
	And I enter ic as "11111111112222222222333333333344444444445555555555666666666677777777778888888888999999999900000000001111111111222222222233333333334444444444555555555566666666667777777777888888888899999999990000000000" on the Death Details page
	And I enter ii as "11111111112222222222333333333344444444445555555555666666666677777777778888888888999999999900000000001111111111222222222233333333334444444444555555555566666666667777777777888888888899999999990000000000" on the Death Details page
	And I enter further secondary details as "11111111112222222222333333333344444444445555555555666666666677777777778888888888999999999900000000001111111111222222222233333333334444444444555555555566666666667777777777888888888899999999990000000000" on the Death Details page
	And I click Proceed on the Death Details page
	When I click to see the Claim Summary
	Then I should see Claims Summary page with correct claim data displayed


@160879_Cause_of_Death_004
Scenario: Verify that Death Certificate details all fields negative maximum validation is correct
	Given I start the Application
	And I click New claim on the Landing page
	And I fill all the details in ID and Verification page
	And I land on Death Certificate Details page
	And I select a Death Certificate type "Full" on the Death Details page
	And I select Current date on Death Details page
	And I add a Death Certificate Reference "Test Pass" on the Death Details page
	And I enter Country of death as "Scotland" on the Death Details page
	And I enter Place of death as "test data" on the Death Details page
	And I enter ia as "111111111122222222223333333333444444444455555555556666666666777777777788888888889999999999000000000011111111112222222222333333333344444444445555555555666666666677777777778888888888999999999900000000001" on the Death Details page
	And I enter ib as "111111111122222222223333333333444444444455555555556666666666777777777788888888889999999999000000000011111111112222222222333333333344444444445555555555666666666677777777778888888888999999999900000000001" on the Death Details page
	And I enter ic as "111111111122222222223333333333444444444455555555556666666666777777777788888888889999999999000000000011111111112222222222333333333344444444445555555555666666666677777777778888888888999999999900000000001" on the Death Details page
	And I enter ii as "111111111122222222223333333333444444444455555555556666666666777777777788888888889999999999000000000011111111112222222222333333333344444444445555555555666666666677777777778888888888999999999900000000001" on the Death Details page
	And I enter further secondary details as "111111111122222222223333333333444444444455555555556666666666777777777788888888889999999999000000000011111111112222222222333333333344444444445555555555666666666677777777778888888888999999999900000000001" on the Death Details page
	And I click Proceed on the Death Details page
	Then I should get an error message "Maximum 200 characters only (201 characters entered)" for "primaryCauseAMaxLength"
	And I should get an error message "Maximum 200 characters only (201 characters entered)" for "primaryCauseBMaxLength"
	And I should get an error message "Maximum 200 characters only (201 characters entered)" for "primaryCauseCMaxLength"
	And I should get an error message "Maximum 200 characters only (201 characters entered)" for "secondaryCauseMaxLength"
	And I should get an error message "Maximum 200 characters only (201 characters entered)" for "otherCauseDetailsMaxLength"


@160879_Cause_of_Death_005
Scenario: Verify that Death Certificate details field 1a negative blank validation (no input) is correct
	Given I start the Application
	And I click New claim on the Landing page
	And I fill all the details in ID and Verification page
	And I land on Death Certificate Details page
	And I select a Death Certificate type "Full" on the Death Details page
	And I select Current date on Death Details page
	And I add a Death Certificate Reference "Test Pass" on the Death Details page
	And I enter Country of death as "Scotland" on the Death Details page
	And I enter Place of death as "test data" on the Death Details page
	And I enter ia as "" on the Death Details page
	And I enter ib as "" on the Death Details page
	And I enter ic as "" on the Death Details page
	And I enter ii as "" on the Death Details page
	And I enter further secondary details as "" on the Death Details page
	And I click Proceed on the Death Details page
	Then I should get an error message "Please enter a primary cause of death" for "primaryCauseA"

@160879_Cause_of_Death_006
Scenario: Verify that Death Certificate details field 1a negative blank validation (no input when other field populated) is correct
	Given I start the Application
	And I click New claim on the Landing page
	And I fill all the details in ID and Verification page
	And I land on Death Certificate Details page
	And I select a Death Certificate type "Full" on the Death Details page
	And I select Current date on Death Details page
	And I add a Death Certificate Reference "Test Pass" on the Death Details page
	And I enter Country of death as "Scotland" on the Death Details page
	And I enter Place of death as "test data" on the Death Details page
	And I enter ia as "" on the Death Details page
	And I enter ib as "hello" on the Death Details page
	And I enter ic as "" on the Death Details page
	And I enter ii as "" on the Death Details page
	And I enter further secondary details as "" on the Death Details page
	And I click Proceed on the Death Details page
	Then I should get an error message "Please enter a primary cause of death" for "primaryCauseA"










	










