import React from 'react';
import Particles from "react-particles-js";
import { IconBubble } from "../../components/IconBubble";
import linkedInIcon from "../../assets/icons/linkedin.svg"
import emailIcon from "../../assets/icons/email.svg";
import githubIcon from "../../assets/icons/github.svg";
import twitterIcon from "../../assets/icons/twitter.svg";
import {
  HeroWrapper,
  HeroContent,
  HeroName,
  HeroTitle,
  TitleItem,
  HeroQuote,
  IconBubbles
} from "./styles"

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
  const iconList = [
    {
      icon: linkedInIcon, 
      link: "https://www.linkedin.com/in/aveenpattni"
    },
    {
      icon: twitterIcon, 
      link: "https://twitter.com/aveenpattni"
    },
    {
      icon: emailIcon, 
      link: "mailto:aveenpattni@gmail.com"
    },
    {
      icon: githubIcon, 
      link: "https://github.com/aveenpattni"
    }
  ];
  return (
    <HeroWrapper>
      <Particles {...particlesProps} />
      <HeroContent>
        <HeroName>Aveen Pattni</HeroName>
        <IconBubbles>
          {
            iconList.map(item => <IconBubble {...item} />)
          }
        </IconBubbles>
        <HeroTitle>
          <TitleItem>Software Developer</TitleItem>
          <TitleItem>Entrepreneur</TitleItem>
          <TitleItem>Self-Proclaimed Athelete</TitleItem>
        </HeroTitle>
        <HeroQuote>The limit does not exist.</HeroQuote>
      </HeroContent>
    </HeroWrapper>
  )
}