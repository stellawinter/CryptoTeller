// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders CryptoTeller title', () => {
    render(<App />);
    const titleElement = screen.getByText(/CryptoTeller/i);
    expect(titleElement).toBeInTheDocument();
});
