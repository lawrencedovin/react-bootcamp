import { render, screen } from '@testing-library/react';
import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });


// Smoke Tests
it("renders without crashing", () => {
  render(<App />);
});

// Snapshot Tests
it("matches snapshop", () => {
  const {asFragment} = render(<App />);
  expect (asFragment()).toMatchSnapshot();
});