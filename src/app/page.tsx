"use client";
import {
  Box,
  Button,
  Chip,
  Divider,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import AboutMe from "./about-me/page";
import { Typewriter } from "react-simple-typewriter";
import Image from "next/image";
import { useThemeContext } from "@/customTheme/ThemeProvider";
import Link from "next/link";
import { ArrowCircleRight } from "@mui/icons-material";
import { Footer } from "@/components/Footer/page";

const cardBg = "#151515ff";
const cardBgLight = "#f2f6fcff";
export default function Home() {
  const { isDarkMode } = useThemeContext();

   const containerVariants = {
    hidden: {
      scale: 0.8,
      opacity: 0,
    },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: {
      scale: 0.9,
      opacity: 0,
    },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  return (
    <>
    
      <Grid
        container
        maxWidth={"1370px"}
        justifyContent={"space-between"}
        alignItems={"center"}
        margin={"auto"}
        mt={4}
        spacing={2}
      >
        {/* top part */}
        <Grid container size={{ lg: 12 }}>
          <Grid size={{ lg: 6, md: 6, sm: 12 }}>
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
                  width: "45%",
                  display: "flex",
                  justifyContent: "center",
                  borderRadius: "15% 0px 15% 0px",
                  background: isDarkMode
                    ? "linear-gradient(217deg, #f6e2e2ff, #65a4fdff 70.71%),linear-gradient(217deg, #2b5ca1ff, #0d2c70ff 70.71%)"
                    : "linear-gradient(217deg, #ffe7c6ff, #fab29eff 70.71%)",
                  overflow: "hidden",
                  position: "relative",
                }}
              >
                <Image
                  src={"/assets/tarangHarsh.webp"}
                  alt="profile"
                  width={130}
                  height={120}
                  style={{
                    position: "relative",
                    top: 25,
                  }}
                />
              </Box>

              <Box display={"flex"} flexDirection={"column"} pt={4}>
                <Typography
                  fontSize={18}
                  color="textSecondary"
                  fontWeight={600}
                >
                  Full-Stack Web Developer
                </Typography>
                <Typography variant="h1">Tarang Harsh</Typography>
                <Typography
                  variant="body2"
                  fontSize={17}
                  sx={{
                    color: isDarkMode ? "white" : "#323232ff",
                  }}
                >
                  I create Web Apps , <br />I edit video sometimes , <br />I
                  create content sometimes Based in{" "}
                  <strong>Jodhpur, Rajasthan.</strong>
                </Typography>
              </Box>
            </Box>
          </Grid>

          <Grid size={{ lg: 6 }} display={"flex"} gap={2}>
            {/* first */}
            <Box
              display={"flex"}
              flexDirection={"column"}
              component={Paper}
              width={"50%"}
              p={2}
              gap={2}
              borderRadius={4}
              elevation={3}
              sx={{
                backgroundColor: isDarkMode ? cardBg : cardBgLight,
              }}
            >
              <Box
                position={"relative"}
                height={"75%"}
                width={"100%"}
                overflow={"hidden"}
                display={"flex"}
                justifyContent={"center"}
              >
                <Image
                  src={"/assets/aboutt.png"}
                  alt="profile"
                  width={250}
                  height={120}
                  style={{
                    position: "absolute",
                    margin: "auto",
                  }}
                />
              </Box>
              <Box
                display={"flex"}
                justifyContent={"space-between"}
                alignItems={"center"}
              >
                <Typography variant="body2" fontSize={19}>
                  More about me
                </Typography>
                <Link href={"/about-me"}>
                  <Button variant="contained" fullWidth>
                    Here &nbsp;
                    <ArrowCircleRight />
                  </Button>
                </Link>
              </Box>
            </Box>

            {/* last */}
            <Box
              display={"flex"}
              flexDirection={"column"}
              component={Paper}
              width={"50%"}
              p={2}
              gap={2}
              borderRadius={4}
              elevation={3}
              sx={{
                backgroundColor: isDarkMode ? cardBg : cardBgLight,
              }}
            >
              <Box
                position={"relative"}
                height={"75%"}
                width={"100%"}
                overflow={"hidden"}
                display={"flex"}
                justifyContent={"center"}
              >
                <Image
                  src={"/assets/work.png"}
                  alt="profile"
                  width={250}
                  height={120}
                  style={{
                    position: "absolute",
                    margin: "auto",
                  }}
                />
              </Box>
              <Box
                display={"flex"}
                justifyContent={"space-between"}
                alignItems={"center"}
              >
                <Typography variant="body2" fontSize={19}>
                  More about my work
                </Typography>
                <Link href={"/about-me"}>
                  <Button variant="contained" fullWidth>
                    Here &nbsp;
                    <ArrowCircleRight />
                  </Button>
                </Link>
              </Box>
            </Box>
          </Grid>
        </Grid>

        {/* middle  */}
        <Grid container size={{ lg: 12 }}>
          <Grid size={{ lg: 3 }}>
            <Box
              display={"flex"}
              component={Paper}
              elevation={2}
              py={4}
              px={2}
              borderRadius={3}
              gap={3}
              justifyItems={"center"}
              alignItems={"flex-start"}
              // flexDirection={'column'}
              sx={{
                backgroundColor: isDarkMode ? cardBg : cardBgLight,
                boxSizing: "border-box",
              }}
            >
              <Box
                display={"flex"}
                width={"50%"}
                flexDirection={"column"}
                textAlign={"center"}
              >
                <Box
                  width={'90%'}
                  margin={"auto"}
                  textAlign={"center"}
                  py={2}
                  borderRadius={4}
                  sx={{
                    background:isDarkMode?
                      "linear-gradient(217deg, #181818ff, #202020fe 70.71%)"
                      :"linear-gradient(217deg, #ffe7c6ff, #fbe8e3ff 70.71%)"
                  }}
                >
                  <Typography fontSize={"3rem"} fontWeight={700} 
                  sx={{
                    color:isDarkMode?"#ffffffff":"#000000ff"
                  }}>
                    1
                  </Typography>
                </Box>
                <Typography variant="body2" fontSize={16} fontWeight={500} color="textSecondary">
                  Years of Experience
                </Typography>
              </Box>

              <Box
                display={"flex"}
                flexDirection={"column"}
                textAlign={"center"}
                width={"50%"}
              >
                <Box
                width={'90%'}
                  margin={"auto"}
                  textAlign={"center"}
                  py={2}
                  borderRadius={4}
                  sx={{
                    background:isDarkMode?
                      "linear-gradient(217deg, #181818ff, #202020fe 70.71%)"
                      :"linear-gradient(217deg, #ffe7c6ff, #fbe8e3ff 70.71%)"
                  }}
                >
                  <Typography fontSize={"3rem"} fontWeight={700} 
                   sx={{
                    color:isDarkMode?"#ffffffff":"#000000ff"
                  }}>3</Typography>
                </Box>
                <Typography variant="body2" fontSize={16} fontWeight={500} color="textSecondary">
                  Projects
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid size={{ lg: 6, md: 6, sm: 12 }}>
            {/* service section  */}
            <Box
              display={"flex"}
              component={Paper}
              elevation={2}
              py={6.5}
              px={5}
              borderRadius={3}
              gap={3}
              justifyContent={"left"}
              sx={{
                backgroundColor: isDarkMode ? cardBg : cardBgLight,
              }}
            >
              <Box
                display={"flex"}
                flexDirection={"column"}
                justifyContent={"center"}
                textAlign={"center"}
                sx={{
                  p: 1,
                  borderRadius: 3,
                }}
              >
                <Image
                  src={"/assets/java-script.png"}
                  alt="javscript"
                  width={80}
                  height={80}
                />
                <Typography>Javascript</Typography>
              </Box>
              <Box
                display={"flex"}
                flexDirection={"column"}
                justifyContent={"center"}
                textAlign={"center"}
                sx={{
                  p: 1,
                  borderRadius: 3,
                }}
              >
                <Image
                  src={"/assets/nodejs.png"}
                  alt="javscript"
                  width={80}
                  height={80}
                />
                <Typography>Node.js</Typography>
              </Box>
              <Box
                display={"flex"}
                flexDirection={"column"}
                justifyContent={"center"}
                textAlign={"center"}
                sx={{
                  p: 1,
                  borderRadius: 3,
                }}
              >
                <Image
                  src={"/assets/coding.png"}
                  alt="javscript"
                  width={80}
                  height={80}
                />
                <Typography>HTML & CSS</Typography>
              </Box>
              <Box
                display={"flex"}
                flexDirection={"column"}
                justifyContent={"center"}
                textAlign={"center"}
                sx={{
                  p: 1,
                  borderRadius: 3,
                }}
              >
                <Image
                  src={"/assets/react.png"}
                  alt="javscript"
                  width={80}
                  height={80}
                />
                <Typography>React.js</Typography>
              </Box>
              <Box
                display={"flex"}
                flexDirection={"column"}
                justifyContent={"center"}
                textAlign={"center"}
                sx={{
                  p: 1,
                  borderRadius: 3,
                }}
              >
                <Image
                  src={"/assets/database.png"}
                  alt="javscript"
                  width={80}
                  height={80}
                />
                <Typography>SQL</Typography>
              </Box>
            </Box>
          </Grid>

          <Grid size={{ lg: 3 }} display={"flex"} gap={2}>
            <Box
              display={"flex"}
              flexDirection={"column"}
              component={Paper}
              width={"100%"}
              p={2}
              gap={2}
              borderRadius={4}
              elevation={3}
              sx={{
                backgroundColor: isDarkMode ? cardBg : cardBgLight,
              }}
            >
              {/* first */}
              <Box
                position={"relative"}
                height={"75%"}
                width={"100%"}
                overflow={"hidden"}
                display={"flex"}
                justifyContent={"center"}
              >
                <Image
                  src={"/assets/aboutt.png"}
                  alt="profile"
                  width={250}
                  height={120}
                  style={{
                    position: "absolute",
                    margin: "auto",
                  }}
                />
              </Box>
              <Box
                display={"flex"}
                justifyContent={"space-between"}
                alignItems={"center"}
              >
                <Typography variant="body2" fontSize={19}>
                Stay with me 
                </Typography>
                <Link href={"/about-me"}>
                  <Button variant="contained" fullWidth>
                    Here &nbsp;
                    <ArrowCircleRight />
                  </Button>
                </Link>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Grid>
      <Footer/>
    </>
  );
}
