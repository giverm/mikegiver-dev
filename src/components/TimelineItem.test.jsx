import { render, within } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import TimelineItem from './TimelineItem';

function renderTimeline(props) {
  const { container } = render(<TimelineItem {...props} />);
  return within(container);
}

describe('TimelineItem', () => {
  it('renders title, organization, and date range', () => {
    const view = renderTimeline({
      title: 'Software Engineer',
      organization: 'Acme Corp',
      dateRange: 'Jan 2020 – Present',
    });

    expect(view.getByText('Software Engineer')).toBeInTheDocument();
    expect(view.getByText('Acme Corp')).toBeInTheDocument();
    expect(view.getByText('Jan 2020 – Present')).toBeInTheDocument();
  });

  it('renders bullet items when provided', () => {
    const view = renderTimeline({
      title: 'Engineer',
      organization: 'Acme',
      dateRange: '2020',
      items: ['Built features', 'Fixed bugs'],
    });

    expect(view.getByText('Built features')).toBeInTheDocument();
    expect(view.getByText('Fixed bugs')).toBeInTheDocument();
  });

  it('does not render a list when items is empty', () => {
    const { container } = render(
      <TimelineItem title="Engineer" organization="Acme" dateRange="2020" />,
    );

    expect(container.querySelector('ul')).toBeNull();
  });

  it('applies active class when active prop is set', () => {
    const { container } = render(
      <TimelineItem
        title="Engineer"
        organization="Acme"
        dateRange="2020"
        active
      />,
    );

    expect(container.querySelector('.timeline-dot-active')).toBeInTheDocument();
  });
});
