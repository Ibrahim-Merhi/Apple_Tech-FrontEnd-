import React from "react";
import {
  Form,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  FormInput
} from "shards-react";

export default () => (
  <Form className="main-navbar__search w-100 d-none d-md-flex d-lg-flex">
    <InputGroup seamless className="ml-3 mt-2">
      <InputGroupAddon type="prepend">
       <h3>Admin Panel</h3>
      </InputGroupAddon>
      
    </InputGroup>
  </Form>
);
