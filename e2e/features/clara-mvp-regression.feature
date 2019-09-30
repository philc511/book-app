@clara_mvp_regression
Feature: Template Application Header

#@temp_test_update_existing_claim
#Scenario: Update existing claim
#    Given I start the Application
#    And I view summary for existing claim
#    And I navigate to "Death details"
#    And I select a Death Certificate type "Full" on the Death Details page
#	And I select Current date on Death Details page
#	And I enter Country of death as "France" on the Death Details page
#    And I enter Place of death as "test data" on the Death Details page
#    And I enter ia as "apple" on the Death Details page
#	And I add a Death Certificate Reference "Test Pass" on the Death Details page
#	And I click Save to summary in Death Details page
#	When I navigate to "Summary"
#	Then I should see Claims Summary page with correct claim data displayed

@Regression_ID_V_New_Claim
Scenario: Verification of retrieval of ALIS data items, basic functionality and navigation.
	 Given I start the Application
	 And I launch IDV for new claim
	 And I fill all the details in ID and Verification page
	 #And I verify Personal details , Plan details and Cover details in ID and Verification page
	 When I click Confirm on the ID and Verification page
	 Then I should see Death Certificate Details page

@Regression_E2E_New_Claim
Scenario:Verify the E2E flow of CLARA and its Summary page displays the correct ALIS data and the newly added data.
	 Given I start the Application
	 And I launch IDV for new claim
	 And I fill all the details in ID and Verification page 
	 And I click Confirm on the ID and Verification page
	 And I fill all the details in Death Details page  
	 And I click Save to summary in Death Details page
	 #And I fill all the details in Edit contact details page
	 #And I Click Save and exit in Edit contact details page 
	 #And I fill all the details in Payee Details page 
	 #And I click Save to summary in Payee Details page
	 #And I verify all the details in Final declaration page
	 #And I fill Comment and Evidence on Summary page
	 #And I click Add in Summary page
	 #When I view the Summary page
	 #Then I should see all the details displayed on the Summary page     