import React, { Component } from "react";
import { Button } from "semantic-ui-react";

class ButtonGroup extends Component {
  render() {
    return (
      <Button.Group>
        <Button color="blue" positive>
          Alumnos
        </Button>
        <Button.Or text="" />
        <Button color="blue">Profesorado</Button>
      </Button.Group>
    );
  }
}

export default ButtonGroup;
