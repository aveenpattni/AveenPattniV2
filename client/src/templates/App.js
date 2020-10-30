import React from 'react';
import styled from "@emotion/styled";
import units from "design-units";
import { HeroSection } from "./hero";
import { AboutSection } from "./about";
import { ExperienceSection } from "./experience";
import { EducationSection } from "./education";
import { ContactSection } from "./contact";
import { FooterSection } from "./footer";

const u = units;

const AppWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ${u({
    backgroundColor: "secondary"
  })};
`


function App() {
  return (
    <AppWrapper>
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <EducationSection />
      <ContactSection />
      <FooterSection />
    </AppWrapper>
  );
}

export default App;
