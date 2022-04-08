class PeopleList extends HTMLElement {
  constructor() {
    super();
    
    // Attach to Shadow DOM
    this.attachShadow({
      mode: "open"
    });

    // Create Template Element with Slot
    let template = document.createElement('template');
    template.innerHTML = `
      <div>
        <h1>People List</h1>
        <ul>
        </ul>
      </div>
    `;

    // Attach
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  connectedCallback() {
    const list = this.shadowRoot.querySelector('ul');

    const markup = this.getPeople()
                       .then(res => res.map(p => `<people-list-item name="${p.name}" birthyear="${p.birth_year}"></people-list-item>`).join(''))
                       .then(markup => list.innerHTML = markup);
  }

  async getPeople() {
    const response = await fetch('https://swapi.dev/api/people');
    const json = await response.json();
    return json.results;
  }
}

customElements.define("people-list", PeopleList);
