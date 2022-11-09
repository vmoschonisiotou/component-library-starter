import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';

import { MyLayoutComponent } from '../src/my-layout';
import '../index.js';

describe('MyLayoutComponent', () => {
  let element: MyLayoutComponent;
  beforeEach(async () => {
    element = await fixture(html`<my-layout></my-layout>`);
  });

  it('renders an h1', () => {
    const h1 = element?.shadowRoot?.querySelector('.container');
    expect(h1).to.exist;
  });

  it('passes the a11y audit', async () => {
    await expect(element)?.shadowDom?.to.be.accessible();
  });
});
