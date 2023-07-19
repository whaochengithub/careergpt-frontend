import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import Avatar from '@mui/material/Avatar';
import { EditOutlined } from '@mui/icons-material';
import { Alert, Checkbox, Divider, Drawer, FormControl, Grid, InputLabel, Paper, Snackbar, Stack } from '@mui/material';
import AppHeader from './components/AppHeader';
import { Button } from './components/common/Button';
import { Chip } from './components/common/Chip';
import { BootstrapInput } from './components/common/BootstrapInput';

const App = () => {
  const [open, setOpen] = React.useState(false);


  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setOpen(open);
  };

  const handleDelete = () => {
    console.info('You clicked the delete icon.');
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
          <InputLabel shrink htmlFor="bootstrap-input">
            Bootstrap
          </InputLabel>
          <BootstrapInput defaultValue="react-bootstrap" id="bootstrap-input" />
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
