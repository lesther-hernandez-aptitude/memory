/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

 import {LitElement, html, css} from 'lit';
 import {customElement, property} from 'lit/decorators.js';
 import { map } from 'lit/directives/map.js';
import { Card } from '../../interfaces/card.interface';
 import "../card/card"
 
 /**
  * An example element.
  *
  * @fires count-changed - Indicates when the count changes
  * @slot - This element has a slot
  * @csspart button - The button
  */
 @customElement('memory-board')
 export class Board extends LitElement {
   static override styles = css``;
 
   @property({type: Object, attribute: true})
   items = new Array<Card>();
 
 
   override render() {
     return html`
         <div class="grid-board">
             ${map(this.items,                 
                  (item) => html`
                     <memory-card .icon="${item.icon}"></memory-card>
                  `,
                )}
          
          </div>
     `;
   }
 
   protected override createRenderRoot() {
     return this;
   }
 }
 
 declare global {
   interface HTMLElementTagNameMap {
     'memory-board': Board;
   }
 }
 