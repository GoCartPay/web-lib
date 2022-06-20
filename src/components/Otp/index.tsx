/* eslint-disable react/react-in-jsx-scope -- Unaware of jsxImportSource */
/** @jsxImportSource @emotion/react */
import React, { useState, KeyboardEvent, FocusEvent, ChangeEvent, ClipboardEvent} from 'react';
import { css } from '@emotion/react';
import { Paper } from '@mui/material';
import Box from '@mui/system/Box';

// keyCode constants
const BACKSPACE = 8;
const LEFT_ARROW = 37;
const RIGHT_ARROW = 39;
const DELETE = 46;
const SPACEBAR = 32;

const stylesCss = css`
  background-color: #FFFFFF;
  &:hover {
    background-color: #F1F2F5;
    input {
      background-color: #F1F2F5;
    }
  }
  input {
    width: 100%;
    height: 100%; 
    text-align: center;
    border: none;
    font-family: TWK Lausanne!important;
    color: #121317;
    font-weight: 500;
    font-size: 20px;
    line-height: 25px;
    &:focus {
      outline: none !important;
      border: none;
    }
    &::placeholder {
      font-size: 48px;
    }
  }
  .MuiLink-underlineAlways {
    font-weight: 800;
    &:hover {
      cursor: pointer;
    }
  }
`;

type OtpProps = {
  // the length of the OTP code, defaults to 6
  codeLength?: number
  // toggles styles for textfield when OTP is completed
  isComplete?: boolean
  // if OTP should be disabled
  isDisabled?: boolean
  //whether an error occured
  hasError?: boolean
  // function to be called on blur of the text field
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void,
  // fires when textfield value changes
  onChange: (value: string) => void,
  // function to be call when text field is focused on
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void,
  // the value of the input
  value: string
};

type borderState = {
  hasError?: boolean,
  isComplete?: boolean,
  isActive?: boolean
};

const getBorderColor = (state: borderState): string => {
  if (state.hasError){
    return '1px #DF2113';
  }
  if (state.isComplete){
    return '3px #2AD0624D';
  }
  if (state.isActive){
    return '1px #117B74CC';
  }
  return '1px #DCDEE5';
}


