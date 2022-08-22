import styled from "styled-components";

export const Footer = styled.footer`
  width: 100%;
  position: fixed;
  bottom: 0;
  display: flex;
  background-color: #fff;
  a {
    width: calc(100% / 3);
  }
  box-shadow: -5px 0 10px #ddd;
  z-index: 99999;
`

export const Tap = styled.div`
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  align-items: center;
  padding: 10px 0;
  span {
    font-size: 13px;
  }
  i {
    font-size: 23px;
  }
`