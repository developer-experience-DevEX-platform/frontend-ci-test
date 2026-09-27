describe('home', () => {
  it('shows the greeting', () => {
    cy.visit('/');
    cy.contains('h1', 'Hello from frontend-ci-test');
  });
});
