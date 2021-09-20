import React from "react";

import Navbar from "../../components/Navbar/Navbar";
import Banner from "../../components/Banner/Banner";
import { Link } from "react-router-dom";
 import './style.css'
 import img1 from './assets/images/about-us.jpg'
import img2 from './assets/images/team-member.jpg'
export default function Contact() {
  return (
    <div>
      <Navbar />
      <Banner
        backgroundImage="url(assets/img/bg-gift2.jpg)"
        title="Latest Blog Posts"
        paragraph="Read and get updated on how we progress."
      />

      <div id="mu-page-header">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="mu-page-header-area">
                <h1 class="mu-page-header-title">About us</h1>
              </div>
            </div>
          </div>
        </div>
      </div>

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
                          Lorem ipsum dolor sit amet, consectetuer adipiscing
                          elit. Aenean commodo ligula eget dolor. Aenean massa
                          cum sociis.
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
                              Lorem ipsum dolor sit amet, consectetuer
                              adipiscing elit. Aenean commodo ligula eget dolor.
                              Aenean massa. Cum sociis natoque penatibus et
                              magnis dis parturient montes, nascetur ridiculus
                              mus. Donec quam felis,
                            </p>
                          </li>
                          <li>
                            <h3>Our Vision</h3>
                            <p>
                              Lorem ipsum dolor sit amet, consectetuer
                              adipiscing elit. Aenean commodo ligula eget dolor.
                              Aenean massa. Cum sociis natoque penatibus et
                              magnis dis parturient montes, nascetur ridiculus
                              mus. Donec quam felis,
                            </p>
                          </li>
                          <li>
                            <h3>Our Valuse</h3>
                            <p>
                              Lorem ipsum dolor sit amet, consectetuer
                              adipiscing elit. Aenean commodo ligula eget dolor.
                              Aenean massa. Cum sociis natoque penatibus et
                              magnis dis parturient montes, nascetur ridiculus
                              mus. Donec quam felis,
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
                          Lorem ipsum dolor sit amet, consectetuer adipiscing
                          elit. Aenean commodo ligula eget dolor. Aenean massa
                          cum sociis.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-md-12">
                      <div class="mu-skills-content">
                        <div class="row">
                          <div class="col-md-3">
                            <div class="mu-single-skills">
                              <div
                                class="row d-flex justify-content-center mt-100"
                                id="bars"
                              >
                                <div class="col-md-6">
                                  <div class="progress blue">
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
                              <h3>Web Design</h3>
                              <p>
                                Lorem ipsum dolor sit amet, con sectetuer
                                adipiscing elitamin.
                              </p>
                            </div>
                          </div>

                          <div class="col-md-3">
                            <div class="mu-single-skills">
                              <div class="row d-flex justify-content-center mt-100">
                                <div class="col-md-6">
                                  <div class="progress blue">
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
                              <h3>Mobile Development</h3>
                              <p>
                                Lorem ipsum dolor sit amet, con sectetuer
                                adipiscing elitamin.
                              </p>
                            </div>
                          </div>

                          <div class="col-md-3">
                            <div class="mu-single-skills">
                              <div class="row d-flex justify-content-center mt-100">
                                <div class="col-md-6">
                                  <div class="progress blue">
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
                              <h3>E-commerce</h3>
                              <p>
                                Lorem ipsum dolor sit amet, con sectetuer
                                adipiscing elitamin.
                              </p>
                            </div>
                          </div>

                          <div class="col-md-3">
                            <div class="mu-single-skills">
                              <div class="row d-flex justify-content-center mt-100">
                                <div class="col-md-6">
                                  <div class="progress blue">
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
                              <h3>Online Marketing</h3>
                              <p>
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

        <section id="mu-team">
          <div class="container">
            <div class="row">
              <div class="col-md-12">
                <div class="mu-team-area">
                  <div class="row">
                    <div class="col-md-12">
                      <div class="mu-title">
                        <h2>Creative team</h2>
                        <p>
                          Lorem ipsum dolor sit amet, consectetuer adipiscing
                          elit. Aenean commodo ligula eget dolor. Aenean massa
                          cum sociis.
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
                                  src={img2}
                                  alt="img"
                                />
                              </div>
                              <div class="mu-single-team-content">
                                <h3>Hannah Torres</h3>
                                <span>Founder</span>
                                <p>
                                  Lorem ipsum dolor sit amet, consectetuer
                                  adipiscing elit. Aenean commodo ligula eget
                                  dolor.
                                </p>
                                <ul class="mu-team-social">
                                  <li>
                                    <a href="#">
                                      <i class="fa fa-facebook"></i>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <i class="fa fa-twitter"></i>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <i class="fa fa-pinterest-p"></i>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <i class="fa fa-google-plus"></i>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>

                          <div class="col-md-6">
                            <div class="mu-single-team">
                              <div class="mu-single-team-img">
                              <img
                                  src={img2}
                                  alt="img"
                                />
                              </div>
                              <div class="mu-single-team-content">
                                <h3>Hannah Torres</h3>
                                <span>Founder</span>
                                <p>
                                  Lorem ipsum dolor sit amet, consectetuer
                                  adipiscing elit. Aenean commodo ligula eget
                                  dolor.
                                </p>
                                <ul class="mu-team-social">
                                  <li>
                                    <a href="#">
                                      <i class="fa fa-facebook"></i>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <i class="fa fa-twitter"></i>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <i class="fa fa-pinterest-p"></i>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <i class="fa fa-google-plus"></i>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>

                          <div class="col-md-6">
                            <div class="mu-single-team">
                              <div class="mu-single-team-img">
                              <img
                                  src={img2}
                                  alt="img"
                                />
                              </div>
                              <div class="mu-single-team-content">
                                <h3>Hannah Torres</h3>
                                <span>Founder</span>
                                <p>
                                  Lorem ipsum dolor sit amet, consectetuer
                                  adipiscing elit. Aenean commodo ligula eget
                                  dolor.
                                </p>
                                <ul class="mu-team-social">
                                  <li>
                                    <a href="#">
                                      <i class="fa fa-facebook"></i>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <i class="fa fa-twitter"></i>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <i class="fa fa-pinterest-p"></i>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <i class="fa fa-google-plus"></i>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>

                          <div class="col-md-6">
                            <div class="mu-single-team">
                              <div class="mu-single-team-img">
                              <img
                                  src={img2}
                                  alt="img"
                                />
                              </div>
                              <div class="mu-single-team-content">
                                <h3>Hannah Torres</h3>
                                <span>Founder</span>
                                <p>
                                  Lorem ipsum dolor sit amet, consectetuer
                                  adipiscing elit. Aenean commodo ligula eget
                                  dolor.
                                </p>
                                <ul class="mu-team-social">
                                  <li>
                                    <a href="#">
                                      <i class="fa fa-facebook"></i>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <i class="fa fa-twitter"></i>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <i class="fa fa-pinterest-p"></i>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <i class="fa fa-google-plus"></i>
                                    </a>
                                  </li>
                                </ul>
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
    </div>
  );
}
