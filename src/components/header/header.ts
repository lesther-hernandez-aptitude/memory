/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {LitElement, html, css} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import "./moves/moves";
import "./reset/reset";
import "./score/score";
import "./timer/timer";
/**
 * An example element.
 *
 * @fires count-changed - Indicates when the count changes
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('memory-header')
export class Header extends LitElement {
  static override styles = css``;

  /**
   * The name to say "Hello" to.
   */
  @property()
  name = 'World';

  override render() {
    return html`<header>
                      <h1 class="heading-one">Matching Game</h1>
                  </header>
              
                  <section class="grid-score-panel">
                      <memory-score></memory-score>
                      <memory-moves></memory-moves>
                      <memory-timer></memory-timer>
                      <memory-reset></memory-reset>
                  </section>`;
  }

  protected override createRenderRoot() {
    return this;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'memory-header': Header;
  }
}
