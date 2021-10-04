import React from "react";
import { Container, Row, Col } from "shards-react";
import Layout from '../layouts/Default'
import PageTitle from "../components/common/PageTitle";
import UserDetails from "../components/user-profile-lite/UserDetails";
// import UserAccountDetails from "../components/user-profile-lite/UserAccountDetails";
import MainFooter from '../components/layout/MainFooter';
import { useHistory } from 'react-router-dom';

export default function UserProfileLite() {
  let history = useHistory();

  const redirect = () => {
    history.push('/dashboard/createAdmin')
  }

return (
  <div>
  < Layout />
  <Container fluid className="main-content-container px-4" style={{marginLeft: "17%"}}>
    <Row noGutters className="page-header pt-0 toppadingtitle">
      <PageTitle title="Admin Profile" subtitle="Overview" md="12" className="ml-sm-auto mr-sm-auto" />
      <button className="mt-2"  onClick={() => redirect()}>+ ADD NEW ADMIN</button>
    </Row>
    {/* <Row> */}
      <Col lg="10">
        <UserDetails />
      </Col>
      {/* <Col lg="8">
        <UserAccountDetails />
      </Col> */}
    {/* </Row> */}
  </Container>
  <MainFooter />
  </div>
);
}


