import React, { useState } from 'react';
import MoreWaysToValidate from '.';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Spruce/Components/MoreWaysToValidate',
  component: MoreWaysToValidate,
}

const userPhone = '(•••) ••••• 554';
const userEmail = 'p••l@philj.com';

const radioOptions = [
    { value: 'SMS', label: `Send to ${userPhone}` },
    { value: 'email', label: `Send to ${userEmail}`}
];

const Template = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [resendSuccess, setResendSuccess] = useState(false);
  const [authType, setAuthType] = useState('SMS');

  const handleResendOTP = (val: string) => {
    setIsLoading(true);
    setAuthType(val);
    setTimeout(() => {
      setIsLoading(false);
      setResendSuccess(true);
    },1000);
  };

  const handleEnterNewCode = () => {
    setIsOpen(false);
    setResendSuccess(false);
  };

  if (!isOpen) return <button onClick={() => setIsOpen(true)}>Open</button>;

  return (
    <div style={{ maxWidth: '327px', margin: '0px auto' }}>
      <MoreWaysToValidate
        isLoading={isLoading}
        isOpen={isOpen}
        radioOptions={radioOptions}
        onCancel={() => setIsOpen(false)}
        onEnterNewCode={handleEnterNewCode}
        onResend={handleResendOTP}
        showSuccess={resendSuccess}
        successMessage={`Sent to ${authType === 'SMS' ? userPhone : userEmail}`}
      />
    </div>
  )
};

export const Default = Template.bind({})