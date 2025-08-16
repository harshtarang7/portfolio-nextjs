"use client";
import { useThemeContext } from "@/customTheme/ThemeProvider";
import { Box, Chip, Divider, Grid, Paper, Typography, Tooltip } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { Typewriter } from "react-simple-typewriter";
import { cardBg, cardBgLight } from "../page";
import MilitaryTechIcon from "@mui/icons-material/MilitaryTech";
import { Facebook, Instagram, LinkedIn, Pets } from "@mui/icons-material";

const AboutMe: React.FC = () => {
  const { isDarkMode } = useThemeContext();
  return (
    <>
      <Grid
        container
        px={2}
        maxWidth={"1320px"}
        margin={"auto"}
        mt={"4rem"}
        alignItems={"flex-start"}
        spacing={3}
      >
        <Grid size={{ lg: 4, md: 5, sm: 12 }}>
          <Box
            display={"flex"}
            component={Paper}
            elevation={2}
            padding={3}
            borderRadius={3}
            gap={3}
            sx={{
              backgroundColor: isDarkMode ? cardBg : cardBgLight,
            }}
          >
            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                borderRadius: "15%",
                borderBottom: isDarkMode
                  ? "10px solid #3b52ffff"
                  : "10px solid #0f0f0f",
                background: isDarkMode
                  ? "linear-gradient(217deg, #f6e2e2ff, #65a4fdff 70.71%),linear-gradient(217deg, #2b5ca1ff, #0d2c70ff 70.71%)"
                  : "linear-gradient(217deg, #ffe7c6ff, #fab29eff 70.71%)",
                overflow: "hidden",
                // position: "relative",
              }}
            >
              <Image
                src={"/assets/tarangHarsh.webp"}
                alt="profile"
                width={200}
                height={220}
                style={{
                  position: "relative",
                  top: 35,
                }}
              />
            </Box>
          </Box>
        </Grid>

        {/* righ side top text */}
        <Grid
          size={{ lg: 8, md: 7, sm: 12 }}
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          // border={1}
        >
          {/* text  */}
          <Box
            display={"flex"}
            alignItems={"center"}
            // gap={1}
          >
            <Box>
              <MilitaryTechIcon sx={{ fontSize: "6em" }} color="disabled" />
            </Box>
            <Box>
              <Typography fontSize={"6rem"} fontWeight={600}>
                Self-Summary
              </Typography>
            </Box>
            <Box>
              <MilitaryTechIcon sx={{ fontSize: "6em" }} color="disabled" />
            </Box>
          </Box>

          {/* right top second card */}
          <Box
            width={"100%"}
            display={"flex"}
            alignItems={"center"}
            component={Paper}
            elevation={2}
            padding={3}
            borderRadius={3}
            gap={3}
            sx={{
              backgroundColor: isDarkMode ? cardBg : cardBgLight,
            }}
          >
            <Box width={"80%"} display={"flex"} flexDirection={"column"}>
              <Typography fontSize={"2.7rem"} fontWeight={600}>
                Tarang Harsh
              </Typography>
              <Typography variant="caption" fontSize={17}>
                I am motivated full-stack developer experienced in building web
                applications using React.js,Next.js, Node.js + expressJS,
                TypeORM, and MYSQL. I am Jodhpur based Web-Developer mostly
                focus on web apps, better design, clean code. <br />
                <span
                  style={{
                    fontSize: 15,
                    color: isDarkMode ? "lightblue" : "black",
                  }}
                >
                  ( Yes that's me everyday picking up my dog's issues )
                </span>
              </Typography>
            </Box>
            <Box width={"20%"}>
              <Image
                src={"/assets/dropping.png"}
                width={150}
                height={120}
                alt="dog"
              />
            </Box>
          </Box>
        </Grid>

        {/* experience and education */}
        <Grid container width={'100%'}>
        <Grid container size={{ lg: 6 }}>
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

          {/* profiles */}
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
            <Typography fontSize={24} fontWeight={600}>Connect with Me</Typography>
            <ul
              style={{
                listStyle: "none",
                textDecoration: "none",
                display:'flex',
                gap:'1rem'
              }}
            >
              <li >
                <a href={"https://www.instagram.com/tarang_harsh7"}>
                  <Instagram sx={{fontSize:'2rem'}}/>
                </a>
              </li>
              <li>
                <a href={"https://www.facebook.com/tarangHarsh07"}>
                  <Facebook sx={{fontSize:'2rem'}}/>
                </a>
              </li>
              <li>
                <a href={"https://www.linkedin.com/in/tarang-harsh-b3b804230/"}>
                  <LinkedIn sx={{fontSize:'2rem'}}/>
                </a>
              </li>
              <Tooltip title="My Dog's Instagram">
                <li>
                <a href={"https://www.instagram.com/jimmy_and_joy"}>
                  <Pets sx={{fontSize:'2rem'}}/>
                </a>
              </li>
              </Tooltip>
            </ul>
          </Grid>
        </Grid>

{/* education */}
        <Grid
          size={{ lg: 6 }}
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
      </Grid>
    </>
  );
};
export default AboutMe;
