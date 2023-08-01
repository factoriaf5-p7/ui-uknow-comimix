
import { Dialog, DialogActions, DialogContent, DialogTitle, Button } from '@mui/material';

interface PurchaseModalProps {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

function PurchaseModal({ open, onClose, onConfirm }: PurchaseModalProps) {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Confirm Purchase</DialogTitle>
      <DialogContent>
        <p>Are you sure you want to buy the course?</p>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          No
        </Button>
        <Button onClick={onConfirm} color="primary" autoFocus>
          Yes
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default PurchaseModal;
