import { CardItem } from "../layout/CardItem";
import CallIcon from "@mui/icons-material/Call";
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Contact() {
  return (
    <CardItem
      icon={<CallIcon color={"primary"} sx={{ verticalAlign: "middle" }} />}
      title={"Contact"}
    >
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
    </CardItem>
  );
}
