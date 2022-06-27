/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
import { LitElement } from 'lit';
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
export declare class Header extends LitElement {
    static styles: import("lit").CSSResult;
    /**
     * The name to say "Hello" to.
     */
    name: string;
    render(): import("lit-html").TemplateResult<1>;
    protected createRenderRoot(): this;
}
declare global {
    interface HTMLElementTagNameMap {
        'memory-header': Header;
    }
}
//# sourceMappingURL=header.d.ts.map