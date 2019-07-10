import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const globalStyles = createGlobalStyle`
    ${reset}
    a {
        text-decoration: none;
        color: inherit;
        cursor: pointer;
    }
    * {
        box-sizing: border-box;
    }

    body {
        font-family: "ヒラギノ角ゴシック", "Hiragino Sans", "Hiragino Kaku Gothic Pro", sans-serif;
        font-size: 14px;
        background-color: #FFF;
        color: #333;
    }

    input {
        font-family: "ヒラギノ角ゴシック", "Hiragino Sans", "Hiragino Kaku Gothic Pro", sans-serif;
    }
`;

export default globalStyles;