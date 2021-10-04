import React from "react";
import PropTypes from "prop-types";
import { NavLink as RouteNavLink } from "react-router-dom";
import { NavItem, NavLink } from "shards-react";

const SidebarNavItem = ({ item }) => (
  <div >
  <NavItem>
    <NavLink tag={RouteNavLink} to={item.to}>
      {item.htmlBefore && (
        <div
          className="block item-icon-wrapper"
          dangerouslySetInnerHTML={{ __html: item.htmlBefore }}
          style={{}}
        />
      )}
      {item.title && <span style={{color: "purple", fontSize: "16px" }}>{item.title}</span>}
      {item.htmlAfter && (
        <div
          className="d-inline-block item-icon-wrapper"
          dangerouslySetInnerHTML={{ __html: item.htmlAfter }}
          style={{boxShadow: "purple", borderColor: "purple"}}
        />
      )}
    </NavLink>
  </NavItem>
  </div>
);

SidebarNavItem.propTypes = {
  /**
   * The item object.
   */
  item: PropTypes.object
};

export default SidebarNavItem;
