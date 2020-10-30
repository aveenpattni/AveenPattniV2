import React from 'react';
import aveen from "../../assets/aveen.png"
import messages from "./messages";
import {
  AboutWrapper,
  ContentWrapper,
  PictureZone,
  TextZone,
  AboutHeader,
  AboutText,
  SkillHeader,
  SkillZone
} from "./styles"

export const AboutSection = () => {
  return (
    <AboutWrapper>
      <ContentWrapper>
        <PictureZone>
          <img src={aveen} />
        </PictureZone>
        <TextZone>
          <AboutHeader>About Aveen</AboutHeader>
          <AboutText>{messages.aboutP1}</AboutText>
          <AboutText>{messages.aboutP2}</AboutText>
          <SkillHeader>Skills</SkillHeader>
          <SkillZone>{messages.skills}</SkillZone>
        </TextZone>
      </ContentWrapper>
    </AboutWrapper>
  )
}