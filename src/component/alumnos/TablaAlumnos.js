import React, { Component } from "react";

import { Table } from "semantic-ui-react";

import ColumnaAlumno from "./ColumnaAlumnos";

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
          <ColumnaAlumno />
        </Table.Body>
      </Table>
    );
  }
}

export default TablaAlumnos;
