/// <reference types = 'Cypress' />

describe('Visual testing of Smart+ Platform', () => {
  const email = 'angelm@evenset.com';
  const password = 'Does1twork?';

  beforeEach(() => {
    cy.eyesOpen({
      appName: Cypress.currentTest.titlePath,
      testName: Cypress.currentTest.title,
    });
  });

  afterEach(() => {
    cy.eyesClose();
  });
  it('Test login', () => {
    cy.log('**Load the login page**').visit(
      'https://platform-uat.smartplusapp.org/#/'
    );

    cy.log('**Check page loaded corectly**').eyesCheckWindow({
      tag: 'Login Page',
      target: 'window',
      fully: true,
    });

    cy.log('**Do the evolut.... Login**')
      .get('[type=email]')
      .type(email)
      .get('[type=password]')
      .type(password)
      .get('[type=submit]')
      .click()
      .visit(
        'https://platform-uat.smartplusapp.org/#/survey-planning/metadata'
      );

    cy.log('**Check that metadata loaded correctly**').eyesCheckWindow({
      tag: 'Metadata',
      target: 'window',
      fully: true,
      matchLevel: 'Layout',
    });
  });
});
