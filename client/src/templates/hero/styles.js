import styled from "@emotion/styled";
import units from "design-units";

const u = units;

export const HeroWrapper = styled.section`
  height: 100vh;
  width: 100%;
  position: relative;
  text-align: right;
  ${u({
    backgroundColor: "black",
    color: "whiteText"
  })};
`;

export const HeroContent = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  top: 20%;
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
  font-family: "Arial";
  font-weight: 0;
  font-style: italic;
`;

export const IconBubbles = styled.ul`
  display: flex;
  ${units({
    height: ["48px", "54px"],
  })}
`;