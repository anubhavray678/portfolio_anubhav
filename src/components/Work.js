"use client"
import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import WorkIcon from "@mui/icons-material/Work";
import DataObjectIcon from "@mui/icons-material/DataObject";
import TerminalIcon from "@mui/icons-material/Terminal";
import Typography from "@mui/material/Typography";
import { Box, List, ListItem, ListItemText } from "@mui/material";

export default function ExperienceTimeline() {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom className="text-center">
        Professional Journey
      </Typography>
      <Timeline position="alternate">
        {/* NTPC Internship */}
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            align="right"
            variant="body2"
            color="text.secondary"
          >
            Jul 2023 - Sep 2023
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color="primary">
              <WorkIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography variant="h6" component="div">
              National Thermal Power Corporation
            </Typography>
            <Typography variant="subtitle1">
              Software Engineer Intern
            </Typography>
            <Typography variant="caption">Noida, Uttar Pradesh</Typography>
            <List dense>
              <ListItem>
                <ListItemText primary="Architected employee data tracking system using React.js, boosting engagement by 40%" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Optimized system architecture reducing load times by 75%" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Integrated real-time analytics dashboards improving reporting efficiency by 60%" />
              </ListItem>
            </List>
          </TimelineContent>
        </TimelineItem>

        {/* Crowe Horwath Internship */}
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            variant="body2"
            color="text.secondary"
          >
            Jan 2024 - Present
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color="success">
              <DataObjectIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography variant="h6" component="div">
              Crowe Horwath LLP
            </Typography>
            <Typography variant="subtitle1">
              Business & Technology Solutions Intern
            </Typography>
            <Typography variant="caption">Data Engineering Team</Typography>
            <List dense>
              <ListItem>
                <ListItemText primary="Developed ETL pipelines processing 1M+ records daily using Python and SQL" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Optimized Snowflake queries reducing execution time by 35%" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Implemented data quality frameworks improving reporting accuracy by 25%" />
              </ListItem>
            </List>
          </TimelineContent>
        </TimelineItem>

        {/* Infosys Future Role */}
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            align="right"
            variant="body2"
            color="text.secondary"
          >
            Starting Jul 2025
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color="warning" variant="outlined">
              <TerminalIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography variant="h6" component="div">
              Infosys
            </Typography>
            <Typography variant="subtitle1">
              Specialist Programmer (Designate)
            </Typography>
            <List dense>
              <ListItem>
                <ListItemText primary="Upcoming role in enterprise software development" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Focus areas: Cloud-native solutions and AI-driven systems" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Will work with Infosys' global delivery model serving Fortune 500 clients" />
              </ListItem>
            </List>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </Box>
  );
}
