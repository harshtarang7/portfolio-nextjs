import {Box,Grid} from '@mui/material'
import React from 'react'

export const Header=()=>{
    return(
            <Grid container  sx={{width:'100%',backgroundColor:'grey',justifyContent:'space-between'}}>
                <Grid size={{lg:6}}>
                logo
                </Grid> 
                <Grid size={{lg:6}}>
                contentsss
                </Grid> 
            </Grid>
    )
}