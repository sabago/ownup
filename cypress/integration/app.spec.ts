/// <reference types="cypress" />

describe('Testing user interactions', () => {
    it('visits the homepage', () => {
      cy.visit("baseUrl/?");
    });

    it("makes sure search control renders", () => {
        cy.get('[data-cy=search-control]')
          .should('be.visible')
          .and('contain', 'Loan Size')
          .and('contain', 'Credit Score')
          .and('contain', 'Property Type')
          .and('contain', 'Occupancy')
    });

    it("enters loan size", () => {
        cy.get('[data-cy=loan-size]').clear();
        cy.get('[data-cy=loan-size]')
          .type('450000');       
    });

    it("enters credit score", () => {
        cy.get('[data-cy=credit-score]').clear();
        cy.get('[data-cy=credit-score]')
          .type('680');       
    });

    it("selects a property type", ()=> {
        cy.get('[data-cy=property-type]')
          .select("Single Family");
    });

    it("selects an occupancy", ()=> {
        cy.get('[data-cy=occupancy]')
          .select("Primary Residence");
    });

    it("makes sure that the quote rates buton exists", ()=> {
        cy.get('[data-cy=quote-button]')
          .should('exist');
    });

    it("ensures that the table wrapper exists", () => {
        cy.get('[data-cy=quote-table]')
          .should('exist');
    });

    it("makes sure there's a loader before fetching data", () => {
        cy.get('[data-cy="loader')
          .should('be.visible');
    })

    it("makes sure there's no table before fetching data", () => {
        cy.get('[data-cy=data-table')
        .should('not.be.visible');
    });

    it("clicks the button to load data", ()=>{
        cy.get('[data-cy=quote-button]')
          .click();
    });

    it("makes sure the table renders after fetching data", () => {
        cy.get('[data-cy=data-table')
          .should('be.visible');
    });

    it("checks that the table header renders correctly", () => {
        cy.get('table')
          .should('be.visible')
          .and('contain', 'LENDER')
          .and('contain', 'PRODUCT')
          .and('contain', 'RATE')
          .and('contain', 'CLOSING COSTS')
          .and('contain', 'MONTHLY PAYMENT')
          .and('contain', 'APR')
    });

    it("checks that there's atleast one data row ", () => {
        cy.get('tbody')
          .should('exist')
          .and('contain', 'TFB Federal C')
          .and('contain', '7/1 ARM')
          .and('contain', '3.375%')
          .and('contain', '$5,500')
          .and('contain', '$1,989')
          .and('contain', '3.472%')
    });
  });