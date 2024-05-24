import { createGlobalStyle } from "styled-components";

const Globalstyles = createGlobalStyle`

  *{
    box-sizing: border-box; 
    margin: 0;
    padding: 0;
   }

  html,
  body {
    /* 62.5% => 10rem, 1rem = 10px */
    font-size: 62.5% !important;
    font-family: 'Pretendard-Regular', "Inter", sans-serif;
  }

  a {
    text-decoration: none;
  }

  li,
  ol {
    list-style-type: none;
  }

  img, 
  video{
    width: 100%;
    height: 100%;
    object-fit: fill;
  }

  button {
    cursor: pointer;
    border: 0;
  }

  @font-face {
    font-family: 'Pretendard-Regular';
    src: url('https://fastly.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
    font-weight: 400;
    font-style: normal;
}
`

export default Globalstyles;