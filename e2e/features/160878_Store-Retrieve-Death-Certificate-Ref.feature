@Claims
@160878
Feature: As a claims assessor 
I want to record the DC reference and if it is a full or interim certificate 
so that it reduces the risk of fraud 

@160878_Death_Certificate_Type_and_Reference_001
Scenario:Summary Screen displays the selected "Full" death certificate type with a valid Death Certificate Registration Reference
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

@160878_Death_Certificate_Type_and_Reference_002
Scenario:Summary Screen displays the selected "Interim" death certificate type with a valid Death Certificate Registration Reference
Given I start the Application
	And I click New claim on the Landing page
	And I fill all the details in ID and Verification page
	And I land on Death Certificate Details page
	And I select a Death Certificate type "Interim" on the Death Details page
	And I select Current date on Death Details page
	And I enter Country of death as "Scotland" on the Death Details page
    And I enter Place of death as "test data" on the Death Details page
    And I enter ia as "apple" on the Death Details page
	And I add a Death Certificate Reference "Test Pass" on the Death Details page
	And I click Proceed on the Death Details page
	When I click to see the Claim Summary
	Then I should see Claims Summary page with correct claim data displayed

@160878_Death_Certificate_Type_and_Reference_003
Scenario: Verify that the error message is displayed when the death certificate type is not selected
Given I start the Application
    And I click New claim on the Landing page
	And I fill all the details in ID and Verification page
	And I land on Death Certificate Details page
	And I select Current date on Death Details page
	And I enter Country of death as "Scotland" on the Death Details page
    And I enter Place of death as "test data" on the Death Details page
    And I enter ia as "apple" on the Death Details page
	And I add a Death Certificate Reference "Test Pass" on the Death Details page
	When I click Proceed on the Death Details page
	Then I should get an error message "Please select a death certificate type" for "deathCertificateType"

@160878_Death_Certificate_Type_and_Reference_004
Scenario:Verify that the error message is displayed when the Death Certificate Registration Reference is blank
Given I start the Application
And I click New claim on the Landing page
	And I fill all the details in ID and Verification page
	And I land on Death Certificate Details page
	And I select a Death Certificate type "Full" on the Death Details page
	And I select Current date on Death Details page
	And I enter Country of death as "Scotland" on the Death Details page
    And I enter Place of death as "test data" on the Death Details page
    And I enter ia as "apple" on the Death Details page
	When I click Proceed on the Death Details page
	Then I should get an error message "Please enter a valid death certificate registration reference" for "deathCertificateRef"

@160878_Death_Certificate_Type_and_Reference_005
Scenario:Summary Screen displays the selected death certificate type and a valid Death Certificate Registration Reference with 50 characters
Given I start the Application
And I click New claim on the Landing page
	And I fill all the details in ID and Verification page
	And I land on Death Certificate Details page
	And I select a Death Certificate type "Full" on the Death Details page
	And I select Current date on Death Details page
	And I enter Country of death as "Scotland" on the Death Details page
    And I enter Place of death as "test data" on the Death Details page
    And I enter ia as "apple" on the Death Details page
	And I add a Death Certificate Reference "fifty characters maximum length test for ref field" on the Death Details page
	And I click Proceed on the Death Details page
	When I click to see the Claim Summary
	Then I should see Claims Summary page with correct claim data displayed
    
@160878_Death_Certificate_Type_and_Reference_006
Scenario:Summary Screen displays the selected death certificate type and a valid Death Certificate Registration Reference with special characters 
Given I start the Application
And I click New claim on the Landing page
	And I fill all the details in ID and Verification page
	And I land on Death Certificate Details page
	And I select a Death Certificate type "Full" on the Death Details page
	And I select Current date on Death Details page
	And I enter Country of death as "Scotland" on the Death Details page
    And I enter Place of death as "test data" on the Death Details page
    And I enter ia as "apple" on the Death Details page
	And I add a Death Certificate Reference "Test%&!" on the Death Details page
	When I click Proceed on the Death Details page
	Then I should get an error message "Please enter a valid death certificate registration reference" for "deathCertificateRef"

@160878_Death_Certificate_Type_and_Reference_007
Scenario:Summary Screen displays the selected death certificate type and a valid Death Certificate Registration Reference with 51 characters 
Given I start the Application
And I click New claim on the Landing page
	And I fill all the details in ID and Verification page
	And I land on Death Certificate Details page
	And I select a Death Certificate type "Full" on the Death Details page
	And I select Current date on Death Details page
	And I enter Country of death as "Scotland" on the Death Details page
    And I enter Place of death as "test data" on the Death Details page
    And I enter ia as "apple" on the Death Details page
	And I add a Death Certificate Reference "fifty characters maximum length test for ref fields" on the Death Details page
    When I click Proceed on the Death Details page
	Then I should get an error message "Maximum 50 characters only (51 characters entered)" for "deathCertificateMaxLength"