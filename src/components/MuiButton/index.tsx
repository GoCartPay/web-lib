import * as React from 'react'
import Button, { ButtonProps } from '@mui/material/Button'

export type MuiButtonProps = ButtonProps & {
  labelText: string
  variant?: ButtonProps['variant']
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

export const MuiButton = ({
  labelText,
  color,
  variant,
  ...muiProps
}: MuiButtonProps ) => (
  <Button 
    color={color} 
    variant={variant} 
    {...muiProps}
  >
    {labelText}
  </Button>
)

export default MuiButton
