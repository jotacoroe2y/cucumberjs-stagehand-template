Feature: Stagehand example
	As a tester experimenting with Stagehand
	I want to create a simple test scenario
	So that I can understand how to use the tool

	Scenario: Search for e2y on Google
		Given I navigate to Google
		And I "close the popup to access the search bar"
		When I "search for e2ycommerce"
		And I "submit the search by pressing the Enter key"
	    And I wait for the page to be loaded
		And I see the "google search results"
		Then I should see the "first search result" is "e2ycommerce.com"
