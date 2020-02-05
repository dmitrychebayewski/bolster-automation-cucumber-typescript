@bolster-speakers
Feature: Submitting the support requests to Bolster

  @sbolster-speakers
  Scenario: The customer is contacting Bolster using the "Contact us" form.
    Given The user opens Bolster home page
    When The user selects the "EN" language
    Then  The home page title is "E-learning platform for safety trainings on the job"
    When The user navigates through the navigation menu:
      | menuItem | subMenuItem  |
      | About us | Bolster Safety |
    Then About us page contains the "About us" title
    And  The speakers pics are downloaded

