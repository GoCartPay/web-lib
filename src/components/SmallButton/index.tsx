import React from 'react';
import MuiButton, { MuiButtonProps2, MuiButtonProps } from "../MuiButton";
import styles  from './styles';

const SmallButton: React.FC<MuiButtonProps2> = ({
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
    {...muiProps}
  />
)

export default SmallButton;