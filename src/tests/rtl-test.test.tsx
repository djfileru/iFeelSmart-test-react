import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import React from 'react';
import Home from '../pages/home';

test("Should agreed a div contain 'It works.' inside", () => {
    render(<Home />);
    expect(screen.getByText('It works.')).toBeInTheDocument();
});
