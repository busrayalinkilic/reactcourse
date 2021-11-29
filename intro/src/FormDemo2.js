import Button from "@restart/ui/esm/Button";
import alertify from "alertifyjs";
import React, { Component } from "react";
import { Form, FormGroup, Input, Label } from "reactstrap";

class FormDemo2 extends Component {
  state = { email: "", password: "", city: "", description: "" };
  handleChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    this.setState({ [name]: value });
  };
  handleSubmiy = (event) => {
    event.preventDefault();
    alertify.success(this.state.email + "added to db");
  };
  render() {
    return (
      <div>
        <Form onSubmit={this.handleSubmiy}>
          <FormGroup>
            <Label for="email">Email </Label>
            <Input
              type="email"
              name="email"
              id="email"
              placeholder="Enter Email"
              onChange={this.handleChange}
            ></Input>
          </FormGroup>

          <FormGroup>
            <Label for="password"> Password </Label>
            <Input
              type="password"
              name="password"
              id="password"
              placeholder="Enter password"
              onChange={this.handleChange}
            ></Input>
          </FormGroup>

          <FormGroup>
            <Label for="description"> Description </Label>
            <Input
              type="textarea"
              name="description"
              id="description"
              placeholder="Enter description"
              onChange={this.handleChange}
            ></Input>
          </FormGroup>
          <FormGroup>
            <Label for="city">City</Label>
            <Input
              type="select"
              name="city"
              id="city"
              onChange={this.handleChange}
            >
              <option>Ankara</option>
              <option>İstanbul</option>
              <option>Adana</option>
              <option>İzmir</option>
              <option>Bursa</option>
            </Input>
          </FormGroup>
          <Button type="submit">Save</Button>
        </Form>
      </div>
    );
  }
}

export default FormDemo2;
