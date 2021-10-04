import React from "react";
import PropTypes from "prop-types";
import { useState } from 'react';
import {
  Card,
  CardHeader,
  ListGroup,
  ListGroupItem,
  Row,
  Col,
  Form,
  FormGroup,
  FormInput,
  FormSelect,
  FormTextarea,
  Button
} from "shards-react";
import DatePicker from 'react-date-picker';
export default function UserAccountDetails() {
  const [valuess, onChanges] = useState(new Date());

return (

  <Card small className="mb-4">
    <CardHeader className="border-bottom">
      <h6 className="m-0">Personal Information</h6>
    </CardHeader>
    <ListGroup flush>
      <ListGroupItem className="p-3">
        <Row>
          <Col>
            <Form>
              <Row form>
                {/* First Name */}
                <Col md="6" className="form-group">
                  <label htmlFor="feFirstName">First Name</label>
                  <FormInput
                    id="feFirstName"
                    placeholder="First Name"
                    
                    onChange={() => {}}
                  />
                </Col>
                {/* Last Name */}
                <Col md="6" className="form-group">
                  <label htmlFor="feLastName">Last Name</label>
                  <FormInput
                    id="feLastName"
                    placeholder="Last Name"
                    
                    onChange={() => {}}
                  />
                </Col>
              </Row>
              <Row form>
                {/* Username */}
                <Col md="6" className="form-group">
                  <label htmlFor="feLastName">UserName</label>
                  <FormInput
                    id="feLastName"
                    placeholder="UserName"
                    
                    onChange={() => {}}
                  />
                </Col>
                {/* Phone Number */}
                <Col md="6" className="form-group">
                <label htmlFor="fePhone Number">Phone Number</label>
                  <FormInput
                  id="fePhone Number"
                  placeholder="Phone Number"
                 
                  onChange={() => {}}
                />
                </Col>
              </Row>
              <Row form>
                {/* Email */}
                <Col md="6" className="form-group">
                  <label htmlFor="feEmail">Email</label>
                  <FormInput
                    type="email"
                    id="feEmail"
                    placeholder="Email Address"
                   
                    onChange={() => {}}
                    
                  />
                </Col>
                {/* Password */}
                <Col md="6" className="form-group">
                  <label htmlFor="fePassword">Password</label>
                  <FormInput
                    type="password"
                    id="fePassword"
                    placeholder="Password"
                    
                    onChange={() => {}}
                    
                  />
                </Col>
              </Row>
               {/* Birthdate */}
               <Col md="6" className="form-group">
                  <label htmlFor="feFirstName" style={{marginRight: "10%"}}>Birthdate</label>
                  <DatePicker
                  
                   onChange={onChanges}
                   value={valuess}
                    />
                </Col>
              <Row form>
                {/* Description */}
                <Col md="12" className="form-group">
                  <label htmlFor="feDescription">Description</label>
                  <FormTextarea id="feDescription" rows="5" />
                </Col>
              </Row>
              <button theme="accent">Create Account</button>
            </Form>
          </Col>
        </Row>
      </ListGroupItem>
    </ListGroup>
  </Card>
);
}

UserAccountDetails.propTypes = {
  /**
   * The component's title.
   */
  title: PropTypes.string
};

UserAccountDetails.defaultProps = {
  title: "Account Details"
};


