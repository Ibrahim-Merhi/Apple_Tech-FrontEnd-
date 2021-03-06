import React from "react";
// import './css/style.blue.css';
// import './css/fontastic.css';
// import './css/bootstrap.min.css'
import Navbar from '../../components/Navbar/Navbar'
import Banner from '../../components/Banner/Banner'
import { Link } from "react-router-dom";
// import './css/style.css'
import './css/util.css'
import './css/main.css'
import './fonts/Linearicons-Free-v1.0.0/icon-font.min.css'
import img1 from '../ContactUS/images/bg-01.jpg'
export default function Contact() {


  return (
    <div>
      <Navbar />
      <Banner 
      backgroundImage="url(assets/img/bg-gift6.jpg)"
      title="Contact US"
      paragraph="Feel Free to contact us and give us your feedback"
      />
     
     <div class="container-contact100">
      <div class="wrap-contact100">
        <form class="contact100-form validate-form">
          <span class="contact100-form-title"> Send Us A Message </span>

          <label class="label-input100" for="first-name"
            >Tell us your name *</label>
          <div
            class="wrap-input100 rs1-wrap-input100 validate-input"
            data-validate="Type first name"
          >
            <input
              id="first-name"
              class="input100"
              type="text"
              name="first-name"
              placeholder="First name"
            />
            <span class="focus-input100"></span>
          </div>
          <div
            class="wrap-input100 rs2-wrap-input100 validate-input"
            data-validate="Type last name"
          >
            <input
              class="input100"
              type="text"
              name="last-name"
              placeholder="Last name"
            />
            <span class="focus-input100"></span>
          </div>

          <label class="label-input100" for="email">Enter your email *</label>
          <div
            class="wrap-input100 validate-input"
            data-validate="Valid email is required: ex@abc.xyz"
          >
            <input
              id="email"
              class="input100"
              type="text"
              name="email"
              placeholder="Eg. example@email.com"
            />
            <span class="focus-input100"></span>
          </div>

          <label class="label-input100" for="phone">Enter phone number</label>
          <div class="wrap-input100">
            <input
              id="phone"
              class="input100"
              type="text"
              name="phone"
              placeholder="Eg. +961 00 000 000"
            />
            <span class="focus-input100"></span>
          </div>

          <label class="label-input100" for="message">Message *</label>
          <div
            class="wrap-input100 validate-input"
            data-validate="Message is required"
          >
            <textarea
              id="message"
              class="input100"
              name="message"
              placeholder="Write us a message"
            ></textarea>
            <span class="focus-input100"></span>
          </div>

          <div class="container-contact100-form-btn">
            <button>Send Message</button>
          </div>
        </form>

        <div
          class="contact100-more flex-col-c-m"
          style={{backgroundImage: `url(${img1})`}}
        >
          <div class="flex-w size1 p-b-47">
            <div class="txt1 p-r-25">
              <span class="lnr lnr-map-marker"></span>
            </div>

            <div class="flex-col size2">
              <span class="txt1 p-b-20"> Address </span>

              <span class="txt2" >
                Marwa Center 1st floor, 26 St, Nakhle, Koura-Lb
              </span>
            </div>
          </div>

          <div class="dis-flex size1 p-b-47">
            <div class="txt1 p-r-25">
              <span class="lnr lnr-phone-handset"></span>
            </div>

            <div class="flex-col size2">
              <span class="txt1 p-b-20"> Lets Talk </span>

              <span class="txt3" style={{color: "purple"}}> +961 71 562 851 </span>
            </div>
          </div>

          <div class="dis-flex size1 p-b-47">
            <div class="txt1 p-r-25">
              <span class="lnr lnr-envelope"></span>
            </div>

            <div class="flex-col size2">
              <span class="txt1 p-b-20"> General Support </span>

              <span class="txt3" style={{color: "purple"}}> AppleTec@Techinfo.com </span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div id="dropDownSelect1"></div>
    </div>
  );
}
