"use client";
import { Close, Download, Visibility } from "@mui/icons-material";
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, Fab, IconButton, Tooltip, Typography } from "@mui/material";
import { useState } from "react";

interface ResumeDownloadProps {
  resumeUrl: string;
  variant?: "button" | "fab" | "text";
  size?: "small" | "medium" | "large";
  color?: "primary" | "secondary" | "inherit";
}

const ResumeDownload: React.FC<ResumeDownloadProps> = ({
  resumeUrl,
  variant = "button",
  size = "medium",
  color = "primary",
}) => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDownload = async () => {
    try {
      setLoading(true);
      const response = await fetch(resumeUrl);
      const blob = await response.blob();

      // creating download link
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "tarang-harsh.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);

      setTimeout(() => {
        setOpen(false);
      }, 500);
    } catch (error) {
      alert(`error: ${error}`);
    } finally {
      setLoading(false);
    }
  };

  const renderButton = () => {
    switch (variant) {
      case "fab":
        return (
          <Tooltip title="View Resume">
            <Fab
              color={color}
              size={size}
              onClick={handleOpen}
              sx={{ position: "fixed", bottom: 16, right: 16 }}
            >
              <Visibility />
            </Fab>
          </Tooltip>
        );
      case "text":
        return (
          <Button
            variant="text"
            color={color}
            size={size}
            onClick={handleOpen}
            startIcon={<Visibility />}
          >
            View Resume
          </Button>
        );
      default:
        return (
          <Button
            variant="contained"
            color={color}
            size={size}
            onClick={handleOpen}
            startIcon={<Visibility />}
            sx={{
              borderRadius: 2,
              textTransform: "none",
              fontWeight: 600,
              px: 3,
              py: 1.5,
            }}
          >
            View Resume
          </Button>
        );
    }
  };
  return(
    <>
    {renderButton()}

    <Dialog
    open={open}
    onClose={handleClose}
    maxWidth="lg"
    fullWidth
    PaperProps={{
        sx:{
            height:'90vh',
            maxHeight:'90vh',
            borderRadius:2
        }
    }}
    >
 <DialogTitle
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            pb: 1
          }}
        >
          <Typography variant="h6" component="div">
            Resume Preview
          </Typography>
          <IconButton
            onClick={handleClose}
            size="small"
            sx={{ color: 'grey.500' }}
          >
            <Close />
          </IconButton>
        </DialogTitle>

        <DialogContent
         sx={{
            p: 0,
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden'
          }}
          >
            <Box
            sx={{
                flex:1,
                display:'flex',
                justifyContent:'center',
                alignItems:'center',
                bgcolor:'grey.100'
            }}>
                <iframe
                 src={`${resumeUrl}#toolbar=0&navpanes=0&scrollbar=0`}
              style={{
                width: '100%',
                height: '100%',
                border: 'none',
                borderRadius: '4px'
              }}
              title="Resume Preview"
                />
            </Box>
        </DialogContent>

         <DialogActions
          sx={{
            px: 3,
            py: 2,
            display: 'flex',
            justifyContent: 'space-between'
          }}
        >
          <Button
            onClick={handleClose}
            color="inherit"
          >
            Close
          </Button>
          
          <Button
            variant="contained"
            onClick={handleDownload}
            startIcon={<Download />}
            disabled={loading}
            sx={{
              borderRadius: 2,
              textTransform: 'none',
              fontWeight: 600
            }}
          >
            {loading ? 'Downloading...' : 'Download Resume'}
          </Button>
        </DialogActions>
    </Dialog>
    </>
  );
};

export default ResumeDownload;
