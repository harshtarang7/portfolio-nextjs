import {Box,Grid} from '@mui/material'

export const Sidebar=()=>{
    return(
        <Box sx={{width:'100%',minHeight:'100vh',backgroundColor:'grey'}}>
            <Grid container>
                <Grid size={{lg:6}}>
                this is sidebar
                </Grid> 
            </Grid>
        </Box>
    )
}