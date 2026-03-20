import { render, within } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, it, expect } from 'vitest';
import App from './App';

function renderApp(route = '/') {
  const { container } = render(
    <MemoryRouter initialEntries={[route]}>
      <App />
    </MemoryRouter>,
  );
  return within(container);
}

describe('App', () => {
  it('renders the sidebar', () => {
    const view = renderApp();
    expect(view.getByText('Michael Giver')).toBeInTheDocument();
  });

  it('renders the About page at /', () => {
    const view = renderApp('/');
    expect(view.getByRole('heading', { name: 'About Me' })).toBeInTheDocument();
  });

  it('renders the Resume page at /resume', () => {
    const view = renderApp('/resume');
    expect(view.getByText('Experience')).toBeInTheDocument();
  });

  it('renders the 404 page for unknown routes', () => {
    const view = renderApp('/nonexistent');
    expect(view.getByText('Page Not Found')).toBeInTheDocument();
  });

  it('redirects /about to /', () => {
    const view = renderApp('/about');
    expect(view.getByRole('heading', { name: 'About Me' })).toBeInTheDocument();
  });
});
