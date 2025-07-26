import { Box, Grid } from "@mui/material";
import { Sidebar } from "./Sidebar";
import { Header } from "./Header";

export const HeaderAndSidebar = ({children}:{children:React.ReactNode}) => {
  return (
    <Grid container>
      <Grid size={{ lg: 2 }}>
        <Sidebar />
      </Grid>
      <Grid size={{ lg: 10 }}>
        <Header />

        <Box component="main" sx={{ p: 2 }}>
          {children}
        </Box>
      </Grid>
    </Grid>
  );
};
