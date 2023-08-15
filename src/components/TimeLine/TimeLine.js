import React from "react";
import Link from "next/link";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";

const Timeline = () => {
  return (
    <Section id="about">
      <SectionDivider />
      <SectionTitle main>About Me</SectionTitle>
      <SectionText>
        Hello! My name is Maurice and I'm currenlty based in Toronto, Canada.
        <br /> <br />I currently work as a Front-End Engineer, and I'm
        passionate about building functional and beautiful user interfaces for
        both mobile and desktop users, using the latest front-end technologies
        (React, Next etc.) You'll find a list of personal projects that I'm
        currently working on or have completed within this website.
      </SectionText>
    </Section>
  );
};

export default Timeline;
