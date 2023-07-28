import { Drawer, IconButton, ListItemIcon, MenuItem, MenuList, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { Link, useLocation } from 'react-router-dom';

const Nav = ({ title }) => {
    const [open, setOpen] = useState(false);
    const [active, setActive] = useState('Dashboard');
    let location = useLocation();

    useEffect(() => {
        switch (location?.pathname) {
            case '/candidate/profile':
            case '/recruiter/profile':
                setActive('Profile');
                break;
            case '/dashboard':
                setActive('DashBoard');
                break;
            case '/setting':
                setActive('Setting');
                break;
            default:
                break;
        }
    }, [location]);
    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setOpen(open);
    };

    return (
        <Stack marginLeft={2} direction={'row'} alignItems='center' gap={2}>
            <IconButton onClick={() => setOpen(true)}>
                <MenuRoundedIcon />
            </IconButton>
            <Typography variant='h6'>{active}</Typography>
            <Drawer
                anchor={'left'}
                open={open}
                onClose={toggleDrawer(false)}
            >
                <MenuList>
                    <MenuItem>
                        <ListItemIcon>
                            {/* <SendIcon fontSize="small" /> */}
                        </ListItemIcon>
                        <Link to='/'><Typography variant="inherit" onClick={() => setActive('Dashboard')}>Dashboard</Typography></Link>
                    </MenuItem>
                    <MenuItem>
                        <ListItemIcon>
                            {/* <PriorityHighIcon fontSize="small" /> */}
                        </ListItemIcon>
                        <Link to='/setting'><Typography variant="inherit" onClick={() => setActive('Setting')}>Setting</Typography></Link>
                    </MenuItem>
                    <MenuItem>
                        <ListItemIcon>
                            {/* <PriorityHighIcon fontSize="small" /> */}
                        </ListItemIcon>
                        <Link to='/candidate/profile'><Typography variant="inherit" onClick={() => setActive('Profile')}>Profile</Typography></Link>
                    </MenuItem>
                    <MenuItem>
                        <ListItemIcon>
                            {/* <DraftsIcon fontSize="small" /> */}
                        </ListItemIcon>
                        <Typography variant="inherit" onClick={() => setActive('Interview Preparation')}>
                            Interview Preparation
                        </Typography>
                    </MenuItem>
                    <MenuItem>
                        <ListItemIcon>
                            {/* <DraftsIcon fontSize="small" /> */}
                        </ListItemIcon>
                        <Typography variant="inherit" onClick={() => setActive('Job Search')}>
                            Job Search
                        </Typography>
                    </MenuItem>
                    <MenuItem>
                        <ListItemIcon>
                            {/* <DraftsIcon fontSize="small" /> */}
                        </ListItemIcon>
                        <Typography variant="inherit" onClick={() => setActive('Payment')}>
                            Payment
                        </Typography>
                    </MenuItem>
                </MenuList>
            </Drawer>
        </Stack>
    )
}

export default Nav