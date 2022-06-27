/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {LitElement, html, css} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import "../header/header"
import "../board/board"
/**
 * An example element.
 *
 * @fires count-changed - Indicates when the count changes
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('memory-container')
export class Container extends LitElement {
  static override styles = css``;

  @property({type: Object, attribute: true})
  items = []


  override render() {
    return html`
      <div class="grid-container">
       
        <div class="header">
          <memory-header></memory-header>
        </div>  
        <div class="main">
          <memory-board></memory-board>
        </div>  
        <div class="footer">
          <memory-footer></memory-footer>
        </div>
      </div>
    `;
  }

  protected override createRenderRoot() {
    return this;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'memory-container': Container;
  }
}
