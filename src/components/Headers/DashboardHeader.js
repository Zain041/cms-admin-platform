import React from "react";
import { Link } from "react-router-dom";
import {connect} from 'react-redux'

// reactstrap components
import { Card, CardBody, CardTitle, Container, Row, Col } from "reactstrap";
// import Categories from "../../views/examples/";

class DashboardHeader extends React.Component {
	render() {
		
	// var	catnum=this.props.categories.length
	// var pronum = this.props.providers.length
		return (
			<>
				<div className="header bg-gradient-info pb-8 pt-5 pt-md-8">
					<Container fluid>
						<div className="header-body">
							{/* Card stats */}
							<Row>
								{/* <Col lg="6" xl="3">
                  <Link to="/admin/about">
                    <Card className="card-stats mb-4 mb-xl-0">
                      <CardBody>
                        <Row>
                          <div className="col">
                            <CardTitle
                              tag="h5"
                              className="text-uppercase text-muted mb-0"
                            >
                              About
                            </CardTitle>
                            <span className="h2 font-weight-bold mb-0">
                              5678
                            </span>
                          </div>
                          <Col className="col-auto">
                            <div className="icon icon-shape bg-danger text-white rounded-circle shadow">
                              <i className="fas fa-address-card" />
                            </div>
                          </Col>
                        </Row>
                        {/* <p className="mt-3 mb-0 text-muted text-sm">
                        <span className="text-success mr-2">
                          <i className="fa fa-arrow-up" /> 3.48%
                        </span>{" "}
                        <span className="text-nowrap">Since last month</span>
                      </p> 
                      </CardBody>
                    </Card>
                  </Link>
                </Col> */}
								<Col lg="6" xl="6">
									<Link to="/admin/podcast">
										<Card className="card-stats mb-6 mb-xl-6">
											<CardBody>
												<Row>
													<div className="col">
														<CardTitle
															tag="h5"
															className="text-uppercase text-muted mb-0"
														>
													      Icon
														</CardTitle>
														<span className="h2 font-weight-bold mb-0">
														    10
														</span>
													</div>
													<Col className="col-auto">
														<div className="icon icon-shape bg-orange text-white rounded-circle shadow">
															<i className="fas fa-building text-blue" />
														</div>
													</Col>

												</Row>
											</CardBody>
										</Card>
									</Link>
								</Col>
								<Col lg="6" xl="6">
									<Link to="/admin/podcast">
										<Card className="card-stats mb-6 mb-xl-6">
											<CardBody>
												<Row>
													<div className="col">
														<CardTitle
															tag="h5"
															className="text-uppercase text-muted mb-0"
														>
													    Childer
														</CardTitle>
														<span className="h2 font-weight-bold mb-0">
														    10
														</span>
													</div>
													<Col className="col-auto">
														<div className="icon icon-shape bg-yellow text-white rounded-circle shadow">
															<i className="fas fa-book  text-blue" />
														</div>
													</Col>
												</Row>
												
											</CardBody>
										</Card>
									</Link>
								</Col>
							
								
								<Col lg="6" xl="4">
									<Link to="/admin/posts">
										{/* <Card className="card-stats mb-4 mb-xl-0">
										
										</Card> */}
									</Link>
								</Col>
							</Row>
						</div>
					</Container>
				</div>
			</>
		);
	}
}



// export function mapStateToProps(state) {
// 	return {
	
	
// 		categories:state.categories.categories,
// 		providers:state.provider.providers
		
		
		
// 	};
// }

export default DashboardHeader
