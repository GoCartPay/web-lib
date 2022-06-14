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
    color: #DCDEE5;
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

//     margin: ($base + 2) ($base + 2) 0 !important;

const generateOtp = (authCode: string, codeLength: number) => {
  const codeInputs = [];

  for (let x = 0; x < codeLength; x++){
    codeInputs.push(
      // these styles are good to go
    <Box css={css`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    `}>
      {/* <span>{authCode[x]}-</span> */}
      <RemoveIcon sx={{fontSize: 32 }}/>
    </Box>
  )}

  return codeInputs;
};

type OtpProps = TextFieldProps & {
  codeLength: number
};

const Otp: React.FC<OtpProps> = ({
  codeLength = 6,
  ...props 
}) => {
  const [authCode, setAuthCode] = useState('');

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
          variant='outlined'
          fullWidth
          value={authCode}
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
        // ref={inputRef}
        // onChange={onChange}
        // autoFocus
        />
        <Box sx={{
          position: 'absolute',
          display: 'flex',
          height: 1,
          width: 0.75,
          justifyContent: 'center'
        }}>
          {generateOtp(authCode, codeLength)}
        </Box>
      </FormGroup>
    </Paper>
  );
};

export default Otp;