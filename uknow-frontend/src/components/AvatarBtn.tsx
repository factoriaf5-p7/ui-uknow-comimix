import React, { useContext, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import Paper from '@mui/material/Paper';
import ClickAwayListener from '@mui/material/ClickAwayListener';

import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { AuthContext } from '../context/AuthContex';

const options = [
  { label: 'Profile', path: '/profile' },
  { label: 'Dashboard', path: '/dashboard' },
  { label: 'Logout', path: '/login' },
];

const AvatarBtn = () => {
  const { logout } = useContext(AuthContext);
  const [open, setOpen] = useState(false);
  const anchorRef = useRef<HTMLDivElement>(null);
  const [selectedIndex, setSelectedIndex] = useState(0);

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

  const handleClose = () => {
    setOpen(false);
  };

  const handleLogout = () => {
    logout();
  };

  return (
    <React.Fragment>
      <ButtonGroup variant="contained" ref={anchorRef} aria-label="avatar button">
        <Button startIcon={<AccountCircleIcon />} endIcon={<ArrowDropDownIcon />} onClick={handleClick} />
      </ButtonGroup>
      {open && (
        <Paper>
          <ClickAwayListener onClickAway={handleClose}>
            <MenuList autoFocusItem>
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
      )}
    </React.Fragment>
  );
};

export default AvatarBtn;
