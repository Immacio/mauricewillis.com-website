import React from 'react';
import Link from 'next/link';
import { Section, SectionDivider, SectionText, SectionTitle} from '../../styles/GlobalComponents';

const Timeline = () => {

  return (
    <Section id="about">
      <SectionDivider/>
      <SectionTitle main>About Me</SectionTitle>
      <SectionText>
        Hello! My name is Maurice and I was born and raised in Hong Kong. I am a recent graduate from the 
        <Link href="https://www.anu.edu.au/"><a style={{color:'white'}}> Australian National University </a></Link>
        majoring in Business Information Systems. <br/> <br/>I am currently working as a Web Developer, and am interested in developing
        Crypto/Blockchain apps in Web3. I have been learning to develop web applications for the last 2 years with the goal of working on
        projects with actual real world use-cases and becoming a full fledged Front End Developer.
        
      </SectionText>
    </Section>
  );
};

export default Timeline;
