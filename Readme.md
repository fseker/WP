# WP Test
Project is a basic concept for test automation for crawler plugin.

## Installation

1. Clone the repository:

```bash

2. npm install

3. Add credentials 

    create a 'cypress.env.json' file in your projects root directory as below and update with your admin credentials. 

    {
        "adminUserName": xx,
        "adminPassword": xx
    }

4. Run the test with 'npx cypress run' command, or you can open Cypress runner 'npx cypress open' and manually trigger the tests. 