import React from "react";

import Navbar from "../../components/Navbar/Navbar";
import Banner from "../../components/Banner/Banner";
import { Link } from "react-router-dom";
 import './style.css'
 import img1 from './assets/images/about-us.jpg'
import img2 from './assets/images/team-member.jpg'
import img3 from './assets/images/team-member2.jpg'
import Footer from '../../components/Footer/Footer'
export default function Contact() {
  return (
    <div>
      <Navbar />
      <Banner
        backgroundImage="url(assets/img/bg-gift5.jpg)"
        title="ABOUT US"
        paragraph="Summary About Us And Our Team"
      />

      {/* <div id="mu-page-header">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="mu-page-header-area">
                <h1 class="mu-page-header-title">About us</h1>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      <main>
        <section id="mu-about">
          <div class="container">
            <div class="row">
              <div class="col-md-12">
                <div class="mu-about-area">
                  <div class="row">
                    <div class="col-md-12">
                      <div class="mu-title">
                        <h2>Who we are</h2>
                        <p>
                          we are group of programers and talented people wich we belive in apple company and wants to be a part of them.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-md-6">
                      <div class="mu-about-left">
                        <img
                          class=""
                          src={img1}
                          alt="img"
                        />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="mu-about-right">
                        <ul>
                          <li>
                            <h3>Our Mission</h3>
                            <p>
                              Helps peoplein their problem even teach them new technique and new way to solve their problems
                            </p>
                          </li>
                          <li>
                            <h3>Our Vision</h3>
                            <p>
                             Be one of the best teams that help people and understand well apple concepts
                            </p>
                          </li>
                          <li>
                            <h3>Our Valuse</h3>
                            <p>
                              Be Honest ... Be Friendly ... Be Apple user
                            </p>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="mu-skills">
          <div class="container">
            <div class="row">
              <div class="col-md-12">
                <div class="mu-skills-area">
                  <div class="row">
                    <div class="col-md-12">
                      <div class="mu-title">
                        <h2>Our Working Skill</h2>
                        <p>
                          You can check our skils levels
                        </p>
                      </div>
                    </div>
                  </div>

                  <div class="row" >
                    <div class="col-md-12">
                      <div class="mu-skills-content">
                        <div class="row">
                          <div class="col-md-3">
                            <div class="mu-single-skills">
                              <div
                                class="row d-flex justify-content-center mt-50"
                                id="bars"
                              >
                                <div class="col-md-6">
                                  <div class="progress blue" style={{background: "Transparent", boxShadow: "none"}}>
                                    {" "}
                                    <span class="progress-left">
                                      {" "}
                                      <span class="progress-bar"></span>{" "}
                                    </span>{" "}
                                    <span class="progress-right">
                                      {" "}
                                      <span class="progress-bar"></span>{" "}
                                    </span>
                                    <div class="progress-value">90%</div>
                                  </div>
                                </div>
                              </div>
                              <h3 style={{color: "white"}}>Web Design</h3>
                              <p style={{color: "white"}}>
                                Lorem ipsum dolor sit amet, con sectetuer
                                adipiscing elitamin.
                              </p>
                            </div>
                          </div>

                          <div class="col-md-3">
                            <div class="mu-single-skills">
                              <div class="row d-flex justify-content-center mt-50">
                                <div class="col-md-6">
                                  <div class="progress blue" style={{background: "Transparent", boxShadow: "none"}}>
                                    {" "}
                                    <span class="progress-left">
                                      {" "}
                                      <span class="progress-bar"></span>{" "}
                                    </span>{" "}
                                    <span class="progress-right">
                                      {" "}
                                      <span class="progress-bar"></span>{" "}
                                    </span>
                                    <div class="progress-value">50%</div>
                                  </div>
                                </div>
                              </div>
                              <h3 style={{color: "white"}}>Mobile Development</h3>
                              <p style={{color: "white"}}>
                                Lorem ipsum dolor sit amet, con sectetuer
                                adipiscing elitamin.
                              </p>
                            </div>
                          </div>

                          <div class="col-md-3">
                            <div class="mu-single-skills">
                              <div class="row d-flex justify-content-center mt-50">
                                <div class="col-md-6">
                                  <div class="progress blue" style={{background: "Transparent", boxShadow: "none"}}>
                                    {" "}
                                    <span class="progress-left">
                                      {" "}
                                      <span class="progress-bar"></span>{" "}
                                    </span>{" "}
                                    <span class="progress-right">
                                      {" "}
                                      <span class="progress-bar"></span>{" "}
                                    </span>
                                    <div class="progress-value">80%</div>
                                  </div>
                                </div>
                              </div>
                              <h3 style={{color: "white"}}>E-commerce</h3>
                              <p style={{color: "white"}}>
                                Lorem ipsum dolor sit amet, con sectetuer
                                adipiscing elitamin.
                              </p>
                            </div>
                          </div>

                          <div class="col-md-3">
                            <div class="mu-single-skills">
                              <div class="row d-flex justify-content-center mt-50">
                                <div class="col-md-6">
                                  <div class="progress blue" style={{background: "Transparent", boxShadow: "none"}}>
                                    {" "}
                                    <span class="progress-left">
                                      {" "}
                                      <span class="progress-bar"></span>{" "}
                                    </span>{" "}
                                    <span class="progress-right">
                                      {" "}
                                      <span class="progress-bar"></span>{" "}
                                    </span>
                                    <div class="progress-value">70%</div>
                                  </div>
                                </div>
                              </div>
                              <h3 style={{color: "white"}}>Online Marketing</h3>
                              <p style={{color: "white"}}>
                                Lorem ipsum dolor sit amet, con sectetuer
                                adipiscing elitamin.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="mu-team" style={{backgroundColor:"white"}}>
          <div class="container">
            <div class="row">
              <div class="col-md-12">
                <div class="mu-team-area">
                  <div class="row">
                    <div class="col-md-12">
                      <div class="mu-title">
                        <h2>Creative team</h2>
                        <p>
                          Check our amazing team members who are experts in their domain.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-md-12">
                      <div class="mu-team-content">
                        <div class="row">
                          <div class="col-md-6">
                            <div class="mu-single-team">
                              <div class="mu-single-team-img">
                                <img
                                  src={img3}
                                  alt="img"
                                />
                              </div>
                              <div class="mu-single-team-content">
                                <h3>Hilal Masri</h3>
                                <span>Programer</span>
                                <p>
                                Swift Programer and application Builder
                                </p>
                                
                              
                              </div>
                            </div>
                          </div>

                          <div class="col-md-6">
                            <div class="mu-single-team">
                              <div class="mu-single-team-img">
                              <img
                                  src={img3}
                                  alt="img"
                                />
                              </div>
                              <div class="mu-single-team-content">
                                <h3>Bashir Khoder</h3>
                                <span>Web Designer</span>
                                <p>
                                  Front and Back End Designer
                                  
                                </p>
                               
                              </div>
                            </div>
                          </div>

                          <div class="col-md-6">
                            <div class="mu-single-team">
                              <div class="mu-single-team-img">
                              <img
                                  src={img3}
                                  alt="img"
                                />
                              </div>
                              <div class="mu-single-team-content">
                                <h3>Baraa Haydar</h3>
                                <span>Tester</span>
                                <p>
                                  Test application and websites
                                </p>
                               
                              </div>
                            </div>
                          </div>

                          <div class="col-md-6">
                            <div class="mu-single-team">
                              <div class="mu-single-team-img">
                              <img
                                  src={img3}
                                  alt="img"
                                />
                              </div>
                              <div class="mu-single-team-content">
                                <h3>Ahmad Hamdach</h3>
                                <span>Problem Solver</span>
                                <p>
                                  Solve Hardware and Software Problem
                                </p>
                               
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
