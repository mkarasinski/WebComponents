import { Component, h } from "@stencil/core";

@Component({
  tag: 'mk-spinner',
  styleUrl: './spinner.css',
  shadow: true
})
export class Spinner {
  render() {
    return <div class="lds-dual-ring"></div>;
  }
}