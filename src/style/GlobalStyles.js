import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
  ${reset}
  a {
    text-decoration: none;
    color: #000;
  }
`

export default GlobalStyles