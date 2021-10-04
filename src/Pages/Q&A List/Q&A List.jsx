import React from "react";
import Navbar from '../../components/Navbar/Navbar'
import Banner from '../../components/Banner/Banner'
import Footer from '../../components/Footer/Footer'
import './Q&A List.css'
import './style.scss'
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { deepOrange, deepPurple } from '@mui/material/colors';
import { color } from "@mui/system";
import { useHistory } from 'react-router-dom';
export default function QuestionAnswerList() {
    let history = useHistory();

    const redirect = () => {
      history.push('/QA/QApost')
    }

  return (
    <div>
      <Navbar />
      <Banner 
      backgroundImage="url(assets/img/bg-gift3.jpg)"
      title="Latest Blog Posts"
      paragraph="Read and get updated on how we progress."
      />
      <div class="container-fluid mt-50">
    <div class="d-flex flex-wrap justify-content-between">
        <div> <button type="button"  onClick={() => redirect()}> <span class="btn-icon-wrapper pr-2 opacity-7"> <i class="fa fa-plus fa-w-20"></i> </span> New thread </button> </div>
        <div class="col-12 col-md-3 p-0 mb-3"> <input type="text" class="form-control" placeholder="Search..."/> </div>
    </div>
    <div class="card mb-3">
        <div class="card-header pl-0 pr-0">
            <div class="row no-gutters w-100 align-items-center">
                <div class="col ml-3">Recent Questions</div>
                <div class="col-4 text-muted">
                    <div class="row no-gutters align-items-center">
                        <div class="col-4">Replies</div>
                        <div class="col-8">Posted By</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="card-body py-3">
            <div class="row no-gutters align-items-center">
                <div class="col"> <a href="/QA/QAview" class="text-big" data-abc="true">How can i change the my apple ID ?</a>
                    
                </div>
                <div class="d-none d-md-block col-4">
                    <div class="row no-gutters align-items-center">
                        <div class="col-4">3</div>
                        <div class="media col-8 align-items-center"> <Stack direction="row" spacing={1}>
                                <Avatar sx={{ bgcolor: deepPurple[500], width: 32, height: 32, marginRight: 1 }}>H</Avatar>
                                </Stack>
                            <div class="media-body flex-truncate ml-2">
                                <div class="line-height-1 text-truncate">Hilal Masri</div> <a href="" class="text-muted small text-truncate" data-abc="true">2021 /09 /27</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <hr class="m-0" />
        <div class="card-body py-3">
            <div class="row no-gutters align-items-center">
                <div class="col"> <a href="/QA/QAview" class="text-big" data-abc="true">How to restore iPhone 13 Pro</a>
                    
                </div>
                <div class="d-none d-md-block col-4">
                    <div class="row no-gutters align-items-center">
                        <div class="col-4">0</div>
                        <div class="media col-8 align-items-center"> <Stack direction="row" spacing={1}>
                                <Avatar sx={{ bgcolor: deepPurple[500], width: 32, height: 32, marginRight: 1 }}>B</Avatar>
                                </Stack>
                            <div class="media-body flex-truncate ml-2">
                                <div class="line-height-1 text-truncate">Baraa Haydar</div> <a href="" class="text-muted small text-truncate" data-abc="true">2021 /10 /03</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       
            </div>
        
</div>
<Footer />
      </div>

  );
}
