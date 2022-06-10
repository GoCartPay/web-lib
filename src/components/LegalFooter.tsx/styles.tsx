import { css } from '@emotion/react';
import { theme } from '../../Theme';

const containerStyles = {
  pt: 1,
  borderTop: 1,
  borderColor: '#DCDEE5',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

// theme.spacing(1.25) -> 10px on scale of 1:8
// theme.spacing(1.75) -> 14px on scale of 1:8
// theme.typography.fontWeightBold} -> 700, might want to ask design to update token to 800
const legalFooterStyles = css`
  font-family: TWK Lausanne!important;
  font-size: ${theme.spacing(1.25)}!important;
  color: rgba(53, 57, 70, 0.6);
  font-weight: ${theme.typography.fontWeightRegular};
  line-height: ${theme.spacing(1.75)}!important;
  a {
    color: ${theme.palette.secondary.main};
    font-weight: 800;
    &:hover {
      cursor: pointer;
    }
  }
`;

export default {
  legalFooterStyles,
  containerStyles
};