import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';

interface WalletBalanceProps {
  balance: number;
}

const WalletBalance =({ balance } : WalletBalanceProps) => {
  return (
    <div style={{ margin: '1em', display: 'flex', alignItems: 'center' }}>
      <MonetizationOnIcon sx={{ marginRight: '8px' }} />
      <span>{balance} USD</span>
    </div>
  );
};

export default WalletBalance;