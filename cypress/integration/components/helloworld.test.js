import HelloWorld from '../../../public/components/helloworld';

describe('HelloWorld', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8080/components/hello-world.test.html');
  });

  it('should be able to instantiate class', () => {
    const helloWorld = new HelloWorld();

    helloWorld.connectedCallback();

    helloWorld.onClick();

    // NOTE: instantiating the class here is not very useful
    // as the web component does not get ran in the context of
    // a browser to read attributes and test click events, etc.
  });

  it('should be able to get DOM element', () => {
    cy.get('hello-world').then($el => {
      const el = $el.get(0);
      // NOTE: el is the DOM element
      // not the class itself.  Not as
      // useful for a unit test
    });
  });

  it('should be able to pass simple cypress test', () => {
    cy.get('hello-world')
      .shadow()
      .should('contain.text', 'Hello');
  });
});
