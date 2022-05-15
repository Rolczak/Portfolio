import { CardItem } from "../layout/CardItem";
import GitHubIcon from "@mui/icons-material/GitHub";
import {
  Alert,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import GitLab from "./images/GitLab.svg";
export default function Repositories() {
  return (
    <CardItem
      icon={<GitHubIcon color="primary" sx={{ verticalAlign: "middle" }} />}
      title={"Repositories"}
    >
      <Alert severity="warning">
        CAUTION! Viewing my old code can lead to cancer and hearth attack. Do it
        at your own risk.
      </Alert>
      <List>
        <ListItem>
          <ListItemButton
            onClick={() => window.open("https://github.com/Rolczak")}
          >
            <ListItemIcon>
              <GitHubIcon />
            </ListItemIcon>
            <ListItemText primary="Github" />
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton
            onClick={() => window.open("https://gitlab.com/Rolczak")}
          >
            <ListItemIcon>
              <img src={GitLab} alt={"GitLabL logo"} width={24} />
            </ListItemIcon>
            <ListItemText primary="Gitlab" />
          </ListItemButton>
        </ListItem>
      </List>
    </CardItem>
  );
}
