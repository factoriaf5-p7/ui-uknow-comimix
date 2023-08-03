import { useContext, useEffect, useState } from "react";
import { Typography, Avatar, Box } from "@mui/material";
import { AccountBalanceWalletOutlined } from "@mui/icons-material";
import { AuthContext } from "../../context/AuthContext";
import { UknowTheme } from "../../themes/ThemeUknow";

const UserBalance = () => {
  const { isLoggedIn, user } = useContext(AuthContext);
  const [balance, setBalance] = useState(user.wallet_balance);

  useEffect(() => {
    const localUser = JSON.parse(localStorage.getItem('user') as string);
    if(localUser.wallet_balance !== user.wallet_balance) setBalance(localUser.wallet_balance);
  }, [])

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
