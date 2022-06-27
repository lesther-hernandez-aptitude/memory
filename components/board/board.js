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
import { map } from 'lit/directives/map.js';
import "../card/card";
/**
 * An example element.
 *
 * @fires count-changed - Indicates when the count changes
 * @slot - This element has a slot
 * @csspart button - The button
 */
let Board = class Board extends LitElement {
    constructor() {
        super(...arguments);
        this.items = new Array();
    }
    render() {
        return html `
         <div class="grid-board">
             ${map(this.items, (item) => html `
                     <memory-card .icon="${item.icon}"></memory-card>
                  `)}
          
          </div>
     `;
    }
    createRenderRoot() {
        return this;
    }
};
Board.styles = css ``;
__decorate([
    property({ type: Object, attribute: true })
], Board.prototype, "items", void 0);
Board = __decorate([
    customElement('memory-board')
], Board);
export { Board };
//# sourceMappingURL=board.js.map