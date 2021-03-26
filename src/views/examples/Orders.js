/*!

=========================================================
* Argon Dashboard React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { Component } from "react";
import {fetchJobs} from '../../store/actions/actions';


// reactstrap components
import {
  Badge,
  Card,
  CardHeader,
  CardFooter,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Media,
  Pagination,
  PaginationItem,
  PaginationLink,
  Progress,
  Table,
  Container,
  Row,
  Button,
  UncontrolledTooltip,
} from "reactstrap";
// core components
import UserHeader from "components/Headers/UserHeader.js";
import { connect } from "react-redux";

class Orders extends Component {

  componentDidMount=()=>{
    this.props.fetchJobs()
   
  }

  render() {
   
 console.log("orders",this.props.orders)
 console.log("items",this.props.items)
  return (
    <>
    <UserHeader/>
      {/* <Header /> */}
      {/* Page content */}
      <Container className="mt--7" fluid>
        {/* Table */}
        <Row>
          <div className="col">
            <Card className="shadow">
              <CardHeader className="border-0">
                <h3 className="mb-0">Orders</h3>
              </CardHeader>
              <Table className="align-items-center table-flush" responsive>
                <thead className="thead-light">
                  <tr className="text-center">
                    <th scope="col">Job Title</th>
                    <th scope="col">Job Description</th>
                    
                    <th scope="col">Experience</th>
                    <th scope="col"> Job Image</th>
                   
                    <th scope="col">Job Reaquirements</th> 
                    <th scope="col">City </th>
                    <th scope="col">Job Price</th>
                    <th scope="col">Offer</th> 
                    <th scope="col">Actions</th> 
                  </tr>
                </thead>
                <tbody>
                  {this.props.jobs.map((items,index)=>{
                  
                    return(

                  
                  <tr className="text-center" key={index}>
                    <th scope="row">
                    {items.job_title}
                    </th>
                    <td>  {items.job_description}</td>
                    <td>
                   {items.experience}
                   </td>

                    <td>
                     <img src={items.job_image} height="50" width="50"/>
                   

                     
                    </td>
                    <td>
                     {items.requirements}
                    </td>
                    <td className="text-right">
                    {items.city}
                    </td>
                    <td className="text-right">
                    {items.job_jobPrice}
                    </td>
                    <td className="text-right">
                    {items.offer}
                    </td>
                    <td className="text-right">
                    <Button color="primary" className="mr-2">Edit</Button>
                    <Button color="danger">Delete</Button>
                    </td>
                  </tr>
                    )
                  })}
              </tbody>
              </Table>
             
            </Card>
          </div>
        </Row>
        {/* Dark table */}
    </Container>
    </>
  );
}
};
const mapStateToProps = (state) => ({
  jobs:state.posts.jobs

  // items: state.item.items,
  // orders: state.order.orders,
  // categories:state.item.categories
 
});

export default connect(mapStateToProps,{fetchJobs})(Orders);
