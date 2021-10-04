import React from "react";
import './style.css'
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { deepOrange, deepPurple } from '@mui/material/colors';
const UserDetails = ({ userDetails }) => (
  <div class="container">
  <div class="row">
      <div class="col-md-4">
          <div class="card user-card">
              <div class="card-header">
                  <h5>Profile</h5>
              </div>
              <div class="card-block">
                  
                  <Stack direction="row" spacing={1}>
                                <Avatar sx={{ bgcolor: deepPurple[500], width:100, height:100, fontSize: "500%", marginLeft: "30%" }}>I</Avatar>
                                </Stack>
                  
                  <h6 class="f-w-600 m-t-25 m-b-10">Ibrahim Merhi</h6>
                  <p class="text-muted">Active | Male | Born 1996 /10 /10</p>
                  <hr/>
                  <p class="text-muted m-t-15">Activity Level: 87%</p>
                  <ul class="list-unstyled activity-leval">
                      <li class="active"></li>
                      <li class="active"></li>
                      <li class="active"></li>
                      <li></li>
                      <li></li>
                  </ul>
                  <div class="bg-c-blue counter-block m-t-10 p-20">
                      <div class="row">
                          <div class="col-4">
                              <i class="fa fa-comment"></i>
                              <p>1256</p>
                          </div>
                          <div class="col-4">
                              <i class="fa fa-user"></i>
                              <p>8562</p>
                          </div>
                          <div class="col-4">
                              <i class="fa fa-suitcase"></i>
                              <p>189</p>
                          </div>
                      </div>
                  </div>
                  <p class="m-t-15 text-muted">Responsible of every blog post.</p>
                  <hr/>
                  <div class="row justify-content-center user-social-link">
                      <div class="col-auto"><a href="#!"><i class="fa fa-facebook text-facebook"></i></a></div>
                      <div class="col-auto"><a href="#!"><i class="fa fa-twitter text-twitter"></i></a></div>
                      <div class="col-auto"><a href="#!"><i class="fa fa-dribbble text-dribbble"></i></a></div>
                  </div>
              </div>
          </div>
      </div>
      
      <div class="col-md-4">
          <div class="card user-card">
              <div class="card-header">
                  <h5>Profile</h5>
              </div>
              <div class="card-block">
              <Stack direction="row" spacing={1}>
                                <Avatar sx={{ bgcolor: deepPurple[500], width:100, height:100, fontSize: "500%", marginLeft: "30%" }}>H</Avatar>
                                </Stack>
                  <h6 class="f-w-600 m-t-25 m-b-10">Hilal Masri</h6>
                  <p class="text-muted">Active | Male | Born 2001 /05 /12</p>
                  <hr/>
                  <p class="text-muted m-t-15">Activity Level: 87%</p>
                  <ul class="list-unstyled activity-leval">
                      <li class="active"></li>
                      <li class="active"></li>
                      <li class="active"></li>
                      <li></li>
                      <li></li>
                  </ul>
                  <div class="bg-c-green counter-block m-t-10 p-20">
                      <div class="row">
                          <div class="col-4">
                              <i class="fa fa-comment"></i>
                              <p>1256</p>
                          </div>
                          <div class="col-4">
                              <i class="fa fa-user"></i>
                              <p>8562</p>
                          </div>
                          <div class="col-4">
                              <i class="fa fa-suitcase"></i>
                              <p>189</p>
                          </div>
                      </div>
                  </div>
                  <p class="m-t-15 text-muted">Responsible of every answer post.</p>
                  <hr/>
                  <div class="row justify-content-center user-social-link">
                      <div class="col-auto"><a href="#!"><i class="fa fa-facebook text-facebook"></i></a></div>
                      <div class="col-auto"><a href="#!"><i class="fa fa-twitter text-twitter"></i></a></div>
                      <div class="col-auto"><a href="#!"><i class="fa fa-dribbble text-dribbble"></i></a></div>
                  </div>
              </div>
          </div>
      </div>
      
      <div class="col-md-4">
          <div class="card user-card">
              <div class="card-header">
                  <h5>Profile</h5>
              </div>
              <div class="card-block">
              <Stack direction="row" spacing={1}>
                                <Avatar sx={{ bgcolor: deepPurple[500], width:100, height:100, fontSize: "500%", marginLeft: "30%" }}>B</Avatar>
                                </Stack>
                  <h6 class="f-w-600 m-t-25 m-b-10">Baraa Haydar</h6>
                  <p class="text-muted">Active | Male | Born 1997 /06 /20</p>
                  <hr/>
                  <p class="text-muted m-t-15">Activity Level: 87%</p>
                  <ul class="list-unstyled activity-leval">
                      <li class="active"></li>
                      <li class="active"></li>
                      <li class="active"></li>
                      <li></li>
                      <li></li>
                  </ul>
                  <div class="bg-c-yellow counter-block m-t-10 p-20">
                      <div class="row">
                          <div class="col-4">
                              <i class="fa fa-comment"></i>
                              <p>1256</p>
                          </div>
                          <div class="col-4">
                              <i class="fa fa-user"></i>
                              <p>8562</p>
                          </div>
                          <div class="col-4">
                              <i class="fa fa-suitcase"></i>
                              <p>189</p>
                          </div>
                      </div>
                  </div>
                  <p class="m-t-15 text-muted">Responsible of every comment post.</p>
                  <hr/>
                  <div class="row justify-content-center user-social-link">
                      <div class="col-auto"><a href="#!"><i class="fa fa-facebook text-facebook"></i></a></div>
                      <div class="col-auto"><a href="#!"><i class="fa fa-twitter text-twitter"></i></a></div>
                      <div class="col-auto"><a href="#!"><i class="fa fa-dribbble text-dribbble"></i></a></div>
                  </div>
              </div>
          </div>
      </div>
</div>
</div>
);


export default UserDetails;
