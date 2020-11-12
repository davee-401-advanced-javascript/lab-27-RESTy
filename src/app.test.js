import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './app';


test('Proof of life, can render header', () => {
  render(<App />);
  const headerElement = screen.getByText(/RESTy/i)
  expect(headerElement).toBeInTheDocument();
});