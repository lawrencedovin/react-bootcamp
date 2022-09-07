import { render, screen } from '@testing-library/react';
import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });


// Smoke Tests: Checks if component renders.
it("renders without crashing", () => {
  render(<App />);
});

// Snapshot Tests: Checks if rendered HTML has expected result. 
// ie. values are correctly displayed to the webpage.
it("matches snapshop", () => {
  const {asFragment} = render(<App />);
  expect (asFragment()).toMatchSnapshot();
});