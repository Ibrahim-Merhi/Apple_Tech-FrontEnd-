import React from "react";
import './Answer.css'
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { deepOrange, deepPurple } from '@mui/material/colors';
export default function Answer() {


  return (
      <div>
    <div class="container-fluid mt-50"><h1 style={{marginBottom: "7%"}}>Answers</h1></div>

{/* <div class="card">
	    <div class="card-body">
	        <div class="row">
        	    <div class="col-md-2">
        	        <img src="https://image.ibb.co/jw55Ex/def_face.jpg" class="img img-rounded img-fluid"/>
        	        <p class="text-secondary text-center">15 Minutes Ago</p>
        	    </div>
        	    <div class="col-md-10">
        	        <p>
        	            <a class="float-left" href="https://maniruzzaman-akash.blogspot.com/p/contact.html"><strong>Maniruzzaman Akash</strong></a>
        	            <span class="float-right"><i class="text-warning fa fa-star"></i></span>
                        <span class="float-right"><i class="text-warning fa fa-star"></i></span>
        	            <span class="float-right"><i class="text-warning fa fa-star"></i></span>
        	            <span class="float-right"><i class="text-warning fa fa-star"></i></span>

        	       </p>
        	       <div class="clearfix"></div>
        	        <p>Lorem Ipsum is simply dummy text of the pr make  but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        	        <p>
        	            <a class="float-right btn btn-outline-primary ml-2"> <i class="fa fa-reply"></i> Reply</a>
        	            <a class="float-right btn text-white btn-danger"> <i class="fa fa-heart"></i> Like</a>
        	       </p>
        	    </div>
	        </div>
	        	
	    </div>
	</div> */}
    <section class="content-item" id="comments">
    <div class="container">   
    	<div class="row">
            <div class="col-sm-8">   
                <form>
                	<h3 class="pull-left">New Answer</h3>
                	
                    <fieldset>
                        <div class="row">
                            <div >
                            	
                            </div>
                            <div class="form-group col-xs-12 col-sm-9 col-lg-12">
                                <textarea class="form-control" id="message" placeholder="Your message" required=""></textarea>
                            </div>
                        </div>  
                        <button type="submit" class=" pull-right">Submit</button>	
                    </fieldset>
                </form>
                
                <h3>3 Answers</h3>
                
                
                <div class="media">
                    <a class="pull-left" href="#"><Stack direction="row" spacing={1}>
                                <Avatar sx={{ bgcolor: deepPurple[500], width: 32, height: 32, }}>B</Avatar>
                                </Stack></a>
                    <div class="media-body">
                        <h4 class="media-heading">Baraa Haydar</h4>
                        <p>Open XCode -> Organizer -> Devices -> Provision Profiles (Under Library) -> Press refresh button. This will ask for the apple Id so put in your credentials there and it should do the trick.</p>
                        <ul class="list-unstyled list-inline media-detail pull-left">
                            <i class="fa fa-calendar" ></i>&nbsp; 2021 /09 /27
                          
                        </ul>
                      
                    </div>
                </div>
             
                <div class="media">
                    <a class="pull-left" href="#"><Stack direction="row" spacing={1}>
                                <Avatar sx={{ bgcolor: deepPurple[500], width: 32, height: 32, }}>M</Avatar>
                                </Stack></a>
                    <div class="media-body">
                        <h4 class="media-heading">Mostafa Kassem</h4>
                        <p>Open Your mac, in the seetings you can modified it in the manage account page.</p>
                        <ul class="list-unstyled list-inline media-detail pull-left">
                            <i class="fa fa-calendar" ></i>&nbsp; 2021 /09 /28
                          
                        </ul>
                      
                    </div>
                </div>

                <div class="media">
                    <a class="pull-left" href="#"><Stack direction="row" spacing={1}>
                                <Avatar sx={{ bgcolor: deepPurple[500], width: 32, height: 32, }}>A</Avatar>
                                </Stack></a>
                    <div class="media-body">
                        <h4 class="media-heading">Ahmad Hamdach</h4>
                        <p>I have faced that error before, check this link : "https://stackoverflow.com/questions/19698645"</p>
                        <ul class="list-unstyled list-inline media-detail pull-left">
                            <i class="fa fa-calendar" ></i>&nbsp; 2021 /09 /28
                          
                        </ul>
                      
                    </div>
                </div>
             
                
            </div>
        </div>
    </div>
</section>

</div>
  );
}
