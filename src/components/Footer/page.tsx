import { Box, Grid, Typography } from "@mui/material";
import Link from "next/link";
const customStyle = {
  color: "grey",
  fontSize:13,
};
export const Footer = () => {
  return (
    <Grid container justifyContent={"center"} my={8}>
      <Grid
        size={{ lg: 12 }}
        display={"flex"}
        textAlign={"center"}
        flexDirection={"column"}
        justifyContent={"center"}
      >
        <Typography fontSize={29} fontWeight={600}>
          Tarang Harsh
        </Typography>
        <Box display={"flex"} gap={5} justifyContent={"center"} my={2}>
          <Link href={"/"} style={customStyle}>
            HOME
          </Link>
          <Link href={"/about-me"} style={customStyle}>ABOUT</Link>
          <Link href={"#"} style={customStyle}>PROJECTS</Link>
          <Link href={"#"} style={customStyle}>RESUME</Link>
        </Box>
      </Grid>
    </Grid>
  );
};
