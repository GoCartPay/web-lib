import React, { useState } from 'react';
import Textfield, { TextFieldProps } from '@mui/material/TextField';
import { FormGroup, Paper } from '@mui/material';
import RemoveIcon from '@mui/icons-material/Remove';
import Box from '@mui/system/Box';

const otpOuterWrapperStyles = {
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
};

const textFieldSxStyles = {
  ".MuiInputBase-input": {
    textAlign: 'center !important',
    borderRadius: '8px',
    color: 'transparent',
    fontSize: '20px',
    lineHeight: '25px',
    letterSpacing: '8px',
  },
  "& .MuiOutlinedInput-root:hover": {
    "& > fieldset": {
      borderColor: '#DCDEE5',
      backgroundColor: '#F1F2F5',
    },
  },
  "& .MuiOutlinedInput-root.Mui-focused": {
    "& > fieldset": {
      borderColor: "#117B7433",
      backgroundColor: '#F5FAF9',
    }
  }
};

const otpInnerWrapperStyles = {
  position: 'absolute',
  display: 'flex',
  height: 1,
  width: 0.33,
  justifyContent: 'center',
  pointerEvents: 'none'
};

const otpDigitStyles = {
  flex: 1,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: 32,
  mx: 0.25,
  color: '#757575'
};

const generateOtp = (authCode: string, codeLength: number) => {
  const codeInputs = [];

  for (let x = 0; x < codeLength; x++) {
    codeInputs.push(
      // these styles are good to go
      <Box
        sx={otpDigitStyles}
      >
        {authCode[x] || <RemoveIcon sx={{ fontSize: 32 }} />}
      </Box>
    )
  }

  return codeInputs;
};

type OtpProps = TextFieldProps & {
  codeLength: number
};

const Otp: React.FC<OtpProps> = ({
  codeLength = 6,
  autoFocus = false,
  ...props
}) => {
  const [authCode, setAuthCode] = useState('');
  const [focusedField, setFocusedField] = useState(0);

  const codeInputHandler = (text: string, isBackspace: boolean) => {

    setAuthCode(text);

    // if (isBackspace) {
    //   setFocusedField(Math.max(focusedField - 1, 0));
    // } else if (isPasted) {
    //   setFocusedField(text.length);
    // } else {
    //   setFocusedField((focusedField + 1) < codeLength ? focusedField + 1 : -1);
    // }
  };

  return (
    <Paper>
      <FormGroup sx={otpOuterWrapperStyles}>
        <Textfield
          autoFocus={autoFocus}
          variant='outlined'
          fullWidth
          value={authCode}
          onChange={(e) => {
            codeInputHandler(e.target.value.substring(0, codeLength), e.target.value.length < authCode.length);
          }}
          inputProps={{
            maxLength: 6
          }}
          {...props}
          sx={textFieldSxStyles}
        />
        <Box sx={otpInnerWrapperStyles}>
          {generateOtp(authCode, codeLength)}
        </Box>
      </FormGroup>
    </Paper>
  );
};

export default Otp;