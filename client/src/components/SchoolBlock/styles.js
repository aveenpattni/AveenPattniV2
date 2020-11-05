import styled from "@emotion/styled";
import units from "design-units";

export const SchoolBlockWrapper = styled.article`
  border: 3px solid #F0F0F0;
  width: 100%;
  position: relative;
  ${units({
    marginBottom: [2, 3],
    padding: [2, 3]
  })}
  :hover {
    cursor: pointer;
  }
  ::before {
    content: '';
    width: 75px;
    height: 50px;
    border-top: 2px solid #F0F0F0;
    border-right: 2px solid #F0F0F0;
    position: absolute;
    top: -3px;
    transition: 0.4s;
    ${units({
      right: -2
    })}
  }
  ::after {
    content: '';
    width: 75px;
    height: 50px;
    border-left: 2px solid #F0F0F0;
    border-bottom: 2px solid #F0F0F0;
    position: absolute;
    bottom: -3px;
    transition: 0.4s;
    ${units({
      left: -2
    })}
  }
  :hover::after {
    content: '';
    width: 50px;
    height: 75px;
    border-left: 2px solid black;
    border-bottom: 2px solid black;
    position: absolute;
    bottom: -3px;
    transition: 0.4s;
    ${units({
      left: -2
    })}
  }
  :hover::before {
    content: '';
    width: 50px;
    height: 75px;
    border-top: 2px solid black;
    border-right: 2px solid black;
    position: absolute;
    top: -3px;
    transition: 0.4s;
    ${units({
      right: -2
    })}
  }
`;
export const SchoolInfo = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const TextZone = styled.div`
  display: flex;
  flex-direction: column;
`;
export const ImageZone = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90px;
  width: 90px;
  img {
    height: 90px;
    width: 90px;
  }
`;
export const SchoolHeader = styled.h3`
  margin: 0;
  ${units({
    fontSize:"h3"
  })}
`;
export const SchoolSubheader = styled.h4`
  margin: 0;
  ${units({
    fontSize:"h4"
  })}
`;
export const SchoolDate = styled.h5`
  margin: 0;
  font-weight: 500;
  ${units({
    fontSize:"h5"
  })}
`;
export const SchoolDescription = styled.p`
  font-family: "Times New Roman";
  ${units({
    fontSize: "p"
  })}
`;