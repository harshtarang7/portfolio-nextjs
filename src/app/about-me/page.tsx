"use client";
import { Box, Chip, Grid, Typography } from "@mui/material";
import Image from "next/image";
import { Typewriter } from "react-simple-typewriter";

const AboutMe: React.FC = () => {
  return (
    <Grid container mt={"3rem"} px={2}>
      {/* top part */}
      <Grid
        container
        width={"100%"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        {/* left side */}
        <Grid display={"flex"} flexDirection={"column"} size={{ lg: 5 }}>
          <Typography variant="h6">Hi, I am Tarang Harsh</Typography>

          <Typography fontSize={34} fontWeight={"bold"}>
            <Typewriter
              words={["Web Developer", "Full Stack Developer", "Gamer"]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={60}
              delaySpeed={1500}
            />
          </Typography>

          <Typography fontWeight={600}>I need tea to code</Typography>

          <Box display={"flex"} mt={4} gap={1}>
            <Chip
              label={"Portfolio "}
              sx={{
                width: "30%",
                height: "60px",
                p: 2,
                backgroundColor: "#2959a1ff",
                fontSize: 22,
                color: "white",
                cursor: "pointer",
              }}
            />
            <Chip
              label={"Resume "}
              sx={{
                width: "30%",
                height: "60px",
                p: 2,
                backgroundColor: "#a12929ff",
                fontSize: 25,
                color: "white",
                cursor: "pointer",
              }}
            />
          </Box>
        </Grid>
        <Grid size={{ lg: 6 }} justifyItems={"center"} position={"relative"}>
          <Box
            sx={{
              position: "absolute",
              width: "70%",
              height: "80%",
              borderRadius: "50% 40% 50% 30%",
              backgroundColor: "#e6b3a7ff",
              zIndex: -1,
              top: 49,
              animation: "morph 8s ease-in-out infinite",
              "@keyframes morph": {
                "0%": {
                  borderRadius: "50% 40% 50% 30%",
                  transform: "rotate(0deg)",
                },
                "25%": {
                  borderRadius: "40% 60% 30% 50%",
                  transform: "rotate(80deg)",
                },
                "50%": {
                  borderRadius: "60% 30% 60% 40%",
                  transform: "rotate(160deg)",
                },
                "75%": {
                  borderRadius: "50% 70% 40% 60%",
                  transform: "rotate(80deg)",
                },
                "100%": {
                  borderRadius: "50% 40% 50% 30%",
                  transform: "rotate(0deg)",
                },
              },
            }}
          />
          <Image
            src={"/assets/tarangHarsh.webp"}
            alt="profile"
            width={300}
            height={300}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};
export default AboutMe;
