import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import Avatar from '@mui/material/Avatar';
import { EditOutlined } from '@mui/icons-material';
import { Alert, Checkbox, Divider, Drawer, FormControl, Grid, InputLabel, Paper, Snackbar, Stack, Step, StepLabel, Stepper, styled, Tab, Tabs } from '@mui/material';
import AppHeader from './components/AppHeader';
import { Button } from './components/common/Button';
import { Chip } from './components/common/Chip';
import { BootstrapInput } from './components/common/BootstrapInput';
import { Modal } from './components/common/Modal';
import Check from '@mui/icons-material/Check';

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}
function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

const QontoStepIconRoot = styled('div')(({ theme, ownerState }) => ({
  color: theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#eaeaf0',
  display: 'flex',
  height: 22,
  alignItems: 'center',
  ...(ownerState.active && {
    color: '#784af4',
  }),
  '& .QontoStepIcon-completedIcon': {
    color: '#784af4',
    zIndex: 1,
    fontSize: 18,
  },
  '& .QontoStepIcon-circle': {
    width: 8,
    height: 8,
    borderRadius: '50%',
    backgroundColor: 'currentColor',
  },
}));

function QontoStepIcon(props) {
  const { active, completed, className } = props;

  return (
    <QontoStepIconRoot ownerState={{ active }} className={className}>
      {completed ? (
        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
          <circle cx="8.81658" cy="8.72739" r="7.84405" fill="white" />
          <path fill-rule="evenodd" clip-rule="evenodd" d="M0.972534 8.72739C0.972534 4.39524 4.48443 0.883339 8.81658 0.883339C13.1487 0.883339 16.6606 4.39524 16.6606 8.72739C16.6606 13.0595 13.1487 16.5714 8.81658 16.5714C4.48443 16.5714 0.972534 13.0595 0.972534 8.72739ZM8.81658 2.30953C5.2721 2.30953 2.39872 5.1829 2.39872 8.72739C2.39872 12.2719 5.2721 15.1452 8.81658 15.1452C12.3611 15.1452 15.2344 12.2719 15.2344 8.72739C15.2344 5.1829 12.3611 2.30953 8.81658 2.30953ZM12.2492 6.28948L8.68376 11.2812L8.25953 11.8751L7.67563 11.4372L4.82325 9.29786L5.67896 8.15691L7.94745 9.85827L11.0887 5.46053L12.2492 6.28948Z" fill="#01A982" />
        </svg>
      ) : active ? (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
          <g clip-path="url(#clip0_230_119)">
            <circle cx="9.89374" cy="9.99058" r="9.38437" fill="white" />
            <path fill-rule="evenodd" clip-rule="evenodd" d="M0.509369 9.99058C0.509369 4.80773 4.7109 0.606201 9.89374 0.606201C15.0766 0.606201 19.2781 4.80773 19.2781 9.99058C19.2781 15.1734 15.0766 19.375 9.89374 19.375C4.7109 19.375 0.509369 15.1734 0.509369 9.99058ZM9.89374 2.17026C5.5747 2.17026 2.07343 5.67154 2.07343 9.99058C2.07343 14.3096 5.5747 17.8109 9.89374 17.8109C14.2128 17.8109 17.7141 14.3096 17.7141 9.99058C17.7141 5.67154 14.2128 2.17026 9.89374 2.17026ZM8.32968 9.99058C8.32968 9.12677 9.02994 8.42651 9.89374 8.42651C10.7576 8.42651 11.4578 9.12677 11.4578 9.99058C11.4578 10.8544 10.7576 11.5546 9.89374 11.5546C9.02994 11.5546 8.32968 10.8544 8.32968 9.99058ZM6.76562 9.99058C6.76562 8.26296 8.16613 6.86245 9.89374 6.86245C11.6214 6.86245 13.0219 8.26296 13.0219 9.99058C13.0219 11.7182 11.6214 13.1187 9.89374 13.1187C8.16613 13.1187 6.76562 11.7182 6.76562 9.99058ZM9.89374 8.42651C9.02994 8.42651 8.32968 9.12677 8.32968 9.99058C8.32968 10.8544 9.02994 11.5546 9.89374 11.5546C10.7576 11.5546 11.4578 10.8544 11.4578 9.99058C11.4578 9.12677 10.7576 8.42651 9.89374 8.42651ZM5.20156 9.99058C5.20156 7.39915 7.30232 5.29839 9.89374 5.29839C12.4852 5.29839 14.5859 7.39915 14.5859 9.99058C14.5859 12.582 12.4852 14.6828 9.89374 14.6828C7.30232 14.6828 5.20156 12.582 5.20156 9.99058ZM9.89374 6.86245C8.16613 6.86245 6.76562 8.26296 6.76562 9.99058C6.76562 11.7182 8.16613 13.1187 9.89374 13.1187C11.6214 13.1187 13.0219 11.7182 13.0219 9.99058C13.0219 8.26296 11.6214 6.86245 9.89374 6.86245Z" fill="#01A982" />
          </g>
          <defs>
            <clipPath id="clip0_230_119">
              <rect width="18.7687" height="18.7687" fill="white" transform="translate(0.509369 0.606201)" />
            </clipPath>
          </defs>
        </svg>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
          <g clip-path="url(#clip0_230_113)">
            <ellipse cx="9.92966" cy="10.1644" rx="9.38437" ry="9.55816" fill="white" />
            <path fill-rule="evenodd" clip-rule="evenodd" d="M0.545288 10.1644C0.545288 4.88554 4.74682 0.606201 9.92966 0.606201C15.1125 0.606201 19.314 4.88554 19.314 10.1644C19.314 15.4432 15.1125 19.7225 9.92966 19.7225C4.74682 19.7225 0.545288 15.4432 0.545288 10.1644ZM9.92966 2.19923C5.61062 2.19923 2.10935 5.76534 2.10935 10.1644C2.10935 14.5634 5.61062 18.1295 9.92966 18.1295C14.2487 18.1295 17.75 14.5634 17.75 10.1644C17.75 5.76534 14.2487 2.19923 9.92966 2.19923Z" fill="#E2E6EA" />
          </g>
          <defs>
            <clipPath id="clip0_230_113">
              <rect width="18.7687" height="19.1163" fill="white" transform="translate(0.545288 0.606201)" />
            </clipPath>
          </defs>
        </svg>
      )}
    </QontoStepIconRoot>
  );
}

