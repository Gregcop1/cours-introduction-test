Feature: Search
  In order to search something on internet
  I should be able to find results on search engine

Scenario: Search a website
  Given I go to search engine page
  When I fill the search form
  Then I should see a list of websites
