import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import './Footer.css'
const FooterPagePro = () => {
  return (
    <div id="footerbgset">
    <MDBFooter color="stylish-color-dark" className="page-footer font-small pt-4 mt-4" >
      <MDBContainer fluid className="text-center text-md-left" >
        <MDBRow>
          <MDBCol md="6">
            <h5 className="text-uppercase mb-4 mt-3 font-weight-bold" style={{color: "purple"}}>
              APPLE_TECH
            </h5>
            <p>
              Thank you for checking our website and we hope that you have learned new information or even solve your problems. <br/>We are happy for helping people with  their problems with expertes Technicient guys. <br/><br/> TO STAY TUNED FOR THE NEW UPDATE YOU CAN REGISTER FOR FREE AND BE IN TOUCH WITH THE NEW UPDATES.
            </p>
          </MDBCol>
          <hr className="clearfix w-100 d-md-none" />
          <MDBCol md="2">
            <h5 className="text-uppercase mb-4 mt-3 "style={{color: "purple"}}>
              Common Problems
            </h5>
            <ul className="list-unstyled">
              <li>
                <a href="#!">Stuck in Recovery Mode</a>
              </li>
              <li>
                <a href="#!">Battery Drain</a>
                </li>
                <li>
                <a href="#!">Wifi Connection</a>
                </li>
                <li>
                <a href="#!">Camera Black Screen</a>
                </li>
            </ul>
          </MDBCol>
          <hr className="clearfix w-100 d-md-none" />
          <MDBCol md="2">
            <h5 className="text-uppercase mb-4 mt-3" style={{color: "purple"}}>
              Recommended Tools
            </h5>
            <ul className="list-unstyled">
            <li>
                <a href="#!">Itunes</a>
              </li>
              <li>
                <a href="#!">3Utools</a>
              </li>
              <li>
                <a href="#!">Altstore</a>
              </li>
              
              <li>
                <a href="#!">Checkr1n</a>
              </li>
             
            </ul>
          </MDBCol>
          <hr className="clearfix w-100 d-md-none" />
          <MDBCol md="2">
            <h5 className="text-uppercase mb-4 mt-3 " style={{color: "purple"}}>
              Have an issue Contact us
            </h5>
			
            <ul className="list-unstyled">
			<li>
                <a href="#!">Email</a>
              </li>
			  <li>
                <a href="#!">Whatsapp</a>
              </li>
              <li>
                <a href="#!">Telegram</a>
              </li>
              <li>
                <a href="#!">Discrod</a>
              </li>
              
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <hr />
      <div className="text-center py-3">
        <ul className="list-unstyled list-inline mb-0">
          <li className="list-inline-item">
            <h5 className="mb-1">Register for free</h5>
          </li>
          <li className="list-inline-item" >
            <a href="/signup" className="btn btn-rounded color" style={{backgroundColor: "purple", color: "white"}}>
              Sign up!
            </a>
          </li>
        </ul>
      </div>
      <hr />
      <div className="text-center">
		  <h2>FOLLOW US ON</h2>
        <ul className="list-unstyled list-inline">
          <li className="list-inline-item">
            <a className="btn-floating btn-sm btn-fb mx-1">
			<FacebookIcon />
            </a>
          </li>
          <li className="list-inline-item">
            <a className="btn-floating btn-sm btn-tw mx-1">
              <TwitterIcon />
            </a>
          </li>
          <li className="list-inline-item">
            <a className="btn-floating btn-sm btn-gplus mx-1">
              <InstagramIcon />
            </a>
          </li>
          <li className="list-inline-item">
            <a className="btn-floating btn-sm btn-li mx-1">
              <LinkedInIcon />
            </a>
          </li>
        </ul>
      </div>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <b>IBRAHIM MERHI</b>
        </MDBContainer>
      </div>
    </MDBFooter>
    </div>
  );
}

export default FooterPagePro;