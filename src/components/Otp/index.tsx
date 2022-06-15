import React, { useState } from 'react';
import Textfield, { TextFieldProps } from '@mui/material/TextField';
import { FormGroup, Paper } from '@mui/material';
import RemoveIcon from '@mui/icons-material/Remove';
import Box from '@mui/system/Box';
import Input from '@mui/material/Input';

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
  width: 0.545645,
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
  color: '#757575',
  ".MuiInputBase-input": {
    textAlign: 'center !important',
  }
  // border: 'solid'
};

const generateOtp = (authCode: string, codeLength: number, currentIndex: number) => {
  const codeInputs = [];

  for (let x = 0; x < codeLength; x++) {
    codeInputs.push(
      <Box
        sx={otpDigitStyles}
      >
        {  authCode[x] 
            ? authCode[x] 
            : currentIndex === x 
              ? <input
                  style={{height: '100%', width: '100%', zIndex:-1, border: 'none'}}
                /> 
              : <RemoveIcon sx={{fontSize: 32}}/>
        }
         {/* {authCode[x] || <RemoveIcon sx={{ fontSize: 32 }} />} */}
        {/* <Input value={authCode[x]} sx={otpDigitStyles}/> */}
      </Box>
    );
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

    if (isBackspace) {
      setFocusedField(Math.max(focusedField - 1, 0));
    } else {
      setFocusedField((focusedField + 1) < codeLength ? focusedField + 1 : -1);
    }
  };

  return (
    <Paper>
      <FormGroup sx={otpOuterWrapperStyles}>
        <Textfield
          // autoFocus={autoFocus}
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
          {generateOtp(authCode, codeLength, focusedField)}
        </Box>
      </FormGroup>
    </Paper>
  );
};

export default Otp;