import * as React from 'react'
import Button, { ButtonProps } from '@mui/material/Button'
import Box from '@mui/material/Box';
import { makeStyles } from '@mui/styles'

type MuiButtonProps = ButtonProps & {
  labelText?: string
  variant?: ButtonProps['variant']
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

const useStyles: any = makeStyles({
  hasIcon: {
    '& button': {
      justifyContent: 'space-between'
    }
  },
});

const MuiButton: React.FC<MuiButtonProps> = ({
  labelText,
  color,
  variant,
  ...muiProps
}: MuiButtonProps) => {
  const styles = useStyles();
  return (
    <Box sx={{
      '& button': {
        m: 1,
        width: '100%',
        maxWidth: '310px',
        textTransform: 'capitalize',
        py: 2,
        px: 3,
        borderRadius: 2,
        ...(muiProps.endIcon && {
          justifyContent: 'space-between'
        })
      }
    }}>
      <Button
        color={color}
        variant={variant}
        {...muiProps}
      >
        {labelText}
      </Button>
    </Box>
  )
}

export { MuiButton, MuiButtonProps }
