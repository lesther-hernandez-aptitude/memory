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
import "./components/header/header";
import "./components/board/board";
import "./components/footer/footer";
import { cardCollecction } from './data/cards';
/**
 * An example element.
 *
 * @fires count-changed - Indicates when the count changes
 * @slot - This element has a slot
 * @csspart button - The button
 */
let Game = class Game extends LitElement {
    constructor() {
        super();
        /**
         * The name to say "Hello" to.
         */
        this.items = new Array();
        /**
         * The number of times the button has been clicked.
         */
        this.count = 0;
        this.items = cardCollecction;
    }
    render() {
        return html `
     <div class="grid-container">
       <div class="header">
         <memory-header></memory-header>
       </div>  
       <div class="main">
         <memory-board .items="${this.items}"></memory-board>
       </div>  
       <div class="footer">
         <memory-footer></memory-footer>
       </div>
     </div>
    `;
    }
    /**
     * Formats a greeting
     * @param name The name to say "Hello" to
     */
    sayHello(name) {
        return `Hello, ${name}`;
    }
    createRenderRoot() {
        return this;
    }
};
Game.styles = css `
    :host {
      display: block;
      border: solid 1px gray;
      padding: 16px;
      max-width: 800px;
    }
  `;
__decorate([
    property({ type: Object })
], Game.prototype, "items", void 0);
__decorate([
    property({ type: Number })
], Game.prototype, "count", void 0);
Game = __decorate([
    customElement('memory-game')
], Game);
export { Game };
//# sourceMappingURL=game.js.map