import React, { Component } from "react";
import { Table, Button, Icon } from "semantic-ui-react";

class TablaAlumnos extends Component {
  render() {
    return (
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
              <Button color="blue" animated>
                <Button.Content visible>
                  <Icon name="eye" />
                </Button.Content>
                <Button.Content hidden>
                  <Icon name="arrow right" />
                </Button.Content>
              </Button>
              <Button color="green" animated="vertical">
                <Button.Content visible>
                  <Icon name="pencil" />
                </Button.Content>
                <Button.Content hidden>
                  <Icon name="arrow right" />
                </Button.Content>
              </Button>
              <Button color="red" animated="fade">
                <Button.Content visible>
                  <Icon name="trash" />
                </Button.Content>
                <Button.Content hidden>
                  <Icon name="remove" />
                </Button.Content>
              </Button>
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    );
  }
}

export default TablaAlumnos;
