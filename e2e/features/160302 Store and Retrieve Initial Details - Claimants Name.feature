@Claims
@160302
Feature: Store and Retrieve Initial Details: Claimants Name
    As a claims assessor
	I want to collect the claimants name (person calling) 
	So that I can record and retrieve it

@160302_Claimants_Name_001
	Scenario Outline: Valid Claimants Name
		Given I start the Application
		And I click New claim on the Landing page	
		And I add a valid Policy Number on the ID and Verification page	
		And I add a Claimant FirstName "<Forename>" on the ID and Verification page
		And I add a Claimant Surname "<Surname>" on the ID and Verification page
		And I add a Claimant Relationship "Spouse" 
		When I click Proceed on the ID and Verification page
	 	Then I land on Death Certificate Details page


Examples:
|Test Case | Forename                    | Surname											  |
|01		   | te                          | S												  |
|02		   | TesT                        | tEsT												  |
|03		   | Test-Test                   | Test-Test										  |
|04		   | 'first                      | seco'nd										      |
|05		   | ''                          | '												  |
|06		   | Twentyfourcharacterstest    | Second                                             |
|07		   | first                       | Fiftycharactersmaximumlengthtestingforsurnamefield |

@160302_Claimants_Name_002
	Scenario: Blank Claimants Forename
		Given I start the Application
		And I click New claim on the Landing page
		And I add a valid Policy Number on the ID and Verification page			
		And I add a Claimant FirstName "" on the ID and Verification page
		And I add a Claimant Surname "ValidSurname" on the ID and Verification page
		When I click Proceed on the ID and Verification page
		Then I should get an error message "Please enter a valid first name for the claimant" for "firstName"

@160302_Claimants_Name_003
	Scenario: Blank Claimants Surname
		Given I start the Application
		And I click New claim on the Landing page
		And I add a valid Policy Number on the ID and Verification page			
		And I add a Claimant FirstName "ValidFirstName" on the ID and Verification page
		And I add a Claimant Surname "" on the ID and Verification page
		When I click Proceed on the ID and Verification page
		Then I should get an error message "Please enter a valid surname for the claimant" for "surname"

@160302_Claimants_Name_004
	Scenario Outline: Invalid Claimants Forename with Special characters
		Given I start the Application
		And I click New claim on the Landing page
		And I add a valid Policy Number on the ID and Verification page			
		And I add a Claimant FirstName "<Forename>" on the ID and Verification page
		And I add a Claimant Surname "<Surname>" on the ID and Verification page	
		When I click Proceed on the ID and Verification page
		Then I should get an error message "Please enter a valid first name for the claimant" for "firstName"

Examples:
|Test Case | Forename                    | Surname                                              |
|01		   | 0123test                    | Second                                               |
|02		   | test&&!                     | Second											    |


@160302_Claimants_Name_005
	Scenario Outline: Invalid Claimants Surname with Special characters
		Given I start the Application
		And I click New claim on the Landing page
		And I add a valid Policy Number on the ID and Verification page			
		And I add a Claimant FirstName "<Forename>" on the ID and Verification page
		And I add a Claimant Surname "<Surname>" on the ID and Verification page	
		When I click Proceed on the ID and Verification page
		Then I should get an error message "Please enter a valid surname for the claimant" for "surname"

Examples:
|Test Case | Forename                    | Surname                                              |
|01		   | first                       | 0123test											    |
|02		   | first                       | test&&!											    |


@160302_Claimants_Name_006
	Scenario: Invalid Claimants Forename with maximum allowed characters of 24 characters
		Given I start the Application
		And I click New claim on the Landing page
		And I add a valid Policy Number on the ID and Verification page			
		And I add a Claimant FirstName "Twentyfourcharacterstests" on the ID and Verification page
		And I add a Claimant Surname "Second" on the ID and Verification page	
		When I click Proceed on the ID and Verification page
		Then I should get an error message "Maximum 24 characters only (25 characters entered)" for "firstNameMaxLength"

@160302_Claimants_Name_007
	Scenario: Invalid Claimants Surname with maximum allowed characters of 50 characters
		Given I start the Application
		And I click New claim on the Landing page
		And I add a valid Policy Number on the ID and Verification page			
		And I add a Claimant FirstName "first" on the ID and Verification page
		And I add a Claimant Surname "Fiftycharactersmaximumlengthtestingforsurnamefields" on the ID and Verification page	
		When I click Proceed on the ID and Verification page
		Then I should get an error message "Maximum 50 characters only (51 characters entered)" for "surnameMaxLength"
