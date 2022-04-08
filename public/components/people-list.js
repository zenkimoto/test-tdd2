class PeopleList extends HTMLElement {
  constructor() {
    super();
    
    // Attach to Shadow DOM
    this.attachShadow({
      mode: "open"
    });

    // Create Template Element with Slot
    let template = document.createElement('template');
    template.innerHTML = `<h1>People List</h1>`;

    // Attach
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

customElements.define("people-list", PeopleList);
