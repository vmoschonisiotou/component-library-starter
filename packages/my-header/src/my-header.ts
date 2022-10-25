import { LitElement, html, HTMLTemplateResult, CSSResult } from 'lit';
import { property } from 'lit/decorators.js';
import { MyHeaderComponentStyles } from '../core/my-header.styles';
import { IMyHeaderComponent } from '../core/MyHeader.interface';

/**
 * This is a short description of your component. Change me in [./src/my-header.ts](./src/my-header.ts#L6-42) in the JSDoc above the Component Class.
 *
 * * Updating these docs in the ts file will generate a new README.md file at the package root in the pre-commit hook.
 * * Properties and other items added in JSDoc will be appended below the final line of this JSDoc based on your component Composition.
 * * For more information about what is supported in README generation, [click here](https://github.com/runem/web-component-analyzer)
 *
 * ## Installation
 * ```bash
 * npm i -s @quincarter/my-header
 * ```
 * or with `yarn`
 * ```bash
 * yarn add @quincarter/my-header
 * ```
 *
 * # Web Component
 * * Use this method if you need to use my-header in its entirety
 * ## Imports
 * * if you just need the web component as-is
 * ```javascript
 * import '@quincarter/my-header';
 * ```
 * * If you need to rename the element for some reason, you can do this:
 * ```javascript
 *
 * import { MyHeader } from '@quincarter/my-header/MyHeader';
 *
 * // then define the component yourself with a custom tag name
 * customElements.define('foo-my-tag-here-bar', MyHeader);
 *
 * ```
 *
 * ## WC Usage Example
 * ```html
 * <my-header my-my-header-title="testing this attribute works">
 * </my-header>
 * ```
 *
 * # Core
 * * Use this method if you need to use pieces of my-header, but you don't need the entire web component.
 * ## Imports
 * ```typescript
 * import { IMyHeaderComponent,  MyHeaderComponentStyles } from '@quincarter/my-header/CoreMyHeaderComponent';
 * ```
 *
 * ## Core Usage Example
 * ### Core Interface
 * ```typescript
 * import { LitElement } from 'lit';
 * import { IMyHeaderComponent } from '@quincarter/my-header/CoreMyHeaderComponent';
 *
 * export class FooBar extends LitElement implements IMyHeaderComponent {
 * // TODO: Implement Interface definition
 * }
 * ```
 *
 * ### Core Styles
 * ```typescript
 * import { LitElement } from 'lit';
 * import { MyHeaderComponentStyles } from '@quincarter/my-header/CoreMyHeaderComponent';
 *
 * export class BarFoo extends LitElement {
 *     static get styles(): CSSResult[] {
 *         return [
 *             MyHeaderComponentStyles,
 *             css`/* my css here /*`
 *         ];
 *     }
 * }
 * ```
 *
 *
 * @element my-header
 *
 *
 */
export class MyHeaderComponent
  extends LitElement
  implements IMyHeaderComponent
{
  /**
   * Determines the title value of the component
   * @attr my-header-title
   * @default my-header works!
   */
  @property({ type: String, attribute: 'my-header-title' })
  myHeaderTitle: string;

  static get styles(): CSSResult[] {
    return [MyHeaderComponentStyles];
  }

  constructor() {
    super();

    this.myHeaderTitle = 'my-header works!';
  }

  render(): HTMLTemplateResult {
    return html`
      <h1 class="my-header-test-color">${this.myHeaderTitle}</h1>
      <div>
        <p>
          Your component is located in <code>/packages/my-header</code> and the
          component and styles are already separated into their own files.
        </p>
        <p>
          This is just a test component generated using the component generator
        </p>
        <p>
          Edit the <code>my-header.ts</code> code or remove this code and use it
          as your own.
        </p>
      </div>
    `;
  }
}
