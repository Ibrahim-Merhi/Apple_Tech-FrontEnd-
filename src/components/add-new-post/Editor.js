import React from "react";
import ReactQuill from "react-quill";
import { Card, CardBody, Form, FormInput } from "shards-react";

import "react-quill/dist/quill.snow.css";
import "../../assets/quill.css";

const Editor = () => (
  <Card small className="mb-3">
    <CardBody>
      <Form className="add-new-post">
        <FormInput size="lg" className="mb-3" placeholder="Your Title" />
        <FormInput size="lg" className="mb-3" placeholder="Your Description" />
        <ReactQuill className="add-new-post__editor mb-1" />
      </Form>
    </CardBody>
    <button style={{maxWidth: "50%"}} >
   BROWSE &nbsp;&nbsp;
							<input type="file" name="file"/>
						</button>
  </Card>
);

export default Editor;
