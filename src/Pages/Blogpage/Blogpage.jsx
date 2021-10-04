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
import { Link } from "react-router-dom";
import  { useEffect, useState, useContext } from "react"
import { useHistory } from 'react-router'
import API from "../../API"
import Footer from '../../components/Footer/Footer'

import Blogdetail from '../Blogdetails/Blogdetails'
import './css/style.css'
export default function SignInSide(props) {
  let id= props.match.params.id
  const [blogs, setBlogs] = useState([]);

  async function fetchData() {
      try {
          await API.get('blog')
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

  const [news1, setNews1] = useState([]);

  async function fetchNews1() {
      try {
          await API.get('blog/news1')
              .then(res => {
                  const data = res.data.result;
                  const success = res.data.success;
                  console.log("dd",data)
                  if (success)
                  setNews1(data);
              });
      } catch (e) {
          console.log("ERROR", e);
      }
  }

  const [news0, setNews0] = useState([]);

  async function fetchNews0() {
      try {
          await API.get('blog/news0')
              .then(res => {
                  const data = res.data.result;
                  const success = res.data.success;
                  console.log("dd",data)
                  if (success)
                  setNews0(data);
              });
      } catch (e) {
          console.log("ERROR", e);
      }
  }



  const [comments, setComments] = useState([]);
  const [totaclComments, setTotaclComments] = useState(0);

    async function fetchComment() {
    
        try {
            await API.get(`comment`)
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
      fetchData();
      fetchNews0()
      fetchNews1()
      fetchComment();
      window.scroll({
        top: 0,
        left: 0,
      });
  }, [])

  return (
    <div>
      <Navbar />
      <Banner 
      backgroundImage="url(assets/img/bg-gift7.jpg)"
      title="Latest Blog Posts"
      paragraph="Read and get updated on how we progress."
      />
      <div id="aside"> 
        <div>
      <main class="posts-listing col-lg-8" style={{ marginLeft: "0",
   								 maxWidth: "100%",
  								  flex: "unset"}}>
        <div class="container">
          <div class="row">
         
              {blogs.map(blog => (
                   <div class="post col-xl-6">
                   <div class="post-thumbnail">
                     
                   </div>
                   <div id="zoom">
              <div class="post-details"  id="hover-underline-animation" style={{backgroundColor: "white"}}>
                <Link to={`/blogPage/blogDetail/${blog.id}`}>
                  {/* <img src={img1} alt="..." class="img-fluid" /> */}
                  <img src={blog.image} alt="..." class="img-fluid" style={{height: "426px" , width: "640px"}} ></img>
                
                <div class="post-meta d-flex justify-content-between pl-2">
                <div class="category" style={{color: "purple"}}>
                    <a >{blog.categories}</a>
                  </div>
                  
                  
                </div>
                <a href="post.html">
                  <h3 class="h4 pl-2" style={{textTransform: "uppercase"}}>
                    {blog.title}
                  </h3>
                </a>
                <p class="text-muted pl-2">
                {blog.description}
                </p>
                <footer class="post-footer d-flex align-items-center pl-2">
               
                  <div class="date">
                    <i class="icon-clock"></i> {blog.date.substring(0, blog.date.indexOf('T'))}
                  </div>
                  <div class="comments meta-last">
                    <i class="icon-comment"></i>{totaclComments}
                  </div>
                </footer>
                </Link>
              </div>
              </div>
              
            </div>
))}
            {/* <div class="post col-xl-6">
              <div class="post-thumbnail">
                <a href="post.html">
                  <img src={img2} alt="..." class="img-fluid" />
                </a>
              </div>
              <div class="post-details">
                <div class="post-meta d-flex justify-content-between">
                  <div class="date meta-last">20 May | 2016</div>
                  <div class="category">
                    <a href="#">Business</a>
                  </div>
                </div>
                <a href="post.html">
                  <h3 class="h4">
                    Alberto Savoia Can Teach You About Interior
                  </h3>
                </a>
                <p class="text-muted">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore.
                </p>
                <div class="post-footer d-flex align-items-center">
                
                  <div class="date">
                    <i class="icon-clock"></i> 3 months ago
                  </div>
                  <div class="comments meta-last">
                    <i class="icon-comment"></i>6
                  </div>
                </div>
              </div>
            </div> */}

            {/* <div class="post col-xl-6">
              <div class="post-thumbnail">
                <a href="post.html" />
                <img src={img3} alt="..." class="img-fluid" />
              </div>
              <div class="post-details">
                <div class="post-meta d-flex justify-content-between">
                  <div class="date meta-last">20 May | 2016</div>
                  <div class="category">
                    <a href="#" />
                    Business
                  </div>
                </div>
                <a href="post.html">
                  <h3 class="h4">
                    Alberto Savoia Can Teach You About Interior
                  </h3>
                </a>
                <p class="text-muted">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore.
                </p>
                <div class="post-footer d-flex align-items-center">
                 
                  <div class="date">
                    <i class="icon-clock"></i> 2 months ago
                  </div>
                  <div class="comments meta-last">
                    <i class="icon-comment"></i>12
                  </div>
                </div>
              </div>
            </div> */}

            {/* <div class="post col-xl-6">
              <div class="post-thumbnail">
                <a href="post.html" />
                <img src={img4} alt="..." class="img-fluid" />
              </div>
              <div class="post-details">
                <div class="post-meta d-flex justify-content-between">
                  <div class="date meta-last">20 May | 2016</div>
                  <div class="category">
                    <a href="#" />
                    Business
                  </div>
                </div>
                <a href="post.html" />
                <h3 class="h4">Alberto Savoia Can Teach You About Interior</h3>
                <p class="text-muted">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore.
                </p>
                <div class="post-footer d-flex align-items-center">
                  <div class="date">
                    <i class="icon-clock" /> 2 months ago
                  </div>
                  <div class="comments meta-last">
                    <i class="icon-comment" />
                    12
                  </div>
                </div>
              </div>
            </div> */}
          </div>

          
        </div>
      </main>
      </div>
      <div>
      <aside id="asidetest">
        <div class="widget search"  style={{backgroundColor: "white"}}>
          <header>
            <h3 class="h6">Search the blog</h3>
          </header>
          <form action="#" class="search-form">
            <div class="form-group">
              <input type="search" placeholder="What are you looking for?" />
              <button type="submit" class="submit">
                <i class="icon-search" style={{color: "purple"}}></i>
              </button>
            </div>
          </form>
        </div>

        <div class="widget latest-posts"  style={{backgroundColor: "white"}}>
          <header>
            <h3 class="h6">Latest News</h3>
          </header>
          {news1.map(news => (
          <div class="blog-posts">
            <Link to={`/blogPage/blogDetail/${news.id}`}>
            <a href="#">
              <div class="item d-flex align-items-center"  id="zoom" style={{color: "purple"}}>
                <div class="image">
                  <img
                   src={news.image}
                    alt="..."
                    class="img-fluid"
                  />
                </div>
                <div class="title">
                  <strong>{news.title}</strong>
                  <div class="d-flex align-items-center">
                    <div class="views">
                    <i class="icon-clock"></i> {news.date.substring(0, news.date.indexOf('T'))}
                    </div>
                    <div class="comments">
                      <i class="icon-comment"></i>{totaclComments}
                    </div>
                  </div>
                </div>
              </div>
            </a>
            </Link>
            {/* <a href="#">
              <div class="item d-flex align-items-center">
                <div class="image">
                  <img
                   src={img2}
                    alt="..."
                    class="img-fluid"
                  />
                </div>
                <div class="title">
                  <strong>Alberto Savoia Can Teach You About</strong>
                  <div class="d-flex align-items-center">
                    <div class="views">
                      <i class="icon-eye"></i> 500
                    </div>
                    <div class="comments">
                      <i class="icon-comment"></i>12
                    </div>
                  </div>
                </div>
              </div>
            </a>
            <a href="#">
              <div class="item d-flex align-items-center">
                <div class="image">
                  <img
                   src={img3}
                    alt="..."
                    class="img-fluid"
                  />
                </div>
                <div class="title">
                  <strong>Alberto Savoia Can Teach You About</strong>
                  <div class="d-flex align-items-center">
                    <div class="views">
                      <i class="icon-eye"></i> 500
                    </div>
                    <div class="comments">
                      <i class="icon-comment"></i>12
                    </div>
                  </div>
                </div>
              </div>
            </a> */}
          </div>
          ))}
        </div>

        <div class="widget categories"  style={{backgroundColor: "white"}}>
          <header>
            <h3 class="h6">Categories</h3>
          </header>
          <div class="item d-flex justify-content-between">
            <a href="#">News</a>
            <span>1</span>
          </div>
          <div class="item d-flex justify-content-between">
            <a href="#">Trickes</a>
            <span>1</span>
          </div>
          <div class="item d-flex justify-content-between">
            <a href="#">Tips</a>
            <span>0</span>
          </div>
          <div class="item d-flex justify-content-between">
            <a href="#">Hackes</a>
            <span>0</span>
          </div>
          <div class="item d-flex justify-content-between">
            <a href="#">Common Problem</a>
            <span>1</span>
          </div>
          
          
         
        </div>

        
      </aside>
      </div>
      </div>
      <div class="demo" style={{backgroundColor: "transparent", marginLeft: "35%"}}>
    <nav class="pagination-outer" aria-label="Page navigation" >
        <ul class="pagination">
            
           
            <li class="page-item"><a class="page-link" href="#"><h4 style={{color: "white"}}>«</h4></a></li>
            <li class="page-item active"><a class="page-link" href="#">1</a></li>
            <li class="page-item"><a class="page-link" href="#">2</a></li>
            <li class="page-item"><a class="page-link" href="#">3</a></li>
            <li class="page-item"><a class="page-link" href="#">4</a></li>
            <li class="page-item"><a class="page-link" href="#">5</a></li>
            <li class="page-item"><a class="page-link" href="#"><h4 style={{color: "white"}}>»</h4></a></li>
        </ul>
    </nav>
</div>
      <Footer />
    </div>
  );
}
