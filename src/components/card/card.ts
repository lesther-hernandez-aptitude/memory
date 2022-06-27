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
 @customElement('memory-card')
 export class Card extends LitElement {
   static override styles = css``;
 
   /**
    * The name to say "Hello" to.
    */
   @property()
   icon = '';
 
   override render() {
     return html`
         <div class="grid-card">
            <img src="${this.icon}">
         </div>
    `;
   }
   
   protected override createRenderRoot() {
     return this;
   }
 }
 
 declare global {
   interface HTMLElementTagNameMap {
     'memory-card': Card;
   }
 }
 