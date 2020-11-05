import React, { useState } from "react";
import {
  SchoolBlockWrapper,
  SchoolInfo,
  TextZone,
  ImageZone,
  SchoolHeader,
  SchoolSubheader,
  SchoolDate,
  SchoolDescription
} from "./styles";

export const SchoolBlock = (props) => {
  const [isOpen, toggleOpen] = useState(false);
  return (
    <SchoolBlockWrapper onClick={() => toggleOpen(!isOpen)}>
      <SchoolInfo>
        <TextZone>
          <SchoolHeader>{props.name}</SchoolHeader>
          <SchoolSubheader>{props.school}</SchoolSubheader>
          {props.date? <SchoolDate>{props.date}</SchoolDate> : null}
        </TextZone>
        <ImageZone>
          <img src={props.pic} alt={props.school}/>
        </ImageZone>
      </SchoolInfo>
      { props.desc && isOpen ? <SchoolDescription>{props.desc}</SchoolDescription> : null}
    </SchoolBlockWrapper>
  )
}