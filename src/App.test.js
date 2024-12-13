import { render, screen } from '@testing-library/react';
import App from './App';
import App2 from './App2';

test('renders learn react link in App', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

// test('renders learn react link in App2', () => {
//   render(<App2 />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
