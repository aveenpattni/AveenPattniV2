import styled from "@emotion/styled";
import units from "design-units";

export const AboutWrapper = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  ${units({
    backgroundColor: "white",
  })}
`;
export const ContentWrapper = styled.div`
  max-width: 1140px;
  display: flex;
  align-items: center;
  ${units({
    marginRight: [3, 4],
    marginLeft: [3, 4],
    flexDirection: ["column", "row"]
  })}
`;
export const PictureZone = styled.div`
${units({
  width: ["60%", "40%"],
  margin: ["1rem", "2rem"]
})}
  img {
    max-width: 100%;
    height: auto;
  }
`;
export const TextZone = styled.div`
  ${units({
    width: ["100%", "60%"]
  })}
`;
export const AboutHeader = styled.h2`
  font-family: "Georgia";
  ${units({
    fontSize: "h2",
    marginTop: [0, 4]
  })}
`;
export const AboutText = styled.p`
  font-family: Arial;
  ${units({
    fontSize: "p",
    lineHeight: "p"
  })}
`;
export const SkillHeader = styled.h4`
  font-family: "Georgia";
  margin: 0;
  ${units({
    fontSize: "h4",
    marginTop: [3, 4]
  })}
`;
export const SkillZone = styled.p` 
  font-family: Arial;
  margin: 0;
  ${units({
    fontSize: "p",
    lineHeight: "p",
    marginTop: 2,
    marginBottom: 2
  })}
`;