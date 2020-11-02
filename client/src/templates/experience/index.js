import React from 'react';
import styled from "@emotion/styled";
import units from "design-units";
import { DropBlock } from '../../components/DropBlock';
import messages from "./messages";

const ExperienceWrapper = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  ${units({
    backgroundColor: "black"
  })}
`;
const ContentWrapper = styled.div`
  width: 100%;
  max-width: 1140px;
  display: flex;
  align-items: center;
  ${units({
    marginRight: [3, 4],
    marginLeft: [3, 4],
    flexDirection: "column"
  })}
`;
const ExpHeader = styled.h2`
  font-family: "Georgia";
  ${units({
    fontSize: "h2",
    marginTop: [3, 4],
    color: "whiteText"
  })}
`;

export const ExperienceSection = () => {
  return (
    <ExperienceWrapper>
      <ContentWrapper>
        <ExpHeader>My Experience</ExpHeader>
        {messages.experiences.map(exp => <DropBlock key={exp.company} {...exp}/>)}
      </ContentWrapper>
    </ExperienceWrapper>
  )
}