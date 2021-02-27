import "./App.css";

import { Container, ButtonBar } from "./design/containers";
import { Button } from "./design/components";

function App() {
  return (
    <Container className="App">
      <h1>Stitches is 🔥</h1>
      <ButtonBar>
        <Button>Button Label</Button>
        <Button color="red" css={{ backgroundColor: "lightblue" }}>
          Button Label
        </Button>
        <Button color="red">Button Label</Button>
        <Button color="green">Button Label</Button>
      </ButtonBar>
    </Container>
  );
}

export default App;
