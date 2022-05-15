import { CardItem } from "../layout/CardItem";
import SchoolIcon from "@mui/icons-material/School";
import { Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineOppositeContent, TimelineSeparator } from "@mui/lab";

export function Education() {
  return (
    <CardItem
      icon={<SchoolIcon color="primary" sx={{ verticalAlign: "middle" }} />}
      title={"Education"}
    >
      <Timeline position="alternate">
        <TimelineItem>
          <TimelineOppositeContent color="text.secondary">
            {new Date(2017, 9, 1).toLocaleDateString()}
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>Started education in applied computer science at PWSZ Nowy Sącz </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent color="text.secondary">
            {new Date(2021, 3, 1).toLocaleDateString()}
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>Finished education with Bachelor of Engineering degree</TimelineContent>
        </TimelineItem>
      </Timeline>
    </CardItem>
  );
}
