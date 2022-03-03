import React from 'react'
import './about.css'
import { info } from '../../info'
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import { LibraryBooksIcon, SchoolIcon } from '@mui/icons-material';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';

const About = () => {

    return (
        <div className="about_container">
            <div className="about_title"><div></div>About</div>
            <div className="about_info test">
                <div className="about_timeline">
                    <Timeline>
                        <TimelineItem>
                            <TimelineSeparator>
                                <TimelineConnector />
                                <TimelineDot color="secondary">
                                    <LaptopMacIcon />
                                </TimelineDot>
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent sx={{ py: '12px', px: 2 }}>
                                <Typography variant="h6" component="span">
                                    Specialist Programmer @ Infosys.Ltd
                                </Typography>
                                <Typography>2020 - Present</Typography>
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineSeparator>
                                <TimelineConnector />
                                <TimelineDot color="secondary">
                                    <SchoolIcon />
                                </TimelineDot>
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent sx={{ py: '12px', px: 2 }}>
                                <Typography variant="h6" component="span">
                                    Pranveer Singh Institute of Technology
                                </Typography>
                                <Typography><i>Bachelor of Technology in Computer Science</i></Typography>
                                <Typography>2016 - 2020</Typography>
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineSeparator>
                                <TimelineConnector />
                                <TimelineDot color="secondary">
                                    <LibraryBooksIcon />
                                </TimelineDot>
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent sx={{ py: '12px', px: 2 }}>
                                <Typography variant="h6" component="span">
                                    St. Mary&apos;s School
                                </Typography>
                                <Typography><i>Intermediate</i></Typography>
                                <Typography>2015</Typography>
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineSeparator>
                                <TimelineConnector />
                                <TimelineDot color="secondary">
                                    <LibraryBooksIcon />
                                </TimelineDot>
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent sx={{ py: '12px', px: 2 }}>
                                <Typography variant="h6" component="span">
                                    St. Mary&apos;s School
                                </Typography>
                                <Typography><i>High School</i></Typography>
                                <Typography>2013</Typography>
                            </TimelineContent>
                        </TimelineItem>
                    </Timeline>
                </div>
                <div className="about_icons test">
                    {
                        info.skillsIcon.map((url, index) => {
                            return (
                                <div>
                                    <img src={url} alt={index} />
                                </div>
                            )
                        })
                    }

                </div>
            </div>

        </div>
    )
}

export default About