"use client";
import { Box, Grid } from "@mui/material";
import { Sidebar } from "./Sidebar/Sidebar";
import { Header } from "./Header/Header";
import { useState } from "react";

export const HeaderAndSidebar = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const handleToggle = () => {
    setIsClicked(!isClicked);
  };
  return (
    <Grid container>
      <Grid
        size={{ lg: 2 }}
        sx={{
          transition: "1s ease-out",
        }}
      >
        <Sidebar isClicked={isClicked} />
      </Grid>
      <Grid
        size={{ lg: isClicked ? 12 : 10 }}
        // sx={{
        //   transition: "1s ease-out",
        // }}
      >
        <Header handleToggleSidebar={handleToggle} />

        <Box component="main" sx={{ p: 2 }}>
          {children}
        </Box>
      </Grid>
    </Grid>
  );
};
