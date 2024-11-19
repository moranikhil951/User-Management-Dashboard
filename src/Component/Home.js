import React, { Component } from "react";

import { ProductConsumer } from "../Context";

import "bootstrap/dist/css/bootstrap.min.css";

import { Table, Button } from "react-bootstrap";

export default class Home extends Component {
  render() {
    return (
      <div className="container">
        <h1 text-align="center">User Management Dashboard</h1>
        <ProductConsumer>
          {(value) => {
            return (
              <Table size="sm" variant="dark" striped bordered hover>
                <tbody>
                  <tr>
                    <th>FirstName</th>
                    <th>LastName</th>
                    <th>Email</th>
                    <th>Department</th>
                    <th>Actions</th>
                  </tr>
                  <tr>
                    <td>
                      <input
                        type="text"
                        value={value.FirstName}
                        onChange={(e) => {
                          value.updateValue(e, "FirstName");
                        }}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        value={value.LastName}
                        onChange={(e) => {
                          value.updateValue(e, "LastName");
                        }}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        value={value.email}
                        onChange={(e) => {
                          value.updateValue(e, "email");
                        }}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        value={value.designation}
                        onChange={(e) => {
                          value.updateValue(e, "designation");
                        }}
                      />
                    </td>
                    <td>
                      <Button
                        size="sm"
                        onClick={() => {
                          value.onSave(value.id);
                        }}
                      >
                        {value.id ? "save" : "Add new row"}
                      </Button>
                    </td>
                  </tr>

                  {value.AllData.map((product) => {
                    return (
                      <tr>
                        <td>{product.FirstName}</td>
                        <td>{product.LastName}</td>
                        <td>{product.email}</td>
                        <td>{product.designation}</td>
                        <td>
                          <Button
                            size="sm"
                            variant="primary"
                            onClick={() => {
                              value.onEdit(product.id);
                            }}
                          >
                            Edit
                          </Button>
                          {" | "}
                          <Button
                            size="sm"
                            variant="danger"
                            onClick={() => {
                              value.onDelete(product.id);
                            }}
                          >
                            Delete
                          </Button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            );
          }}
        </ProductConsumer>
      </div>
    );
  }
}
