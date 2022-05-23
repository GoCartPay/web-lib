import * as React from 'react'
import Button, { ButtonProps } from '@mui/material/Button'

export type MuiButtonProps = {
    labelText: string
    color?: ButtonProps['color']
    variant?: ButtonProps['variant']
    muiProps?: ButtonProps
    onClick?: React.MouseEventHandler<HTMLAnchorElement> | React.FormEventHandler<HTMLInputElement>,
}

export type MuiButtonProps2 = ButtonProps & {
  labelText: string
  variant?: ButtonProps['variant']
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

export const MuiButton = ({
  labelText,
  color,
  variant,
  ...muiProps
}: MuiButtonProps2 ) => (
  <Button 
    color={color} 
    variant={variant} 
    {...muiProps}
  >
    {labelText}
  </Button>
)

export default MuiButton
