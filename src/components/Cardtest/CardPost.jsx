import React from 'react';
import './style.blue.css';
import './fontastic.css'
import './style.css'
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { deepOrange, deepPurple } from '@mui/material/colors';
import image1 from './img/blogpost2.jpg'
import image2 from './img/blogpost5.jpg'
import image3 from './img/blogpost8.jpg'
import backgrounddev from './img/dev.jpg'
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
                                    <div class="category"><a >History</a><a >Technology</a></div><a href="https://www.investopedia.com/articles/fundamental-analysis/12/steve-jobs-apple-story.asp">
                                        <h2 class="h4" style={{color: "Purple"}}>The legacy and lessons of Apple's co-founder</h2></a>
                                </header>
                                <p>On Aug. 2, 2018, Apple (AAPL) made history by becoming the world's first publicly traded company to achieve a market capitalization of $1 trillion.1 On April 30, 2019, Microsoft (MSFT) joined Apple's exclusive club, also catapulting past the $1 trillion mark. On Jan. 16, 2020, Alphabet (GOOGL) became a $1 trillion company, followed by Amazon (AMZN) on Feb. 4.</p>
                                <footer class="post-footer d-flex align-items-center"><a  class="author d-flex align-items-center flex-wrap">
                                <Stack direction="row" spacing={1}>
                                <Avatar sx={{ bgcolor: deepPurple[500], width: 32, height: 32, marginRight: 1 }}>A</Avatar>
                                </Stack>
                                    <div class="title"><span> ANDREW BEATTIE</span></div></a>
                                    {/* <div class="date"><i class="icon-clock"></i> 2 months ago</div> */}
                                    <div class="comments"><i class="icon-clock"></i>March 13, 2020</div>
                                </footer>
                            </div>
                        </div>
                    </div>
                    <div class="image col-lg-5" id='zoom'><img src={image1} style={{}} alt="..." /></div>
                </div>

                <div class="row d-flex align-items-stretch">
                    <div class="image col-lg-5" id='zoom' style={{marginBottom: "3.30%"}}><img src={image2} alt="..."  /></div>
                    <div class="text col-lg-7">
                        <div class="text-inner d-flex align-items-center">
                            <div class="content">
                                <header class="post-header">
                                    <div class="category"><a >Death</a><a >Sad Moment</a></div><a href="https://www.apple.com/newsroom/2011/10/05Apple-Media-Advisory/">
                                        <h2 class="h3" style={{color: "Purple"}}>Steve Passed away <b>EARLIER</b> </h2></a>
                                </header>
                                <h5>Tim Cook</h5><p>Apple has lost a visionary and creative genius, and the world has lost an amazing human being. Those of us who have been fortunate enough to know and work with Steve have lost a dear friend and an inspiring mentor. Steve leaves behind a company that only he could have built, and his spirit will forever be the foundation of Apple. <br/><br/>If you would like to share your thoughts, memories and condolences in the interim, you can simply email &nbsp; <a href='mailto:rememberingsteve@apple.com' style={{color: "Purple"}}> rememberingsteve@apple.com</a><br/><br/></p>
                                <footer class="post-footer d-flex align-items-center"><a href="#" class="author d-flex align-items-center flex-wrap">
                                <Stack direction="row" spacing={1}>
                                <Avatar sx={{ bgcolor: deepPurple[500], width: 32, height: 32, marginRight: 1 }}>T</Avatar>
                                </Stack>
                                    <div class="title"><span>TIM COOK</span></div></a>
                                    
                                    <div class="comments"><i class="icon-clock"></i>October 5, 2011</div>
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
                                    <div class="category"><a >Evolution</a><a >Productivity</a></div><a href="https://www.cnet.com/pictures/apple-products-of-the-tim-cook-era/">
                                        <h2 class="h4" style={{color: "Purple"}}>The evolution of Apple's products under Tim Cook </h2></a>
                                </header>
                                <p>Less than two months before succumbing to cancer, ailing Apple co-founder Steve Jobs resigned from the office of CEO on August 24, 2011. Tim Cook (left), who had been the company's chief operating officer since 2004, took over the top spot at the world's preeminent technology company.<br/><br/>


</p>
                                <footer class="post-footer d-flex align-items-center"><a href="#" class="author d-flex align-items-center flex-wrap">
                                <Stack direction="row" spacing={1}>
                                <Avatar sx={{ bgcolor: deepPurple[500], width: 32, height: 32, marginRight: 1 }}>J</Avatar>
                                </Stack>
                                    <div class="title"><span>JOHN FALCONE</span></div></a>
                                    
                                    <div class="comments"><i class="icon-comment"></i>Augest 24, 2016</div>
                                </footer>
                            </div>
                        </div>
                    </div>
                    <div class="image col-lg-5" id='zoom'><img src={image3} alt="..." /></div>
                </div>
            </div>
        </section>

        <section style={{backgroundImage: `url(${backgrounddev})`, backgroundSize: 'cover', backgroundPosition: 'center bottom' }} class="divider">
      <div class="container">
        <div class="row">
          <div class="col-md-7" >
            <h2 style={{color: "white"}}>Great things in business are never done by one person. They're done by a team of people.</h2><a href="https://www.brainyquote.com/authors/steve-jobs-quotes" >Steve Jobs</a>
          </div>
        </div>
      </div>
    </section>
    </div>
    );
}