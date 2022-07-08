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
import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';
import CheckBoxIcon from '@mui/icons-material/CheckBox';

import './fade.css'

import RadioGroup from '../../components/RadioGroup';

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
// eslint-disable-next-line complexity
const Template = (args: SwipeableDrawerProps & { content: any, open: boolean, hasLoader: boolean }) => {

    const styles = useStyles();
    const [isOpen, setIsOpen] = React.useState(() => args.open);
    const [otp, setOtp] = useState('');
    const [openMoreWays, setOpenMoreWays] = useState(false);
    const [selectedOTPMethod, setSelectedOTPMethod] = useState('tel');
    const [isOTPResending, setIsOTPResending] = useState(false);
    const [resendSuccess, setResendSuccess] = useState(false);
    const [confetti, setConfetti] = useState(false);
    const [finish, setFinish] = useState(false);
    const [fadeIn, setFadeIn] = useState(true);

    const userPhone = '(•••) ••••• 554';
    const userEmail = 'p••l@philj.com';

    const radioOTPOptions = [
        { value: 'tel', label: `Send to ${userPhone}` },
        { value: 'email', label: `Send to ${userEmail}`}
    ];

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

    const handleRadioBtnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedOTPMethod((event.target as HTMLInputElement).value)
    };

    const handleOnExitOpenMoreWays = () => { 
        setFadeIn(false);
        setTimeout(() => {setOpenMoreWays(false)}, 400);
    };

    const handleResend = () => {
        setOtp('');
        if (!resendSuccess) {
            setIsOTPResending(true);
            setTimeout(() => {
                setIsOTPResending(false);
                setResendSuccess(true);
            }, 2000)
        } else {
           handleOnExitOpenMoreWays();
        }
    };

    const headerContent = (
        <div className={styles.headerContent}>
            <Typography variant="h4" sx={{ color: `${confetti ? theme.palette.grey[500] : theme.palette.primary}` }}>Thanks for choosing to enroll with GoCart.</Typography>
            <Typography variant="body1" className={styles.subhead} sx={{ color: `${confetti ? theme.palette.grey[500] : theme.palette.primary}` }}>GoCart will automatically recognize your email and send you a one-time code.</Typography>
        </div>
    );

    const content = (
        <>
            <div className={styles.container}>
                {!finish && !openMoreWays && <>
                    <div>
                        <Typography variant="h6">
                            Let’s validate your account
                        </Typography>
                        <Typography variant="body1">
                            Please enter the code sent to {selectedOTPMethod === 'tel' ? userPhone : userEmail} to complete your enrollment.
                        </Typography>
                    </div>
                    <Box height={'48px'} my={2}>
                        <Otp onChange={handleChangeOtp} value={otp} />
                    </Box>
                    <Box sx={{
                        textAlign: 'center',
                        paddingBottom: 12
                    }}>
                        <SmallButton
                            onClick={() => {
                                setOpenMoreWays(true);
                                setResendSuccess(false);
                                setFadeIn(true);
                            }}
                            variant="outlined"
                            labelText="More ways to validate"
                        />
                    </Box>
                </>}
                {openMoreWays &&
                    <Box
                        sx={{ animation: `${fadeIn ? 'fadeInUp 400ms' : 'fadeOutDown 400ms'}`}}
                    >
                        <Typography variant='body1' sx={{ opacity: 0.6, mb: 2 }}>
                            Where would you like to receive a new validation code?
                        </Typography>
                        <RadioGroup
                            value={selectedOTPMethod}
                            onChange={handleRadioBtnChange}
                            radioOptions={radioOTPOptions}
                        />
                        <Box sx={{ mt: 4, borderTop: 1, borderColor: '#DCDEE5', pt: 3.5 }}>
                            {resendSuccess &&
                                <Box sx={{ my: 1.5 }}>
                                    <Alert 
                                        severity="success" 
                                        icon={<CheckBoxIcon sx={{ height: 32, width: 32 }} />} 
                                        sx={{ borderRadius: '8px', height: '56px', display: 'flex', alignItems: 'center', lineHeight: '56px', fontWeight: 600 }}
                                    >
                                        Sent to {selectedOTPMethod === 'tel' ? userPhone : userEmail}
                                    </Alert>
                                </Box>
                            }
                            <Box sx={{ my: 1.5 }}>
                                <BigButton variant="contained" sx={{ height: '56px !important' }} labelText={resendSuccess ? 'Enter new code' : 'Resend code'} onClick={handleResend}>
                                    {isOTPResending && <CircularProgress sx={{ color: '#ffffff' }} />}
                                </BigButton>
                            </Box>
                            <Box sx={{ my: 1.5 }}>
                                {!resendSuccess && <BigButton variant="outlined" sx={{ height: '56px !important' }} labelText='Cancel' onClick={handleOnExitOpenMoreWays} />}
                            </Box>
                        </Box>
                    </Box>
                }
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
                {!openMoreWays && <Box sx={{ color: `${confetti ? theme.palette.grey[500] : theme.palette.primary}` }}>
                    <LegalFooter />
                </Box>}
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
            <EntryBackgroundDrawer 
                onOpen={() => { }} 
                onClose={() => onClose()} 
                open={isOpen} 
                headerContent={headerContent} 
                content={content} 
                hasLoader={true} 
            />
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
