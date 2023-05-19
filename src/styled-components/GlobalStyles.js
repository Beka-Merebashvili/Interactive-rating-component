import { createGlobalStyle } from "styled-components";

const Globalstayle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    text-decoration: none;
    box-sizing: border-box;
    font-family: 'Overpass', sans-serif;
} 
body {
    background: #131518;
padding-top: 154px;
display: flex;
 justify-content: center;
}

@media only screen and (min-width: 1440px) {
    body {
        padding-top: 195px;
    }
}
` 
export default Globalstayle;