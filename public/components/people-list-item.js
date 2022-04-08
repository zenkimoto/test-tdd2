class PeopleListItem extends HTMLElement {
  name = '';

  constructor() {
    super();

    // Attach to Shadow DOM
    this.attachShadow({
      mode: "open"
    });

    // Create Template Element with Slot
    let template = document.createElement('template');
    template.innerHTML = `<div><h2></h2><span></span></div>`;

    // Attach
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  static get observedAttributes() {
    return ['name', 'birthyear'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name == 'name') {
      this.shadowRoot.querySelector(
        'h2'
      ).textContent = newValue;
    }

    if (name == 'birthyear') {
      this.shadowRoot.querySelector('span').textContent = newValue;
    }
  }
}

customElements.define("people-list-item", PeopleListItem);
