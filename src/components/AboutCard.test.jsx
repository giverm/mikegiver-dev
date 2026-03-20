import { render, within } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import AboutCard from './AboutCard';

describe('AboutCard', () => {
  it('renders title and children', () => {
    const { container } = render(
      <AboutCard title="My Title" icon={<span>icon</span>}>
        <p>Card content</p>
      </AboutCard>,
    );
    const view = within(container);

    expect(view.getByText('My Title')).toBeInTheDocument();
    expect(view.getByText('Card content')).toBeInTheDocument();
  });

  it('renders without a title', () => {
    const { container } = render(
      <AboutCard icon={<span>icon</span>}>
        <p>Just content</p>
      </AboutCard>,
    );

    expect(container.querySelector('h5')).toBeNull();
    expect(within(container).getByText('Just content')).toBeInTheDocument();
  });

  it('uses callout classes for callout variant', () => {
    const { container } = render(
      <AboutCard variant="callout" title="Callout" icon={<span>icon</span>}>
        <p>Content</p>
      </AboutCard>,
    );

    expect(container.querySelector('.about-callout')).toBeInTheDocument();
    expect(container.querySelector('.about-callout-icon')).toBeInTheDocument();
  });

  it('uses card classes by default', () => {
    const { container } = render(
      <AboutCard title="Card" icon={<span>icon</span>}>
        <p>Content</p>
      </AboutCard>,
    );

    expect(container.querySelector('.about-card')).toBeInTheDocument();
    expect(container.querySelector('.about-card-icon')).toBeInTheDocument();
  });
});
