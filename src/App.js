import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import { EditOutlined } from '@mui/icons-material';
import { Alert, Checkbox, Chip, Container, Divider, Drawer, Grid, Paper, Snackbar, Stack, TextField, useTheme } from '@mui/material';
import AppHeader from './components/AppHeader';

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
      <Button sx={{ m: 1 }} title={'Download Resume'} variant='text'>Download Resume</Button>
      <Paper sx={{ width: '100%', maxWidth: 360, p: 1, bgcolor: 'background.paper' }}>
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
            <Chip color="primary" label="Front End" onDelete={handleDelete} />
            <Chip label="Machine Learning" onDelete={handleDelete} />
            <Chip label="C++" onDelete={handleDelete} />
          </Stack>
        </Box>
        <Checkbox checked={true}>Yes</Checkbox>
        <Checkbox checked={true} color='secondary'>Yes</Checkbox>
        <TextField id="outlined-basic" label="Success" variant="outlined" color='success' />
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
