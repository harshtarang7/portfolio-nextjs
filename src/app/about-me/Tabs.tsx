"use client";
import { useThemeContext } from "@/customTheme/ThemeProvider";
import {
  Box,
  Grid,
  Paper,
  Tab,
  Tabs,
  Tooltip,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { cardBg, cardBgLight } from "../page";
import {
  EmojiFoodBeverage,
  Facebook,
  Instagram,
  LinkedIn,
  Pets,
  Star,
  StarBorder,
} from "@mui/icons-material";

export const AboutMeTabs = () => {
  const [value, setValue] = useState<number>(0);
  const { isDarkMode } = useThemeContext();
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
          gap={3}
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
              gap: 5,
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
            <li>
              <Typography fontSize={17} mt={2} color="textDisabled">
                <EmojiFoodBeverage color="warning" /> I need tea to code
              </Typography>
            </li>
          </ul>
        </Grid>
      )}
    </Box>
  );
};
