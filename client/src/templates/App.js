import React from 'react';
import styled from "@emotion/styled";
import units from "design-units";
import { StickyHeader } from "./Header"
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
  })};
`


function App() {
  return (
    <AppWrapper>
      <StickyHeader />
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
