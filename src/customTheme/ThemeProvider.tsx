
'use client'
import { CssBaseline } from '@mui/material';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { darkTheme } from './customTheme';

export const ThemeProvider = ({children}:{children:React.ReactNode})=>{
    return(
        <MuiThemeProvider theme={darkTheme}>
            <CssBaseline/>
            {children}
        </MuiThemeProvider>
    )
}