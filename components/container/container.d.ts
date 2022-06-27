/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
import { LitElement } from 'lit';
import "../header/header";
import "../board/board";
/**
 * An example element.
 *
 * @fires count-changed - Indicates when the count changes
 * @slot - This element has a slot
 * @csspart button - The button
 */
export declare class Container extends LitElement {
    static styles: import("lit").CSSResult;
    items: never[];
    render(): import("lit-html").TemplateResult<1>;
    protected createRenderRoot(): this;
}
declare global {
    interface HTMLElementTagNameMap {
        'memory-container': Container;
    }
}
//# sourceMappingURL=container.d.ts.map