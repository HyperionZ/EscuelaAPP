import React, { Component } from "react";
import {
  Header,
  Icon,
  Divider,
  Container,
  Table,
  TableCell,
  Button
} from "semantic-ui-react";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header as="h2" icon textAlign="center">
          <Icon name="book" circular />
          <Header.Content>EscuelaAPP</Header.Content>
        </Header>
        <Divider />
        <Container>
          <Table fixed>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Nombre</Table.HeaderCell>
                <Table.HeaderCell>Edad</Table.HeaderCell>
                <Table.HeaderCell>Curso Actual</Table.HeaderCell>
                <Table.HeaderCell>Acciones</Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              <Table.Row>
                <Table.Cell>John</Table.Cell>
                <Table.Cell>22</Table.Cell>
                <Table.Cell>Grado de desarrollo de Aplicaciones Web</Table.Cell>
                <Table.Cell>
                  <Button animated>
                    <Button.Content visible>
                      <Icon name="eye" />
                    </Button.Content>
                    <Button.Content hidden>
                      <Icon name="arrow right" />
                    </Button.Content>
                  </Button>
                  <Button color="green" animated>
                    <Button.Content visible>
                      <Icon name="pencil" />
                    </Button.Content>
                    <Button.Content hidden>
                      <Icon name="arrow right" />
                    </Button.Content>
                  </Button>
                  <Button color="red" animated>
                    <Button.Content visible>
                      <Icon name="trash" />
                    </Button.Content>
                    <Button.Content hidden>
                      <Icon name="arrow right" />
                    </Button.Content>
                  </Button>
                </Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </Container>
      </div>
    );
  }
}

export default App;
