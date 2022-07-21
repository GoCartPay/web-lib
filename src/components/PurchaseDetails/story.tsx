import React from 'react';
import PurchaseDetails, { PurchaseDetailsProps } from '.';

export default {
  title: 'Spruce/Components/PurchaseDetails',
  component: PurchaseDetails,
}

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
];

const logoSrc = 'https://www.fisglobal.com/-/media/GoCart/img/logonew.png?sc_lang=en';


const Template = (args: PurchaseDetailsProps) => (
  <div style={{ maxWidth: '327px', margin: '0px auto' }}>
    <PurchaseDetails logoSrc={args.logoSrc} purchaseDetails={args.purchaseDetails} merchantName={args.merchantName} />
  </div>
);

export const Default = Template.bind({})

Default.args = {
  purchaseDetails: purchaseDetails,
  logoSrc,
  merchantName: 'GoCart',
}
