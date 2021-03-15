import Header from "components/Headers/Header";
import React, { Component } from "react";
// import { connect } from "react-redux";
import Button from "reactstrap/lib/Button";
import Card from "reactstrap/lib/Card";
import Loader from "react-loader-spinner";
import CardBody from "reactstrap/lib/CardBody";
import CardHeader from "reactstrap/lib/CardHeader";
import childern from "../../assets/childern/child.jpg"
import { connect } from "react-redux";
import Container from "reactstrap/lib/Container";
import Form from "reactstrap/lib/Form";
import Input from "reactstrap/lib/Input";
import Label from "reactstrap/lib/Label";
import Modal from "reactstrap/lib/Modal";
import { Spinner } from "react-bootstrap";
import ModalBody from "reactstrap/lib/ModalBody";
import ModalHeader from "reactstrap/lib/ModalHeader";
import Row from "reactstrap/lib/Row";
import Table from "reactstrap/lib/Table";
import Dropdown from "reactstrap/lib/Dropdown";
import { ThemeProvider } from "react-bootstrap";

class Childer extends Component {
  render() {
    return (
      <div>
        <>
          <Header />
          <Container className="mt--9" fluid>
            <br />
            <br />

            <Row>
              <div className="col">
                <Card className="shadow">
                  <CardHeader className="border-0">
                    <span className="mb-0 text-warning">Childern</span>
                  </CardHeader>
                  <CardBody>
                    <Table
                      className="align-items-center table-flush"
                      responsive
                    >
                      <thead className="thead-light">
                        <tr>
                          <th>Image</th>
                          <th>Icon Name</th>
                          <th>Actions</th>
                    
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td><img src={childern} width="60" /></td>
                          <td>2-2-2020</td>
                          <td><Button size="sm">
                                 <i class="fa fa-eye" aria-hidden="true"></i>
                                     </Button >
                                     <Button size="sm">
                                     <i class="fa fa-trash" aria-hidden="true"></i>
                                     </Button>
                                     <Button size="sm">
                                     <i class="fa fa-edit" aria-hidden="true"></i>
                                     </Button></td>
                       
                        </tr>
                      </tbody>
                    </Table>
                  </CardBody>
                </Card>
              </div>
            </Row>
          </Container>
        </>
      </div>
    );
  }
}

export default Childer;
