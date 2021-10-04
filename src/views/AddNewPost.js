import React from "react";
import { Container, Row, Col } from "shards-react";
import Layout from '../layouts/Default'
import PageTitle from "../components/common/PageTitle";
import Editor from "../components/add-new-post/Editor";
import SidebarActions from "../components/add-new-post/SidebarActions";
import SidebarCategories from "../components/add-new-post/SidebarCategories";
import MainFooter from '../components/layout/MainFooter';
import './style.css'
const AddNewPost = () => (
  <div >
  < Layout />
  <Container fluid className="main-content-container px-4 pb-4" style={{marginLeft: "17%" , maxWidth: "83%"}}>
    {/* Page Header */}
    <Row noGutters className="page-header pt-0 toppadingtitle">
      <PageTitle sm="4" title="Add New Post" subtitle="Blog Posts" className="text-sm-left" />
    </Row>

    <Row>
      {/* Editor */}
      <Col lg="9" md="12">
        <Editor />
      </Col>

      {/* Sidebar Widgets */}
      <Col lg="3" md="12">
        <SidebarActions />
        <SidebarCategories />
      </Col>
    </Row>
  </Container>
  <MainFooter />
  </div>
);

export default AddNewPost;
