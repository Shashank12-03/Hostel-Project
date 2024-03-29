import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Typography, List, ListItem, ListItemText, IconButton, Menu, MenuItem, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const NavBar = () => {
    const [screenSize, setScreenSize] = useState('');
    const [anchorEl, setAnchorEl] = useState(null);
    const [isLogIn, setIsLogIn] = useState(false);
    
    const handleMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleLogOut = () => {
        setIsLogIn(false); // Update login state to false on logout
        handleMenuClose(); // Close the menu after logout
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    useEffect(() => {
        const checkScreenSize = () => {
            if (window.matchMedia('(max-width: 576px)').matches) {
                setScreenSize('xs');
            } else {
                setScreenSize('');
            }
        };

        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);

        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);

    return (
        <div style={{ backgroundColor: '#000', color: '#fff', padding: '2px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography fontSize="29px" sx={{ml:'12px'}}>
                    Hostelname
                </Typography>
                
                {screenSize === 'xs' ? (
                    <IconButton onClick={handleMenuOpen} edge="end" color="inherit" aria-label="menu" sx={{mr:'2px'}}>
                        <MenuIcon />
                    </IconButton>
                ) : (
                    <div style={{ display: 'block', flexDirection: 'column' }}>
                        <List style={{ display: 'flex' }}>
                            <ListItem button to='/notices' >
                                <ListItemText primary="Notices" />
                            </ListItem>
                            <ListItem button to='/complaints' >
                                <ListItemText primary="Complaints" />
                            </ListItem>
                            <ListItem button to='/leaves'>
                                <ListItemText primary="Ask for leave" />
                            </ListItem>
                            <ListItem  button variant="outlined" component={Link} to='/logIn'>
                                Student Log in
                            </ListItem>
                            {!isLogIn && <ListItem  button variant="outlined" component={Link} to='/hostelLogIn'>
                                Hostel Log in
                            </ListItem>}
                            {isLogIn && <ListItem  button variant="outlined" component={Link} onClick={handleLogOut} to='/hostelLogIn'>
                                Hostel Log out
                            </ListItem>}
                        </List>
                    </div>
                )}
                <Menu
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={handleMenuClose}
                >
                    <MenuItem component={Link} to='/notices' onClick={handleMenuClose}>
                        <ListItemText primary="Notices" />
                    </MenuItem>
                    <MenuItem component={Link} to='/complaints' onClick={handleMenuClose}>
                        <ListItemText primary="Complaints" />
                    </MenuItem>
                    <MenuItem component={Link} to='/leaves' onClick={handleMenuClose}>
                        <ListItemText primary="Ask for leave" />
                    </MenuItem>
                    <MenuItem component={Link} to='/logIn' onClick={handleMenuClose}>
                        Student log in
                    </MenuItem>
                    {isLogIn && (
                        <MenuItem onClick={handleLogOut}>
                            Hostel log out
                        </MenuItem>
                    )}
                    {!isLogIn && (
                        <MenuItem component={Link} to='/hostelLogIn' onClick={handleMenuClose}>
                            Hostel log in
                        </MenuItem>
                    )}
                </Menu>
            </div>
        </div>
    );
};

export default NavBar;