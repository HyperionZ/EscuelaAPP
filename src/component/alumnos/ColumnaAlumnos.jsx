import React, { Component } from "react";
import { Table, Button, Icon } from "semantic-ui-react";

class ColumnaAlumno extends Component {
  render() {
    return (
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
    );
  }
}

export default ColumnaAlumno;
