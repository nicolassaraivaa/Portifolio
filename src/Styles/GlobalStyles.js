import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Poppins", system-ui;

    }
    html {
    scroll-behavior: smooth;
    }
    body{
        background-color: #222532;
    }
`

export default GlobalStyles