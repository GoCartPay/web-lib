import React, { useEffect, useState } from 'react'

import { EntryBackgroundDrawer } from '../../components/EntryBackgroundDrawer/index'
import { SwipeableDrawerProps } from '@mui/material/SwipeableDrawer'
import { makeStyles } from '@mui/styles'
import { theme } from '../../Theme';
import { Typography } from '@mui/material';
import LegalFooter from '../../components/LegalFooter';
import Otp from '../../components/Otp';
import Box from '@mui/material/Box'
import SmallButton from '../../components/SmallButton';

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
    const handleChangeOtp = (value: string) => setOtp(value);

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
            <Typography variant="h4">Thanks for choosing to enroll with GoCart.</Typography>
            <Typography variant="body1" className={styles.subhead}>GoCart will automatically recognize your email and send you a one-time code.</Typography>
        </div>
    );

    const content = (
        <div className={styles.container}>
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
            <div>
                <SmallButton labelText="More ways to validate" />
            </div>
            <LegalFooter />
        </div>
    );

    return (
        <>
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
