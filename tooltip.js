class Tooltip extends HTMLElement {
  constructor() {
    //default name
    super(); //execution
  }

  connectedCallback() {
    // Accesing the DOM
    const tooltipIcon = document.createElement("span");
    tooltipIcon.textContent = " (?)";
    this.appendChild(tooltipIcon);
  }
}

customElements.define("okay-tooltip", Tooltip); // anyone can create custom tag
