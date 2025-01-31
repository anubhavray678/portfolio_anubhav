"use client";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineOppositeContent,
  TimelineDot,
} from "@mui/lab";
import { Typography, List, ListItem, ListItemText } from "@mui/material";
import Image from "next/image";

function Education() {
  return (
    <div className="py-8 px-4">
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        className="text-gray-800"
      >
        Education
      </Typography>

      <Timeline position="alternate">
        {/* Galgotias University */}
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            variant="body2"
            color="text.secondary"
          >
            2021 - 2025
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot variant="outlined">
              <Image
                src="/gu.png"
                alt="Galgotias University Logo"
                width={48}
                height={48}
                className="rounded-full"
              />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography variant="h6">Galgotias University</Typography>
            <Typography variant="subtitle1">B.Tech Computer Science</Typography>
            <Typography variant="caption" display="block">
              CGPA: 8.91/10
            </Typography>
            <List dense>
              <ListItem>
                <ListItemText
                  primary="Coursework"
                  secondary="Algorithms & Data Structures, Database Management, OOPS, Web Technology, Linear Algebra"
                />
              </ListItem>
            </List>
          </TimelineContent>
        </TimelineItem>

        {/* Kendriya Vidyalaya */}
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            variant="body2"
            color="text.secondary"
          >
            2019 - 2020
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot variant="outlined">
              <Image
                src="/kvs.png"
                alt="Kendriya Vidyalaya Logo"
                width={48}
                height={48}
                className="rounded-full"
              />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography variant="h6">Kendriya Vidyalaya</Typography>
            <Typography variant="subtitle1">Senior Secondary (CBSE)</Typography>
            <Typography variant="caption" display="block">
              Percentage: 84.4%
            </Typography>
            <List dense>
              <ListItem>
                <ListItemText
                  primary="Key Subjects"
                  secondary="Physics, Chemistry, Mathematics, Computer Science, English"
                />
              </ListItem>
            </List>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </div>
  );
}

export default Education;
