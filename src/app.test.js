import { render, fireEvent, screen, getByLabelText } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './app';
import Header from './header/header';
import Form from './form/form';
import Result from './result/result';
import Footer from './footer/footer';


test('Proof of life, can render header', () => {
  render(<App />);
  const headerElement = screen.getByText(/RESTy/i)
  expect(headerElement).toBeInTheDocument();
});

test('Results will render when form is submitted with GET request and valid url', () => {
  render(<App />);
  const form = screen.getByTestId('urlForm');
  const urlInput = screen.getByTestId('urlInput');
  const radioOptionGet = screen.getByTestId('selectGet');

  fireEvent.change(urlInput, {target: {value: 'https://pokeapi.co/api/v2/pokemon'}});
  fireEvent.change(radioOptionGet, {target: {value: 'get'}});
  fireEvent.submit(form);
  const resultsOutput = screen.getByTestId('results');
  expect(resultsOutput).toHaveTextContent();
});