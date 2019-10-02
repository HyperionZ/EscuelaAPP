import React, { Component } from "react";
import { Header, Icon, Divider, Container } from "semantic-ui-react";

import { TablaAlumnos } from "./component/alumnos";
import ButtonGroup from "./component/profesores/ButtonGroup";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header as="h2" icon textAlign="center">
          <Icon className="book" circular />
          <Header.Content>EscuelaAPP</Header.Content>
        </Header>
        <Divider />
        <Container textAlign="center">
          <TablaAlumnos />
          <ButtonGroup />
        </Container>
      </div>
    );
  }
}

export default App;
