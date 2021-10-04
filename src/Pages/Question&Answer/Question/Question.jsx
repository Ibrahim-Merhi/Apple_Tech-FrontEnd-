import React from "react";
import './Question.css'
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { deepOrange, deepPurple } from '@mui/material/colors';
import { useRef } from 'react';
export default function Question() {

  return (
  
      <div class="container-fluid mt-50">
        <div class="row">
            <div class="col-md-12">
                <div class="card mb-4">
                    <div class="card-header">
                        <div class="media flex-wrap w-100 align-items-center"> <Stack direction="row" spacing={1}>
                                <Avatar sx={{ bgcolor: deepPurple[500], width: 32, height: 32, }}>H</Avatar>
                                </Stack>
                            <div class="media-body ml-1" style={{color: "purple"}}> Hilal Masri
                                {/* <div class="text-muted small">13 days ago</div> */}
                            </div>
                            {/* <div class="text-muted small ml-3">
                                <div>Member since <strong>01/1/2019</strong></div>
                                <div><strong>134</strong> posts</div>
                            </div> */}
                        </div>
                    </div>
                    <div class="card-body">
                        <h3>How can i change the my apple ID ?</h3>
                        <h6> I recently bought a macbook from my friend. But in appstore his appole id is the registered one..I signout and again sign in with my id some apps can be updated but some others like xcode is still using the old id(my friends id). <br/> This id is uneditable in the textfield too. <br/><br/> How can I remove his id and enter my id I thought to update the app using his password but that even not feasible solution I need to delete his account completly from All appstore app without knowing his credentials is there any way?? </h6>
                        
                    </div>
                    <div class="card-footer d-flex flex-wrap justify-content-between align-items-center px-0 pt-0 pb-3">
                        <div class="px-2 pt-3 "> <a href="javascript:void(0)" class="text-muted d-inline-flex  " data-abc="true"> <h6> 2021 /09 /27</h6>&nbsp; </a> </div>
                        <div class="px-4 pt-3"> <button type="button"  >&nbsp; Reply &nbsp;</button> </div>
                    </div>
                </div>
            </div>
        </div>
       
    </div>
    
  );
}
