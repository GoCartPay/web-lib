import { css } from '@emotion/react';
import { theme } from '../../Theme';

type BorderState = {
  hasError: boolean,
  isComplete: boolean,
  isActive: boolean
};

// none of these colors exist currently in theme
function getBorderColor(state: BorderState): string {
  if (state.hasError) return '1px #DF2113';
  if (state.isComplete) return '1px rgb(42, 208, 98)';
  if (state.isActive) return '1px #117B74CC';
  
  return '1px #DCDEE5';
}

const styles= ({ 
  isActive, 
  hasError, 
  isComplete, 
}:BorderState ) => {
  return css`
  display: flex;
  justify-content: center;
  height: 100%;
  border-radius: ${theme.spacing(1)} !important;
  border: solid ${getBorderColor({ hasError, isComplete, isActive})};
  outline: ${isComplete && '3px solid rgba(42, 208, 98, 0.3)'};
  &:hover {
    background-color: #F1F2F5;
    input {
      background-color: #F1F2F5;
    };
  }
  input {
    width: 100%;
    text-align: center;
    border: none;
    color: ${theme.palette.text.primary};
    font-weight: ${theme.typography.fontWeightMedium};
    font-size: ${theme.spacing(2.5)};
    line-height: ${theme.spacing(3.125)};
    &:focus {
      outline: none !important;
      border: none;
    }
    &::placeholder {
      font-size: ${theme.spacing(2.5)};
      color: ${isActive ? theme.palette.text.primary : theme.palette.grey[500]};
    }
  }
`;
}

export default styles;