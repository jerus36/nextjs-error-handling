'use client'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useRouter } from 'next/navigation';

export default function HeaderAppBar() {
    const router = useRouter()
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Sample Error Handling
          </Typography>
          <Button color="inherit" onClick={()=>router.push("/axios_example")}>Axios Example</Button>
          <Button color="inherit" onClick={()=>router.push("/server_actions_example")}>Server Actions Example</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}