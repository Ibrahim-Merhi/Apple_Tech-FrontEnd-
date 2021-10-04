import React from "react";
import { Container, Row, Col } from "shards-react";
import Layout from '../layouts/Default'
import PageTitle from "../components/common/PageTitle";
import Inbox from "../components/Inbox";
// import UserAccountDetails from "../components/user-profile-lite/UserAccountDetails";
import MainFooter from '../components/layout/MainFooter';

const UserProfileLite = () => (
  <div>
  < Layout />
  <Container fluid className="main-content-container px-4">
    <Row noGutters className="page-header pt-0 toppadingtitle"  style={{marginLeft: "17%"}}>
      <PageTitle title="Admin Profile" subtitle="Overview" md="12" className="ml-sm-auto mr-sm-auto" />
      <button className="mt-2">+ ADD NEW ADMIN</button>
    </Row>
    {/* <Row> */}
      <Col lg="10">
      
        <Inbox />
      
      </Col>
      {/* <Col lg="8">
        <UserAccountDetails />
      </Col> */}
    {/* </Row> */}
  </Container>
  <MainFooter />
  </div>
);

export default UserProfileLite;
