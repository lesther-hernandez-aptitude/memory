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
 @customElement('memory-footer')
 export class Footer extends LitElement {
   static override styles = css``;
 
   /**
    * The name to say "Hello" to.
    */
   @property()
   name = 'World';
 
   override render() {
     return html`
     <h2>Footer</h2>
     `;
   }
 
   protected override createRenderRoot() {
     return this;
   }
 }
 
 declare global {
   interface HTMLElementTagNameMap {
     'memory-footer': Footer;
   }
 }
 