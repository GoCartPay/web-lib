/* eslint-disable react/react-in-jsx-scope -- Unaware of jsxImportSource */
/** @jsxImportSource @emotion/react */
import React, { useRef, useState, KeyboardEvent, FocusEvent, ChangeEvent } from 'react';
import { css } from '@emotion/react';
import Textfield, { TextFieldProps } from '@mui/material/TextField';
import { FormGroup, Paper } from '@mui/material';
import RemoveIcon from '@mui/icons-material/Remove';
import Box from '@mui/system/Box';

// keyCode constants
const BACKSPACE = 8;
const LEFT_ARROW = 37;
const RIGHT_ARROW = 39;
const DELETE = 46;
const SPACEBAR = 32;

const otpOuterWrapperStyles = {
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
};

const textFieldSxStyles = ({ isComplete }: { isComplete: boolean }) => ({
  ".MuiInputBase-input": {
    color: 'transparent',
    fontSize: '20px',
    height: '48px',
  },
  "& .MuiOutlinedInput-root": {
    "& > fieldset": {
      border: isComplete ? 'solid 3px #2AD0624D' : undefined,
    },
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
      borderWidth: '3px',
      backgroundColor: '#F5FAF9',
    }
  },
  "& .MuiOutlinedInput-root.Mui-error": {
    "& > fieldset": {
      borderColor: '#DF2113',
    }
  },
});

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
};

const stylesCss = css`
  input {
    width: 100%;
    height: 100%; 
    text-align: center;
    border: solid 1px black;
    &:focus {
      outline: none !important;
      border: none;
    }
  }
  .MuiLink-underlineAlways {
    font-weight: 800;
    &:hover {
      cursor: pointer;
    }
  }
`;

type OtpProps = TextFieldProps & {
  // the length of the OTP code, defaults to 6
  codeLength?: number
  // toggles styles for textfield when OTP is completed
  isComplete?: boolean
  // function to be called on blur of the text field
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void,
  // fires when textfield value changes
  onChange: any,
  // function to be call when text field is focused on
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void,
  // the value of the input
  value: string
};

const Otp: React.FC<OtpProps> = ({
  value,
  codeLength,
  onChange,
}) => {

  // used to determine which input should have focus
  const [focusedField, setFocusedField] = useState(0);

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

  //focus on next input
  const focusNextInput = () => setFocusedField(focusedField + 1);

  // Focus on previous input
  const focusPrevInput = () => {
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
  // console.log(focusedField);
  // renders an array of individual input fields with value as the index of the otp value
  const renderInputs = () => {
    const inputs = [];
    const otp = getOtpValue();

    for (let i = 0; i < codeLength; i++) {
      inputs.push(
        <SingleOtpInput
          key={i}
          value={otp && otp[i]}
          shouldFocus={focusedField === i}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => changeCodeAtFocus(e.target.value)}
          onKeyDown={handleOnKeyDown}
          onInput={() => { 
            if (focusedField < codeLength -1) focusNextInput()
          }}
          // onBlur={() => setFocusedField(-1)}
          onFocus={(e: FocusEvent<HTMLInputElement>) => {
            setFocusedField(i);
            e.target.select();
          }}
        />
      )
    }
    return inputs;
  };

  return (
    <Paper style={{ display: 'flex', justifyContent: 'center' }}>
      <Box
        display='flex'
        alignItems={'center'}
        justifyItems='center'
        height={48}
        borderRadius={1}
        css={stylesCss}
        width={1 / 2}
      >
        {renderInputs()}
      </Box>
    </Paper>
  );
};

type SingleOtpInputProps = {
  value?: string
  shouldFocus: boolean,
  // onBlur: (e: FocusEvent<HTMLInputElement>) => void
  onChange: (e: ChangeEvent<HTMLInputElement>) => void,
  onFocus: (e: FocusEvent<HTMLInputElement>) => void,
  onKeyDown: (e: KeyboardEvent<HTMLInputElement>) => void,
  onInput: (e: ChangeEvent<HTMLInputElement>) => void
};

const SingleOtpInput: React.FC<SingleOtpInputProps> = ({
  value,
  shouldFocus,
  ...props
}) => {

  // const inputElem = useRef<HTMLInputElement | null>(null);
  return (
    <input
      maxLength={1}
      ref={(node) => {
        if (node !== null) {
          if (shouldFocus) { 
            node.focus();
          }
        }
      }}
      value={value ? value : ''}
      {...props}
    />
  )
};

export default Otp;