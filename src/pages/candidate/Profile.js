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
import Select from 'react-select'

const Profile = () => {
    const [profileEditMode, setProfileEditMode] = useState(false);
    const [workPreferenceEditMode, setWorkPreferenceEditMode] = useState(false);
    const [educationEditMode, setEducationEditMode] = useState(false);
    const [skillEditMode, setSkillEditMode] = useState(false);
    const [aboutEditMode, setAboutEditMode] = useState(false);
    const [workExperienceEditMode, setWorkExperienceEditMode] = useState(false);

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
                                                    <Grid item paddingLeft={4} xs={3} sm={3} md={3} lg={3} alignItems='center' justifyContent={'center'}>
                                                        <Typography variant='subtitle2'>Email</Typography>
                                                    </Grid>
                                                    <Grid item xs={9} sm={9} md={9} lg={9} paddingLeft={3}>
                                                        <Typography>xxxxx@gmail.com</Typography>
                                                    </Grid>
                                                    <Grid item paddingLeft={4} xs={3} sm={3} md={3} lg={3} alignItems='center' justifyContent={'center'}>
                                                        <Typography variant='subtitle2'>Phone</Typography>
                                                    </Grid>
                                                    <Grid item xs={9} sm={9} md={9} lg={9} paddingLeft={3}>
                                                        <Typography>000-000-0000</Typography>
                                                    </Grid>
                                                    <Grid item paddingLeft={4} xs={3} sm={3} md={3} lg={3} alignItems='center' justifyContent={'center'}>
                                                        <Typography variant='subtitle2'>Location</Typography>
                                                    </Grid>
                                                    <Grid item xs={9} sm={9} md={9} lg={9} paddingLeft={3}>
                                                        <Typography>New York, NY</Typography>
                                                    </Grid>
                                                    <Grid item paddingLeft={4} xs={3} sm={3} md={3} lg={3} alignItems='center' justifyContent={'center'}>
                                                        <Typography variant='subtitle2'>Linkedin</Typography>
                                                    </Grid>
                                                    <Grid item xs={9} sm={9} md={9} lg={9} paddingLeft={3}>
                                                        <Typography>https://www.linkedin.com/in/xyz</Typography>
                                                    </Grid>
                                                    <Grid item paddingLeft={4} xs={3} sm={3} md={3} lg={3} alignItems='center' justifyContent={'center'}>
                                                        <Typography variant='subtitle2'>Resume</Typography>
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
                                        <IconButton onClick={() => setWorkPreferenceEditMode(true)}><EditOutlined /></IconButton>
                                    </Stack>
                                    {
                                        workPreferenceEditMode ? (
                                            <Grid container padding={3} rowGap={2}>
                                                <Grid item xs={12} sm={12} md={12}>
                                                    <Typography variant='subtitle2' fontWeight={'bold'}>Desired Job</Typography>
                                                    <BootstrapInput fullWidth value={'Software Engineer'} />
                                                </Grid>
                                                <Grid item xs={12} sm={12} md={12}>
                                                    <Typography variant='subtitle2' fontWeight={'bold'}>Work Authorization</Typography>
                                                    <Select options={[{ label: 'H1B', value: 'H1B' }, { label: 'Green Card', value: 'Green Card' }]} value={{ label: 'H1B', value: 'H1B' }} />
                                                </Grid>
                                                <Grid item xs={12} sm={12} md={12}>
                                                    <Typography variant='subtitle2' fontWeight={'bold'} >Open to Relocation</Typography>
                                                    <Select options={[{ label: 'Yes', value: 'Yes' }, { label: 'No', value: 'No' }]} value={{ label: 'Yes', value: 'Yes' }} />
                                                </Grid>
                                                <Grid item xs={6} sm={6} md={6}>
                                                </Grid>
                                                <Grid item xs={6} sm={6} md={6}>
                                                    <Button variant='outlined' shape='square' onClick={() => setWorkPreferenceEditMode(false)}>Cancel</Button>
                                                    <Button sx={{ ml: 2 }} variant='contained' shape='square' onClick={() => setWorkPreferenceEditMode(false)}>Save</Button>
                                                </Grid>
                                            </Grid>
                                        ) : (
                                            <Grid container m={3} rowGap={2}>
                                                <Grid item xs={3} sm={3} md={3} lg={3} alignItems='center' justifyContent={'center'}>
                                                    <Typography variant='subtitle2'>Desired Job</Typography>
                                                </Grid>
                                                <Grid item xs={9} sm={9} md={9} lg={9} paddingLeft={3}>
                                                    <Typography>Java Developer, Full-stack Developer</Typography>
                                                </Grid>
                                                <Grid item xs={3} sm={3} md={3} lg={3} alignItems='center' justifyContent={'center'}>
                                                    <Typography variant='subtitle2'>Work Auth</Typography>
                                                </Grid>
                                                <Grid item xs={9} sm={9} md={9} lg={9} paddingLeft={3}>
                                                    <Typography>H1B</Typography>
                                                </Grid>
                                                <Grid item xs={3} sm={3} md={3} lg={3} alignItems='center' justifyContent={'center'}>
                                                    <Typography variant='subtitle2'>Open to Relocation</Typography>
                                                </Grid>
                                                <Grid item xs={9} sm={9} md={9} lg={9} paddingLeft={3}>
                                                    <Typography>Yes</Typography>
                                                </Grid>
                                            </Grid>
                                        )
                                    }
                                </Stack>
                            </Card>
                            <Card title='test' sx={{ mb: 2 }}>
                                <Stack divider={<Divider variant='middle' />}>
                                    <Stack direction={'row'} paddingX={'20px'} paddingY={'14px'} alignItems={'center'} justifyContent={'space-between'}>
                                        <Typography variant='subtitle1'>Education</Typography>
                                        <IconButton onClick={() => setEducationEditMode(true)}><EditOutlined /></IconButton>
                                    </Stack>
                                    {
                                        educationEditMode ? (
                                            <>
                                                <Stack divider={<Divider variant='middle' />}>
                                                    <Grid container padding={3} rowGap={2}>
                                                        <Grid item xs={12} sm={12} md={12}>
                                                            <Typography variant='subtitle1' fontWeight={'bold'}>School</Typography>
                                                            <BootstrapInput fullWidth value={'New York University'} />
                                                        </Grid>
                                                        <Grid item xs={12} sm={12} md={12}>
                                                            <Typography variant='subtitle2' fontWeight={'bold'}>Degree</Typography>
                                                            <Select options={[{ label: 'Master', value: 'Master' }, { label: 'Bachelor', value: 'Bachelor' }]} value={{ label: 'Master', value: 'Master' }} />
                                                        </Grid>
                                                        <Grid item xs={12} sm={12} md={12}>
                                                            <Typography variant='subtitle2' fontWeight={'bold'}>Field of Study</Typography>
                                                            <BootstrapInput fullWidth value={'Computer Science'} />
                                                        </Grid>
                                                        <Grid item xs={6} sm={6} md={6}>
                                                            <Typography variant='subtitle2' fontWeight={'bold'} >Start</Typography>
                                                            <BootstrapInput>2018</BootstrapInput>
                                                        </Grid>
                                                        <Grid item xs={6} sm={6} md={6}>
                                                            <Typography variant='subtitle2' fontWeight={'bold'}>End</Typography>
                                                            <BootstrapInput>2020</BootstrapInput>
                                                        </Grid>
                                                    </Grid>
                                                    <Grid container padding={3} rowGap={2}>
                                                        <Grid item xs={12} sm={12} md={12}>
                                                            <Typography variant='subtitle1' fontWeight={'bold'}>School</Typography>
                                                            <BootstrapInput fullWidth value={'New York University'} />
                                                        </Grid>
                                                        <Grid item xs={12} sm={12} md={12}>
                                                            <Typography variant='subtitle2' fontWeight={'bold'}>Degree</Typography>
                                                            <Select options={[{ label: 'Master', value: 'Master' }, { label: 'Bachelor', value: 'Bachelor' }]} value={{ label: 'Master', value: 'Master' }} />
                                                        </Grid>
                                                        <Grid item xs={12} sm={12} md={12}>
                                                            <Typography variant='subtitle2' fontWeight={'bold'}>Field of Study</Typography>
                                                            <BootstrapInput fullWidth value={'Computer Science'} />
                                                        </Grid>
                                                        <Grid item xs={6} sm={6} md={6}>
                                                            <Typography variant='subtitle2' fontWeight={'bold'} >Start</Typography>
                                                            <BootstrapInput>2018</BootstrapInput>
                                                        </Grid>
                                                        <Grid item xs={6} sm={6} md={6}>
                                                            <Typography variant='subtitle2' fontWeight={'bold'}>End</Typography>
                                                            <BootstrapInput>2020</BootstrapInput>
                                                        </Grid>
                                                    </Grid>
                                                </Stack>
                                                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', p: 4 }}>
                                                    <Button variant='contained' sx={{ width: 100, justifySelf: 'center' }} shape={'square'}>Add New</Button>
                                                </Box>
                                                <Box>
                                                    <Button variant='contained' sx={{ m: 1, width: 50, float: 'right' }} shape={'square'} onClick={() => setEducationEditMode(false)}>Save</Button>
                                                    <Button variant='outlined' sx={{ m: 1, width: 50, float: 'right' }} shape={'square'} onClick={() => setEducationEditMode(false)}>Cancel</Button>
                                                </Box>
                                            </>
                                        ) : (
                                            <Grid container m={3} rowGap={2}>
                                                <Grid item xs={5} sm={5} md={5} lg={5} alignItems='center' justifyContent={'center'}>
                                                    <Typography variant='subtitle1'>XXX University</Typography>
                                                    <Typography variant='subtitle2'>Master in Computer Science</Typography>
                                                </Grid>
                                                <Grid textAlign={'center'} item xs={7} sm={7} md={7} lg={7} paddingLeft={3}>
                                                    <Typography variant='subtitle2'>2016 - 2020</Typography>
                                                </Grid>
                                                <Grid item xs={5} sm={5} md={5} lg={5} alignItems='center' justifyContent={'center'}>
                                                    <Typography variant='subtitle1'>XXX University</Typography>
                                                    <Typography variant='subtitle2'>Bachelor in Computer Science</Typography>
                                                </Grid>
                                                <Grid textAlign={'center'} item xs={7} sm={7} md={7} lg={7} paddingLeft={3}>
                                                    <Typography variant='subtitle2'>2016 - 2020</Typography>
                                                </Grid>
                                            </Grid>
                                        )
                                    }
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
                            <Card title='test' sx={{ mb: 2 }}>
                                <Stack divider={<Divider variant='middle' />}>
                                    <Stack direction={'row'} paddingX={'20px'} paddingY={'14px'} alignItems={'center'} justifyContent={'space-between'}>
                                        <Typography variant='subtitle1'>About Me</Typography>
                                        <IconButton onClick={() => setAboutEditMode(true)}><EditOutlined /></IconButton>
                                    </Stack>
                                    {
                                        aboutEditMode ? (
                                            <Stack padding={2}>
                                                <Typography variant='subtitle2'>Description</Typography>
                                                <BootstrapInput multiline value={'Served as Team leader of Android and iOS developers and worked as a developer for a US-based flight/hotel booking portal.Improved the conversion rate by 30% by incrementally improving the application based on User behavior.• Proposed, designed,'} />
                                                <Box>
                                                    <Button variant='contained' sx={{ m: 1, width: 50, float: 'right' }} shape={'square'} onClick={() => setAboutEditMode(false)}>Save</Button>
                                                    <Button variant='outlined' sx={{ m: 1, width: 50, float: 'right' }} shape={'square'} onClick={() => setAboutEditMode(false)}>Cancel</Button>
                                                </Box>
                                            </Stack>
                                        ) : (
                                            <Typography padding={2} color={'gray'}>I am a Software Engineer driven by curiosity and a determination to make a positive impact through technology. I am now seeking opportunities that will allow me to continue growing, collaborating with talented teams. I am a Software Engineer driven by curiosity and a determination to make a positive impact through technology. I am now seeking opportunities that will allow me to continue growing, collaborating with talented teams.</Typography>
                                        )
                                    }
                                </Stack>
                            </Card>
                            <Card>
                                <Stack>
                                    <Stack direction={'row'} paddingX={'20px'} paddingY={'14px'} alignItems={'center'} justifyContent={'space-between'}>
                                        <Typography variant='subtitle1'>Working Experience</Typography>
                                        <IconButton onClick={() => setWorkExperienceEditMode(true)}><EditOutlined /></IconButton>
                                    </Stack>
                                    <Divider variant='middle' />
                                    {
                                        workExperienceEditMode ? (
                                            <>
                                                <Stack divider={<Divider variant='middle' />}>
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
                                                    <Button variant='contained' sx={{ m: 1, width: 50, float: 'right' }} shape={'square'} onClick={() => setWorkExperienceEditMode(false)}>Save</Button>
                                                    <Button variant='outlined' sx={{ m: 1, width: 50, float: 'right' }} shape={'square'} onClick={() => setWorkExperienceEditMode(false)}>Cancel</Button>
                                                </Box>
                                            </>
                                        ) : (
                                            <Stack divider={<Divider variant='middle' />}>
                                                <Stack direction={'row'} alignItems={'center'} paddingY={3}>
                                                    <Avatar flex={1} sx={{ width: 47, height: 47, m: 2, mr: 4, alignSelf: 'flex-start' }}> </Avatar>
                                                    <Stack flex={2} sx={{ mt: 1 }} justifyContent={'space-between'}>
                                                        <Typography variant='subtitle1'>XYZ Company</Typography>
                                                        <Typography variant='subtitle2'>ABC Company</Typography>
                                                        <Typography variant='subtitle2' mb={1}>2020-2022      New York, NY</Typography>
                                                        <Typography component={'ul'} sx={{ pl: 1 }}>
                                                            <Typography color="text.secondary" variant='body2' component={'li'}>
                                                                Served as Team leader of Android and iOS developers and worked as a developer for a US-based flight/hotel booking portal.Improved the conversion rate by 30% by incrementally improving the application based on User behavior.• Proposed, designed, developed, and presented a new Android application for a Government Bank with key banking features and modern architecture. The app is live with 1million+ downloads.• Used modern practices to secure the API calls from the app using AES, Biometrics, OAuth2. Worked with Dagger and RxJava.
                                                            </Typography>
                                                            <Typography color="text.secondary" variant='body2' component={'li'}>
                                                                Served as Team leader of Android and iOS developers and worked as a developer for a US-based flight/hotel booking portal. Improved the conversion rate by 30% by incrementally improving the application based on User behavior. • Proposed, designed, developed, and presented a new Android application for a Government Bank with key banking features and modern architecture. The app is live with 1million+ downloads. • Used modern practices to secure the API calls from the app using AES, Biometrics, OAuth2. Worked with Dagger and RxJava.
                                                            </Typography>
                                                            <Typography color="text.secondary" variant='body2' component={'li'}>
                                                                Skills: Android · Retrofit · Guava · Model-view-viewmodel (MVVM) · Dagger (Software) · Git · RxJava · Software Development
                                                            </Typography>
                                                        </Typography>
                                                    </Stack>
                                                </Stack>
                                                <Stack direction={'row'} alignItems={'center'} paddingY={3}>
                                                    <Avatar flex={1} sx={{ width: 47, height: 47, m: 2, mr: 4, alignSelf: 'flex-start' }}> </Avatar>
                                                    <Stack flex={2} sx={{ mt: 1 }} justifyContent={'space-between'}>
                                                        <Typography variant='subtitle1' mb={1}>XYZ Company</Typography>
                                                        <Typography variant='subtitle2'>ABC Company</Typography>
                                                        <Typography variant='subtitle2' mb={1}>2020-2022      New York, NY</Typography>
                                                        <Typography component={'ul'} sx={{ pl: 1 }}>
                                                            <Typography color="text.secondary" variant='body2' component={'li'}>
                                                                Served as Team leader of Android and iOS developers and worked as a developer for a US-based flight/hotel booking portal.Improved the conversion rate by 30% by incrementally improving the application based on User behavior.• Proposed, designed, developed, and presented a new Android application for a Government Bank with key banking features and modern architecture. The app is live with 1million+ downloads.• Used modern practices to secure the API calls from the app using AES, Biometrics, OAuth2. Worked with Dagger and RxJava.
                                                            </Typography>
                                                            <Typography color="text.secondary" variant='body2' component={'li'}>
                                                                Served as Team leader of Android and iOS developers and worked as a developer for a US-based flight/hotel booking portal. Improved the conversion rate by 30% by incrementally improving the application based on User behavior. • Proposed, designed, developed, and presented a new Android application for a Government Bank with key banking features and modern architecture. The app is live with 1million+ downloads. • Used modern practices to secure the API calls from the app using AES, Biometrics, OAuth2. Worked with Dagger and RxJava.
                                                            </Typography>
                                                            <Typography color="text.secondary" variant='body2' component={'li'}>
                                                                Skills: Android · Retrofit · Guava · Model-view-viewmodel (MVVM) · Dagger (Software) · Git · RxJava · Software Development
                                                            </Typography>
                                                        </Typography>
                                                    </Stack>
                                                </Stack>
                                            </Stack>
                                        )
                                    }
                                </Stack>
                            </Card>
                        </Box>
                    </Stack>
                </Stack>
            </Paper>
        </Box >
    )
}

export default Profile