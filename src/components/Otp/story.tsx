import React, { useEffect, useState } from 'react'
import Otp from './index'
import Box from '@mui/material/Box';
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Spruce/Components/Otp',
  component: Otp,
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = () => {

  const [otp, setOtp] = useState('');
  const [errorOtp, setErrorOtp] = useState('');
  const [isComplete, setIsComplete] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleChangeOtp = (value: string) => setOtp(value);

  const handleChangeErrOtp = (value: string) => {
    setErrorOtp(value);
  }

  useEffect(() => {
      // check correct length first before triggering auth
      if (errorOtp.length === 6){
        // then check to see if it is correct code
        if (errorOtp === '123123') {
          setIsComplete(true);
          setIsError(false);
        } else {
          // if not then set error to true
          setIsError(true);
        }
      }
  },[errorOtp]);

  useEffect(() => {
    if (isError){
      setTimeout(() => {
        setIsError(false);
        setErrorOtp('');
      },1000)
    }
  },[isError]);

  return (
        <>
          <p>Please enter the code sent to the phone ending in 5554 to complete your enrollment.</p>
          <Box height={'48px'} my={2} width={400}>
            <Otp
              value={otp}
              onChange={handleChangeOtp}
            />
          </Box>
          <Box height={'48px'} my={2}  width={400}>
            <Otp
              codeLength={6}
              value={'123123'}
              onChange={handleChangeOtp}
              isDisabled
              isLoading
            />
          </Box>
          <Box height={'48px'} my={2} width={400}>
            <Otp
              codeLength={6}
              value={'123123'}
              onChange={handleChangeOtp}
              isComplete
              isDisabled
            />
          </Box>
          <Box height={'48px'} my={2} width={400}>
            <Otp
              codeLength={6}
              value={errorOtp}
              onChange={handleChangeErrOtp}
              hasError={isError}
              isComplete={isComplete}
              shouldFocus={!isError}
            />
          </Box>
        </>
  );
};

export const Default = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
};
