import React, { Component } from "react";

import { rowData } from "./appData";

const ProductContext = React.createContext();

export default class ProductProvider extends Component {
  state = {
    AllData: rowData,
    id: "",
    FirstName: "",
    LastName: "",
    email: "",
    designation: "",
    updateEdit: [],
  };

  getRecord = (id) => {
    const product = this.state.AllData.find((item) => item.id === id);
    return product;
  };

  onEdit = (id) => {
    const tempProduct = this.state.AllData;
    const index = tempProduct.indexOf(this.getRecord(id));
    const selectedRecord = tempProduct[index];
    this.setState({
      id: selectedRecord["id"],
      FirstName: selectedRecord["FirstName"],
      LastName: selectedRecord["LastName"],
      email: selectedRecord["email"],
      designation: selectedRecord["designation"],
    });
  };

  updateValue = (e, test) => {
    if (test === "FirstName") {
      this.state.FirstName = e.target.value;
    }
    if (test === "LastName") {
      this.state.LastName = e.target.value;
    }

    if (test === "email") {
      this.state.email = e.target.value;
    }

    if (test === "designation") {
      this.state.designation = e.target.value;
    }

    const tempArr = [
      this.state.id,
      this.state.FirstName,
      this.state.LastName,
      this.state.email,
      this.state.designation,
    ];
    this.setState({
      updateEdit: tempArr,
    });
  };

  onSave = (id) => {
    if (id !== "") {
      const savedRecord = this.state.AllData;
      const index = savedRecord.indexOf(this.getRecord(id));
      const Record = savedRecord[index];
      Record["FirstName"] = this.state.updateEdit[1];
      Record["LastName"] = this.state.updateEdit[2];
      Record["email"] = this.state.updateEdit[3];
      Record["designation"] = this.state.updateEdit[4];
      this.setState({
        AllData: [...this.state.AllData],
        id: "",
        FirstName: "",
        LastName: "",
        email: "",
        designation: "",
      });
    } else {
      const MaxId = Math.max(...this.state.AllData.map((item) => item.id));
      const id = MaxId + 1;
      const newArr = [];
      newArr["FirstName"] = this.state.updateEdit[1];
      newArr["LastName"] = this.state.updateEdit[2];
      newArr["email"] = this.state.updateEdit[3];
      newArr["designation"] = this.state.updateEdit[4];
      this.setState({
        AllData: [...this.state.AllData, newArr],
        id: "",
        FirstName: "",
        LastName: "",
        email: "",
        designation: "",
      });
    }
  };

  onDelete = (id) => {
    const tempProduct = this.state.AllData.filter((item) => item.id !== id);
    this.setState({
      AllData: tempProduct,
    });
  };

  render() {
    // const { AllData } = this.state;
    // console.log(AllData);
    return (
      <div>
        <ProductContext.Provider
          value={{
            ...this.state,
            onEdit: this.onEdit,
            updateValue: this.updateValue,
            onSave: this.onSave,
            onDelete: this.onDelete,
          }}
        >
          {this.props.children}
        </ProductContext.Provider>
      </div>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
