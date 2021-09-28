import React from "react";
// import './css/style.blue.css';
// import './css/fontastic.css';
// import './css/bootstrap.min.css'
import Navbar from '../../components/Navbar/Navbar'
import Banner from '../../components/Banner/Banner'
import img1 from './blog-post-1.jpeg'
import img2 from './blog-post-2.jpg'
import img3 from './blog-post-3.jpeg'
import img4 from './blog-post-4.jpeg'
import './css/style.css'
import Footer from '../../components/Footer/Footer'
import { Link } from "react-router-dom";
import  { useEffect, useState, useContext } from "react"
import { useHistory } from 'react-router-dom'
import API from "../../API"
export default function blogdetail(props) {
  const [blogs, setBlogs] = useState([]);
let id= props.match.params.id
  async function fetchBlog() {
    console.log("ddd", id)
      try {
          await API.get(`blog/${id}`)
              .then(res => {
                  const data = res.data.result;
                  const success = res.data.success;
                  console.log("dd",data)
                  if (success)
                  setBlogs(data);
              });
      } catch (e) {
          console.log("ERROR", e);
      }
  }

 
  
  const [comments, setComments] = useState([]);
  const [totaclComments, setTotaclComments] = useState(0);

    async function fetchComment() {
    
        try {
            await API.get(`comment/${id}`)
                .then(res => {
                    const data = res.data.result;
                    const success = res.data.success;
                    console.log("dd",data)
                    if (success)
                    setComments(data);
                    setTotaclComments(data.length);
                    
                });
        } catch (e) {
            console.log("ERROR", e);
        }
    }
  
    useEffect(() => {
       fetchBlog();
        fetchComment();
    }, [])
    const history = useHistory();

  return (
    <div>
      <Navbar />
      <div id="bannerbg">
      <Banner
       
      title="Latest Blog Posts"
      paragraph="Read and get updated on how we progress."
      />
    </div>
      <div class="container">
     
      <div class="row">
      
        <main class="post blog-post col-lg-8" style={{ marginLeft: "0",
   								 maxWidth: "100%",
  								  flex: "unset"}}> 
          <div class="container">
         
            <div class="post-single">
            <button id="designbtn" style={{textTransform: "uppercase"}} onClick={() => history.goBack()}><b><a href="/" id="firstone" style={{color: "inherit", fontWeight: "bolder"}}>Apple_tech</a></b> / <a href="/blogPage" id="secondone"> BLOGS</a> / <a href="" id="thirdone">{blogs.title}</a> </button>
              <div class="post-thumbnail"><img src={img3} alt="..." class="img-fluid"/></div>
              
              <div class="post-details">
                <div class="post-meta d-flex justify-content-between">
                  <div class="category"><a >Business</a></div>
                </div>
                <h1>{blogs.title}</h1>
                <div class="post-footer d-flex align-items-center flex-column flex-sm-row">
                  <div class="d-flex align-items-center flex-wrap">       
                    <div class="date"><i class="icon-clock"></i>{blogs.date}</div>
                    <div class="views"><i class="icon-eye"></i>{blogs.view}</div>
                    <div class="comments meta-last"><i class="icon-comment"></i></div>
                  </div>
                </div>
                <div class="post-body" style={{marginBottom: "25%"}}>
                  <p class="lead">{blogs.content}</p>
                  
                    
                
               
               </div>
                <div class="post-comments">
                
                  <header>
                    <h3 class="h4">Comments<span class="no-of-comments">({totaclComments})</span></h3>
                  </header>
                  {comments.map(comment => (
                  <div class="comment">
                  
                    <div class="comment-header d-flex justify-content-between">
                      <div class="user d-flex align-items-center">
                        <div class="image"><img src="img/user.svg" alt="..." class="img-fluid rounded-circle"/></div>
                        <div class="title"><strong>{comment.username}</strong><span class="date">{comment.date}</span></div>
                      </div>
                    </div>
                    <div class="comment-body">
                      <p>{comment.message}</p>
                    </div>
                     
                  </div>
                  ))}
                  {/* <div class="comment">
                    <div class="comment-header d-flex justify-content-between">
                      <div class="user d-flex align-items-center">
                        <div class="image"><img src="img/user.svg" alt="..." class="img-fluid rounded-circle"/></div>
                        <div class="title"><strong>Nikolas</strong><span class="date">May 2016</span></div>
                      </div>
                    </div>
                    <div class="comment-body">
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                    </div>
                  </div> */}
                  {/* <div class="comment">
                    <div class="comment-header d-flex justify-content-between">
                      <div class="user d-flex align-items-center">
                        <div class="image"><img src="img/user.svg" alt="..." class="img-fluid rounded-circle"/></div>
                        <div class="title"><strong>John Doe</strong><span class="date">May 2016</span></div>
                      </div>
                    </div>
                    <div class="comment-body">
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                    </div>
                  </div> */}
               
                </div>
                <div class="add-comment">
                  <header>
                    <h3 class="h6">Leave a comment</h3>
                  </header>
                  <form action="#" class="commenting-form">
                    <div class="row">
                      <div class="form-group col-md-6">
                        <input type="text" name="username" id="username" placeholder="Name" class="form-control"/>
                      </div>
                      <div class="form-group col-md-6">
                        <input type="email" name="username" id="useremail" placeholder="Email Address (will not be published)" class="form-control"/>
                      </div>
                      <div class="form-group col-md-12">
                        <textarea name="usercomment" id="usercomment" placeholder="Type your comment" class="form-control"></textarea>
                      </div>
                      <div class="form-group col-md-12">
                        <button type="submit" class="btn btn-secondary">Submit Comment</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
             
            </div>
            
          </div>
        </main>
      
      </div>
     
    </div>
    <Footer />
     </div>
  );
}
