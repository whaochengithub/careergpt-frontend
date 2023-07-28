import { Alert, Box, FormControl, FormHelperText, Grid, InputLabel, Link as MUILink, Snackbar, Stack, Typography } from '@mui/material'
import { Link } from "react-router-dom";
import React, { useState } from 'react'
import { BootstrapInput } from '../components/common/BootstrapInput'
import { Button } from '../components/common/Button'
import { Modal } from '../components/common/Modal'

const SignIn = () => {
    const [open, setOpen] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [showNotification, setShowNotification] = useState(false);

    const handleClose = () => {
        setOpen(false);
    };

    const handleNotificationClose = () => {
        setShowNotification(false);
    };

    const validateEmail = (email) => {
        if (String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            )) {
            return true;
        } else {
            return false;
        }
    };

    const handleSendCode = () => {
        setShowNotification(true);
    };

    return (
        <Grid container>
            <Grid item xs={6} sm={6} md={6} lg={6} sx={{ height: '100vh', backgroundColor: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Stack sx={{ width: 380 }} alignItems="center" gap={2}>
                    <Typography variant='h2' fontWeight={'bolder'}>Log In</Typography>
                    <Typography variant='subtitle2'>CareerGPT</Typography>
                    <FormControl variant="standard" sx={{ width: '100%' }}>
                        <InputLabel shrink htmlFor="siginin-username" required>
                            Username
                        </InputLabel>
                        <BootstrapInput id="siginin-username" sx={{ width: '100%' }} />
                    </FormControl>
                    <FormControl variant='standard' sx={{ width: '100%' }}>
                        <Button onClick={() => setOpen(true)} sx={{ position: 'absolute', right: 0, top: -10 }}><MUILink>Forgot your password?</MUILink></Button>
                        <InputLabel shrink htmlFor="siginin-password" required>
                            Password
                        </InputLabel>
                        <BootstrapInput id="siginin-password" sx={{ width: '100%' }} />
                    </FormControl>
                    <Button variant='contained' shape='square' sx={{ width: '100%' }}>Log In</Button>
                    <Typography>Don't have an account? <Link to="/signup">Sign Up</Link></Typography>
                </Stack>
            </Grid>
            <Grid item xs={6} sm={6} md={6} lg={6} sx={{ backgroundImage: `url("https://placehold.co/700x1000/orange/white/png")` }}>
            </Grid>
            <Modal
                width={700}
                title={'Reset Password Link'}
                open={open}
                onClose={handleClose}
                aria-labelledby="forgot-password-modal-title"
                aria-describedby="fortgot-password-modal-description"
                actionButtons={[
                    <Button key='send' variant='outlined' onClick={handleSendCode}>Send</Button>
                ]}
            >
                <FormControl variant='standard' sx={{ width: '100%' }}>
                    <InputLabel shrink htmlFor="siginin-password" required>
                        Send Reset Password Link to this Email:
                    </InputLabel>
                    <BootstrapInput
                        color='error'
                        type='email'
                        onChange={e => {
                            setEmailError(!validateEmail(e.target.value));
                        }}
                        id="siginin-password"
                        sx={{ width: '100%' }} />
                </FormControl>
                {emailError && <FormHelperText sx={{ color: 'red' }}>Invalid Email</FormHelperText>}
            </Modal>
            <Snackbar open={showNotification} autoHideDuration={2000} onClose={handleNotificationClose}>
                <Alert severity="success" sx={{ width: '100%' }}>
                    Link sent to your email!
                </Alert>
            </Snackbar>
            <Box sx={{ position: 'absolute', left: 10, top: 10 }}>
                <Typography variant='h5' fontWeight={'bold'}>Logo</Typography>
            </Box>
            <Box sx={{ position: 'absolute', left: 10, bottom: 10 }}>
                <Typography>© 2023 MOYI TECH</Typography>
            </Box>
        </Grid >
    )
}

export default SignIn