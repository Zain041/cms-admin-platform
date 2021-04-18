import React, { Component } from "react";
import Button from "reactstrap/lib/Button";
import Card from "reactstrap/lib/Card";
import CardBody from "reactstrap/lib/CardBody";
import CardHeader from "reactstrap/lib/CardHeader";
import Col from "reactstrap/lib/Col";
import Container from "reactstrap/lib/Container";
import Form from "reactstrap/lib/Form";
import Input from "reactstrap/lib/Input";

import TextField from "@material-ui/core/TextField";

import { connect } from "react-redux";

import Loader from "react-loader-spinner";

import Paper from "@material-ui/core/Paper";
// import {fetchPosts,addPost} from './store/actions/actions'
// import Card from '@material-ui/core/Card';
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import { Link, Redirect } from "react-router-dom";
import Label from "reactstrap/lib/Label";
import Modal from "reactstrap/lib/Modal";
import ModalBody from "reactstrap/lib/ModalBody";
import ModalHeader from "reactstrap/lib/ModalHeader";
import Row from "reactstrap/lib/Row";
import { addNewgovernance, deletePost, editPost } from "../../store/actions/actions";
import Table from "reactstrap/lib/Table";
import Headers from "../../components/Headers/Header";
var today = new Date();
var date =
  today.getMonth() + 1 + "/" + today.getDate() + "/" + today.getFullYear();

class Governance extends Component {
  constructor(props) {
    super(props);
    this.state = {
      GovernanceTitle: "",
      GovernanceTitlediscription: "",
      GovernanceTitletwo: "",
      GovernanceTitletwodiscription: "",
      GovernanceTitlethree: "",
      GovernanceTitlethreediscription: "",
      GovernanceTitlefour: "",
      GovernanceTitlefourdiscription: "",
      Governancediscription: "",
      Governancepra: "",
      GovernanceTitlefive: "",
      GovernanceTitlefivediscription: "",
      Governancepraone: "",
      GovernanceTitlesix: "",
      GovernanceTitlesixdiscription: "",
      GovernanceTitleseven: "",
      GovernanceTitlesevendiscription: "",
      GovernanceTitlenine: "",
      GovernanceTitleninediscription: "",
      GovernanceTitleten: "",
      GovernanceTitletendiscription: "",
    };
  }

  addPostToggle = () => {
    this.setState({
      add_post_modal: !this.state.add_post_modal,
    });
  };

