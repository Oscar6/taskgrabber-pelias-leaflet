import React from "react";
import { Button, Form, Col, Container } from "react-bootstrap";
import DropDown from "./DropDown";
import axios from "axios";

class OrderForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      itemName: "",
      imageReceipt: "",
      imageItem: "",
      stores: [],
      selectedStore: ""
    };
    this.handleInputText = this.handleInputText.bind(this);
    this.handleReceiptFile = this.handleReceiptFile.bind(this);
    this.handleItemFile = this.handleItemFile.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(val) {
    this.setState({
      selectedStore: val
    });
  }

  handleInputText(e) {
    // console.log(e.target.name)
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleReceiptFile(e) {
    // console.log(e.target.files)
    if (!e.target.files[0]) {
      this.setState({
        imageReceipt: ""
      });
    }
    this.setState({
      imageReceipt: e.target.files[0]
    });
  }

  handleItemFile(e) {
    // console.log(e.target.files)
    if (!e.target.files[0]) {
      this.setState({
        imageItem: ""
      });
    }
    this.setState({
      imageItem: e.target.files[0]
    });
  }

  handleSubmit(e) {
    // console.log(this.state.itemName)
    e.preventDefault();

    if (this.uploadReceiptInput.files[0] === undefined) {
      alert("No file was uploaded");
    }

    var formData = new FormData();
    formData.append("itemName", this.state.itemName);
    formData.append("store", this.state.selectedStore);
    formData.append("imageItem", this.uploadItemInput.files[0]);
    formData.append("imageReceipt", this.uploadReceiptInput.files[0]);

    axios.post("/return-data", formData);
    e.target.reset();
  }

  componentDidMount() {
    axios
      .get(`stores.json`)
      .then(({ data }) => {
        // console.log(data)
        this.setState({
          stores: data.stores
        });
      })
      .catch(error => console.log(error.response));
  }
  render() {
    return (
      <Container className="orderForm">
        {/* <Card className="orderForm"> */}
        {/* <CardBody> */}
        <Form onSubmit={this.handleSubmit}>
          <Form.Group className="formGridStore">
            <DropDown
              stores={this.state.stores}
              storeSelected={this.handleSelect}
            />
          </Form.Group>
          <Form.Group className="formGridStore">
            <Form.Label>Item</Form.Label>
            <Form.Control
              name="itemName"
              placeholder="Microwave..."
              onChange={this.handleInputText}
            />
            {this.state.itemName}
          </Form.Group>

          <Form.Group className="formGridStore">
            <Form.Label>Item Image</Form.Label>
            <Form.Control
              type="file"
              ref={ref => {
                this.uploadItemInput = ref;
              }}
              onChange={this.handleItemFile}
            />
          </Form.Group>

          <Form.Group className="formGridStore">
            <Form.Label>Receipt Image</Form.Label>
            <Form.Control
              type="file"
              ref={ref => {
                this.uploadReceiptInput = ref;
              }}
              onChange={this.handleReceiptFile}
            />
          </Form.Group>

          <Button
            variant="primary"
            type="submit"
            value="Submit"
            className="orderButton"
          >
            Submit Order
          </Button>
        </Form>
      </Container>
    );
  }
}

export default OrderForm;
