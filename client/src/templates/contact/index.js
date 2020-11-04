import React from 'react';
import styled from "@emotion/styled";
import units from "design-units";
import { ContactBlock, ContentBlock } from "../../components/ContactBlock";
import { contactList } from "./contacts";

const ContactWrapper = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  ${units({
    backgroundColor: "black",
    color: "white"
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
    marginBottom: "24px",
    flexDirection: "column"
  })}
`;
const ContactHeader = styled.h2`
  font-family: "Georgia";
  ${units({
    fontSize: "h2",
    marginTop: [3, 4]
  })}
`;
const BlockSection = styled.div`
  width: 100%;
  ${units({
    display: ["grid", "grid", "flex"]
  })}
  justify-content: space-evenly;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
`;

export const ContactSection = () => {
  return (
    <ContactWrapper>
      <ContentWrapper>
        <ContactHeader>Contact Aveen</ContactHeader>
        <BlockSection>
          {contactList.map(item => <ContactBlock key={item.icon} {...item} />)}
        </BlockSection>
      </ContentWrapper>
    </ContactWrapper>
  )
}