  handlechange = (e, value) => {
    console.log("this.state.date", this.state.date);
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  handlechangeFile = (e) => {
    this.setState({
      blogImage: e.target.files[0],
    });
  };
  handleSubmit = async (e) => {
    this.addPostToggle();
    e.preventDefault();
    await this.props.addNewgovernance({
      GovernanceTitle: this.state.GovernanceTitle,
      GovernanceTitlediscription: this.state.GovernanceTitlediscription,
      GovernanceTitletwo: this.state.GovernanceTitletwo,
      GovernanceTitletwodiscription: this.state.GovernanceTitletwodiscription,
      GovernanceTitlethree: this.state.GovernanceTitlethree,
      GovernanceTitlethreediscription: this.state.GovernanceTitlethreediscription,
      GovernanceTitlefour: this.state.GovernanceTitlefour,
      GovernanceTitlefourdiscription: this.state.GovernanceTitlefourdiscription,
      Governancediscription:this.state.Governancediscription,
      Governancepra: this.state.Governancepra,
      GovernanceTitlefive: this.state.GovernanceTitlefive,
      GovernanceTitlefivediscription: this.state.GovernanceTitlefivediscription,
      Governancepraone: this.state.Governancepraone,
      GovernanceTitlesix: this.state.GovernanceTitlesix,
      GovernanceTitlesixdiscription: this.state.GovernanceTitlesixdiscription,
      GovernanceTitleseven: this.state.GovernanceTitleseven,
      GovernanceTitlesevendiscription: this.state.GovernanceTitlesevendiscription,
      GovernanceTitlenine: this.state.GovernanceTitlenine,
      GovernanceTitleninediscription: this.state.GovernanceTitleninediscription,
      GovernanceTitleten: this.state.GovernanceTitleten,
      GovernanceTitletendiscription: this.state.GovernanceTitletendiscription,
    });
    this.setState({
      GovernanceTitle: "",
      GovernanceTitlediscription: "",
      GovernanceTitletwo: "",
      GovernanceTitletwodiscription: "",
      GovernanceTitlethree: "",
      GovernanceTitlethreediscription: "",
      GovernanceTitlefour: "",
      GovernanceTitlefourdiscription: "",
      Governancediscription:"",
      Governancepra: "",
      GovernanceTitlefive: "",
      GovernanceTitlefivediscription: "",
      Governancepraone: "",
      GovernanceTitlesix: "",
      GovernanceTitlesixdiscription: "",
      GovernanceTitleseven: "",
      GovernanceTitlesevendiscription: "",
      GovernanceTitlenine: "",
      GovernanceTitleninediscription: "",
      GovernanceTitleten: "",
      GovernanceTitletendiscription: "",
    });
  };
  editPostToggle = () => {
    this.setState({
      edit_post_modal: !this.state.edit_post_modal,
    });
  };
  // deletePosts(item) {
  //   this.props.deletePost(item);
  // }

  handleInputType = (e) => {
    this.setState({
      type: e.target.value,
    });
    console.log(e);
  };

  render() {
    const { loading } = this.state;

    return (
      <div>
        {this.state.loading ? (
          <div
            style={{
              position: "absolute",
              width: "100%",
              hieght: "100%",
              marginTop: "20%",
              marginLeft: "40%",
            }}
          >
            <Loader type="Circle" color="black" height="60" width="100" />
          </div>
        ) : (
          <div>
            <Headers />
            <container>
              <br />
            </container>

            <Form onSubmit={this.handleSubmit}>
              <Card className="shadow">
                <CardHeader className="border-0">
                  <span className="mb-0 text-warning">
                    CONTENT MANAGEMENT PAGE
                  </span>
                </CardHeader>
                <CardBody>
                  <Label>Data Governance</Label>
                  <Input
                    type="text"
                    htmlFor="description"
                    rows={4}
                    className="post_description"
                    required
                    onChange={this.handlechange}
                    name="GovernanceTitle"
                  ></Input>
                    <Label>Data Governance Description</Label>
                  <Input
                    type="textarea"
                    htmlFor="description"
                    rows={4}
                    className="post_description"
                    required
                    onChange={this.handlechange}
                    name="GovernanceTitlediscription"
                  ></Input>

                  <Label>Data Quality</Label>
                  <Input
                    onChange={this.handlechange}
                    name="GovernanceTitletwo"
                    className="r"
                    style={{ height: "100px" }}
                    type="text"
                    row="100"
                  />
                  <Label>Data Quality Description</Label>
                  <Input
                    onChange={this.handlechange}
                    name="GovernanceTitletwodiscription"
                    style={{ height: "100px" }}
                    type="textarea"
                  />
                  <Label>Metadata Management</Label>
                  <Input
                   onChange={this.handlechange}
                    name="GovernanceTitlethree"
                    style={{ height: "100px" }}
                    type="text"
                  />
                   <Label>Metadata Management Description</Label> 
                  <Input
                    type="textarea"
                    htmlFor="description"
                    rows={4}
                    className="post_description"
                    required
                    onChange={this.handlechange}
                    name="GovernanceTitlethreediscription"
                  ></Input>
                  <Label>Master Data Management</Label>
                  <Input
                    type="text"
                    htmlFor="description"
                    rows={4}
                    className="post_description"
                    required
                    onChange={this.handlechange}
                    name="GovernanceTitlefour"
                  ></Input>
                  <Label>Master Data Management Description</Label>
                  <Input
                    type="textarea"
                    htmlFor="description"
                    rows={4}
                    className="post_description"
                    required
                    onChange={this.handlechange}
                    name="GovernanceTitlefourdiscription"
                  ></Input>
                 <Label> Reference Data Management</Label>
                  <Input
                    type="text"
                    htmlFor="description"
                    rows={4}
                    className="post_description"
                    required
                    onChange={this.handlechange}
                    name="Governancepra"
                  ></Input>
                   <Label> Reference Data Management decsription</Label>
                  <Input
                    type="textarea"
                    htmlFor="description"
                    rows={4}
                    className="post_description"
                    required
                    onChange={this.handlechange}
                    name="Governancediscription"
                  ></Input>
                  <Label>Description</Label>
                  <Input
                    type="textarea"
                    htmlFor="description"
                    rows={4}
                    className="post_description"
                    required
                    onChange={this.handlechange}
                    name="GovernanceTitlefive"
                  ></Input>
                  <Label>SubDescription</Label>
                  <Input
                    type="tetextareaxt"
                    htmlFor="description"
                    rows={4}
                    className="post_description"
                    required
                    onChange={this.handlechange}
                    name="GovernanceTitlefivediscription"
                  ></Input>
                  <Label>CHat bot</Label>
                  <Input
                    type="text"
                    htmlFor="description"
                    rows={4}
                    className="post_description"
                    required
                    onChange={this.handlechange}
                    name="Governancepraone"
                  ></Input>
                  <Label>Chatbot Description</Label>
                  <Input
                    type="textarea"
                    htmlFor="description"
                    rows={4}
                    className="post_description"
                    required
                    onChange={this.handlechange}
                    name="GovernanceTitlesix"
                  ></Input>
                  <Label>Fraud Detection</Label>
                  <Input
                    type="text"
                    htmlFor="description"
                    rows={4}
                    className="post_description"
                    required
                    onChange={this.handlechange}
                    name="GovernanceTitlesixdiscription"
                  ></Input>
                  <Label>Fraud Detection Description</Label>
                  <Input
                    type="textarea"
                    htmlFor="description"
                    rows={4}
                    className="post_description"
                    required
                    onChange={this.handlechange}
                    name="GovernanceTitleseven"
                  ></Input>
                  <Label>Real-time Analytics</Label>
                  <Input
                    type="text"
                    htmlFor="description"
                    rows={4}
                    className="post_description"
                    required
                    onChange={this.handlechange}
                    name="GovernanceTitlesevendiscription"
                  ></Input>
                  <Label>Real-time Analytics Description</Label>
                  <Input
                    type="textarea"
                    htmlFor="description"
                    rows={4}
                    className="post_description"
                    required
                    onChange={this.handlechange}
                    name="GovernanceTitlenine"
                  ></Input>
                  <Label>Description</Label>
                  <Input
                    type="textarea"
                    htmlFor="description"
                    rows={4}
                    className="post_description"
                    required
                    onChange={this.handlechange}
                    name="GovernanceTitleninediscription"
                  ></Input>
                  <Label>Description</Label>
                  <Input
                    type="textarea"
                    htmlFor="description"
                    rows={4}
                    className="post_description"
                    required
                    onChange={this.handlechange}
                    name="GovernanceTitleten"
                  ></Input>
                  <Label>Description</Label>
                  <Input
                    type="textarea"
                    htmlFor="description"
                    rows={4}
                    className="post_description"
                    required
                    onChange={this.handlechange}
                    name="GovernanceTitletendiscription"
                  ></Input>
                  <br/>
                  

                  <Button color="primary" type="submit">Add</Button>
                </CardBody>
              </Card>{" "}
            </Form>
          </div>
        )}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  console.log(state);
  return {
    posts: state.posts.posts,
    userid: state.userid,
  };
};
export default connect(mapStateToProps, {
    addNewgovernance,
})(Governance);
