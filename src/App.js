import Router from "./Router";
import styled from "styled-components";
import { GlobalStyle } from "./globalStyle";
function App() {
  return (
    <Wrapper>
      <GlobalStyle />
      <Router />
    </Wrapper>
  );
}

export default App;
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
