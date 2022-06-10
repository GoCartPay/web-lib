import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import LegalFooter from '.';

describe('Legal footer renders and behaves correctly', () => {
  it('renders with expected content', () => {
     const { container } = render(
      <LegalFooter/>
    );
    expect(container.firstChild).toMatchSnapshot();    
  });

  it('has the correct links to proper terms and privacy policy', () => {
    render(<LegalFooter/>);

    const termsLink = screen.getByRole('link', { name: 'Terms of Service'});
    const privacyLink = screen.getByRole('link', { name: 'Privacy Policy.'});

    expect(termsLink).toHaveAttribute('href', 'https://www.gocartpay.com/termsofuse');
    expect(privacyLink).toHaveAttribute('href', 'https://www.gocartpay.com/privacy/privacypolicy');
  })
})