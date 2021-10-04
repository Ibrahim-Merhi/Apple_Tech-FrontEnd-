/* eslint jsx-a11y/anchor-is-valid: 0 */

import React from "react";
import PropTypes from "prop-types";
import {
  Card,
  CardHeader,
  CardBody,
  ListGroup,
  ListGroupItem,
  Button
} from "shards-react";

const SidebarActions = ({ title }) => (
  <Card small className="mb-3">
    <CardHeader className="border-bottom">
      <h6 className="m-0">{title}</h6>
    </CardHeader>

    <CardBody className="p-0">
      <ListGroup flush>
        <ListGroupItem className="p-3">
          <span className="d-flex mb-2">
          <box-icon type='solid' name='flag-alt' color='#495057' size="xs" style={{marginRight: "3%"}}></box-icon>
            <strong className="mr-1">Status:</strong> Draft{" "}
            <a className="ml-auto" href="#">
              Edit
            </a>
          </span>
          <span className="d-flex mb-2">
          <box-icon name='show' color='#495057' size="xs" style={{marginRight: "3%"}} ></box-icon>
            <strong className="mr-1">Visibility:</strong>{" "}
            <strong className="text-success">Public</strong>{" "}
            <a className="ml-auto" href="#">
              Edit
            </a>
          </span>
          <span className="d-flex mb-2">
          <box-icon name='calendar-alt' color='#495057' size="xs" style={{marginRight: "3%"}} ></box-icon>
            <strong className="mr-1">Schedule:</strong> Now{" "}
            <a className="ml-auto" href="#">
              Edit
            </a>
          </span>
         
        </ListGroupItem>
        <ListGroupItem className="d-flex px-3 border-0">
          <button >
           Save Draft
          </button>
          <button className="ml-2">
            Publish
          </button>
        </ListGroupItem>
      </ListGroup>
    </CardBody>
  </Card>
);

SidebarActions.propTypes = {
  /**
   * The component's title.
   */
  title: PropTypes.string
};

SidebarActions.defaultProps = {
  title: "Actions"
};

export default SidebarActions;
