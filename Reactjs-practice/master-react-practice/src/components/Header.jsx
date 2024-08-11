import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { IconButton,Typography} from '@mui/material';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import useStyles from '../style';

const Header = () => {
    const classes = useStyles()
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar  position="static" >
        <Toolbar variant="dense" className={classes.toolbar}>
          <IconButton  edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
          <MenuRoundedIcon></MenuRoundedIcon>
          </IconButton>
          <Typography variant='h5'>Home</Typography>
          <Typography variant='h5'className={classes.appbar} >About</Typography>
          <Typography variant='h5'className={classes.appbar} >Contact</Typography>
          <Typography variant='h5'className={classes.appbar} >Service</Typography>
          <Typography variant='h5'className={classes.appbar} >Shipping</Typography>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Header
