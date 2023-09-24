import Router from "./router/Router";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
${reset}
body{
  background-color: #5b2386;
  color: white;
}

input, button {
  border: none;
  margin: 0;
  padding: 0;
  font-family: unset;
}


@font-face {
    font-family: 'OTEnjoystoriesBA';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_two@1.0/OTEnjoystoriesBA.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}

@font-face {
    font-family: 'gmarketLight';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansLight.woff') format('woff');
    font-weight: normal;
    font-style: normal;
    }

    @font-face {
    font-family: 'gmarketMedium';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansMedium.woff') format('woff');
    font-weight: normal;
    font-style: normal;
    }

    @font-face {
    font-family: 'gmarketBold';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansBold.woff') format('woff');
    font-weight: normal;
    font-style: normal;
    }
    
    @font-face {
   font-family: 'Noto Sans KR';
   font-style: normal;
   font-weight: 400;
   src: url(/fonts/NotoSansKr/NotoSansKR-Regular.woff2) format('woff2'),
        url(/fonts/NotoSansKr/NotoSansKR-Regular.woff) format('woff'),
        url(/fonts/NotoSansKr/NotoSansKR-Regular.otf) format('opentype');
 }
`;

function App() {
  return (
    <div>
      <GlobalStyle />
      <Router />
    </div>
  );
}
export default App;
