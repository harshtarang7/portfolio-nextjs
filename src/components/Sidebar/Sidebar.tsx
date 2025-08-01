"use client";

import {
  backgroundConstantColorDark,
  backgroundConstantColorLight,
} from "@/customTheme/customTheme";
import { useThemeContext } from "@/customTheme/ThemeProvider";
import {
  BadgeOutlined,
  ContactMail,
  FacebookRounded,
  Instagram,
  LinkedIn,
  People,
  Person,
  PhoneOutlined,
  ProductionQuantityLimitsOutlined,
  ReceiptOutlined,
  Twitter,
} from "@mui/icons-material";
import {
  Box,
  Grid,
  useTheme,
  Typography,
  Divider,
  Badge,
  Button,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const bgColorLight = "#4c81a6ff";
const bgColorDark = "#5b98c3ff";

interface sidebarProps {
  isClicked: boolean;
}
export const Sidebar = ({ isClicked }: sidebarProps) => {
  const theme = useTheme();
  const { isDarkMode } = useThemeContext();

  const aboutRef = useRef<HTMLButtonElement>(null);
  const portfolioRef = useRef<HTMLButtonElement>(null);
  const resumeRef = useRef<HTMLButtonElement>(null);
  const productsRef = useRef<HTMLButtonElement>(null);
  const contactRef = useRef<HTMLButtonElement>(null);

  const handleActive = (ref: React.RefObject<HTMLButtonElement | null>) => {
    const allRefs = [
      aboutRef,
      portfolioRef,
      resumeRef,
      productsRef,
      contactRef,
    ];

    allRefs.forEach((r) => {
      if (r.current) {
        r.current.style.backgroundColor = isDarkMode
          ? bgColorDark
          : bgColorLight;
        r.current.style.color = "#fff";
      }
    });

    if (ref.current) {
      ref.current.style.backgroundColor = isDarkMode ? "#fff" : "#000";
      ref.current.style.color = isDarkMode ? "#000" : "#fff";
    }
  };

  useEffect(() => {
    handleActive(aboutRef);
  }, []);

  return (
    <Grid
      sx={{
        width: "100%",
        display: isClicked ? "none" : "block",
        minHeight: "100%",
        backgroundColor: isDarkMode
          ? backgroundConstantColorDark
          : backgroundConstantColorLight,
        pt: 6,
        pb: 1,
        borderRight: "1px solid #CCC",
      }}
    >
      <Grid
        container
        display={"flex"}
        flexDirection={"column"}
        width={"90%"}
        margin={"auto"}
      >
        <Grid size={{ lg: 12 }}>
          {/* profile card */}
          <Box display={"flex"} flexDirection={"column"} textAlign={"center"}>
            <Box
              height={"150px"}
              width={"150px"}
              margin={"auto"}
              bgcolor={" #c18c50ef"}
              borderRadius={"50%"}
              overflow={"hidden"}
              display={'flex'}
              position={'relative'}
              justifyContent={'center'}
              
            >
              <Image
                src={"/assets/tarangHarsh.webp"}
                alt="profile"
                width={100}
                height={180}
                style={{
                  position:'absolute',
                  top:10,
                  filter:' drop-shadow(20px 2px 3px #00000066)'
                }}
              />
            </Box>

            <Typography variant="h5" fontWeight={600}>
              Tarang Harsh
            </Typography>
            <Typography variant="body2" fontWeight={500}>
              Web Developer
            </Typography>

            {/* accounts */}
            <Box display={"flex"} gap={1} width={"45%"} margin={"auto"} my={2}>
              <FacebookRounded />
              <Instagram />
              <Twitter />
              <LinkedIn />
            </Box>
          </Box>

          {/* divider */}
          <Divider
            sx={{
              width: "80%",
              height: 3,
              margin: "auto",
              mt: 3,
              mb: 4,
              backgroundColor: isDarkMode ? "white" : "black",
            }}
          />
        </Grid>

        <Grid container gap={2}>
          <Grid size={{ lg: 12 }}>
            <Link href={"/"}>
              <Button
                ref={aboutRef}
                onClick={() => handleActive(aboutRef)}
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "start",
                  p: 1,
                  cursor: "pointer",
                  backgroundColor: isDarkMode ? bgColorDark : bgColorLight,
                  color: isDarkMode ? "#fff" : "#fff",
                  borderRadius: 3,
                  ":hover": {
                    backgroundColor: isDarkMode ? "#cdcdcdff" : " #535353ff",
                    color: isDarkMode ? "#000" : "#fff",
                  },
                }}
              >
                <Person />
                <Typography fontSize={17} fontWeight={500} ml={1}>
                  About Me
                </Typography>
              </Button>
            </Link>
          </Grid>

          <Grid size={{ lg: 12 }}>
            <Link href={"/"}>
              <Button
                ref={portfolioRef}
                onClick={() => handleActive(portfolioRef)}
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "start",
                  p: 1,
                  cursor: "pointer",
                  backgroundColor: isDarkMode ? bgColorDark : bgColorLight,
                  color: isDarkMode ? "#fff" : "#fff",
                  borderRadius: 3,
                  ":hover": {
                    backgroundColor: isDarkMode ? "#cdcdcdff" : " #535353ff",
                    color: isDarkMode ? "#000" : "#fff",
                  },
                }}
              >
                <BadgeOutlined />
                <Typography fontSize={17} fontWeight={500}>
                  Portfolio
                </Typography>
              </Button>
            </Link>
          </Grid>

          <Grid size={{ lg: 12 }}>
            <Link href={"/"}>
              <Button
                ref={resumeRef}
                onClick={() => handleActive(resumeRef)}
                sx={{
                  
                  width: "100%",
                  display: "flex",
                  justifyContent: "start",
                  p: 1,
                  cursor: "pointer",
                  backgroundColor: isDarkMode ? bgColorDark : bgColorLight,
                  color: isDarkMode ? "#fff" : "#fff",
                  borderRadius: 3,
                  ":hover": {
                    backgroundColor: isDarkMode ? "#cdcdcdff" : " #535353ff",
                    color: isDarkMode ? "#000" : "#fff",
                  },
                }}
              >
                <ReceiptOutlined />
                <Typography fontSize={17} fontWeight={500}>
                  Resume
                </Typography>
              </Button>
            </Link>
          </Grid>

          <Grid size={{ lg: 12 }}>
            <Link href={"/"}>
              <Button
                ref={productsRef}
                onClick={() => handleActive(productsRef)}
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "start",
                  p: 1,
                  cursor: "pointer",
                  backgroundColor: isDarkMode ? bgColorDark : bgColorLight,
                  color: isDarkMode ? "#fff" : "#fff",
                  borderRadius: 3,
                  ":hover": {
                    backgroundColor: isDarkMode ? "#cdcdcdff" : " #535353ff",
                    color: isDarkMode ? "#000" : "#fff",
                  },
                }}
              >
                <ProductionQuantityLimitsOutlined />
                <Typography fontSize={17} fontWeight={500}>
                  Products
                </Typography>
              </Button>
            </Link>
          </Grid>

          <Grid size={{ lg: 12 }}>
            <Link href={"/"}>
              <Button
                ref={contactRef}
                onClick={() => handleActive(contactRef)}
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "start",
                  p: 1,
                  cursor: "pointer",
                  backgroundColor: isDarkMode ? bgColorDark : bgColorLight,
                  color: isDarkMode ? "#fff" : "#fff",
                  borderRadius: 3,
                  ":hover": {
                    backgroundColor: isDarkMode ? "#cdcdcdff" : " #535353ff",
                    color: isDarkMode ? "#000" : "#fff",
                  },
                }}
              >
                <PhoneOutlined />
                <Typography fontSize={17} fontWeight={500}>
                  Contact
                </Typography>
              </Button>
            </Link>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
