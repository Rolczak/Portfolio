import { CardItem } from "../layout/CardItem";
import WorkIcon from "@mui/icons-material/Work";
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  List,
  ListItem,
  ListItemText,
  ListSubheader,
  Stack,
  Typography,
} from "@mui/material";
import cukLogo from "./images/cuk.svg";
import { Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineOppositeContent, TimelineSeparator } from "@mui/lab";

export function Carrer() {
  return (
    <CardItem icon={<WorkIcon color="primary" sx={{verticalAlign: 'middle'}} />} title={"Carrer"}>
      <Card elevation={3}>
        <CardHeader title={".NET Fullstack developer"} />
        <CardContent>
          <Box sx={{ textAlign: "center" }}>
            <Stack>
              <img height={140} src={cukLogo} alt="CUK Ubezpieczenia" />
              <Typography variant="caption">CUK Ubezpieczenia</Typography>
            </Stack>
          </Box>
          <Box>
            <List
              sx={{ bgcolor: "background.paper" }}
              subheader={
                <ListSubheader component="div">
                  Main responsibilities
                </ListSubheader>
              }
              dense={true}
            >
              <ListItem>
                <ListItemText primary="Implementing new frontend and backend features" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Designing new frontend and backend architecture" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Mainitaining and refactoring codebase" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Bug fixing" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Code review" />
              </ListItem>
            </List>
            <Timeline position="alternate">
              <TimelineItem>
                <TimelineOppositeContent color="text.secondary">
                  {new Date(2021, 6, 1).toLocaleDateString()}
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>Started work as junior developer</TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineOppositeContent color="text.secondary">
                  {new Date(2021, 11, 1).toLocaleDateString()}
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>Promotion to regular developer</TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineOppositeContent color="text.secondary">
                  {new Date().toLocaleDateString()}
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>Still working here</TimelineContent>
              </TimelineItem>
            </Timeline>
          </Box>
        </CardContent>
      </Card>
    </CardItem>
  );
}
