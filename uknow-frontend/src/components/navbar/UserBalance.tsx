import React, { useContext } from "react";
import { Typography, Avatar } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { AuthContext } from "../../context/AuthContext";

const useStyles = makeStyles((theme) => ({
  userBalanceContainer: {
    display: "flex",
    alignItems: "center",
    marginLeft: theme.spacing(2),
  },
  walletIcon: {
    fontSize: "1.2rem",
    marginRight: theme.spacing(1),
  },
}));

const UserBalance = () => {
  const { isLoggedIn, user } = useContext(AuthContext);
  const classes = useStyles();

  if (isLoggedIn && user) {
    return (
      <div className={classes.userBalanceContainer}>
        <Avatar className={classes.walletIcon}>💰</Avatar>
        <Typography>{user.wallet_balance}</Typography>
      </div>
    );
  }

  return null;
};

export default UserBalance;