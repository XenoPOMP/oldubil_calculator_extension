import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import Page from '@components/Page/Page';

import renderWithProviders from '@utils/renderWithProviders';
import skipTestCondition from '@utils/skipTestCondition';

/**
 * Test Page component.
 */

describe.skipIf(skipTestCondition('FRONTEND'))('Page component', () => {
  test('Child render', () => {
    renderWithProviders(
      <Page meta={{ title: 'Testing', description: '', keywords: '' }} noIndex>
        <h1>Main page testing</h1>
      </Page>,
      {
        useRedux: true,
        useRouter: true,
      },
    );

    expect(screen.getByText(/Main page testing/i)).toBeDefined();
  });
});
