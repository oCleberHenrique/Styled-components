import React, {userState} from "react";

import Cabecalho from "./Components/Cabecalho";
import Container from "./Components/Container";
import { GlobalStyle } from "./Components/globalStyle";
import { ThemeProvider } from "styled-components";
import { temaClaro, temaEscuro } from "../src/Components/Ui/temas"
import { BtnTema } from "./Components/Ui";

function App() {
  const [tema, setTema] = userState(true);

  const toggleTema = () => {
    setTema ((tema) => !tema)
  }

    <ThemeProvider theme={tema ? temaClaro : temaEscuro}>
      <GlobalStyle />
      <BtnTema onClick={toggleTema}>
        <SwitcherTema tema={tema}/>
      </BtnTema>
      <Cabecalho />
      <Container />
    </ThemeProvider>
  ;
}

export default App;
