
import { Dialog, DialogContent, TextField, IconButton, Typography, Box, Stack } from '@mui/material';
import { MailOutline, LockOutlined, Google, Apple } from '@mui/icons-material';
import Button from './Button'; // Adjust the import path as needed

const SignUpModal = ({ open, onClose }) => {
  return (
    <Dialog open={open} onClose={onClose} maxWidth="xs" fullWidth>
      <DialogContent sx={{ bgcolor: '#1e1e1e', borderRadius: 2, p: 3 }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 2,
            color: '#fff',
            borderRadius: 2,
            p: 2,
            bgcolor: '#1e1e1e',
            boxShadow: 3,
          }}
        >
          <Stack direction="row" alignItems="center" spacing={1} sx={{ width: '100%' }}>
            <MailOutline sx={{ color: '#ccc' }} />
            <TextField
              variant="outlined"
              placeholder="Name"
              fullWidth
              InputProps={{
                style: { color: '#fff' },
                sx: {
                  '& .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#444',
                  },
                },
              }}
            />
          </Stack>

          <Stack direction="row" alignItems="center" spacing={1} sx={{ width: '100%' }}>
            <MailOutline sx={{ color: '#ccc' }} />
            <TextField
              variant="outlined"
              placeholder="Email"
              fullWidth
              InputProps={{
                style: { color: '#fff' },
                sx: {
                  '& .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#444',
                  },
                },
              }}
            />
          </Stack>

          <Stack direction="row" alignItems="center" spacing={1} sx={{ width: '100%' }}>
            <LockOutlined sx={{ color: '#ccc' }} />
            <TextField
              variant="outlined"
              placeholder="Password"
              type="password"
              fullWidth
              InputProps={{
                style: { color: '#fff' },
                sx: {
                  '& .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#444',
                  },
                },
              }}
            />
          </Stack>

          <Box sx={{ mt: 3, width: '100%' }}>
            <Button fullWidth>
              SIGN UP NOW
            </Button>
          </Box>

          <Typography variant="body2" sx={{ color: '#ccc', mt: 2 }}>
            Or start your Brainwave with
          </Typography>

          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mt: 1 }}>
            <IconButton sx={{ color: '#ccc' }}>
              <Google />
            </IconButton>
            <IconButton sx={{ color: '#ccc' }}>
              <Apple />
            </IconButton>
          </Box>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default SignUpModal;
