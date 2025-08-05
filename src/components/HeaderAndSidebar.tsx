"use client";
import { Box, Grid, useMediaQuery, useTheme } from "@mui/material";
import { Sidebar } from "./Sidebar/Sidebar";
import { Header } from "./Header/Header";
import { useState } from "react";

export const HeaderAndSidebar = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down('sm'));

  
  const handleToggle = () => {
    setIsClicked((prev)=>!prev);
  };

  const showSidebar = !isXs || isClicked ;

  return (
    <Grid container>
      {/* {
        showSidebar && (
      <Grid
        size={{ lg: 2, md: 3, sm: 3 }}
        sx={{
          transition: "1s ease-out",
          width:isXs?'100%' :'250px'
        }}
      >
        <Sidebar isClicked={isClicked} />
      </Grid>
        )
      } */}
      <Grid
        size={{ 
          lg: 12
        
        }}
        // sx={{
        //   transition: "1s ease-out",
        // }}
      >
        <Header />

        <Box component="main" sx={{ p: 2 }}>
          {children}
        </Box>
      </Grid>
    </Grid>
  );
};
