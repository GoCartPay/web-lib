import React, { useEffect, useState } from 'react'

import { makeStyles } from '@mui/styles'
import { theme } from '../../Theme'

import { EntryBackgroundDrawer } from '../../components/EntryBackgroundDrawer/index'
import { SwipeableDrawerProps } from '@mui/material/SwipeableDrawer'
import { Typography } from '@mui/material';
import LegalFooter from '../../components/LegalFooter';
import Otp from '../../components/Otp';
import Box from '@mui/material/Box'
import { BigButton } from '../../components/BigButton';
import SmallButton from '../../components/SmallButton';
import ConfettiExplosion from 'react-confetti-explosion';

import './fade.css'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Spruce/Composites/NewCustomerEnrollment',
    component: EntryBackgroundDrawer,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
    },
    parameters: {
        design: {
            type: 'figma',
            url: 'https://www.figma.com/file/GDkKRn0hdzPqwrILgdvKr1/Enrollment-with-SPRUCE?node-id=3931%3A32528'

        }
    }
}

const useStyles: any = makeStyles({
    container: {
        backgroundColor: '#fff',
        position: 'absolute',
        bottom: '0',
        height: '100%',
        width: '100%',
        maxWidth: '430px',
        padding: '48px',
        borderRadius: '20px 20px 0 0',
        top: '250px',
        [theme.breakpoints.down('sm')]: {
            top: '300px'
        }
    },
    headerContent: {
        color: `${theme.palette.primary.contrastText}`,
        padding: `${theme.spacing(3)}`,
        '& h4': {
            fontWeight: '600',
            letterSpacing: '0.02em'
        }
    },
    subhead: {
        color: `${theme.palette.grey[400]}`,
        margin: '0'
    }
});

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args: SwipeableDrawerProps & { content: any, open: boolean, hasLoader: boolean }) => {

    const styles = useStyles();
    const [isOpen, setIsOpen] = React.useState(() => args.open);
    const [otp, setOtp] = useState('');
    const [warning, setWarning] = useState(false);
    const [confetti, setConfetti] = useState(false);
    const [finish, setFinish] = useState(false);

    const handleChangeOtp = (value: string) => {
        setOtp(value);
        if (value === '123456') {
            setFinish(true);
            setConfetti(true);
            setTimeout(() => {
                setConfetti(false);
            }, 1500)
        }
    }

    useEffect(() => {
        if (args.open !== isOpen) {
            setIsOpen(args.open);
        }
    }, [args.open]);

    const onClose = () => {
        setIsOpen(false);
    }

    const headerContent = (
        <div className={styles.headerContent}>
            <Typography variant="h4" sx={{ color: `${confetti ? theme.palette.grey[500] : theme.palette.primary}` }}>Thanks for choosing to enroll with GoCart.</Typography>
            <Typography variant="body1" className={styles.subhead} sx={{ color: `${confetti ? theme.palette.grey[500] : theme.palette.primary}` }}>GoCart will automatically recognize your email and send you a one-time code.</Typography>
        </div>
    );

    const content = (
        <>
            <div className={styles.container}>
                {!finish && <>
                    <div>
                        <Typography variant="h6">
                            Let’s validate your account
                        </Typography>
                        <Typography variant="body1">
                            Please enter the code sent to (•••) ••••• 554 to complete your enrollment.
                        </Typography>
                    </div>
                    <Box height={'48px'} my={2}>
                        <Otp onChange={handleChangeOtp} value={otp} />
                    </Box>
                    <Box sx={{
                        textAlign: 'center',
                        paddingBottom: 12
                    }}>
                        <SmallButton onClick={() => setWarning(true)} variant="outlined" labelText="More ways to validate" />
                        {warning && <Typography component="div" variant="caption" color="error" sx={{ marginTop: 2 }} >The more ways to validate component does not exist in Spruce (it lives in gocart currently) so it cannot be displayed in this composite.</Typography>}
                    </Box>
                </>}
                {finish && <>
                    <div>
                        <Typography variant="h6" sx={{ color: `${confetti ? theme.palette.grey[500] : theme.palette.primary}` }}>
                            Your GoCart details:
                        </Typography>
                        <Typography variant="caption" sx={{ color: `${confetti ? theme.palette.grey[500] : theme.palette.primary}` }}>
                            Full Name
                        </Typography>
                        <Typography variant="h6" sx={{ color: `${confetti ? theme.palette.grey[500] : theme.palette.primary}` }}>
                            alex@alexsmithfam.com
                        </Typography>
                        <Typography variant="body1" sx={{ color: `${confetti ? theme.palette.grey[500] : theme.palette.primary}` }}>
                            When you use this email in the future, GoCart will recognize it and make your payment process smooth and secure.
                        </Typography>
                        <Box sx={{ marginBottom: 8 }}>
                            <BigButton variant="contained" labelText="Got It" onClick={() => setIsOpen(false)} disabled={confetti ? true : false} />
                        </Box>
                    </div>
                </>}
                <Box sx={{ color: `${confetti ? theme.palette.grey[500] : theme.palette.primary}` }}>
                    <LegalFooter />
                </Box>
            </div>
        </>
    );

    return (
        <>
            {confetti && <>
                <Box sx={{
                    width: '100%',
                    marginTop: '180px',
                    left: '50%',
                    zIndex: '9999',
                    position: 'absolute',
                    animation: `fadeOut 1800ms`
                }} >
                    <ConfettiExplosion particleCount={150} particleSize={8} duration={2000} colors={['#22974A', '#2AD062', '#5EF391', '#CBFFDD']} force={0.75} floorHeight={300} floorWidth={425} />
                </Box>
            </>}
            <EntryBackgroundDrawer onOpen={() => { }} onClose={() => onClose()} open={isOpen} headerContent={headerContent} content={content} hasLoader={true} />
        </>
    )
}

export const Composite = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Composite.args = {
    content: '',
    hasLoader: true,
    open: true
}
