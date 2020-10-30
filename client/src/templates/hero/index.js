import React from 'react';
import styled from "@emotion/styled";
import units from "design-units";
import Particles from "react-particles-js";

const u = units;

const HeroWrapper = styled.div`
  height: 100vh;
  width: 100%;
  color: white;
  position: relative;
`;

const HeroName = styled.h1`
  position: absolute;
  top: 40%;
  right: 10%;
  @media (min-width: 960px) {
    right: 20%;
  }
  text-shadow: 2px 2px #666;
  font-family: georgia;
  ${u({
    fontSize: "h1",
  })}
`;

export const HeroSection = () => {
  const particlesProps = {
    height: "100vh",
    params: {
      interactivity: {
        detectsOn: "canvas",
        events: {
          onHover: {
            enable: true,
            mode: "repulse"
          }
        }
      },
      particles: {
        number: {
          value: 80,
        },
      }
    }
  }

  return (
    <HeroWrapper>
      <Particles {...particlesProps} />
      <HeroName>Aveen Pattni</HeroName>
    </HeroWrapper>
  )
}