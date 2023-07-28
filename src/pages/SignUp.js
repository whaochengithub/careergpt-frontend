import { Box, FormControl, Grid, InputLabel, MenuItem, Select, Stack, Typography } from '@mui/material'
import { Link, useNavigate } from "react-router-dom";
import React, { useState } from 'react'
import { BootstrapInput } from '../components/common/BootstrapInput'
import { Button } from '../components/common/Button'

const SignUp = () => {
    const [role, setRole] = useState('candidate');
    const navigate = useNavigate();
    const handleRoleChange = (e) => {
        setRole(e.target.value);
    };
    const handleSignUp = () => {
        if (role === 'candidate') {
            navigate("/candidate/profile");
        } else if (role === 'recruiter') {
            navigate("/recruiter/profile");
        } else {

        }
    };
    return (
        <Grid container>
            <Grid item xs={6} sm={6} md={6} lg={6} sx={{ height: '100vh', backgroundColor: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Stack sx={{ width: 380 }} alignItems="center" gap={2}>
                    <Typography variant='h2' fontWeight={'bolder'}>Sign Up</Typography>
                    <Typography variant='subtitle2'>CareerGPT</Typography>
                    <FormControl variant="standard" sx={{ width: '100%' }}>
                        <InputLabel shrink htmlFor="signup-username" required>
                            Username
                        </InputLabel>
                        <BootstrapInput id="signup-username" sx={{ width: '100%' }} />
                    </FormControl>
                    <FormControl variant='standard' sx={{ width: '100%' }}>
                        <InputLabel shrink htmlFor="signup-email" required>
                            Email
                        </InputLabel>
                        <BootstrapInput id="signup-email" sx={{ width: '100%' }} />
                    </FormControl>
                    <FormControl variant='standard' sx={{ width: '100%' }}>
                        <InputLabel shrink htmlFor="signup-password" required>
                            Password
                        </InputLabel>
                        <BootstrapInput id="siginin-password" sx={{ width: '100%' }} />
                    </FormControl>
                    <FormControl variant='standard' sx={{ width: '100%' }}>
                        <InputLabel shrink htmlFor="signup-reenter-password" required>
                            Reenter Password
                        </InputLabel>
                        <BootstrapInput id="siginin-reenter-password" sx={{ width: '100%' }} />
                    </FormControl>
                    <FormControl variant='standard' sx={{ width: '100%' }}>
                        <InputLabel shrink htmlFor="signup-password" required>
                            My Role
                        </InputLabel>
                        <Select label="Role" variant='standard' value={role} onChange={handleRoleChange}>
                            <MenuItem value={'candidate'}>Candidate</MenuItem>
                            <MenuItem value={'recruiter'}>Recruiter</MenuItem>
                            <MenuItem value={'admin'}>Admin</MenuItem>
                        </Select>
                    </FormControl>
                    <Button variant='contained' shape='square' sx={{ width: '100%' }} onClick={handleSignUp}>Sign Up</Button>
                    <Typography>Don't have an account? <Link to="/signin">Log In</Link></Typography>
                </Stack>
            </Grid>
            <Grid item xs={6} sm={6} md={6} lg={6} sx={{ backgroundImage: `url("https://placehold.co/700x1000/orange/white/png")` }}>
            </Grid>
            <Box sx={{ position: 'absolute', left: 10, top: 10 }}>
                <Typography variant='h5' fontWeight={'bold'}>Logo</Typography>
            </Box>
            <Box sx={{ position: 'absolute', left: 10, bottom: 10 }}>
                <Typography>© 2023 MOYI TECH</Typography>
            </Box>
        </Grid >
    )
}

export default SignUp