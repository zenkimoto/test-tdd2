import '../../../public/components/people-list-item';

describe('People List Item', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8080/components/people-list-item.test.html');
  });

  it('should be defined', () => {
    cy.get('people-list-item')
  });

  it('should accept name attribute', () => {
    cy.get('people-list-item')
      .invoke('attr', 'name', 'Luke Skywalker')
      .shadow()
      .find('h2')
      .should('contain.text', 'Luke Skywalker');
  });

  it('should accept birthyear attribute', () => {
    cy.get('people-list-item')
      .invoke('attr', 'birthyear', '19BBY')
      .shadow()
      .find('span')
      .should('contain.text', '19BBY');
  });
});
