import React from "react";
import {
  DiFirebase,
  DiLinux,
  DiReact,
  DiUikit,
  DiWebplatform,
  DiWordpress,
  DiZend,
} from "react-icons/di";
import { SiEthereum } from "react-icons/si";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";

const Technologies = () => (
  <Section id="tech">
    <SectionDivider />
    <SectionTitle main>Tech Stacks</SectionTitle>
    <List>
      <ListItem>
        <DiReact size="3rem" />
        <br />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience with React.js, Next.js, JavaScript, HTML and CSS.
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size="3rem" />
        <br />
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with Node.js, Firebase, NextAuth, Redux and Recoil.
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiUikit size="3rem" />
        <br />
        <ListContainer>
          <ListTitle>UI/UX</ListTitle>
          <ListParagraph>
            Experience with tools such as Adobe XD, Tailwind CSS and Material
            UI.
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiWebplatform size="3rem" />
        <br />
        <ListContainer>
          <ListTitle>Content Management</ListTitle>
          <ListParagraph>
            Experience with platforms such as WordPress, Shopify and Hubspot.
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <SiEthereum size="3rem" />
        <br />
        <ListContainer>
          <ListTitle>Web3 Technologies</ListTitle>
          <ListParagraph>
            Experience with integrating MetaMask, Phantom Wallet and ThirdWeb
            API.
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
