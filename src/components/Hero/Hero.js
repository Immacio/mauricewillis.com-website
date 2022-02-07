import React from "react";
import Link from "next/link";
import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = () => (
  <Section row nopadding style={{ width: "100%", margin: "auto" }}>
    <LeftSection>
      <SectionTitle main center>
        Maurice Willis
      </SectionTitle>
      <SectionText>
        Aspiring Front End Developer looking to develop in the Web3 space 💻
      </SectionText>
      <a style={{ color: "white" }} href="#projects">
        <Button>View Projects</Button>
      </a>
    </LeftSection>
  </Section>
);

export default Hero;
