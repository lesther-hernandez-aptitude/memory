/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {LitElement, html, css} from 'lit';
import {customElement, property} from 'lit/decorators.js';

/**
 * An example element.
 *
 * @fires count-changed - Indicates when the count changes
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('memory-modal')
export class Modal extends LitElement {
  static override styles = css``;

  /**
   * The name to say "Hello" to.
   */
  @property()
  name = 'World';

  override render() {
    return html`<section class="modal-section">
                  <div class="modal">
                      <div class="modal-items">
                          <div class="modal-close">
                              <i class="fa fa-times-circle-o">
                              </i>
                          </div>
                          <p id="congrats"></p>
                          <p id="stars-modal"></p>
                          <p id="onCompletion"></p>
                          <div id="playAgain">
                              Wanna play more?
                              <i class="fa fa-play-circle"></i>
                          </div>
                      </div>
                  </div>
              </section>`;
  }

  protected override createRenderRoot() {
    return this;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'memory-modal': Modal;
  }
}
