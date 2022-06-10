import * as React from 'react'
import Button, { ButtonProps } from '@mui/material/Button'

type MuiButtonProps = ButtonProps & {
  labelText: string
  variant?: ButtonProps['variant']
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

const MuiButton: React.FC<MuiButtonProps> = ({
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
