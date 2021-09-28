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
export default function SignInSide() {
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

  useEffect(() => {
      fetchData();
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
              <div class="post-details">
                <Link to={`/blogPage/blogDetail/${blog.id}`}>
                  <img src={img1} alt="..." class="img-fluid" />
                </Link>
                <div class="post-meta d-flex justify-content-between">
                  <div class="date meta-last">20 May | 2016</div>
                  <div class="category">
                    <a href="#">Business</a>
                  </div>
                </div>
                <a href="post.html">
                  <h3 class="h4" style={{textTransform: "uppercase"}}>
                    {blog.title}
                  </h3>
                </a>
                <p class="text-muted">
                {blog.description}
                </p>
                <footer class="post-footer d-flex align-items-center">
               
                  <div class="date">
                    <i class="icon-clock"></i> {blog.date}
                  </div>
                  <div class="comments meta-last">
                    <i class="icon-comment"></i>12
                  </div>
                </footer>
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
        <div class="widget search">
          <header>
            <h3 class="h6">Search the blog</h3>
          </header>
          <form action="#" class="search-form">
            <div class="form-group">
              <input type="search" placeholder="What are you looking for?" />
              <button type="submit" class="submit">
                <i class="icon-search"></i>
              </button>
            </div>
          </form>
        </div>

        <div class="widget latest-posts">
          <header>
            <h3 class="h6">Latest Posts</h3>
          </header>
          <div class="blog-posts">
            <a href="#">
              <div class="item d-flex align-items-center">
                <div class="image">
                  <img
                    src={img1}
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
        </div>

        <div class="widget categories">
          <header>
            <h3 class="h6">Categories</h3>
          </header>
          <div class="item d-flex justify-content-between">
            <a href="#">News</a>
            <span>25</span>
          </div>
          <div class="item d-flex justify-content-between">
            <a href="#">Trickes</a>
            <span>12</span>
          </div>
          <div class="item d-flex justify-content-between">
            <a href="#">Tips</a>
            <span>17</span>
          </div>
          <div class="item d-flex justify-content-between">
            <a href="#">Hackes</a>
            <span>8</span>
          </div>
          <div class="item d-flex justify-content-between">
            <a href="#">Common Problem</a>
            <span>25</span>
          </div>
          
          
         
        </div>

        
      </aside>
      </div>
      </div>
      <Footer />
    </div>
  );
}
