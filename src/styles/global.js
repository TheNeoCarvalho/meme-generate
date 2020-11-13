import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: Roboto, 'Sans-Serif';
    }
    body {
        background-color: #ddd;
    }

    button,
    input {
        outline: 0;
    }

    button{
        cursor: pointer;
    }
`