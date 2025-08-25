"use client";

import {
  Alert,
  Box,
  Button,
  CircularProgress,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { ContactData } from "./contactData";
import { useThemeContext } from "@/customTheme/ThemeProvider";
import { useState } from "react";
const Contact = () => {
  const { isDarkMode } = useThemeContext();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleInputChange =
    (field: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setFormData((prev) => ({
        ...prev,
        [field]: event.target.value,
      }));

      // Clear status when user starts typing
      if (status.type) {
        setStatus({ type: null, message: "" });
      }
    };

  const validateForm = () => {
    if (!formData.name.trim()) {
      setStatus({ type: "error", message: "Name is required" });
      return false;
    }
    if (!formData.email.trim()) {
      setStatus({ type: "error", message: "Email is required" });
      return false;
    }
    if (!formData.subject.trim()) {
      setStatus({ type: "error", message: "Subject is required" });
      return false;
    }
    if (!formData.message.trim()) {
      setStatus({ type: "error", message: "Message is required" });
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus({
        type: "error",
        message: "Please enter a valid email address",
      });
      return false;
    }

    return true;
  };

  const sendTestEmail = async () => {
    if (!validateForm()) return;
    setIsLoading(true);
    setStatus({ type: null, message: "" });
    try {
      console.log("Sending email with data:", formData);

      const res = await fetch("/api/send-email/send-mail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          to: "your-email@example.com", // Replace with your actual email
          subject: `Contact Form: ${formData.subject}`,
          text: `
            Name: ${formData.name}
            Email: ${formData.email}
            Subject: ${formData.subject}
            Message: ${formData.message}
                      `,
          html: `
            <h2>New Message From${formData.name}</h2>
            <p><strong>Subject:</strong> ${formData.subject}</p>
            <p><strong>Email:</strong> ${formData.email}</p>
            <p><strong>Message:</strong></p>
            <p>${formData.message.replace(/\n/g, "<br>")}</p>
          `,
        }),
      });

      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }

      const data = await res.json();

      if (data) {
        setStatus({
          type: "success",
          message:
            "Your message has been sent successfully! I'll get back to you soon.",
        });
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        setStatus({
          type: "error",
          message: "Your message has not been sent, check the details",
        });
      }

      // Reset form
    } catch (error) {
      console.log(error);
    }
  };

  const customTextfieldStyle = {
    background: isDarkMode
      ? "linear-gradient(17deg, #2e2e2ed4, #161616fe 70.71%)"
      : "#ffffffff",
    borderRadius: 3,
    "& .MuiOutlinedInput-root": {
      borderRadius: 3,
      "&:hover .MuiOutlinedInput-notchedOutline": {
        borderRadius: 3,
      },
      "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
        borderRadius: 3,
      },
    },
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
            Let&apos;s work together
          </Typography>
          {status.type && (
            <Alert
              severity={status.type}
              onClose={() => setStatus({ type: null, message: "" })}
              sx={{ mb: 2 }}
            >
              {status.message}
            </Alert>
          )}
          <Box display={"flex"} flexDirection={"column"} gap={3}>
            <TextField
              variant="outlined"
              type="text"
              label={"Name *"}
              value={formData.name}
              onChange={handleInputChange("name")}
              sx={customTextfieldStyle}
            />
            <TextField
              type="email"
              label={"Email *"}
              value={formData.email}
              onChange={handleInputChange("email")}
              sx={customTextfieldStyle}
            />
            <TextField
              type="text"
              label={"Subject *"}
              value={formData.subject}
              onChange={handleInputChange("subject")}
              sx={customTextfieldStyle}
            />
            <TextField
              multiline
              type="textarea"
              minRows={3}
              label={"Your Message *"}
              value={formData.message}
              onChange={handleInputChange("message")}
              sx={customTextfieldStyle}
            />
          </Box>
          <Button
            variant="contained"
            sx={{
              backgroundColor: isDarkMode ? "#c6c6c6ff" : "#ff9b4aff",
              color: "black",
              fontSize: 18,
              fontWeight: 700,
            }}
            onClick={sendTestEmail}
          >
            {isLoading ? (
              <Box>
                sending....
                <CircularProgress />
              </Box>
            ) : (
            "Send"
            )}
          </Button>
        </Grid>
      </Grid>
    </>
  );
};
export default Contact;
