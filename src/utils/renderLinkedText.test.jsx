import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import renderLinkedText from './renderLinkedText';

describe('renderLinkedText', () => {
  it('returns plain text when there are no links', () => {
    const result = renderLinkedText('Hello world');
    expect(result).toEqual(['Hello world']);
  });

  it('parses a markdown link into an anchor element', () => {
    const { container } = render(
      <p>{renderLinkedText('Visit [Example](https://example.com) today')}</p>,
    );

    const link = container.querySelector('a');
    expect(link).toBeInTheDocument();
    expect(link.textContent).toBe('Example');
    expect(link.getAttribute('href')).toBe('https://example.com');
    expect(link.getAttribute('target')).toBe('_blank');
    expect(link.getAttribute('rel')).toBe('noopener noreferrer');
  });

  it('handles multiple links', () => {
    const { container } = render(
      <p>
        {renderLinkedText('[One](https://one.com) and [Two](https://two.com)')}
      </p>,
    );

    const links = container.querySelectorAll('a');
    expect(links).toHaveLength(2);
    expect(links[0].textContent).toBe('One');
    expect(links[1].textContent).toBe('Two');
  });

  it('handles text with no links at all', () => {
    const result = renderLinkedText('No links here.');
    expect(result).toEqual(['No links here.']);
  });
});
