import { Box, Card, Divider, FormControl, Grid, IconButton, InputLabel, Paper, TextareaAutosize, Typography } from '@mui/material'
import React from 'react'
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import AppHeader from '../../components/AppHeader'
import { Stack } from '@mui/system';
import { Button } from '../../components/common/Button';
import { DeleteOutline, EditOutlined } from '@mui/icons-material';
import { Avatar } from '../../components/common/Avatar';
import { Chip } from '../../components/common/Chip';
import { BootstrapInput } from '../../components/common/BootstrapInput';

type Props = {}

const Profile = (props: Props) => {
    return (
        <Box sx={{ flexDirection: 'column', height: '100vh' }}>
            <AppHeader />
            <Stack marginLeft={2} direction={'row'} alignItems='center' gap={2}>
                <IconButton>
                    <MenuRoundedIcon />
                </IconButton>
                <Typography variant='h6'>Profile</Typography>
            </Stack>
            <Paper sx={{ flexGrow: '1', m: 1 }}>
                <Stack direction={'column'}>
                    <Box>
                        <Button sx={{ float: 'right', mx: 4, my: 3, mb: 0 }} variant='contained'>Download Resume</Button>
                    </Box>
                    <Stack sx={{ padding: 2 }} direction={{ xl: 'row', lg: 'row', md: 'row', }}>
                        <Box flex={3} padding={2}>
                            <Card title='test' sx={{ mb: 2 }}>
                                <Stack divider={<Divider variant='middle' />}>
                                    <Stack direction={'row'} paddingX={'20px'} paddingY={'14px'} alignItems={'center'} justifyContent={'space-between'}>
                                        <Typography variant='subtitle1'>Personal Details</Typography>
                                        <IconButton><EditOutlined /></IconButton>
                                    </Stack>
                                    <Stack direction={'row'} alignItems={'center'} >
                                        <Avatar flex={1} sx={{ width: 82, height: 82, m: 3 }}> </Avatar>
                                        <Stack flex={2} justifyContent={'space-between'}>
                                            <Typography variant='subtitle1' mb={1}>John Doe</Typography>
                                            <Box>
                                                <Typography color="text.secondary" variant='body2'>
                                                    Software Engineer in New York, NY
                                                </Typography>
                                                <Typography color="text.secondary" variant='body2'>888-888-8888</Typography>
                                            </Box>
                                        </Stack>
                                    </Stack>
                                </Stack>
                            </Card>
                            <Card title='test' sx={{ mb: 2 }}>
                                <Stack divider={<Divider variant='middle' />}>
                                    <Stack direction={'row'} paddingX={'20px'} paddingY={'14px'} alignItems={'center'} justifyContent={'space-between'}>
                                        <Typography variant='subtitle1'>Skills</Typography>
                                        <IconButton><EditOutlined /></IconButton>
                                    </Stack>
                                    <Stack direction={'row'} alignItems={'center'} useFlexGap flexWrap="wrap" >
                                        <Chip sx={{ m: 2 }} label="Front End" onDelete={() => { }} />
                                        <Chip sx={{ m: 2 }} label="Machine Learning" onDelete={() => { }} />
                                        <Chip sx={{ m: 2 }} label="C++" onDelete={() => { }} />
                                    </Stack>
                                </Stack>
                            </Card>
                            <Card title='test' sx={{ mb: 2 }}>
                                <Stack divider={<Divider variant='middle' />}>
                                    <Stack direction={'row'} paddingX={'20px'} paddingY={'14px'} alignItems={'center'} justifyContent={'space-between'}>
                                        <Typography variant='subtitle1'>Job Preference</Typography>
                                        <IconButton><EditOutlined /></IconButton>
                                    </Stack>
                                    <Stack direction={'row'} alignItems={'center'} useFlexGap flexWrap="wrap" >
                                        <Chip sx={{ m: 2 }} label="Front End" onDelete={() => { }} />
                                        <Chip sx={{ m: 2 }} label="Machine Learning" onDelete={() => { }} />
                                        <Chip sx={{ m: 2 }} label="C++" onDelete={() => { }} />
                                    </Stack>
                                </Stack>
                            </Card>
                        </Box>
                        <Box flex={5} padding={2}>
                            <Card>
                                <Stack divider={<Divider variant='middle' />}>
                                    <Stack direction={'row'} paddingX={'20px'} paddingY={'14px'} alignItems={'center'} justifyContent={'space-between'}>
                                        <Typography variant='subtitle1'>Working Experience</Typography>
                                        <IconButton><EditOutlined /></IconButton>
                                    </Stack>
                                    <Stack direction={'row'} alignItems={'center'} >
                                        <Grid container spacing={2} padding={3}>
                                            <IconButton sx={{ position: 'absolute', right: 60 }}><DeleteOutline color='error' /></IconButton>
                                            <Grid item xs={5} md={5}>
                                                <FormControl variant="standard" sx={{ width: '100%' }}>
                                                    <InputLabel shrink>
                                                        Company Name
                                                    </InputLabel>
                                                    <BootstrapInput defaultValue="XYZ Company" />
                                                </FormControl>
                                            </Grid>
                                            <Grid item xs={5} md={5}>
                                                <FormControl variant="standard" sx={{ width: '100%' }}>
                                                    <InputLabel shrink>
                                                        Job Title
                                                    </InputLabel>
                                                    <BootstrapInput defaultValue="Software Engineer" />
                                                </FormControl>
                                            </Grid>
                                            <Grid item xs={2.5} md={2.5}>
                                                <FormControl variant="standard" sx={{ width: '100%' }}>
                                                    <InputLabel shrink>
                                                        Start
                                                    </InputLabel>
                                                    <BootstrapInput defaultValue="1 Oct 2021" />
                                                </FormControl>
                                            </Grid>
                                            <Grid item xs={2.5} md={2.5}>
                                                <FormControl variant="standard" sx={{ width: '100%' }}>
                                                    <InputLabel shrink>
                                                        End
                                                    </InputLabel>
                                                    <BootstrapInput defaultValue="1 Oct 2023" />
                                                </FormControl>
                                            </Grid>
                                            <Grid item xs={5} md={5}>
                                                <FormControl variant="standard" sx={{ width: '100%' }}>
                                                    <InputLabel shrink>
                                                        Key Words
                                                    </InputLabel>
                                                    <BootstrapInput defaultValue="Software Engineer, Front End, " />
                                                </FormControl>
                                            </Grid>
                                            <Grid item xs={12} md={12}>
                                                <FormControl variant="standard" sx={{ width: '100%' }}>
                                                    <InputLabel shrink>
                                                        Job Responsibility
                                                    </InputLabel>
                                                    <BootstrapInput
                                                        multiline
                                                        minRows={6}
                                                        defaultValue="Served as Team leader of Android and iOS developers and worked as a developer for a US-based flight/hotel booking portal.Improved the conversion rate by 30% by incrementally improving the application based on User behavior.• Proposed, designed," />
                                                </FormControl>
                                            </Grid>
                                            <Box sx={{ width: '100%' }}><Button variant='outlined' sx={{ width: 200, float: 'right' }}>Improve with AI</Button></Box>
                                        </Grid>
                                    </Stack>
                                    <Stack direction={'row'} alignItems={'center'} >
                                        <Grid container spacing={2} padding={3}>
                                            <IconButton sx={{ position: 'absolute', right: 60 }}><DeleteOutline color='error' /></IconButton>
                                            <Grid item xs={5} md={5}>
                                                <FormControl variant="standard" sx={{ width: '100%' }}>
                                                    <InputLabel shrink>
                                                        Company Name
                                                    </InputLabel>
                                                    <BootstrapInput defaultValue="XYZ Company" />
                                                </FormControl>
                                            </Grid>
                                            <Grid item xs={5} md={5}>
                                                <FormControl variant="standard" sx={{ width: '100%' }}>
                                                    <InputLabel shrink>
                                                        Job Title
                                                    </InputLabel>
                                                    <BootstrapInput defaultValue="Software Engineer" />
                                                </FormControl>
                                            </Grid>
                                            <Grid item xs={2.5} md={2.5}>
                                                <FormControl variant="standard" sx={{ width: '100%' }}>
                                                    <InputLabel shrink>
                                                        Start
                                                    </InputLabel>
                                                    <BootstrapInput defaultValue="1 Oct 2021" />
                                                </FormControl>
                                            </Grid>
                                            <Grid item xs={2.5} md={2.5}>
                                                <FormControl variant="standard" sx={{ width: '100%' }}>
                                                    <InputLabel shrink>
                                                        End
                                                    </InputLabel>
                                                    <BootstrapInput defaultValue="1 Oct 2023" />
                                                </FormControl>
                                            </Grid>
                                            <Grid item xs={6} md={6}>
                                            </Grid>
                                            <Grid item xs={12} md={12}>
                                                <FormControl variant="standard" sx={{ width: '100%' }}>
                                                    <InputLabel shrink>
                                                        Job Responsibility
                                                    </InputLabel>
                                                    <BootstrapInput
                                                        multiline
                                                        minRows={6}
                                                        defaultValue="Served as Team leader of Android and iOS developers and worked as a developer for a US-based flight/hotel booking portal.Improved the conversion rate by 30% by incrementally improving the application based on User behavior.• Proposed, designed, developed, and presented a new Android application for a Government Bank with key banking features and modern architecture. The app is live with 1million+ downloads.• Used modern practices to secure the API calls from the app using AES, Biometrics, OAuth2. Worked with Dagger and RxJava

                                                        Served as Team leader of Android and iOS developers and worked as a developer for a US-based flight/hotel booking portal.Improved the conversion rate by 30% by incrementally improving the application based on User behavior.• Proposed, designed, developed, and presented a new Android application for a Government Bank with key banking features and modern architecture. The app is live with 1million+ downloads.• Used modern practices to secure the API calls from the app using AES, Biometrics, OAuth2. Worked with Dagger and RxJava
                                                        Served as Team leader of Android and iOS developers and worked as a developer for a US-based flight/hotel booking portal.Improved the conversion rate by 30% by incrementally improving the application based on User behavior.• Proposed, designed, developed, and presented a new Android application for a Government Bank" />
                                                </FormControl>
                                            </Grid>
                                            <Box sx={{ width: '100%' }}><Button variant='outlined' sx={{ width: 200, float: 'right' }}>Improve with AI</Button></Box>
                                        </Grid>
                                    </Stack>
                                </Stack>
                                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', p: 4 }}>
                                    <Button variant='contained' sx={{ width: 100, justifySelf: 'center' }}>Add New</Button>
                                </Box>
                                <Box>
                                    <Button variant='contained' sx={{ m: 1, width: 50, float: 'right' }}>Save</Button>
                                    <Button variant='outlined' sx={{ m: 1, width: 50, float: 'right' }}>Cancel</Button>
                                </Box>
                            </Card>
                        </Box>
                    </Stack>
                </Stack>
            </Paper>
        </Box >
    )
}

export default Profile