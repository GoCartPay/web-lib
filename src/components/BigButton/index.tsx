import * as React from 'react'
import Button, { ButtonProps } from '@mui/material/Button'
import Box from '@mui/material/Box';

type MuiButtonProps = ButtonProps & {
  labelText?: string
  variant?: ButtonProps['variant']
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

const MuiButton: React.FC<MuiButtonProps> = ({
  labelText,
  color,
  variant,
  ...muiProps
}: MuiButtonProps) => {
  return (
    <Box sx={{
      '& button': {
        m: 1,
        width: '100%',
        maxWidth: '310px',
        height: 64,
        textTransform: 'capitalize',
        py: 2,
        px: 3,
        fontWeight: 600,
        letterSpacing: '-0.25px',
        position: 'relative',
        borderRadius: 2,
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
        {labelText}
      </Button>
    </Box >
  )
}


export { MuiButton, MuiButtonProps }
