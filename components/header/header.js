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
let Header = class Header extends LitElement {
    constructor() {
        super(...arguments);
        /**
         * The name to say "Hello" to.
         */
        this.name = 'World';
    }
    render() {
        return html `<header>
                      <h1 class="heading-one">Matching Game</h1>
                  </header>
              
                  <section class="grid-score-panel">
                      <memory-score></memory-score>
                      <memory-moves></memory-moves>
                      <memory-timer></memory-timer>
                      <memory-reset></memory-reset>
                  </section>`;
    }
    createRenderRoot() {
        return this;
    }
};
Header.styles = css ``;
__decorate([
    property()
], Header.prototype, "name", void 0);
Header = __decorate([
    customElement('memory-header')
], Header);
export { Header };
//# sourceMappingURL=header.js.map