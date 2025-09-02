"use client";
import { useThemeContext } from "@/customTheme/ThemeProvider";
import {
  Box,
  Divider,
  Grid,
  Paper,
  Tab,
  Tabs,
  Tooltip,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useState } from "react";

import {
  Code,
  EmojiFoodBeverage,
  Facebook,
  Instagram,
  LinkedIn,
  Pets,
  SportsSoccer,
  Star,
} from "@mui/icons-material";
import { cardBg, cardBgLight } from "@/styles/customStyles";

export const AboutMeTabs = () => {
  const [value, setValue] = useState<number>(0);
  const { isDarkMode } = useThemeContext();
    const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Box width={"100%"}>
      <Tabs
        variant="fullWidth"
        value={value}
        onChange={(_, newValue) => setValue(newValue)}
      >
        <Tab label="Experience" />
        <Tab label="Education" />
        <Tab label="Skills" />
      </Tabs>

      {value === 0 && (
        <Grid container gap={2}>
          {/* experience */}
          <Grid
            size={{ lg: 12 }}
            width={"100%"}
            display={"flex"}
            flexDirection={"column"}
            // alignItems={"center"}
            component={Paper}
            elevation={2}
            padding={3}
            borderRadius={3}
            gap={3}
            sx={{
              backgroundColor: isDarkMode ? cardBg : cardBgLight,
            }}
          >
            <Typography variant="h5" fontSize={22} fontWeight={600} mb={2}>
              EXPERIENCE
            </Typography>
            <Box display={"flex"} flexDirection={"column"} gap={0.5}>
              <Typography
                fontSize={17}
                color="textDisabled"
                fontWeight={600}
                sx={{
                  fontFamily: "sans-serif",
                }}
              >
                2024-Present
              </Typography>
              <Typography
                fontSize={17}
                fontWeight={600}
                sx={{
                  fontFamily: "sans-serif",
                }}
              >
                Full-Stack Web Developer
              </Typography>
              <Typography
                fontSize={14}
                fontWeight={600}
                color="textDisabled"
                sx={{
                  fontFamily: "sans-serif",
                }}
              >
                Saasbrew
              </Typography>
            </Box>
          </Grid>

          {/* profile */}
          <Grid
            size={{ lg: 12 }}
            width={"100%"}
            display={"flex"}
            flexDirection={"column"}
            // alignItems={"center"}
            component={Paper}
            elevation={2}
            padding={3}
            borderRadius={3}
            gap={3}
            sx={{
              backgroundColor: isDarkMode ? cardBg : cardBgLight,
            }}
          >
            <Typography fontSize={24} fontWeight={600}>
              Connect with Me
            </Typography>
            <ul
              style={{
                listStyle: "none",
                textDecoration: "none",
                display: "flex",
                gap: "1rem",
              }}
            >
              <li>
                <a href={"https://www.instagram.com/tarang_harsh7"}>
                  <Instagram sx={{ fontSize: "2rem" }} />
                </a>
              </li>
              <li>
                <a href={"https://www.facebook.com/tarangHarsh07"}>
                  <Facebook sx={{ fontSize: "2rem" }} />
                </a>
              </li>
              <li>
                <a href={"https://www.linkedin.com/in/tarang-harsh-b3b804230/"}>
                  <LinkedIn sx={{ fontSize: "2rem" }} />
                </a>
              </li>
              <Tooltip title="My Dog's Instagram">
                <li>
                  <a href={"https://www.instagram.com/jimmy_and_joy"}>
                    <Pets sx={{ fontSize: "2rem" }} />
                  </a>
                </li>
              </Tooltip>
            </ul>
          </Grid>
        </Grid>
      )}

      {/* tab 2 education */}
      {value === 1 && (
        <Grid container>
          <Grid
            size={{ lg: 12 }}
            width={"100%"}
            display={"flex"}
            flexDirection={"column"}
            // alignItems={"center"}
            component={Paper}
            elevation={2}
            padding={3}
            borderRadius={3}
            gap={3}
            sx={{
              backgroundColor: isDarkMode ? cardBg : cardBgLight,
            }}
          >
            <Typography variant="h5" fontSize={22} fontWeight={600}>
              EDUCATION
            </Typography>
            <Box display={"flex"} flexDirection={"column"} gap={0.5}>
              <Typography
                fontSize={17}
                color="textDisabled"
                fontWeight={600}
                sx={{
                  fontFamily: "sans-serif",
                }}
              >
                2018-2021
              </Typography>
              <Typography
                fontSize={17}
                fontWeight={600}
                sx={{
                  fontFamily: "sans-serif",
                }}
              >
                Bachelors of Computer Application (BCA)
              </Typography>
              <Typography
                fontSize={14}
                fontWeight={600}
                color="textDisabled"
                sx={{
                  fontFamily: "sans-serif",
                }}
              >
                Lachoo Memorial College, Jodhpur, Rajasthan
              </Typography>
            </Box>
            <Box display={"flex"} flexDirection={"column"} gap={0.5}>
              <Typography
                fontSize={17}
                color="textDisabled"
                fontWeight={600}
                sx={{
                  fontFamily: "sans-serif",
                }}
              >
                2021-2023
              </Typography>
              <Typography
                fontSize={17}
                fontWeight={600}
                sx={{
                  fontFamily: "sans-serif",
                }}
              >
                Masters of Computer Application (MCA)
              </Typography>
              <Typography
                fontSize={14}
                fontWeight={600}
                color="textDisabled"
                sx={{
                  fontFamily: "sans-serif",
                }}
              >
                Lachoo Memorial College, Jodhpur, Rajasthan
              </Typography>
            </Box>
          </Grid>
        </Grid>
      )}

      {/* skills */}
      {value === 2 && (
        <Grid
          container
          p={2}
          width={"100%"}
          display={"flex"}
          flexDirection={"column"}
          // alignItems={"center"}
          component={Paper}
          elevation={2}
          padding={3}
          borderRadius={3}
          gap={2}
          sx={{
            backgroundColor: isDarkMode ? cardBg : cardBgLight,
          }}
        >
          <ul
            style={{
              listStyle: "none",
              textDecoration: "none",
              display: "flex",
              flexDirection: "column",
              gap: 2,
            }}
          >
            <li style={{ display: "flex" }}>
              <Star
                sx={{ mr: 2, color: isDarkMode ? "blueviolet" : "orange" }}
              />{" "}
              <b>Front-End :</b>{" "}
              <Typography fontSize={17} ml={2}>
                {" "}
                React.js &nbsp; | &nbsp; Next.js &nbsp; | &nbsp; HTML{" "}
              </Typography>
            </li>
            <li style={{ display: "flex" }}>
              <Star
                sx={{ mr: 2, color: isDarkMode ? "blueviolet" : "orange" }}
              />{" "}
              <b>Back-End :</b>{" "}
              <Typography fontSize={17} ml={2}>
                {" "}
                Node.js &nbsp; | &nbsp; NESTJS &nbsp; | &nbsp; JS{" "}
              </Typography>
            </li>
            <li style={{ display: "flex" }}>
              <Star
                sx={{ mr: 2, color: isDarkMode ? "blueviolet" : "orange" }}
              />{" "}
              <b>Styling :</b>{" "}
              <Typography fontSize={17} ml={2}>
                {" "}
                TailwindCSS &nbsp; | &nbsp; Bootstrap &nbsp; | &nbsp; CSS{" "}
              </Typography>
            </li>
            <li style={{ display: "flex" }}>
              <Star
                sx={{ mr: 2, color: isDarkMode ? "blueviolet" : "orange" }}
              />{" "}
              <b>Database :</b>{" "}
              <Typography fontSize={17} ml={2}>
                {" "}
                MongoDB &nbsp; | &nbsp; MYSQL &nbsp; | &nbsp; PostgreSQL{" "}
              </Typography>
            </li>
          </ul>

          <Divider/>
          <Typography fontSize={21} fontWeight={600}>OTHER SKILLS</Typography>
          <ul
           style={{
              listStyle: "none",
              textDecoration: "none",
              display: "flex",
              flexDirection: "column",
              gap: 1,
            }}>

            <li>
              <Typography fontSize={17}  >
                <EmojiFoodBeverage color="warning" /> I need tea to code
              </Typography>
            </li>
            <li>
              <Typography fontSize={17} mt={2} >
                <Code color="warning" /> More than just a beginner at clean code
              </Typography>
            </li>
            <li>
              <Typography fontSize={17} mt={2} >
                <SportsSoccer color="warning" />  Got a bit of footy skills 
              </Typography>
            </li>
          </ul>
        </Grid>
      )}
    </Box>
  );
};
