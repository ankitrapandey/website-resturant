

import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Box, Typography, IconButton } from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{ textAlign: "center", bgcolor: "#1A1A19", color: "white", p: 3 }}
    >
      <Box
        sx={{
          my: 3,
          display: "flex",
          justifyContent: "center",
          gap: 2,
        }}
      >
        {/* Social Media Icons with Links */}
        <IconButton 
          component="a" 
          href="https://www.instagram.com/yourprofile" 
          target="_blank" 
          rel="noopener noreferrer"
          sx={{
            color: "#E4405F", // Instagram color
            "&:hover": {
              color: "goldenrod",
              transform: "translateY(-5px)",
              transition: "all 400ms",
            },
          }}
        >
          <InstagramIcon />
        </IconButton>
        <IconButton 
          component="a" 
          href="https://twitter.com/yourprofile" 
          target="_blank" 
          rel="noopener noreferrer"
          sx={{
            color: "#1DA1F2", // Twitter color
            "&:hover": {
              color: "goldenrod",
              transform: "translateY(-5px)",
              transition: "all 400ms",
            },
          }}
        >
          <TwitterIcon />
        </IconButton>
        <IconButton 
          component="a" 
          href="https://github.com/yourprofile" 
          target="_blank" 
          rel="noopener noreferrer"
          sx={{
            color: "#333", // GitHub color
            "&:hover": {
              color: "goldenrod",
              transform: "translateY(-5px)",
              transition: "all 400ms",
            },
          }}
        >
          <GitHubIcon />
        </IconButton>
        <IconButton 
          component="a" 
          href="https://www.youtube.com/yourchannel" 
          target="_blank" 
          rel="noopener noreferrer"
          sx={{
            color: "#FF0000", // YouTube color
            "&:hover": {
              color: "goldenrod",
              transform: "translateY(-5px)",
              transition: "all 400ms",
            },
          }}
        >
          <YouTubeIcon />
        </IconButton>
      </Box>
      <Typography
        variant="h5"
        sx={{
          "@media (max-width:600px)": {
            fontSize: "1rem",
          },
        }}
      >
        All Rights Reserved &copy; Ankit Pandey
      </Typography>
    </Box>
  );
};

export default Footer;
