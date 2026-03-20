import { render, within } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import EducationItem from './EducationItem';

describe('EducationItem', () => {
  it('renders degree, field, school, and date range', () => {
    const { container } = render(
      <EducationItem
        degree="Ph.D."
        field="Physics"
        school="MIT"
        dateRange="2010 – 2015"
      />,
    );
    const view = within(container);

    expect(view.getByText('Ph.D.')).toBeInTheDocument();
    expect(view.getByText('Physics')).toBeInTheDocument();
    expect(view.getByText('MIT')).toBeInTheDocument();
    expect(view.getByText('2010 – 2015')).toBeInTheDocument();
  });
});
