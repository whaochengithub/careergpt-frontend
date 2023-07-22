import { Box, Grid, IconButton, Link, Paper, Stack, Typography } from '@mui/material'
import React from 'react'
import AppHeader from '../components/AppHeader'
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';

type Props = {}

const Setting = (props: Props) => {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
            <AppHeader />
            <Stack marginLeft={2} direction={'row'} alignItems='center' gap={2}>
                <IconButton>
                    <MenuRoundedIcon />
                </IconButton>
                <Typography variant='h6'>Setting</Typography>
            </Stack>
            <Paper sx={{ flexGrow: '1', m: 1, p: 3 }}>
                <Box sx={{ mb: 2 }}>
                    <Typography variant='subtitle1' sx={{ mb: 2 }} > Personal Information</Typography>
                    <Grid container spacing={2} width={400}>
                        <Grid item xs={4} md={4}>
                            <Typography variant='subtitle2'>Username</Typography>
                        </Grid>
                        <Grid item xs={4} md={4}>
                            <Typography variant='body1'>Test</Typography>
                        </Grid>
                        <Grid item xs={4} md={4}>
                        </Grid>
                        <Grid item xs={4} md={4}>
                            <Typography variant='subtitle2'>Email</Typography>
                        </Grid>
                        <Grid item xs={4} md={4}>
                            <Typography>Test@gmail.com</Typography>
                        </Grid>
                        <Grid item xs={4} md={4}>
                            <Link href="#">Change Email</Link>
                        </Grid>
                        <Grid item xs={4} md={4}>
                            <Typography variant='subtitle2'>Password</Typography>
                        </Grid>
                        <Grid item xs={4} md={4}>
                            <Typography>XXXXXXXX</Typography>
                        </Grid>
                        <Grid item xs={4} md={4}>
                            <Link href="#">Change Password</Link>
                        </Grid>
                    </Grid>
                </Box>
                <Box>
                    <Typography variant='subtitle1' sx={{ mb: 2 }}>Credit</Typography>
                    <Grid container spacing={2} width={400}>
                        <Grid item xs={4} md={4}>
                            <Typography variant='subtitle2'>Total Credits</Typography>
                        </Grid>
                        <Grid item xs={4} md={4}>
                            <Typography>50</Typography>
                        </Grid>
                        <Grid item xs={4} md={4}>
                            <Link href="#">Add more Credits</Link>
                        </Grid>
                    </Grid>
                </Box>
            </Paper>
        </Box >
    )
}

export default Setting