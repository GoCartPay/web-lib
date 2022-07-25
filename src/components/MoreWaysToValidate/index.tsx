import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import { keyframes } from '@emotion/react';

import { BigButton } from '../BigButton';
import RadioGroup from '../RadioGroup';
import { Radio } from '../RadioGroup';

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`

const fadeOutDown = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
`


type MoreWaysToValidateProps = {
  /** whether loading icon should be displayed inside main button */
  isLoading?: boolean
  /** will show or hide component. component will fade in and out */
  isOpen: boolean
  /** callback func that fires when user clicks on enter new code*/
  onEnterNewCode: () => void
  /** callback func that fires when user cancels resending auth token */
  onCancel: () => void
  /** callback func that fires when user resends auth, gives access to auth type they choose */
  onResend: (otpMethod: string) => void
  /** radio options that get passed into radio group. These should have both a label and a string */
  radioOptions: Radio[]
  /** toggles whether to show success message */
  showSuccess?: boolean
  /** the success message to display to the user when showSuccess is true */
  successMessage: string
};

/**
 * Try Again OTP prompt to use when user wants to select a new way to verify or resend OTP code
 * @param {MoreWaysToValidateProps} MoreWaysToValidateProps Component properties
 * @returns {JSX.Element}
 */
const MoreWaysToValidate: React.FC<MoreWaysToValidateProps> = ({ 
  isLoading = false,
  isOpen,
  onEnterNewCode,
  onCancel,
  onResend,
  radioOptions, 
  showSuccess = false,
  successMessage,
}) => {

  const [selectedOTPMethod, setSelectedOTPMethod] = useState(radioOptions[0].value);
  const [fadeIn, setFadeIn] = useState(true);

  const handleRadioBtnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOTPMethod((event.target as HTMLInputElement).value)
  };

  const handleOnExit = () => setFadeIn(false);

  const handleOnCancel= () => { 
    handleOnExit();
    setTimeout(() => {onCancel()}, 400);
  };

  const handleResend = () => onResend(selectedOTPMethod);

  const handleEnterNewCode = () => {
    setTimeout(() => { onEnterNewCode()}, 400);
  };

  return isOpen ? (
    <Box
      sx={{ animation: `${fadeIn ? `${fadeInUp} 400ms` : `${fadeOutDown} 400ms`}` }}
    >
      <Typography variant='body1' sx={{ opacity: 0.6, mb: 2 }}>
        Where would you like to receive a new validation code?
      </Typography>
      <RadioGroup
        value={selectedOTPMethod}
        onChange={handleRadioBtnChange}
        radioOptions={radioOptions}
      />
      <Box sx={{ mt: 4, borderTop: 1, borderColor: '#DCDEE5', pt: 3.5 }}>
        {showSuccess &&
          <Box sx={{ my: 1.5 }}>
            <Alert
              severity="success"
              icon={<CheckBoxIcon sx={{ height: 32, width: 32 }} />}
              sx={{ borderRadius: '8px', height: '56px', display: 'flex', alignItems: 'center', lineHeight: '56px', fontWeight: 600 }}
            >
              {successMessage}
            </Alert>
          </Box>
        }
        <Box sx={{ my: 1.5 }}>
          <BigButton 
            variant="contained" 
            sx={{ height: '56px !important' }} 
            labelText={showSuccess ? 'Enter new code' : 'Resend code'} 
            onClick={showSuccess ?  handleEnterNewCode : handleResend}
          >
            {isLoading && <CircularProgress sx={{ color: '#ffffff' }} />}
          </BigButton>
        </Box>
        <Box sx={{ my: 1.5 }}>
          { !showSuccess &&
             <BigButton 
              variant="outlined" 
              sx={{ height: '56px !important' }} 
              labelText='Cancel' 
              onClick={handleOnCancel} 
            />
          }
        </Box>
      </Box>
    </Box>
  ) : null;
};

export default MoreWaysToValidate;