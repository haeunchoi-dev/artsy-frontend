import { createGlobalStyle } from 'styled-components';

import eotUrlRegular from '@assets/font/noto-sans-kr-v27-latin_korean-regular.eot';
import woffUrlRegular from '@assets/font/noto-sans-kr-v27-latin_korean-regular.woff';
import eotUrl500 from '@assets/font/noto-sans-kr-v27-latin_korean-500.eot';
import woffUrl500 from '@assets/font/noto-sans-kr-v27-latin_korean-500.woff';
import eotUrl700 from '@assets/font/noto-sans-kr-v27-latin_korean-700.eot';
import woffUrl700 from '@assets/font/noto-sans-kr-v27-latin_korean-700.woff';

const GlobalStyle = createGlobalStyle`
    /* normalize */
    /*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */
    html {
        line-height: 1.15;
        -webkit-text-size-adjust: 100%;
    }

    body {
        margin: 0;
    }

    main {
        display: block;
    }

    h1 {
        font-size: 2em;
        margin: 0.67em 0;
    }

    hr {
        box-sizing: content-box;
        height: 0;
        overflow: visible;
    }

    pre {
        font-family: monospace, monospace;
        font-size: 1em;
    }

    a {
        background-color: transparent;
    }

    abbr[title] {
        border-bottom: none;
        text-decoration: underline;
        text-decoration: underline dotted;
    }

    b,
    strong {
        font-weight: bolder;
    }

    code,
    kbd,
    samp {
        font-family: monospace, monospace;
        font-size: 1em;
    }

    small {
        font-size: 80%;
    }

    sub,
    sup {
        font-size: 75%;
        line-height: 0;
        position: relative;
        vertical-align: baseline;
    }

    sub {
        bottom: -0.25em;
    }

    sup {
        top: -0.5em;
    }

    img {
        border-style: none;
    }

    button,
    input,
    optgroup,
    select,
    textarea {
        font-family: inherit;
        font-size: 100%;
        line-height: 1.15;
        margin: 0;
    }

    button,
    input {
        overflow: visible;
    }

    button,
    select {
        /* 1 */
        text-transform: none;
    }

    button,
    [type='button'],
    [type='reset'],
    [type='submit'] {
        -webkit-appearance: button;
        appearance: textfield;
    }

    button::-moz-focus-inner,
    [type='button']::-moz-focus-inner,
    [type='reset']::-moz-focus-inner,
    [type='submit']::-moz-focus-inner {
        border-style: none;
        padding: 0;
    }

    button:-moz-focusring,
    [type='button']:-moz-focusring,
    [type='reset']:-moz-focusring,
    [type='submit']:-moz-focusring {
        outline: 1px dotted ButtonText;
    }

    fieldset {
        padding: 0.35em 0.75em 0.625em;
    }

    legend {
        box-sizing: border-box;
        color: inherit;
        display: table;
        max-width: 100%;
        padding: 0;
        white-space: normal;
    }

    progress {
        vertical-align: baseline;
    }

    textarea {
        overflow: auto;
    }

    [type='checkbox'],
    [type='radio'] {
        box-sizing: border-box;
        padding: 0;
    }

    [type='number']::-webkit-inner-spin-button,
    [type='number']::-webkit-outer-spin-button {
        height: auto;
    }

    [type='search'] {
        -webkit-appearance: textfield;
        appearance: textfield;
        outline-offset: -2px;
    }

    [type='search']::-webkit-search-decoration {
        -webkit-appearance: none;
    }

    ::-webkit-file-upload-button {
        -webkit-appearance: button;
        font: inherit;
    }

    details {
        display: block;
    }

    summary {
        display: list-item;
    }

    template {
        display: none;
    }

    [hidden] {
        display: none;
    }
    
    /* font */
    @font-face {
        font-family: 'Noto Sans KR';
        src: url('${eotUrlRegular}');
        src: url('${woffUrlRegular}') format('woff');
        font-stretch: normal;
        font-style: normal;
        font-weight: normal;
        }
        @font-face {
        font-family: 'Noto Sans KR';
        src: url('${eotUrl500}');
        src: url('${woffUrl500}') format('woff');
        font-stretch: normal;
        font-style: normal;
        font-weight: 500;
        }
        @font-face {
        font-family: 'Noto Sans KR';
        src: url('${eotUrl700}');
        src: url('${woffUrl700}') format('woff');
        font-stretch: normal;
        font-style: normal;
        font-weight: bold;
    }

    /* reset override */
    * {
        box-sizing: border-box;
        word-break: keep-all;
    }
    
    html,
    body {
        height: 100%;
    }

    html {
        font-size: 62.5%;
    }

    body {
        font-size: 1.6rem;
        font-family: 'Noto Sans KR', sans-serif;
        color: ${({ theme }) => theme.colors.font1};
        background-color: ${({ theme }) => theme.colors.background1};
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        margin: 0;
        font-weight: 500;
    }

    dl,
    dt,
    dd,
    ol,
    ul,
    li {
        margin: 0;
        padding: 0;
        list-style: none;
    }

    a {
        text-decoration: none;
        color: inherit;
    }

    p {
        margin: 0;
    }
`;

export default GlobalStyle;
