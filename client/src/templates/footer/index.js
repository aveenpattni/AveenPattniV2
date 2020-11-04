import React from 'react';
import styled from "@emotion/styled";
import units from "design-units";

const FooterWrapper = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  ${units({
    backgroundColor: "white",
    height: "48px"
  })}
`;
const FooterText = styled.h4`
  margin: 0;
  ${units({
    fontSize: "h4"
  })}
`;

export const FooterSection = () => {
  return (
    <FooterWrapper>
      <FooterText>
        An Aveen Pattni Production.
      </FooterText>
    </FooterWrapper>
  )
}