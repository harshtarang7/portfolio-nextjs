"use client";
import { useThemeContext } from "@/customTheme/ThemeProvider";
import { Box, Grid, Paper, Typography, useMediaQuery, useTheme } from "@mui/material";
import Image from "next/image";
import MilitaryTechIcon from "@mui/icons-material/MilitaryTech";
import { Footer } from "@/components/Footer/page";
import { AboutMeTabs } from "./Tabs";
import { cardBg, cardBgLight } from "@/styles/customStyles";

const AboutMe: React.FC = () => {
  const { isDarkMode } = useThemeContext();
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      <Grid
        container
        px={2}
        maxWidth={"1320px"}
        margin={"auto"}
        mt={"4rem"}
        p={2}
        alignItems={"flex-start"}
        spacing={3}
        sx={{boxSizing:'border-box'}}
      >
        {!isMobile && (
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
        )}

        {/* righ side top text */}
        <Grid
          size={{ lg: 8, md: 7, sm: 12,xs:12 }}
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          // border={1}
        >
          {/* text  */}
          {!isMobile && (
          <Box
            display={"flex"}
            alignItems={"center"}
            justifyContent={isMobile?'left':''}
            // gap={1}
          >
            <Box>
              <MilitaryTechIcon sx={{ fontSize: "6em" }} color="disabled" />
            </Box>
            <Box>
              <Typography fontSize={isMobile?25:"6rem"} fontWeight={600}>
                Self-Summary
              </Typography>
            </Box>
            <Box>
              <MilitaryTechIcon sx={{ fontSize: "6em" }} color="disabled" />
            </Box>
          </Box>
          )}

          {/* right top second card */}
          <Box
            width={"100%"}
            display={"flex"}
            alignItems={"center"}
            textAlign={isMobile?'center':'left'}
            flexDirection={isMobile?'column':'row'}
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
              <Typography fontSize={isMobile?'1.9rem':"2.7rem"} fontWeight={600}>
                Tarang Harsh
              </Typography>
              <Typography variant="caption" fontSize={17} sx={{textAlign:"center"}}>
                I am motivated full-stack developer experienced in building web
                applications using React.js,Next.js, Node.js + expressJS,
                TypeORM, and MYSQL. I am Jodhpur based Web-Developer mostly
                focus on web apps, better design, clean code. <br />
                Sometimes i edit video, part time memer, full time coder, just a curious coder,
                trying to chill when the app in production
                <span
                  style={{
                    fontSize: 15,
                    color: isDarkMode ? "lightblue" : "black",
                  }}
                >
                  ( Yes that&apos;s me everyday solving up my dog&apos;s issues )
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

        <Grid container width={"100%"}>
          <AboutMeTabs />
        </Grid>
      </Grid>
    </>
  );
};

export default AboutMe;
