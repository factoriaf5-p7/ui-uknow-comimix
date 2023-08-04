import { useContext, useEffect, useState } from "react";
import { Typography, Avatar, Box } from "@mui/material";
import { AccountBalanceWalletOutlined } from "@mui/icons-material";
import { UknowTheme } from "../../themes/ThemeUknow";
import { UserContext } from "../../context/UserContext";
import { AuthContext } from "../../context/AuthContext";

const UserBalance = () => {
  // const { updatedUser } = useContext(UserContext);
  const { user, isLoggedIn } = useContext(AuthContext);
  
  const [balance, setBalance] = useState(user.wallet_balance);

  const localUser = JSON.parse(localStorage.getItem('user') as string);

  // useEffect(() => {
  //   // // updateUser();
  //   // if(localUser.wallet_balance !== user.wallet_balance) {
  //   //     setBalance(localUser.wallet_balance);
  //   //     console.log('equal')
  //   //   }
  //   setBalance(updatedUser.wallet_balance);
  // }, []);

  if (isLoggedIn && user) {
    return (
      <Box display="flex" alignItems="center">
        <Avatar sx={{ backgroundColor: UknowTheme.palette.uOrange.main }}>
          <AccountBalanceWalletOutlined color="action" sx={{ backgroundColor: UknowTheme.palette.uOrange.main }} />
        </Avatar>
        <Typography>{balance}</Typography>
      </Box>
    );
  }

  return null;
};

export default UserBalance;
