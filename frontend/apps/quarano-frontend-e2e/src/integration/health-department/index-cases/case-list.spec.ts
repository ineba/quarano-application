/// <reference types="cypress" />

describe('health-department index cases case-list', () => {
  beforeEach(() => {
    cy.server();
    cy.route('GET', '/hd/cases').as('allcases');
    cy.route('PUT', '/hd/cases/*').as('savedetails');

    cy.loginAgent();
  });

  describe('preconditions', () => {
    it('should be on the correct url', () => {
      cy.url().should('include', '/health-department/index-cases/case-list');
    });

    it('should have correct page components', () => {
      cy.get('[data-cy="new-case-button"]').should('exist');
      cy.get('[data-cy="search-case-input"]').should('exist');
      cy.get('[data-cy="case-data-table"]').should('exist');
    });
  });

  describe('case list', () => {
    it('should get a list of cases and display in table', () => {
      cy.wait('@allcases').its('status').should('eq', 200);

      cy.get('[data-cy="case-data-table"]')
        .find('.ag-center-cols-container > .ag-row')
        .should('have.length.greaterThan', 0);
    });

    it('should filter cases', () => {
      cy.get('[data-cy="case-data-table"]')
        .find('.ag-center-cols-container > .ag-row')
        .should('have.length.greaterThan', 0);
      cy.get('[data-cy="search-case-input"]').type('hanser');
      cy.get('[data-cy="case-data-table"]').find('.ag-center-cols-container > .ag-row').should('have.length', 1);
    });

    it('should open new case page on button click', () => {
      cy.get('[data-cy="new-case-button"]').click();
      cy.url().should('include', '/health-department/case-detail');
    });

    // ToDo: https://quarano.atlassian.net/browse/CORE-635
    xit('should open selected case', () => {
      cy.get('[data-cy="case-data-table"]').find('.ag-center-cols-container > .ag-row').eq(2).click();
      cy.url().should('include', '/health-department/case-detail');
    });

    // ToDo: https://quarano.atlassian.net/browse/CORE-635
    xit('should call mailto: selected case on click on mail icon', () => {
      cy.get('[data-cy="case-data-table"]')
        .find('.ag-center-cols-container > .ag-row')
        .eq(2)
        .find('[data-cy="mail-button"]')
        .click();

      cy.get('@windowOpen').should('be.calledWithMatch', 'mailto');
    });

    // ToDo: https://quarano.atlassian.net/browse/CORE-635
    xit('should add address', () => {
      cy.get('[data-cy="case-data-table"] .ag-center-cols-container > .ag-row').eq(0).click();
      cy.location('pathname').should('include', '/index/');
      cy.get("[data-cy='street-input']").clear().type('Frankfurterstrasse');
      cy.get("[data-cy='house-number-input']").clear().type('11');
      cy.get("[data-cy='zip-code-input']").clear().type('60987');
      cy.get("[data-cy='city-input']").clear().type('Frankfurt');
      cy.get("[data-cy='client-submit-and-close-button'] button").click();
      cy.wait('@savedetails');
      cy.get('@savedetails').its('status').should('eq', 200);
      cy.location('pathname').should('include', 'health-department/index-cases/case-list');
    });
  });
});
