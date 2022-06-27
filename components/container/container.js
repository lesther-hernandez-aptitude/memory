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
import "../header/header";
import "../board/board";
/**
 * An example element.
 *
 * @fires count-changed - Indicates when the count changes
 * @slot - This element has a slot
 * @csspart button - The button
 */
let Container = class Container extends LitElement {
    constructor() {
        super(...arguments);
        this.items = [];
    }
    render() {
        return html `
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
    createRenderRoot() {
        return this;
    }
};
Container.styles = css ``;
__decorate([
    property({ type: Object, attribute: true })
], Container.prototype, "items", void 0);
Container = __decorate([
    customElement('memory-container')
], Container);
export { Container };
//# sourceMappingURL=container.js.map