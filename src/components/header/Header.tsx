import {
  Box,
  Button,
  Dialog,
  DialogTitle,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";
import { TechCarousel } from "./TechCarousel";
import bgImage from "./images/headerBackground.jpg";
import { useState } from "react";
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Header() {
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const openDialog = () => {
    setOpen(true);
  }

  return (
    <header>
      <Dialog onClose={handleClose} open={open}>
        <DialogTitle>Contact me</DialogTitle>
        <List>
        <ListItem>
          <ListItemButton
            onClick={() => window.open("https://www.linkedin.com/in/karol-chryczyk-836429213/")}
          >
            <ListItemIcon>
              <LinkedInIcon />
            </ListItemIcon>
            <ListItemText primary="Linkedin" />
          </ListItemButton>
        </ListItem>
      </List>
      </Dialog>
      <Paper
        sx={{
          position: "relative",
          backgroundImage: `url(${bgImage})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <Grid container spacing={2} columns={12} alignItems="center">
          <Grid item xs={12} md={6}>
            <Box sx={{ display: "flex", flexDirection: "column", p: 4 }}>
              <Typography component="div" variant="h3" color="secondary">
                Karol Chryczyk
              </Typography>
              <Typography component="div" variant="h3">
                Fullstack developer
              </Typography>
              <Typography variant="h5" sx={{ my: 2 }}>
                I create code with passion
              </Typography>
              <Button variant="contained" color="error" sx={{ width: "50%" }} onClick={openDialog}>
                Contact me
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12} md={6} justifyContent="center">
            <TechCarousel />
          </Grid>
        </Grid>
      </Paper>
    </header>
  );
}
