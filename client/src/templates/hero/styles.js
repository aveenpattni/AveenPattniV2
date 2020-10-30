import styled from "@emotion/styled";
import units from "design-units";

const u = units;

export const HeroWrapper = styled.div`
  height: 100vh;
  width: 100%;
  color: white;
  position: relative;
  text-align: right;
`;

export const HeroContent = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  top: 25%;
  right: 10%;
  @media (min-width: 640px) {
    right: 20%;
  }
`;

export const HeroName = styled.h1`
  text-shadow: 2px 2px #666;
  font-family: georgia;
  ${u({
    fontSize: ["h2", "h1"]
  })}
`;

export const HeroTitle = styled.ul`
  ${u({
    fontSize: "h4"
  })}
  text-align: right;
  list-style-type: none;
`;

export const TitleItem = styled.li`
  margin: 0;
  ${u({
    marginTop: [2, 3],
    marginBottom: [2, 3]
  })}
`;
export const HeroQuote = styled.h4`
  ${u({
    fontSize: ["h5", "h4"]
  })}
  font-family: "Times New Roman";
  font-weight: 0;
  font-style: italic;
`;

export const IconBubbles = styled.ul`
  display: flex;
`;