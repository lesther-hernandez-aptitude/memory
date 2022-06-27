/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {LitElement, html, css} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import "./components/header/header";
import "./components/board/board";
import "./components/footer/footer";
import { Card } from './interfaces/card.interface';
import { cardCollecction } from './data/cards';

/**
 * An example element.
 *
 * @fires count-changed - Indicates when the count changes
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('memory-game')
export class Game extends LitElement {
  static override styles = css`
    :host {
      display: block;
      border: solid 1px gray;
      padding: 16px;
      max-width: 800px;
    }
  `;

  /**
   * The name to say "Hello" to.
   */
   @property({ type: Object })
   items = new Array();


  /**
   * The number of times the button has been clicked.
   */
  @property({type: Number})
  count = 0;

  override render() {
    return html`
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
  sayHello(name: string): string {
    return `Hello, ${name}`;
  }

  constructor() {
    super();
    this.items = cardCollecction as Array<Card>;
  }

  protected override createRenderRoot() {
    return this;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'memory-game': Game;
  }
}
