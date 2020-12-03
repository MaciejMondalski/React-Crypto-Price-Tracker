import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding:0;
				box-sizing: border-box;
				color: white;
    }
		html{
        &::-webkit-scrollbar{
            width: 0.5rem;
        }
        &::-webkit-scrollbar-thumb{
            background-color: darkgrey;
        }
        &::-webkit-scrollbar-track {
				background: white;
				}
}


				body{
					font-family: 'Open Sans', sans-serif;
				width: 100%;
				background: #1a1a1a;

		}
		
	


		`;

export default GlobalStyles;
