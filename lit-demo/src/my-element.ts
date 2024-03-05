import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";

@customElement('my-element')
export class MyElement extends LitElement {
  static styles = css`
    .title {
      font-weight: bold
    }  
  `

  render() {
    return html`
      <div class="title">
        my element
      </div>
    `
  }
}