const Otp: React.FC<OtpProps> = ({
  codeLength,
  onChange,
  isComplete,
  isDisabled,
  hasError,
  value,
}) => {

  // used to determine which input should have focus
  const [focusedField, setFocusedField] = useState(0);
  const isActive = focusedField >= 0;

  // takes value passed in as prop and returns it into an array
  const getOtpValue = () => (value ? value.toString().split('') : []);

  // converts otp array into string and sends value back to onChange prop event
  const handleOtpChange = (otp: string[]) => {
    const otpValue = otp.join('');

    onChange(otpValue);
  };

  // updates otp array with next value then sends to helper func
  const changeCodeAtFocus = (value: string) => {
    const otp = getOtpValue();
    otp[focusedField] = value[0];

    handleOtpChange(otp);
  };

  const focusNextInput = () => setFocusedField(focusedField + 1);

  const focusPrevInput = () => {
    // prevents focusField getting set to negative number when first field is focused and users hits backspace or delete
    if (focusedField) setFocusedField(focusedField - 1);
  };

  // Handle cases of backspace, delete, left arrow, right arrow, space
  const handleOnKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.keyCode === BACKSPACE || e.key === 'Backspace') {
      e.preventDefault();
      changeCodeAtFocus('');
      focusPrevInput();
    } else if (e.keyCode === DELETE || e.key === 'Delete') {
      e.preventDefault();
      changeCodeAtFocus('');
    } else if (e.keyCode === LEFT_ARROW || e.key === 'ArrowLeft') {
      e.preventDefault();
      focusPrevInput();
    } else if (e.keyCode === RIGHT_ARROW || e.key === 'ArrowRight') {
      e.preventDefault();
      focusNextInput();
    } else if (e.keyCode === SPACEBAR || e.key === ' ' || e.key === 'Spacebar' || e.key === 'Space') {
      e.preventDefault();
    }
  };

  // Focus on input by index used by onPaste func to set the next active input to the following input
  const focusInput = (input: number) => {

    const activeInput = Math.max(Math.min(codeLength - 1, input), 0);

    setFocusedField(activeInput);
  };

  const handleOnPaste = (e: ClipboardEvent) => {
    e.preventDefault();

    if (isDisabled) return;

    const otp = getOtpValue();
    let nextActiveInput = focusedField;

    const pastedData = e.clipboardData
      .getData('text/plain')
      .slice(0, codeLength - focusedField)
      .split('');

    // Paste data from focused input onwards
    for (let pos = 0; pos < codeLength; ++pos) {
      if (pos >= focusedField && pastedData.length > 0) {
        otp[pos] = pastedData.shift();
        nextActiveInput++;
      }
    }
    setFocusedField(nextActiveInput);
    focusInput(nextActiveInput)
    handleOtpChange(otp);
  };
  // renders an array of individual input fields with value as the index of the otp value
  const renderInputs = () => {
    const inputs = [];
    const otp = getOtpValue();

    for (let i = 0; i < codeLength; i++) {
      inputs.push(
        <SingleOtpInput
          disabled={isDisabled}
          key={i}
          value={otp && otp[i]}
          // only focus on current active focus field
          shouldFocus={focusedField === i}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => changeCodeAtFocus(e.target.value)}
          onKeyDown={handleOnKeyDown}
          onInput={() => {
            // prevents focusField getting set to a number higher than code length when user is on last input 
            if (focusedField < codeLength - 1) focusNextInput()
          }}
          // when user clicks out of box reset focus field 
          onBlur={() => setFocusedField(-1)}
          // sets the focus field to current index
          onFocus={(e: FocusEvent<HTMLInputElement>) => {
            setFocusedField(i);
            e.target.select();
          }}
          onPaste={handleOnPaste}
        />
      )
    }
    return inputs;
  };

  return (
    <Paper
      style={{ display: 'flex', justifyContent: 'center', height: '100%' }}
      css={css`
        ${stylesCss};
        border: solid ${getBorderColor({ hasError, isComplete, isActive })};
        input {
          &::placeholder {
            color: ${focusedField >= 0 ? '#121317' : '#757575'};
          }
        }
      `}
      onClick={() => { 
        setFocusedField(0);
      }}
    >
      <Box
        display='flex'
        alignItems={'center'}
        justifyItems='center'
        borderRadius={1}
        width={1 / 2}
      >
        {renderInputs()}
      </Box>
    </Paper>
  );
};

type SingleOtpInputProps = {
  // should field be disabled determined based on props passed into OTP
  disabled: boolean
  // fires when input looses focus and updates focus field
  onBlur: (e: FocusEvent<HTMLInputElement>) => void
  // updates focus field and OTP value. Will also fire onChange handler passed as prop from OTP
  onChange: (e: ChangeEvent<HTMLInputElement>) => void,
  // sets focus field to index of input
  onFocus: (e: FocusEvent<HTMLInputElement>) => void,
  // Handle cases of backspace, delete, left arrow, right arrow, space
  onKeyDown: (e: KeyboardEvent<HTMLInputElement>) => void,
  // focuses on next input while otp length is less than code length
  onInput: (e: ChangeEvent<HTMLInputElement>) => void,
  // handles when users pastes in code 
  onPaste: (e: ClipboardEvent) => void,
  // determines when input field should have focus based on focusfield
  shouldFocus: boolean,
  // the single digit value for otp code. If no value will default to placeholder
  value?: string
};

const SingleOtpInput: React.FC<SingleOtpInputProps> = ({
  value,
  shouldFocus,
  ...props
}) => (
  <input
    maxLength={1}
    ref={(node) => {
      if (node !== null) {
        // after user inputs a value for input, shouldFocus updates and the next input should become active
        if (shouldFocus) {
          node.focus();
        }
      }
    }}
    // this prevents onClick handler form OTP component firing when user clicks on individual field
    onClick={(e) => e.stopPropagation()}
    placeholder={!shouldFocus && '-'}
    value={value ? value : ''}
    {...props}
  />
);

export default Otp;