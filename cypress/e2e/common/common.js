export const getFormattedDateTimeNextHour = () => {
    const currentDate = new Date();
    const oneHourAhead = new Date(currentDate.getTime() + 3600000); // Add 1 hour in milliseconds

    // Extract day information
    const day = oneHourAhead.toLocaleDateString('en-US-u-ca-iso8601', { weekday: 'short' });
    const paddedNumericDay = oneHourAhead.toLocaleDateString('en-US-u-ca-iso8601', { day: 'numeric' }).padStart(2, '0');

    // Format date
    const formattedDate = oneHourAhead.toLocaleDateString('en-US-u-ca-iso8601', {
        month: 'short',
    });

    // Extract year
    const year = oneHourAhead.getFullYear();

    // Format time using 24-hour format and remove minutes
    const hour = oneHourAhead.getHours();
    const formattedTime = hour === 0 ? '00' : oneHourAhead.toLocaleTimeString('en-US', {
        hour: 'numeric',
        hourCycle: 'h24',
    });

    // Combine formatted date and time with day information
    const formattedDateTime = day + ' ' + formattedDate + ' ' + paddedNumericDay + ' ' + year + ' ' + formattedTime;
    return formattedDateTime;
};

export const loginToAdmin = () => {
    const username = Cypress.env('adminUserName')
    const password = Cypress.env('adminPassword')

    cy.visit('/wp-admin')
    cy.get('#user_login').should('be.visible');
    cy.get('#user_login').clear();
    cy.get('#user_login').should('be.enabled').type(username, { "log": false })
    cy.get('#user_pass').should('be.enabled').type(password, { "log": false })
    cy.get('#wp-submit').click()
};