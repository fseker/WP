/// <reference types="cypress" />
import { getFormattedDateTimeNextHour, loginToAdmin } from '../common/common.js'

describe('Crawl plugin Tests', () => {
  
  beforeEach(() => {
    loginToAdmin();
  })

  it('checks 13 pages listed after crawl triggered manually', () => {

    cy.visit('/wp-admin/tools.php?page=wpcrawler_admin');
    cy.get('#wpcrawler-crawl-button').click(); // trigger crawl once to make list appear
    cy.get('#pages-list > li').should('have.length', 13) // wait for list to appear
  })

  it('checks previously listed results cleared after crawl triggered', () => {

    cy.visit('/wp-admin/tools.php?page=wpcrawler_admin')
    cy.get('#wpcrawler-crawl-button').click() // trigger crawl once to make list appear
    cy.get('#pages-list > li').should('have.length', 13) // wait for list to appear
    cy.get('#wpcrawler-crawl-button').click() // trigger 2. time 
    cy.get('#pages-list > li').should('have.length', 0) // assert list cleared
    cy.get('#pages-list > li').should('have.length', 13)  // assert list updated
  })

  it('checks crawl run automatically set for running every hour after first crawl', () => {

    cy.visit('/wp-admin/tools.php?page=wpcrawler_admin');
    cy.get('#wpcrawler-crawl-button').click(); // trigger once to make list appear
    cy.get('#pages-list > li').should('have.length', 13); // wait for list to appear
    cy.get('#wpcrawler-cron-crawl-status').should('contain.text', getFormattedDateTimeNextHour()); // assert Next crawl set for Next hour
  })
});