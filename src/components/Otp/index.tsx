/* eslint-disable react/react-in-jsx-scope -- Unaware of jsxImportSource */
/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';
import Textfield, { TextFieldProps } from '@mui/material/TextField';
import { FormGroup, Paper } from '@mui/material';
import { css } from '@emotion/react';
import RemoveIcon from '@mui/icons-material/Remove';
import Box from '@mui/system/Box';

const styles = {
  "&.MuiInput-root": {
    fontFamily: 'TWK Lausanne!important',
    textAlign: 'center !important'
  },
  // "&.MuiButton-text": {
  //   '&:hover': {
  //   },
  //   '&:focus': {
  //   },
  // },
  // "&.MuiButton-outlined": {
  //   '&:hover': {
  //   },
  //   '&:focus': {
  //   },
  // },
};
// -webkit-transform:scale(2.0, 1.0);
// -moz-transform:scale(2.0, 1.0);
// -ms-transform:scale(2.0, 1.0);
// -o-transform:scale(2.0, 1.0);
// transform:scale(2.0,1.0);
const cssStyles = css`
  display: flex;
  justify-content: flex;
  input {
    text-align: center !important;
    border-radius: 8px;
    color: transparent;
    font-family: TWK Lausanne !important;
    font-size: 20px;
    line-height: 25px;
    letter-spacing: 8px;
    font-weight: 500px;
  }
  .MuiFormGroup-root {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
`;

const generateOtp = (authCode: string, codeLength: number) => {
  const codeInputs = [];

  for (let x = 0; x < codeLength; x++){
    codeInputs.push(
      // these styles are good to go
    <Box
      sx={{
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 32,
        mx: 0.25
      }}
    >
    {authCode[x] || <RemoveIcon sx={{fontSize: 32 }}/>}
    </Box>
  )}

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
    <Paper css={cssStyles}>
      <FormGroup css={css`
         justify-items: center;
         justify-content: center;
         align-content: center;
         position: relative;
         flex-wrap: nowrap !important;
      `}>
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
          css={css`
          position: absolute;
          letter-spacing: 2.0em;
          outline: none;
          border: none;
          background: none;
          box-sizing: border-box;
          color: transparent;
          caret-color: transparent;
          `}
        />
        <Box sx={{
          position: 'absolute',
          display: 'flex',
          height: 1,
          width: 0.33,
          justifyContent: 'center',
          pointerEvents: 'none'
        }}>
          {generateOtp(authCode, codeLength)}
        </Box>
      </FormGroup>
    </Paper>
  );
};

export default Otp;