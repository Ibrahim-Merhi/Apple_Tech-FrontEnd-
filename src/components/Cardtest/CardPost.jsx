import React from 'react';
import './style.blue.css';
import './fontastic.css'

import image1 from './img/featured-pic-1.jpeg'
import image2 from './img/featured-pic-2.jpeg'
import image3 from './img/featured-pic-3.jpeg'
import backgrounddev from './img/divider-bg.jpg'
export default function BlogCardDemo() {
    
    
    return (
        <div>
        <section class="featured-posts no-padding-top">
            <div class="container">
                <div class="row d-flex align-items-stretch">
                    <div class="text col-lg-7">
                        <div class="text-inner d-flex align-items-center">
                            <div class="content">
                                <header class="post-header">
                                    <div class="category"><a href="#">Business</a><a href="#">Technology</a></div><a href="post.html">
                                        <h2 class="h4">Alberto Savoia Can Teach You About Interior</h2></a>
                                </header>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrude consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
                                <footer class="post-footer d-flex align-items-center"><a href="#" class="author d-flex align-items-center flex-wrap">
                                    <div class="avatar"><img src="img/avatar-1.jpg" alt="..." class="img-fluid" /></div>
                                    <div class="title"><span>John Doe</span></div></a>
                                    <div class="date"><i class="icon-clock"></i> 2 months ago</div>
                                    <div class="comments"><i class="icon-comment"></i>12</div>
                                </footer>
                            </div>
                        </div>
                    </div>
                    <div class="image col-lg-5"><img src={image1} style={{}} alt="..." /></div>
                </div>

                <div class="row d-flex align-items-stretch">
                    <div class="image col-lg-5"><img src={image2} alt="..." /></div>
                    <div class="text col-lg-7">
                        <div class="text-inner d-flex align-items-center">
                            <div class="content">
                                <header class="post-header">
                                    <div class="category"><a href="#">Business</a><a href="#">Technology</a></div><a href="post.html">
                                        <h2 class="h4">Alberto Savoia Can Teach You About Interior</h2></a>
                                </header>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrude consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
                                <footer class="post-footer d-flex align-items-center"><a href="#" class="author d-flex align-items-center flex-wrap">
                                    <div class="avatar"><img src="img/avatar-2.jpg" alt="..." class="img-fluid" /></div>
                                    <div class="title"><span>John Doe</span></div></a>
                                    <div class="date"><i class="icon-clock"></i> 2 months ago</div>
                                    <div class="comments"><i class="icon-comment"></i>12</div>
                                </footer>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row d-flex align-items-stretch">
                    <div class="text col-lg-7">
                        <div class="text-inner d-flex align-items-center">
                            <div class="content">
                                <header class="post-header">
                                    <div class="category"><a href="#">Business</a><a href="#">Technology</a></div><a href="post.html">
                                        <h2 class="h4">Alberto Savoia Can Teach You About Interior</h2></a>
                                </header>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrude consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
                                <footer class="post-footer d-flex align-items-center"><a href="#" class="author d-flex align-items-center flex-wrap">
                                    <div class="avatar"><img src="img/avatar-3.jpg" alt="..." class="img-fluid" /></div>
                                    <div class="title"><span>John Doe</span></div></a>
                                    <div class="date"><i class="icon-clock"></i> 2 months ago</div>
                                    <div class="comments"><i class="icon-comment"></i>12</div>
                                </footer>
                            </div>
                        </div>
                    </div>
                    <div class="image col-lg-5"><img src={image3} alt="..." /></div>
                </div>
            </div>
        </section>

        <section style={{backgroundImage: `url(${backgrounddev})`, backgroundSize: 'cover', backgroundPosition: 'center bottom' }} class="divider">
      <div class="container">
        <div class="row">
          <div class="col-md-7">
            <h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</h2><a href="#" class="hero-link">View More</a>
          </div>
        </div>
      </div>
    </section>
    </div>
    );
}