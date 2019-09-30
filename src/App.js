import React, { Component } from "react";
import {
  Header,
  Icon,
  Divider,
  Container,
  Button
} from "semantic-ui-react";

import TablaAlumnos from "./component/alumnos/TablaAlumnos";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header as="h2" icon textAlign="center">
          <Icon name="book" circular />
          <Header.Content>EscuelaAPP</Header.Content>
        </Header>
        <Divider />
        <Container textAlign="center">
          <TablaAlumnos />
          <Button.Group>
            <Button color="blue" positive>
              Alumnos
            </Button>
            <Button.Or text="" />
            <Button color="blue">Profesorado</Button>
          </Button.Group>
        </Container>
      </div>
    );
  }
}

export default App;
