import React from 'react';
import Particles from "react-particles-js";
import { IconBubble } from "../../components/IconBubble";
import { contactList } from "../contact/contacts";
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
  return (
    <HeroWrapper id="hero">
      <Particles {...particlesProps} />
      <HeroContent>
        <HeroName>Aveen Pattni</HeroName>
        <IconBubbles>
          {
            contactList.map(item => <IconBubble key={item.icon} {...item} />)
          }
        </IconBubbles>
        <HeroTitle>
          <TitleItem>Software Developer</TitleItem>
          <TitleItem>Entrepreneur</TitleItem>
          <TitleItem>Innovator</TitleItem>
        </HeroTitle>
        <HeroQuote>The limit does not exist.</HeroQuote>
      </HeroContent>
    </HeroWrapper>
  )
}