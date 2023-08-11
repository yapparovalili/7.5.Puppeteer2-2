Feature: Choose seat
    Scenario: Should choose one seat
        Given user is on "http://qamid.tmweb.ru/client/index.php" page
        When user choose seat
        Then user sees message

    Scenario: Should choose two seats
        Given user is on "http://qamid.tmweb.ru/client/index.php" page
        When user choose two seats
        Then user sees message

    Scenario: Should not choose seat
        Given user is on "http://qamid.tmweb.ru/client/index.php" page
        When user not choose seat
        Then user sees button become disable