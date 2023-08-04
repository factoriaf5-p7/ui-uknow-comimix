import { Dialog, DialogActions, DialogContent, DialogTitle, Button, useTheme } from '@mui/material';

interface DeleteCourseModalProps {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

function DeleteCourseModal({ open, onClose, onConfirm }: DeleteCourseModalProps) {
  const theme = useTheme();

  return (
    <Dialog open={open} onClose={onClose} >
      <DialogTitle>Confirm DELETE course?</DialogTitle>
      <DialogContent >
        <p>Are you sure you want to DELETE the course?</p>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary" sx={{ backgroundColor: theme.palette.uDarkBlue.main, color: 'white' }}>
          No
        </Button>
        <Button
          onClick={onConfirm}
          color="primary"
          autoFocus
          sx={{ backgroundColor: theme.palette.uOrange.main, color: 'white' }}
        >
          Yes
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default DeleteCourseModal;