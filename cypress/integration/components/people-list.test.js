import '../../../public/components/people-list';

describe('People List', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8080/components/people-list.test.html');
  });

  it('should be defined', () => {
    cy.get('people-list')
  });

  it('should contain header', () => {
    cy.get('people-list')
      .shadow()
      .find('h1')
      .should('contain.text', 'People List');
  });
});
