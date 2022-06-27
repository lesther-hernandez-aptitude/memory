/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
/**
 * An example element.
 *
 * @fires count-changed - Indicates when the count changes
 * @slot - This element has a slot
 * @csspart button - The button
 */
let Modal = class Modal extends LitElement {
    constructor() {
        super(...arguments);
        /**
         * The name to say "Hello" to.
         */
        this.name = 'World';
    }
    render() {
        return html `<section class="modal-section">
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
    createRenderRoot() {
        return this;
    }
};
Modal.styles = css ``;
__decorate([
    property()
], Modal.prototype, "name", void 0);
Modal = __decorate([
    customElement('memory-modal')
], Modal);
export { Modal };
//# sourceMappingURL=modal.js.map