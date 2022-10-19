import { LitElement, html } from 'lit-element';

class JrButton extends LitElement {
    constructor() {
        super();
    }

    render() {
        return html`
            <button>PUSH</button>
        `;
    }
}

customElements.define('jr-button', JrButton);
