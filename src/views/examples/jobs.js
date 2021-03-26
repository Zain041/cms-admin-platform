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
import { addNewJob, deletePost, editPost } from "../../store/actions/actions";
import Table from "reactstrap/lib/Table";
import Headers from '../../components/Headers/Header'
var today = new Date();
var date =
  today.getMonth() + 1 + "/" + today.getDate() + "/" + today.getFullYear();

class Job extends Component {
  constructor(props) {
    super(props);
    this.state = {

      jobTitle:"",
       jobPrice:"",
       experience:"",
       requirements:"",
       jobDescription:"",
       jobImage:"",
       city:"",
       offer:""

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
      jobImage: e.target.files[0],
    });
   
  };
  handleSubmit = async (e) =>  {
    this.addPostToggle();
    e.preventDefault();
    await this.props.addNewJob({
      
      jobTitle:this.state.jobTitle,
      city:this.state.city,
      offer:this.state.offer,
       jobPrice:this.state.jobPrice,
       experience:this.state.experience,
       requirements:this.state.requirements,

       jobDescription:this.state.jobDescription,
       jobImage:this.state.jobImage
    });
    this.setState({
      
      jobTitle:"",
       jobPrice:"",
       experience:"",
       requirements:"",
       jobDescription:"",
       jobImage:""
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
                         <Label>job title</Label>
                         <Input
                    type="text"
                    htmlFor="description"
                    rows={4}
                    className="post_description"
                    required
                    onChange={this.handlechange}
                    name="jobTitle"
                  ></Input>

                         <Label>job Price</Label>
                         <Input onChange={this.handlechange} name="jobPrice" className="r"  type="text" />
                         
                         <Label>City</Label>
                         <Input onChange={this.handlechange} name="city" className="r"  type="text" />
                         
                         <Label>What We Offer</Label>
                         <Input onChange={this.handlechange} name="offer" className="r" style={{height:"100px"}} type="textarea" row="100"/>
                         <Label>job Description</Label>
                         <Input onChange={this.handlechange} name="jobDescription" style={{height:"100px"}} type="textarea"/>
                         <Label>job Requirements</Label>
                         <Input onChange={this.handlechange} name="requirements" style={{height:"100px"}} type="textarea"/>
                         <Label>Experience</Label>
                         <Input onChange={this.handlechange} name="experience" style={{height:"100px"}} type="textarea"/>
                         <Label>job Image</Label>
                         <Input onChange={this.handlechangeFile}  name="jobImage" style={{height:"100px"}} type="file"/>

                        
                        
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
  addNewJob,

 
})(Job);
