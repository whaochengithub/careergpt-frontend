import { Box, Card, Divider, FormControl, Grid, IconButton, InputLabel, Link, Paper, Typography } from '@mui/material'
import React, { useState } from 'react'
import AppHeader from '../../components/AppHeader'
import { Stack } from '@mui/system';
import { Button } from '../../components/common/Button';
import { DeleteOutline, EditOutlined } from '@mui/icons-material';
import { Avatar } from '../../components/common/Avatar';
import { Chip } from '../../components/common/Chip';
import { BootstrapInput } from '../../components/common/BootstrapInput';
import Nav from '../../components/Nav';

const Profile = () => {
    const [profileEditMode, setProfileEditMode] = useState(false);
    return (
        <Box sx={{ flexDirection: 'column', height: '100vh' }}>
            <AppHeader />
            <Nav />
            <Paper sx={{ flexGrow: '1', m: 1 }}>
                <Stack direction={'column'}>
                    <Box>
                        <Button sx={{ float: 'right', mx: 4, my: 3, mb: 0 }} variant='contained' shape='square'>Download Resume</Button>
                    </Box>
                    <Stack sx={{ padding: 2 }} direction={{ xl: 'row', lg: 'row', md: 'row', }}>
                        <Box flex={3} padding={2}>
                            <Card title='test' sx={{ mb: 2 }}>
                                <Stack divider={<Divider variant='middle' />}>
                                    <Stack direction={'row'} paddingX={'20px'} paddingY={'14px'} alignItems={'center'} justifyContent={'space-between'}>
                                        <Typography variant='subtitle1'>Profile</Typography>
                                        <IconButton onClick={() => setProfileEditMode(true)}><EditOutlined /></IconButton>
                                    </Stack>
                                    <Grid container alignItems={'center'} justifyContent={'center'} rowSpacing={1} marginBottom={2}>
                                        <Grid item xs={3} sm={3} md={3} lg={3}>
                                            <Avatar flex={1} sx={{ width: 82, height: 82, m: 3 }}> </Avatar>
                                        </Grid>
                                        <Grid item xs={9} sm={9} md={9} lg={9} paddingLeft={3}>
                                            <Stack flex={2} justifyContent={'space-between'}>
                                                <Typography variant='subtitle1' >John Doe</Typography>
                                                <Chip label="Open to market" variant="outlined" color='primary' sx={{ width: 105, height: 20 }} />
                                            </Stack>
                                        </Grid>
                                        {
                                            profileEditMode ? (
                                                <Grid container mx={3} rowGap={2}>
                                                    <Grid item xs={12} sm={12} md={12}>
                                                        <Typography variant='subtitle2' fontWeight={'bold'}>Email</Typography>
                                                        <BootstrapInput fullWidth value={'xxxx@gmail.com'} />
                                                    </Grid>
                                                    <Grid item xs={12} sm={12} md={12}>
                                                        <Typography variant='subtitle2' fontWeight={'bold'}>PhoneNumber</Typography>
                                                        <BootstrapInput fullWidth value={'+1 (555) 000-0000'} />
                                                    </Grid>
                                                    <Grid item xs={6} sm={6} md={6}>
                                                        <Typography variant='subtitle2' fontWeight={'bold'} >City</Typography>
                                                        <BootstrapInput>12/24</BootstrapInput>
                                                    </Grid>
                                                    <Grid item xs={6} sm={6} md={6}>
                                                        <Typography variant='subtitle2' fontWeight={'bold'}>State</Typography>
                                                        <BootstrapInput>234</BootstrapInput>
                                                    </Grid>
                                                    <Grid item xs={12} sm={12} md={12}>
                                                        <Typography variant='subtitle2' fontWeight={'bold'}>LinkedIn</Typography>
                                                        <BootstrapInput fullWidth value={'http://'} />
                                                    </Grid>
                                                    <Grid item xs={12} sm={12} md={12}>
                                                        <Typography variant='subtitle2' fontWeight={'bold'}>Resume</Typography>
                                                        <BootstrapInput fullWidth value={''} />
                                                    </Grid>
                                                    <Grid item xs={6} sm={6} md={6}>
                                                    </Grid>
                                                    <Grid item xs={6} sm={6} md={6}>
                                                        <Button variant='outlined' shape='square' onClick={() => setProfileEditMode(false)}>Cancel</Button>
                                                        <Button sx={{ ml: 2 }} variant='contained' shape='square' onClick={() => setProfileEditMode(false)}>Save</Button>
                                                    </Grid>
                                                </Grid>
                                            ) : (
                                                <>
                                                    <Grid item textAlign={'center'} xs={3} sm={3} md={3} lg={3} alignItems='center' justifyContent={'center'}>
                                                        <Typography>Email</Typography>
                                                    </Grid>
                                                    <Grid item xs={9} sm={9} md={9} lg={9} paddingLeft={3}>
                                                        <Typography>xxxxx@gmail.com</Typography>
                                                    </Grid>
                                                    <Grid item textAlign={'center'} xs={3} sm={3} md={3} lg={3} alignItems='center' justifyContent={'center'}>
                                                        <Typography>Phone</Typography>
                                                    </Grid>
                                                    <Grid item xs={9} sm={9} md={9} lg={9} paddingLeft={3}>
                                                        <Typography>000-000-0000</Typography>
                                                    </Grid>
                                                    <Grid item textAlign={'center'} xs={3} sm={3} md={3} lg={3} alignItems='center' justifyContent={'center'}>
                                                        <Typography>Location</Typography>
                                                    </Grid>
                                                    <Grid item xs={9} sm={9} md={9} lg={9} paddingLeft={3}>
                                                        <Typography>New York, NY</Typography>
                                                    </Grid>
                                                    <Grid item textAlign={'center'} xs={3} sm={3} md={3} lg={3} alignItems='center' justifyContent={'center'}>
                                                        <Typography>Linkedin</Typography>
                                                    </Grid>
                                                    <Grid item xs={9} sm={9} md={9} lg={9} paddingLeft={3}>
                                                        <Typography>https://www.linkedin.com/in/xyz</Typography>
                                                    </Grid>
                                                    <Grid item textAlign={'center'} xs={3} sm={3} md={3} lg={3} alignItems='center' justifyContent={'center'}>
                                                        <Typography>Resume</Typography>
                                                    </Grid>
                                                    <Grid item xs={9} sm={9} md={9} lg={9} paddingLeft={3}>
                                                        <Typography><Link>John Doe. pdf</Link></Typography>
                                                    </Grid>
                                                </>
                                            )
                                        }
                                    </Grid>
                                </Stack>
                            </Card>
                            <Card title='test' sx={{ mb: 2 }}>
                                <Stack divider={<Divider variant='middle' />}>
                                    <Stack direction={'row'} paddingX={'20px'} paddingY={'14px'} alignItems={'center'} justifyContent={'space-between'}>
                                        <Typography variant='subtitle1'>Work Preference</Typography>
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
                                        <Typography variant='subtitle1'>Education</Typography>
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
                                            <Box sx={{ width: '100%' }}><Button variant='outlined' sx={{ width: 200, float: 'right' }} shape='square'>Improve with AI</Button></Box>
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
                                            <Box sx={{ width: '100%' }}><Button variant='outlined' sx={{ width: 200, float: 'right' }} shape={'square'}>Improve with AI</Button></Box>
                                        </Grid>
                                    </Stack>
                                </Stack>
                                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', p: 4 }}>
                                    <Button variant='contained' sx={{ width: 100, justifySelf: 'center' }} shape={'square'}>Add New</Button>
                                </Box>
                                <Box>
                                    <Button variant='contained' sx={{ m: 1, width: 50, float: 'right' }} shape={'square'}>Save</Button>
                                    <Button variant='outlined' sx={{ m: 1, width: 50, float: 'right' }} shape={'square'}>Cancel</Button>
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