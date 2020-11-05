import React, { useState, useEffect, useRef } from "react";
import styled from "@emotion/styled";
import units from "design-units";
import { MenuModal } from "../../components/Menu";
import "./styles.scss"

const HeaderWrapper = styled.section`
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 100;
  ${units({
    height: "56px"
  })}
  transition: 0.4s;
`;

export const StickyHeader = () => {
  const [isSticky, toggleSticky] = useState(false);
  const [showMenu, toggleMenu] = useState(false);
  const ref = useRef(null)
  const handleScroll = () => {
    const offset = window.scrollY;
    if(offset > 200) {
      toggleSticky(true);
    } else {
      toggleSticky(false);
    }
  }
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", () => handleScroll);
  }, []);

  const smoothScroll = id => {
    toggleMenu(false);
    const anchor = document.getElementById(id);
    const offset = anchor.getBoundingClientRect().top + window.pageYOffset - 56;
    window.scroll({
      top: offset,
      behavior: "smooth"
    })
  }
  return (
    <HeaderWrapper className={`header ${isSticky ? "isSticky" : ""}`} ref={ref}>
      <div className={`header__shell ${isSticky ? "isSticky__shell" : ""}`}>
        <h3 className={`header__name ${isSticky ? "isSticky__name" : ""}`}>
          <a href="#">
            Aveen Pattni
          </a>
        </h3>
        <ul className={`header__nav ${isSticky ? "isSticky__nav" : ""}`}>
          <li><a onClick={() => smoothScroll("about")}>About</a></li>
          <li><a onClick={() => smoothScroll("experienceSection")}>Experience</a></li>
          <li><a onClick={() => smoothScroll("education")}>Education</a></li>
          <li><a onClick={() => smoothScroll("contact")}>Contact</a></li>
        </ul>
        <div
          className={`header__menu ${isSticky ? "isSticky__menu" : ""}`}
          onClick={() => toggleMenu(!showMenu)}
        >
          <svg height="384pt" viewBox="0 -53 384 384" width="384pt" ><path d="m368 154.667969h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0"/><path d="m368 32h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0"/><path d="m368 277.332031h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0"/></svg>
        </div>
      </div>
      {showMenu ? <MenuModal scroll={smoothScroll} /> : null}
    </HeaderWrapper>
  )
}