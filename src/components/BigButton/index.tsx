import * as React from 'react'
import Button, { ButtonProps } from '@mui/material/Button'
import Box from '@mui/material/Box';

type BigButtonProps = ButtonProps & {
  // if a child is passed through this component, it will override the labelText prop. 
  // Component should only have children or labelText prop passed in, but not both
  labelText?: string
  variant?: ButtonProps['variant']
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

const BigButton: React.FC<BigButtonProps> = ({
  labelText,
  color,
  variant,
  children,
  ...muiProps
}: BigButtonProps) => {
  return (
    <Box sx={{
      '& button': {
        m: 1,
        width: '100%',
        height: 64,
        textTransform: 'capitalize',
        py: 2,
        px: 3,
        margin: 0,
        fontWeight: 600,
        letterSpacing: '-0.25px',
        position: 'relative',
        borderRadius: '8px',
        ...(muiProps.endIcon && {
          justifyContent: 'space-between'
        }),
        ...(variant !== 'contained' && {
          backgroundColor: 'white',
        }),
        ...(variant === 'contained' && {
          ':hover': {
            backgroundColor: 'rgba(18,19,23, 0.8)'
          }
        }),
        ':focus-visible': {
          border: '4px solid rgba(17, 123, 116, 0.2)',
          boxShadow: '0px 1px 2px rgba(18, 19, 23, 0.05), 0px 0px 4px #CFE5E3',
          backgroundClip: 'padding-box'
        }
      }
    }}>
      <Button
        color={color}
        variant={variant}
        focusRipple={false}
        {...muiProps}
      >
        {children || labelText}
      </Button>
    </Box >
  )
}


export { BigButton, BigButtonProps }
