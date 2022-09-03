import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';

import { TestTsComponentComponent } from './test-ts-component.js';
import './index.js';

describe('TestTsComponent', () => {
  let element: TestTsComponentComponent;
  beforeEach(async () => {
    element = await fixture(html`<test-ts-component></test-ts-component>`);
  });

  it('renders a card', () => {
    const card = element?.shadowRoot?.querySelector('.card');
    expect(card).to.exist;
  });

  it('renders an h1', () => {
    const h1 = element?.shadowRoot?.querySelector('h1');
    expect(h1).to.exist;
    expect(h1?.textContent).to.contain('test-ts-component');
  });

  it('passes the a11y audit', async () => {
    await expect(element)?.shadowDom?.to.be.accessible();
  });
});
