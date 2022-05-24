import React from 'react';
import MuiButton, { MuiButtonProps } from "../MuiButton";
import styles  from './styles';

const SmallButton: React.FC<MuiButtonProps> = ({
  labelText,
  variant,
  onClick,
  ...muiProps
}) =>
(
  <MuiButton
    labelText={labelText}
    onClick={onClick}
    variant={variant}
    sx={styles}
    centerRipple
    {...muiProps}
  />
)

export default SmallButton;