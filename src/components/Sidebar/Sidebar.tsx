'use client'

import { useThemeContext } from '@/customTheme/ThemeProvider'
import {Box,Grid, useTheme} from '@mui/material'

export const Sidebar=()=>{
    const theme = useTheme()
    const{isDarkMode} = useThemeContext();


    return(
        <Box sx={{width:'100%',minHeight:'100vh',backgroundColor:isDarkMode?'#1c1c1cff':'#eaeaeaff'}}>
            <Grid container>
                <Grid size={{lg:6}}>
                this is sidebar
                </Grid> 
            </Grid>
        </Box>
    )
}