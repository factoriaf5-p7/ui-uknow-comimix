import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import { AuthContext } from '../../context/AuthContext';
import { Popper } from '@mui/material';


 

const options = [
  { label: 'Profile', path: '/profile' },
  { label: 'Dashboard', path: '/dashboard' },
  { label: 'Logout' , path :'/login' },
];



const AvatarBtn = () => {
    const { logout } = useContext(AuthContext); 
    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef<HTMLDivElement>(null);
    const [selectedIndex, setSelectedIndex] = React.useState(0);


  const handleClick = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleMenuItemClick = (
    event: React.MouseEvent<HTMLLIElement, MouseEvent>,
    index: number,
  ) => {
    setSelectedIndex(index);
    setOpen(false);
  };

  const handleClose = (event: Event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target as HTMLElement)) {
      return;
    }
    setOpen(false);
  };

  const navigate = useNavigate()

  const handleLogout = () => {
    logout(); 
    navigate("/home")
  };

  return (
    <React.Fragment>
      <ButtonGroup
        variant="contained"
        ref={anchorRef}
        aria-label="avatar button"
        onClick={handleClick}
      >
        <Button startIcon={<AccountCircleIcon />} endIcon={<ArrowDropDownIcon />}/>
          
      </ButtonGroup>
      <Popper
        sx={{
          zIndex: 1,
        }}
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === 'bottom' ? 'center top' : 'center bottom',
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList id="split-button-menu" autoFocusItem>
                  {options.map((option, index) => (
                    <MenuItem
                      key={option.label}
                      selected={index === selectedIndex}
                      onClick={option.label === 'Logout' ? handleLogout : (event) => handleMenuItemClick(event, index)}
                    >
                      <Link to={option.path} style={{ textDecoration: 'none', color: 'inherit' }}>
                        {option.label}
                      </Link>
                    </MenuItem>
                  ))}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </React.Fragment>
  );
};
 
export default AvatarBtn;
 
