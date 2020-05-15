import styled from "styled-components"
import { motion } from "framer-motion"

export const Nav = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  max-width:1440px;
  height: 100%;
  display: flex;
  background: ${props => props.theme.red};
  color: ${props => props.theme.background};
  z-index: 100;
  overflow: hidden;
`

export const NavHeader = styled.div`
  top: 72px;
  position: relative;
  h2 {
    color: ${props => props.theme.background};
  }
`
export const CloseNav = styled.div`
  button {
    border: none;
    padding: 20px;
    background: none;
    outline: none;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    span {
      width: 36px;
      height: 8px;
      display: block;
      background: ${props => props.theme.background};
      margin: 9px;
      &:nth-of-type(1) {
        transform:rotate(45deg);
        transform-origin:left center;
      }
      &:nth-of-type(2) {
        transform:rotate(-45deg);
        transform-origin:left center;
      }
    }
  }
`

export const NavList = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  ul {
    padding: 0;
    li {
      list-style: none;
      font-size: 3rem;
      text-transform: uppercase;
      font-weight: 900;
      overflow: hidden;
      padding-top:10px;
      padding-bottom:10px;
      z-index:2;
      .link {
        color: ${props => props.theme.background};
        position: relative;
        display: flex;
        align-items: center;
        .arrow {
          margin-right: 8px;
        }
      }
      svg {
        width: 100px;
        path {
          fill: ${props => props.theme.background};
        }
      }
    }
  }
`
export const NavFooter = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 56px 0px;
  p {
    color: ${props => props.theme.background};
  }
  svg path {
    fill: ${props => props.theme.background};
  }
`

export const NavImages = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
  height: 100%;
  width: 100%;
  background: pink;
  .reveal {
    width: 100%;
    background: #000000;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    object-fit:cover;
  }
  .image {
    background: #000000;
    position: absolute;
    height: 100%;
    width:100%;
    margin: 0;
    z-index: -1;
    object-fit:cover;
    img {
      width:100%;
      height:100%;
      object-fit:cover;
      margin:0 auto;
    }
    &:after {
        content:'';
        width:100%;
        height:100%;
        background-color:rgba(0,0,0,.7);
        position:absolute;
        top:0;
        left:0;
        display:block;
      }
  }
`