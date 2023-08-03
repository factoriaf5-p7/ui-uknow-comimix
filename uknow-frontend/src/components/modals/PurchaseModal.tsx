import { Dialog, DialogActions, DialogContent, DialogTitle, Button, useTheme } from '@mui/material';

interface PurchaseModalProps {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

function PurchaseModal({ open, onClose, onConfirm }: PurchaseModalProps) {
  const theme = useTheme();

  return (
    <Dialog open={open} onClose={onClose} >
      <DialogTitle>Confirm Purchase</DialogTitle>
      <DialogContent >
        <p>Are you sure you want to buy the course?</p>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary" sx={{ backgroundColor: theme.palette.uDarkBlue.main, color: 'white' }}>
          No
        </Button>
        <Button
          onClick={onConfirm}
          color="primary"
          autoFocus
          sx={{ backgroundColor: theme.palette.uDarkBlue.main, color: 'white' }}
        >
          Yes
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default PurchaseModal;
