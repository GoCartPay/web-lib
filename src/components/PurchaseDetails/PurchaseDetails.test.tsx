import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import PurchaseDetails from '.';

const merchantLogo = 'https://www.fisglobal.com/-/media/GoCart/img/logonew.png?sc_lang=en';

const purchaseDetails = [
  {
    label: 'GoCart',
    description: '3 Items',
    level: 1,
  },
  {
    label: 'Total',
    description: '$44.30',
    level: 2,
  },
  {
    label: 'Store Address',
    description: '5321 Florida Ave S\nLakeland, FL 33813',
    level: 3,
  }
]

describe('Purchase Details component works as expected', () => {
  it('Should render logo image and all purchase details content', () => {

    render(
      <PurchaseDetails logoSrc={merchantLogo} purchaseDetails={purchaseDetails}/>
    );
    const logo = screen.getByRole('img');
    expect(logo.getAttribute('src')).toBe(merchantLogo); // Expect logo to exist

    const text = screen.getAllByRole('heading')
    expect(text.length).toBe(4); // Expect three pairs of labels + Your Order title
  });

  it('Should render no logo image and all purchase details content', () => {

    render(
      <PurchaseDetails purchaseDetails={purchaseDetails}/>
    );
    const logo = screen.queryByRole('img');
    expect(logo).toBeNull(); // Expect logo to not exist

    const text = screen.getAllByRole('heading')
    expect(text.length).toBe(4); // Expect three pairs of labels + Your Order title
  });

  it('Should render only pairs of purchase details content', () => {
    const newPurchaseDetails = purchaseDetails;
    newPurchaseDetails[1].description = null;
    render(
      <PurchaseDetails purchaseDetails={newPurchaseDetails}/>
    );
    const logo = screen.queryByRole('img');
    expect(logo).toBeNull(); // Expect logo to not exist

    const text = screen.getAllByRole('heading')
    expect(text.length).toBe(3); // Expect two pairs of labels + Your Order title
  });

  it('Should render logo and only pairs of purchase details content', () => {
    const newPurchaseDetails = purchaseDetails;
    newPurchaseDetails[1].description = null;
    newPurchaseDetails[2].label = null;
    render(
      <PurchaseDetails logoSrc={merchantLogo} purchaseDetails={newPurchaseDetails}/>
    );
    const logo = screen.getByRole('img');
    expect(logo.getAttribute('src')).toBe(merchantLogo); // Expect logo to exist

    const text = screen.getAllByRole('heading')
    expect(text.length).toBe(2); // Expect one pairs of labels + Your Order title
  });
});
