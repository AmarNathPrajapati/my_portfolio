import React from 'react'
import './Carousel.css'
const Carousel = () => {
  return (
    <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5" aria-label="Slide 6"></button>
        </div>
        <div class="carousel-inner">
            <div class="carousel-item active">
                <div class="container-fluid img_div">
                    <div class="row home_slide">
                        <div class="col-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3 about_col">
                            <p class="company_name"><b>Oremus Corporate Services</b></p>
                            <br/>
                            <p class="about_company">Oremus is a back office financial services company located across the UK, US, and India.</p>

                            <div class="display_btns">
                                <a href="./contact.php" class="contact_us_btn">Contact Us</a>
                                <a href="./about.php" class="learn_more_btn">Learn More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="carousel-item">
                <div class="container-fluid img_div2">
                    <div class="row home_slide">
                        <div class="col-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3 about_col" style={{alignSelf:"center",alignItems: "center"}}>
                            <p class="company_name"><b>Technology Efficiency</b></p>
                            <br/>
                            <p class="about_company">
                                We utilise smart and modern technology methods to meet clients' unique goals and objectives. <br/> </p>
                            <br/>
                            <div class="display_btns">
                                <a href="./contact.php" class="contact_us_btn">Contact Us</a>
                                <a href="./about.php" class="learn_more_btn">Learn More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="carousel-item">
                <div class="container-fluid img_div3">
                    <div class="row home_slide"><br/>
                        <div class="col-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3 about_col" style={{alignSelf:"center",alignItems: "center"}}>
                            <p class="company_name"><b>Effective Approach</b></p>
                            <br/>
                            <p class="about_company">
                                We understand our clients' requirements, based on their history, objectives, and aspirations, following which we offer customised and sustainable solutions to fulfil these objectives.</p>
                            <div class="display_btns">
                                <a href="./contact.php" class="contact_us_btn">Contact Us</a>
                                <a href="./about.php" class="learn_more_btn">Learn More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="carousel-item">
                <div class="container-fluid img_div4">
                    <div class="row home_slide">
                        <div class="col-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3 about_col" style={{alignSelf:"center",alignItems: "center"}}>
                            <p class="company_name"><b>Customised Service</b></p>
                            <br/>
                            <p class="about_company">
                                We provide tailored solutions that align with the quality and security standards of different industries. <br/> </p>
                            <br/>
                            <div class="display_btns">
                                <a href="./contact.php" class="contact_us_btn">Contact Us</a>
                                <a href="./about.php" class="learn_more_btn">Learn More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="carousel-item">
                <div class="container-fluid img_div5">
                    <div class="row home_slide">
                        <div class="col-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3 about_col" style={{alignSelf:"center",alignItems: "center"}}>
                            <p class="company_name"><b>Customised Service</b></p>
                            <br/>
                            <p class="about_company">
                                We provide tailored solutions that align with the quality and security standards of different industries. <br/> </p>
                            <br/>
                            <div class="display_btns">
                                <a href="./contact.php" class="contact_us_btn">Contact Us</a>
                                <a href="./about.php" class="learn_more_btn">Learn More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="carousel-item">
                <div class="container-fluid img_div6">
                    <div class="row home_slide">
                        <div class="col-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3 about_col" style={{alignSelf:"center",alignItems: "center"}}>
                            <p class="company_name"><b>Customised Service</b></p>
                            <br/>
                            <p class="about_company">
                                We provide tailored solutions that align with the quality and security standards of different industries. <br/> </p>
                            <br/>
                            <div class="display_btns">
                                <a href="./contact.php" class="contact_us_btn">Contact Us</a>
                                <a href="./about.php" class="learn_more_btn">Learn More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>
  )
}

export default Carousel
