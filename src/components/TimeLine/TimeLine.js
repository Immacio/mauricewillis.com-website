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
        Hello! My name is Maurice and I'm currenlty based in Hong Kong. I'm a
        recent graduate from the
        <Link href="https://www.anu.edu.au/">
          <a style={{ color: "white" }}> Australian National University </a>
        </Link>
        majoring in Business Information Systems. <br /> <br />I am currently
        working as a Front-End Engineer, and passionate about building
        functional user interfaces for both mobile and desktop users, using the
        latest front-end technologies (React, Next etc.) You'll find a list of
        personal projects that I'm currently working on or have completed within
        this website.
      </SectionText>
    </Section>
  );
};

export default Timeline;
