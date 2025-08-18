"use client";
import { Box, Button, Grid, Paper, Typography } from "@mui/material";
import Image from "next/image";
import { cardBg, cardBgLight } from "../page";
import { useThemeContext } from "@/customTheme/ThemeProvider";
import { projectsData, projectsDataRight } from "./staticProjects";
import { motion } from "framer-motion";
import MilitaryTechIcon from "@mui/icons-material/MilitaryTech";
import Link from "next/link";

const duplicatedProjectsData = [...projectsData, ...projectsData];

const Projects = () => {
  const { isDarkMode } = useThemeContext();
  return (
    <>
      <Grid container maxWidth={"1320px"} margin={"auto"} mt={"4rem"} gap={2}>
        <Grid
          container
          size={{ lg: 4 }}
          overflow={"hidden"}
          //   border={1}
          width={"100%"}
          height={"124vh !important"}
          mx={1}
        >
          <motion.div
            animate={{
              y: [0, -350 * projectsData.length],
            }}
            transition={{
              y: {
                repeat: Infinity,
                repeatType: "loop",
                duration: projectsData.length * 3,
                ease: "linear",
              },
            }}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "16px",
              height: "max-content",
            }}
          >
            {duplicatedProjectsData.map((item, index) => {
              return (
                // <Grid size={{ lg: 12 }} key={index}>
                <motion.div
                  key={`${item.title}-${index}`}
                  style={{
                    minHeight: "320px",
                    flexShrink: 0,
                  }}
                  whileHover={{
                    scale: 1.05,
                    transition: { duration: 0.2 },
                  }}
                >
                  <Box
                    display={"flex"}
                    flexDirection={"column"}
                    component={Paper}
                    elevation={2}
                    padding={2}
                    borderRadius={4}
                    gap={3}
                    sx={{
                      backgroundColor: isDarkMode ? cardBg : cardBgLight,
                    }}
                    minHeight={300}
                  >
                    <Image
                      src={item.imgUrl}
                      alt={item.title}
                      priority={index < 4}
                      width={400}
                      height={200}
                      style={{
                        borderRadius: "2%",
                        width: "100%",
                        height: "200px",
                        objectFit: "cover",
                      }}
                    />
                    <Box>
                      <Typography fontSize={21} fontWeight={700}>
                        {item.title}
                      </Typography>
                      <Typography
                        fontSize={18}
                        fontWeight={500}
                        color="textDisabled"
                      >
                        {item.subTitle}
                      </Typography>
                    </Box>
                  </Box>
                </motion.div>
                // </Grid>
              );
            })}
          </motion.div>
        </Grid>

        <Grid size={{ lg: 7.5 }}>
          <Box
            display={"flex"}
            alignItems={"center"}
            // gap={1}
          >
            <Box>
              <MilitaryTechIcon sx={{ fontSize: "6em" }} color="disabled" />
            </Box>
            <Box>
              <Typography fontSize={"5.5rem"} fontWeight={600}>
                Self-Summary
              </Typography>
            </Box>
            <Box>
              <MilitaryTechIcon sx={{ fontSize: "6em" }} color="disabled" />
            </Box>
          </Box>
          <Grid container spacing={3}>
            {projectsDataRight.map((item, index) => {
              return (
                <Grid
                  key={index}
                  size={{ lg: 6 }}
                  display={"flex"}
                  flexDirection={"column"}
                  component={Paper}
                  elevation={2}
                  padding={2}
                  borderRadius={4}
                  gap={3}
                  spacing={3}
                  sx={{
                    backgroundColor: isDarkMode ? cardBg : cardBgLight,
                  }}
                  minHeight={420}
                >
                  <Image
                    src={item.imgUrl}
                    alt={item.title}
                    priority={index < 4}
                    width={400}
                    height={200}
                    style={{
                      borderRadius: "2%",
                      width: "100%",
                      height: "250px",
                      objectFit: "contain",
                    }}
                  />
                  <Box>
                    <Typography fontSize={21} fontWeight={700}>
                      {item.title}
                    </Typography>
                    <Typography
                      fontSize={18}
                      fontWeight={500}
                      color="textDisabled"
                    >
                      {item.subTitle}
                    </Typography>
                  </Box>
                  <Link href={item.link}>
                    <Button variant="outlined" color="warning"> See Github code</Button>
                  </Link>
                </Grid>
              );
            })}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Projects;
