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
import { addNewAbout, deletePost, editPost } from "../../store/actions/actions";
import Table from "reactstrap/lib/Table";
import Headers from '../../components/Headers/Header'
var today = new Date();
var date =
  today.getMonth() + 1 + "/" + today.getDate() + "/" + today.getFullYear();

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {

      about:"",
      value:"",
      clientsFile:"",
      mission:""

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
        clientsFile: e.target.files[0],
    });
   
  };
  handleSubmit = async (e) =>  {
    this.addPostToggle();
    e.preventDefault();
    await this.props.addNewAbout({
      
        about:this.state.about,
        value:this.state.value,
        clients_File:this.state.clientsFile,
        mission:this.state.mission
    });
    this.setState({
      
        about:"",
      value:"",
      clientsFile:"",
      mission:""
  
    })
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
            <Headers/>
            <container>
              <br />
            </container>

            <Form onSubmit={this.handleSubmit}>
            <Card className="shadow">
                    <CardHeader className="border-0">
                      <span className="mb-0 text-warning">CONTENT  MANAGEMENT PAGE</span>
                    </CardHeader>
                     <CardBody>
                         <Label>About Hangover</Label>
                         <Input
                    type="text"
                    htmlFor="description"
                    rows={4}
                    className="post_description"
                    required
                    onChange={this.handlechange}
                    name="about"
                  ></Input>
                   <Label>Our Values</Label>
                         <Input
                    type="text"
                    htmlFor="description"
                    rows={4}
                    className=" mt-3 post_description"
                    required
                    onChange={this.handlechange}
                    name="value"
                  ></Input>
                  <Label>Our Mission</Label>
                         <Input
                    type="text"
                    htmlFor="description"
                    rows={4}
                    className=" mt-3 post_description"
                    required
                    onChange={this.handlechange}
                    name="mission"
                  ></Input>

                         <Label>Our Clients</Label>
                         <Input onChange={this.handlechangeFile} name="clientsFile" className="r mt-3 mb-3 "  type="file" />
                         
                        
                         
                        

                        
                        
                           <Button type="submit">
                             Add
                           </Button>
                         
                     </CardBody>    
                  </Card>            </Form>
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
  addNewAbout,

 
})(About);
