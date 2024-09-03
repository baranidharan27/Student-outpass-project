import React, { useState, useEffect } from 'react';
import { Row, Col, Card, Form, Button, InputGroup, FormControl, DropdownButton, Dropdown } from 'react-bootstrap';
import windowSize from 'react-window-size';
import axios from 'axios';
import * as api from '../Configurations/Api_Details'

import Aux from "../../hoc/_Aux";

function FormsElements(props) {

    const [username, setusername] = useState(props.data.name);
    const [password, setpassword] = useState(props.data.password);
    const [client_id, setclient_id] = useState(props.data.client_id);
    const [mobile_number, setmobile_number] = useState(props.data.mobile_number);



    return (
        <Aux>
            <Row>
                <Col>
                    <Card>
                        {/* <Card.Header>
                                <Card.Title as="h5">CREATE NEW AGENCY </Card.Title>
                                <hr/>

                            </Card.Header> */}
                        <Card.Body>
                            <h5>UPDATE USER DETAILS </h5>
                            <hr />
                            <Row>
                              
                            <Col md={6}>
                                   
                                   <Form.Group controlId="formBasicEmail">
                                       <Form.Label>USERNAME *</Form.Label>
                                       <Form.Control
                                           type="text"
                                           placeholder="Enter Username"
                                           value={username}
                                           onChange={(event) => { setusername(event.target.value) }}
                                       />
                                   </Form.Group>
                                   <Form.Group controlId="formBasicEmail">
                                        <Form.Label>PASSWORD *</Form.Label>
                                        <Form.Control
                                            type="password"
                                            placeholder="Enter Password"
                                            value={password}
                                            onChange={(event) => { setpassword(event.target.value) }}
                                        />
                                    </Form.Group>
                               </Col>


                                <Col md={6}>
                                   
                                   

                                    <Form.Group controlId="formBasicEmail">
                                       <Form.Label>MOBILE NUMBER *</Form.Label>
                                       <Form.Control
                                           type="number"
                                           placeholder="Enter Phone Number"
                                           value={mobile_number}
                                           onChange={(event) => { setmobile_number(event.target.value) }}
                                       />
                                   </Form.Group>

                                </Col>

                                <div style={{ marginLeft: 15 }}>
                                    <Button variant="primary"
                                        onClick={() => {
                                            if(client_id !== "" ){
                                                const stock_details = {
                                                    
                                                    "name": username,
                                                    "password": password,
                                                    "mobile_number":mobile_number                                                

                                                 
                                                };
                                    
                                                const options = {
                                                    url: api.CREATE_CLIENT_USER+props.data._id,
                                                    method: 'PUT',
                                                    headers: {
                                                        'Content-Type': 'application/json',
                                                        // 'Authorization': 'Bearer ' + window.localStorage.getItem('codeofauth')
                                                    },
                                                    data: JSON.stringify(stock_details)
                                                };
                                                axios(options)
                                                    .then(response => {
                                                        props.callback()

                                                    })
                                    
                                                    .catch(function (e) {
                                                        props.callback()
                                                        if (e.message === 'Network Error') {
                                                            alert("No Internet Found. Please check your internet connection")
                                                        }
                                    
                                                        else {
                                    
                                                            alert("Sorry, something went wrong. Please try again after sometime. If the issue still persists contact support.")
                                                        }
                                                       
                                    
                                                    });
                                            }

                                            else {

                                                alert("Please fill out all required fields.")

                                            }


                                        }}
                                    >
                                        SUBMIT
                                            </Button>

                                    <Button variant="primary"
                                        onClick={() => {
                                            props.callback()
                                        }}>
                                        CANCEL
                                            </Button>

                                </div>


                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Aux>
    );

}

export default windowSize(FormsElements);