import { useContext } from "react";
import { Typography, Avatar, Box } from "@mui/material";
import { AccountBalanceWalletOutlined } from "@mui/icons-material";
import { AuthContext } from "../../context/AuthContext";
import { UknowTheme } from "../../themes/ThemeUknow";

const UserBalance = () => {
  const { isLoggedIn, user } = useContext(AuthContext);

  if (isLoggedIn && user) {
    return (
      <Box display="flex" alignItems="center">
        <Avatar sx={{ backgroundColor: UknowTheme.palette.uOrange.main }}>
          <AccountBalanceWalletOutlined color="action" sx={{ backgroundColor: UknowTheme.palette.uOrange.main }} />
        </Avatar>
        <Typography>{user.wallet_balance}</Typography>
      </Box>
    );
  }

  return null;
};

export default UserBalance;
