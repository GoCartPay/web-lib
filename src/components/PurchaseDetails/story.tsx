import React from 'react';
import PurchaseDetails, { PurchaseDetailsProps } from '.';

export default {
  title: 'Spruce/Components/PurchaseDetails',
  component: PurchaseDetails,
}

const purchaseDetails = [
  {
    label: 'California Fish Grill',
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
];

const logoSrc = 'https://media-dev.gocartpay.com/logo_0edb75d7-1161-4369-a375-d3955fee416f';


const Template = (args: PurchaseDetailsProps) => (
  <div style={{ maxWidth: '327px', margin: '0px auto' }}>
    <PurchaseDetails logoSrc={args.logoSrc} purchaseDetails={args.purchaseDetails} merchantName={args.merchantName} />
  </div>
);

export const Default = Template.bind({})

Default.args = {
  purchaseDetails: purchaseDetails,
  logoSrc,
  merchantName: 'California Fish Grill',
}
