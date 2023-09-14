import Router from "./router/Router";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
${reset}
body{
  background-color: #5b2386;
  color: white;
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
