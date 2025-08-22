"use client";

import {
  Box,
  FormControl,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { ContactData } from "./contactData";
import { useThemeContext } from "@/customTheme/ThemeProvider";
const Contact = () => {
  const { isDarkMode } = useThemeContext();


const customTextfieldStyle = {
  background: isDarkMode
    ? "linear-gradient(17deg, #2e2e2ed4, #161616fe 70.71%)"
    : "#ffffffff",
    borderRadius:3,
  '& .MuiOutlinedInput-root': {
    borderRadius: 3,
    '&:hover .MuiOutlinedInput-notchedOutline': {
      borderRadius: 3,
    },
    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderRadius: 3,
    },
  }
};
  return (
    <>
      <Grid container maxWidth={"1320px"} margin={"auto"} mt={"4rem"}>
        <Grid
          container
          display={"flex"}
          flexDirection={"column"}
          gap={2}
          size={{ lg: 4 }}
        >
          {ContactData.map((item, index) => {
            return (
              <Grid
                key={index}
                display={"flex"}
                justifyContent={"space-between"}
                alignItems={"center"}
                p={2}
                borderRadius={4}
                gap={3}
              >
                <Box
                  width={"28%"}
                  textAlign={"center"}
                  borderRadius={3}
                  sx={{
                    background: isDarkMode
                      ? "linear-gradient(120deg, #272727ff, #1a1919fe 70.71%)"
                      : "#fee2bbff",
                  }}
                  py={3}
                >
                  {item.icon}
                </Box>
                <Box display={"flex"} flexDirection={"column"} width={"70%"}>
                  <Typography
                    fontSize={19}
                    fontWeight={600}
                    color="textDisabled"
                    sx={{ fontFamily: "sans-serif !important" }}
                  >
                    {item.mainTitle}
                  </Typography>
                  <Typography
                    fontSize={19}
                    sx={{ fontFamily: "sans-serif !important" }}
                  >
                    {item.subTitle1}
                  </Typography>
                  <Typography
                    fontSize={19}
                    sx={{ fontFamily: "sans-serif !important" }}
                  >
                    {item?.subTitle2}
                  </Typography>
                </Box>
              </Grid>
            );
          })}
        </Grid>

        <Grid
          size={{ lg: 7 }}
          display={"flex"}
          flexDirection={"column"}
          component={Paper}
          elevation={2}
          padding={3}
          borderRadius={3}
          gap={3}
          sx={{
            background: isDarkMode
              ? "linear-gradient(120deg, #202020ff, #161616fe 70.71%)"
              : "#fee2bbff",
          }}
          boxShadow={"0px 0px 5px #8a8a8ad4"}
        >
          <Typography fontSize={"3rem"} fontWeight={600}>
            Let's work together
          </Typography>
          <Box display={"flex"} flexDirection={"column"} gap={3}>
              <TextField variant="outlined" type="text" label={"Name *"} sx={customTextfieldStyle} />
              <TextField type="email" label={"Email *"}  sx={customTextfieldStyle}/>
              <TextField type="text" label={"Subject *"}  sx={customTextfieldStyle}/>
              <TextField
                multiline
                type="textarea"
                minRows={3}
                label={"Your Message *"}
                sx={customTextfieldStyle}
              />
          </Box>
        </Grid>
      </Grid>
    </>
  );
};
export default Contact;