const App = () => {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState(0);
  const [modalOpen, setModalOpen] = React.useState(false);
  const handleOpen = () => setModalOpen(true);
  const handleClose = () => setModalOpen(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setOpen(open);
  };

  const handleDelete = () => {
    console.info('You clicked the delete icon.');
  };

  const steps = ['Job', 'Summary'];

  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());

  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  return (
    <Box>
      <AppHeader />
      <Drawer
        anchor={'left'}
        open={open}
        onClose={toggleDrawer(false)}
      >
        <Box sx={{ minWidth: 100, p: 1 }}>
          Profile
        </Box>
      </Drawer>
      <MenuIcon sx={{ m: 2 }} onClick={() => setOpen(true)} />
      <Button sx={{ m: 1 }} title={'Improve with AI'} variant='contained'>Improve with AI</Button>
      <Button sx={{ m: 1 }} title={'Download Resume'} variant='outlined'>Download Resume</Button>
      <Button sx={{ m: 1 }} title={'Download Resume'} variant='contained' disabled>Download Resume</Button>
      <Button sx={{ m: 1 }} title={'Download Resume'} variant='outlined' disabled>Download Resume</Button>

      <Paper sx={{ maxWidth: 800, p: 1, m: 1 }}>
        <ul>
          <li>Served as Team leader of Android and iOS developers and worked as a developer for a US-based flight/hotel booking portal.Improved the conversion rate by 30% by incrementally improving the application based on User behavior.• Proposed, designed, developed, and presented a new Android application for a Government Bank with key banking features and modern architecture. The app is live with 1million+ downloads.• Used modern practices to secure the API calls from the app using AES, Biometrics, OAuth2. Worked with Dagger and RxJava.</li>
          <li>testesServed as Team leader of Android and iOS developers and worked as a developer for a US-based flight/hotel booking portal. Improved the conversion rate by 30% by incrementally improving the application based on User behavior. • Proposed, designed, developed, and presented a new Android application for a Government Bank with key banking features and modern architecture. The app is live with 1million+ downloads. • Used modern practices to secure the API calls from the app using AES, Biometrics, OAuth2. Worked with Dagger and RxJava.tsets</li>
          <li>Skills: Android · Retrofit · Guava · Model-view-viewmodel (MVVM) · Dagger (Software) · Git · RxJava · Software Development</li>
        </ul>
      </Paper>

      <Paper sx={{ width: '100%', maxWidth: 360, m: 1, p: 1, bgcolor: 'background.paper' }}>
        <Box sx={{ my: 3, mx: 2 }}>
          <Grid container alignItems="center">
            <Grid item xs>
              <Typography gutterBottom fontWeight={'bold'} component="div">
                Skills
              </Typography>
            </Grid>
            <Grid item>
              <EditOutlined />
            </Grid>
          </Grid>
          <Typography color="text.secondary" variant="body2">
            Skills are the expertise, talent, and understanding needed to do a job or task. "Job" doesn't just mean a profession here, either. There are many different types of skills that can help you succeed at all aspects of your life whether it's school, work, or even a sport or hobby.
          </Typography>
        </Box>
        <Divider variant="middle" />
        <Box sx={{ m: 2 }}>
          <Stack direction="row" spacing={1}>
            <Chip label="Front End" onDelete={handleDelete} />
            <Chip label="Machine Learning" onDelete={handleDelete} />
            <Chip label="C++" onDelete={handleDelete} />
          </Stack>
        </Box>
        <Checkbox checked={true}>Yes</Checkbox>
        <Checkbox checked={true} color='secondary'>Yes</Checkbox>
        <FormControl variant="standard">
          <InputLabel shrink htmlFor="bootstrap-input" required>
            Bootstrap
          </InputLabel>
          <BootstrapInput defaultValue="react-bootstrap" id="bootstrap-input" sx={{ width: 200 }} />
        </FormControl>
        <Snackbar open={true} autoHideDuration={6000}>
          <Alert severity="success" sx={{ width: '100%' }}>
            This is a success message!
          </Alert>
        </Snackbar>
        <Box sx={{ mt: 3, ml: 1, mb: 1 }}>
          <Avatar sx={{ m: 1 }}> </Avatar>
        </Box>
      </Paper>

      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Software Engineer" {...a11yProps(0)} />
          <Tab label="Python Developer" {...a11yProps(1)} />
          <Tab label="QA Tester" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        Software Engineer
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        Python Developer
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        QA Tester
      </CustomTabPanel>

      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        width={700}
        title={'Add New Position'}
        open={modalOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        actionButtons={[
          <Button variant='outlined' onClick={handleBack}>Back</Button>,
          <Button variant='outlined' onClick={handleNext}>Next</Button>
        ]}
      >
        <Box sx={{ width: '100%' }}>
          <Stepper activeStep={activeStep}>
            {steps.map((label, index) => {
              const stepProps = {};
              const labelProps = {};
              return (
                <Step key={label} {...stepProps}>
                  <StepLabel StepIconComponent={QontoStepIcon} sx={{ display: 'flex', flexDirention: 'column' }} {...labelProps}>{label}</StepLabel>
                </Step>
              );
            })}
          </Stepper>
          <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography>
        </Box>
      </Modal>

      <Alert severity="info" sx={{ mt: 5, width: '100%' }}>
        This is a info message!
      </Alert>
      <Alert severity="warning" sx={{ width: '100%' }}>
        This is a warning message!
      </Alert>
      <Alert severity="error" sx={{ mb: 10, width: '100%' }}>
        This is a error message!
      </Alert>
    </Box>
  );
}

export default App;
