export class EitColorSelector extends HTMLElement {
  static formAssociated = true;

  constructor() {
      super();
      this.attachShadow({ mode: "open" });
      this._internals = this.attachInternals();

      this.shadowRoot.innerHTML = `
          <style>
              .color-container {
                  display: flex;
                  align-items: center;
                  gap: 10px;
                  margin-bottom: 15px;
              }

              .color-display {
                  width: var(--color-display-width, 20px);
                  height: var(--color-display-height, 20px);
                  border: var(--color-display-border, 1px solid #303030);
                  border-radius: 5px;
              }

              select {
                  cursor: pointer;
              }
          </style>
          <div class="color-container">
              <div class="color-display"></div>
              <select class="color-selector"></select>
          </div>
      `;

      this.colorDisplay = this.shadowRoot.querySelector(".color-display");
      this.colorSelector = this.shadowRoot.querySelector(".color-selector");

      this.colorSelector.addEventListener("change", () => this.updateValue());

      this.updateColorOptions();
  }

  static get observedAttributes() {
      return ["colors"];
  }

  attributeChangedCallback(name, oldValue, newValue) {
      if (name === "colors") {
          this.updateColorOptions();
      }
  }

  updateColorOptions() {
      const colors = this.getAttribute("colors")
          ? JSON.parse(this.getAttribute("colors"))
          : [
              { name: "Rojo", value: "#ff0000" },
              { name: "Verde", value: "#00ff00" },
              { name: "Azul", value: "#0000ff" },
              { name: "Negro", value: "#000000" },
              { name: "Blanco", value: "#ffffff" }
          ];

      this.colorSelector.innerHTML = "";

      colors.forEach(color => {
          const option = document.createElement("option");
          option.value = color.value;
          option.textContent = color.name;
          this.colorSelector.appendChild(option);
      });

      this.updateValue();
  }

  updateValue() {
      const selectedColor = this.colorSelector.value;
      this._internals.setFormValue(selectedColor);
      this.colorDisplay.style.backgroundColor = selectedColor;
  }
}