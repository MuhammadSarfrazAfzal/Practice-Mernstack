import { makeStyles } from '@mui/styles';
import { createTheme, ThemeProvider } from '@mui/material/styles';
const theme = createTheme();
const useStyles = makeStyles((theme) => ({
    appbar:{
        paddingLeft:30
    },
    toolbar:{
        background:'green',
        height:60
    }
  }));
export default useStyles