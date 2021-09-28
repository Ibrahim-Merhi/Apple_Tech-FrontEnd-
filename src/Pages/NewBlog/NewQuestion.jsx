import React from "react";
import Navbar from '../../components/Navbar/Navbar'
import Banner from '../../components/Banner/Banner'
import Footer from '../../components/Footer/Footer'
import {useHistory} from "react-router-dom";
import { Col } from "shards-react";
import Editor from "../../components/add-new-post/Editor";
import './NewQuestion.css'
export default function NewQuestion() {
 const history = useHistory();
 const post = () => {
    history.push('/QA')
  }

  return (
      <div>
          <Navbar />
          <Banner />
<div class="container">
    <div style={{ marginTop: "30px"}}>
        <h2 class="text-xs-center" style={{textTransform: "uppercase", marginBottom: "30px"}}>Post new Question</h2>
        {/* <div class="col-md-12 ">
            <div class="form-group">
                <input type="text" class="form-control" placeholder="Title"/>
            </div>
            <textarea id="editor" cols="30" rows="10" placeholder="Submit your text post here..."></textarea>
            <br/>
            <div class="form-group">
                <input type="text" class="form-control" placeholder="Tags"/>
            </div>
            <div class="form-group">
                <button class="btn" style={{backgroundColor: "purple" , color: "white"}} id="submit" onClick={() => post()}>Submit Question</button>
                <button class="btn btn-secindary" id="submit" onClick={() => history.goBack()}>Cancel</button>
            </div>
        </div> */}
        <Col >
        <Editor />
        </Col>
        <div class="form-group">
                <button class="btn" style={{backgroundColor: "purple" , color: "white"}} id="submit" onClick={() => post()}>Submit Question</button>
                <button class="btn btn-secindary" id="submit" onClick={() => history.goBack()}>Cancel</button>
            </div>
    </div>
</div>
<Footer />
</div>



);
}
