"use client";
import { Box, Divider, Grid } from "@mui/material";
import { Header } from "./Header/Header";
import { Footer } from "./Footer/page";

export const HeaderAndSidebar = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <Grid container >
      <Grid
        size={{
          lg: 12,
        }}
      >
        <Header />
        <Divider/>
        <Box component="main" sx={{ p: 2 }} >
          {children}
        </Box>
         <Footer />
      </Grid>
    </Grid>
  );
};
