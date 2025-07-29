"use client";

import { backgroundConstantColorDark, backgroundConstantColorLight } from "@/customTheme/customTheme";
import { useThemeContext } from "@/customTheme/ThemeProvider";
import { BadgeOutlined, ContactMail, FacebookRounded, Instagram, LinkedIn, People, Person, PhoneOutlined, ProductionQuantityLimitsOutlined, ReceiptOutlined, Twitter } from "@mui/icons-material";
import { Box, Grid, useTheme, Typography, Divider, Badge } from "@mui/material";

const bgColorLight = "#4c81a6ff"
const bgColorDark = "#5b98c3ff"

interface sidebarProps {
  isClicked:boolean
}
export const Sidebar = ({isClicked}:sidebarProps) => {
  const theme = useTheme();
  const { isDarkMode } = useThemeContext();

  return (
    <Box
      sx={{
        width: "100%",
        display: isClicked? "none" : "block",
        minHeight: "100vh",
        backgroundColor: isDarkMode ? backgroundConstantColorDark: backgroundConstantColorLight,
        pt:6,
        pb:1,
        borderRight:'1px solid #CCC',
      }}
    >
      <Grid container display={"flex"} flexDirection={"column"} width={'90%'} margin={'auto'}>
        <Grid size={{ lg: 12 }}>
          {/* profile card */}
          <Box display={"flex"} flexDirection={"column"} textAlign={'center'}>
            <Box
              height={"100px"}
              width={"100px"}
              margin={"auto"}
              bgcolor={" #5043ffef"}
              borderRadius={'50%'}
            >
                {/* image here */}
            </Box>

            <Typography variant="h5" fontWeight={600}>
                Tarang Harsh
            </Typography>
            <Typography variant="body2" fontWeight={500}>Web Developer</Typography>

            {/* accounts */}
            <Box display={'flex'} gap={1} width={'45%'} margin={'auto'} my={2}>
                <FacebookRounded/>
                <Instagram/>
                <Twitter/>
                <LinkedIn/>
            </Box>
          </Box>

          {/* divider */}
          <Divider sx={{
            width:'80%',
            height:3,
            margin:'auto',
            mt:3,
            mb:4,
            backgroundColor:isDarkMode?'white' :'black'
          }}/>
        </Grid>


        <Grid container gap={2}>
          <Grid display={'flex'} 
          alignItems={'center'}
          size={{lg:12}}
          gap={1}
          sx={{
            p:1,
            cursor:'pointer',
            backgroundColor:isDarkMode ? bgColorDark : bgColorLight,
            color:isDarkMode?"#fff" :"#fff",
            borderRadius:3,
            ":hover":{
                backgroundColor:isDarkMode ? "#cdcdcdff" : " #535353ff",
                color:isDarkMode?"#000" :"#fff"
            }

          }}>
            <Person/>
            <Typography fontSize={17} fontWeight={500}>About Me</Typography>
          </Grid>
          <Grid display={'flex'} 
          alignItems={'center'}
          size={{lg:12}}
          gap={1}
          sx={{
            p:1,
            cursor:'pointer',
            backgroundColor:isDarkMode ? bgColorDark : bgColorLight,
            color:isDarkMode?"#fff" :"#fff",
            borderRadius:3,
            ":hover":{
                backgroundColor:isDarkMode ? "#cdcdcdff" : " #535353ff",
                color:isDarkMode?"#000" :"#fff"
            }

          }}>
            <BadgeOutlined/>
            <Typography fontSize={17} fontWeight={500}>Portfolio</Typography>
          </Grid>
          <Grid display={'flex'} 
          alignItems={'center'}
          size={{lg:12}}
          gap={1}
          sx={{
            p:1,
            cursor:'pointer',
            backgroundColor:isDarkMode ? bgColorDark : bgColorLight,
            color:isDarkMode?"#fff" :"#fff",
            borderRadius:3,
           ":hover":{
                backgroundColor:isDarkMode ? "#cdcdcdff" : " #535353ff",
                color:isDarkMode?"#000" :"#fff"
            }

          }}>
            <ReceiptOutlined/>
            <Typography fontSize={17} fontWeight={500}>Resume</Typography>
          </Grid>
          <Grid display={'flex'} 
          alignItems={'center'}
          size={{lg:12}}
          gap={1}
          sx={{
            p:1,
            cursor:'pointer',
            backgroundColor:isDarkMode ? bgColorDark : bgColorLight,
            color:isDarkMode?"#fff" :"#fff",
            borderRadius:3,
             ":hover":{
                backgroundColor:isDarkMode ? "#cdcdcdff" : " #535353ff",
                color:isDarkMode?"#000" :"#fff"
            }

          }}>
            <ProductionQuantityLimitsOutlined/>
            <Typography fontSize={17} fontWeight={500}>Products</Typography>
          </Grid>
          <Grid display={'flex'} 
          alignItems={'center'}
          size={{lg:12}}
          gap={1}
          sx={{
            p:1,
            cursor:'pointer',
            backgroundColor:isDarkMode ? bgColorDark : bgColorLight,
            color:isDarkMode?"#fff" :"#fff",
            borderRadius:3,
            ":hover":{
                backgroundColor:isDarkMode ? "#cdcdcdff" : " #535353ff",
                color:isDarkMode?"#000" :"#fff"
            }

          }}>
            <PhoneOutlined/>
            <Typography fontSize={17} fontWeight={500}>Contact</Typography>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};
