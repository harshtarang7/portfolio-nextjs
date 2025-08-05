"use client";
import { useThemeContext } from "@/customTheme/ThemeProvider";
import { Box, Chip, Divider, Grid, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { Typewriter } from "react-simple-typewriter";

const AboutMe: React.FC = () => {
  const { isDarkMode } = useThemeContext();
  return (
    <Grid container mt={"3rem"} px={2}>
    
      {/* grid experience */}
      <Grid container width={"100%"} mt={4}>
        <Grid>
          <Box display={'flex'} alignItems={'center'} gap={1}>
            <Divider
              orientation="vertical"
              sx={{
                height: 70,
                backgroundColor: isDarkMode ? " #ffffff" : "#7b60ffff",
                width: 4,
                marginTop: 1.5,
              }}
            />
            <Typography variant="h4" mt={2} fontSize={36} fontWeight={600}> What I Do</Typography>
          </Box>
          <Typography variant="body2" fontSize={18}  mt={1} sx={{color:'#686868ff'}}>
            I have 1 and half yrs of experience in web developing. I create Web Apps, <br/>
            I edit video sometimes and and just curious with what i can create.<br/>
            You can check out my <Link href={'#'} style={{color:'#502bc0ff'}}>resume</Link> and <Link href={'#'} style={{color:'#502bc0ff'}}>project</Link>
          </Typography>

          <Grid container>

          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
export default AboutMe;
