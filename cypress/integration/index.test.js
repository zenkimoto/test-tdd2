describe('Index Page', () => {
  beforeEach(() => {
    const url = 'http://localhost:8080';
    cy.visit(url);
  });

  it('should contain Hello World!', () => {
    cy.get('h1')
      .contains('Hello World!');
  });
});
