<template>
<div>
 <section class="page-section bg-dark-alfa-70 parallax-3" data-background="images/full-width-images/section-bg-25.jpg">
                <div class="relative container align-right">
                    
                    <div class="row">
                        
                        <div class="col-md-8">
                            <h1 class="hs-line-11 font-alt mb-20 mb-xs-0">Contact</h1>
                            <div class="hs-line-4 font-alt">
                                We’re glad to talk to you
                            </div>
                        </div>
                        
                        <div class="col-md-4 mt-30">
                            <div class="mod-breadcrumbs font-alt align-left">
                                <a href="#">Home</a>&nbsp;/&nbsp;<a href="#">Pages</a>&nbsp;/&nbsp;<span>Contact</span>
                            </div>
                            
                        </div>
                    </div>
                    
                </div>
            </section>
            <!-- End Head Section -->
            
              <!-- Contact Section -->
            <section class="page-section" id="contact">
                <div class="container relative">
                    
                    <h2 class="section-title font-alt mb-70 mb-sm-40">
                        We want to answer your questions
                    </h2>
                    
                    <div class="row mb-60 mb-xs-40">
                        
                        <div class="col-md-8 col-md-offset-2">
                            <div class="row">
                                
                                <!-- Phone -->
                                <div class="col-sm-6 col-lg-4 pt-20 pb-20 pb-xs-0">
                                    <div class="contact-item">
                                        <div class="ci-icon">
                                            <i class="fa fa-phone"></i>
                                        </div>
                                        <div class="ci-title font-alt">
                                            Call Us
                                        </div>
                                        <div class="ci-text">
                                            2348025369817
                                        </div>
                                    </div>
                                </div>
                                <!-- End Phone -->
                                
                                <!-- Address -->
                                <div class="col-sm-6 col-lg-4 pt-20 pb-20 pb-xs-0">
                                    <div class="contact-item">
                                        <div class="ci-icon">
                                            <i class="fa fa-map-marker"></i>
                                        </div>
                                        <div class="ci-title font-alt">
                                            Address
                                        </div>
                                        <div class="ci-text">
                                             40b Ordinance Road<br/> Trans-Amadi Industrial Layout<br/> 
Port Harcourt Rivers State<br/> 
 Nigeria.
                                        </div>
                                    </div>
                                </div>
                                <!-- End Address -->
                                
                                <!-- Email -->
                                <div class="col-sm-6 col-lg-4 pt-20 pb-20 pb-xs-0">
                                    <div class="contact-item">
                                        <div class="ci-icon">
                                            <i class="fa fa-envelope"></i>
                                        </div>
                                        <div class="ci-title font-alt">
                                            Email
                                        </div>
                                        <div class="ci-text">
                                            <a href="mailto:showroom@ideafurniturenigeria.com"><b>showroom@idea<br/>furniturenigeria.com</b></a>
                                        </div>
                                    </div>
                                </div>
                                <!-- End Email -->
                                
                            </div>
                        </div>
                        
                    </div>
                    
                    <!-- Contact Form -->                            
                    <div class="row">
                        <div class="col-md-8 col-md-offset-2">
                            
                            <form class="form contact-form" id="contact_form">
                                <div class="clearfix">
                                    
                                    <div class="cf-right-col">
                                        
                                        <!-- Name -->
                                        <div class="form-group">
                                            <input type="text" name="name" id="name" class="input-md round form-control" placeholder="Name" pattern=".{3,100}" required>
                                        </div>
                                        
					 <div class="form-group">
                                            <input type="tel" name="tel" id="tel" class="input-md round form-control" placeholder="Phone number" pattern=".{3,100}" required>
                                        </div>	
				

                                        <!-- Email -->
                                        <div class="form-group">
                                            <input type="email" name="email" id="email" class="input-md round form-control" placeholder="Email" pattern=".{5,100}" required>
                                        </div>
                                        
                                    </div>
                                    
                                    <div class="cf-left-col">
                                        
                                        <!-- Message -->
                                        <div class="form-group">                                            
                                            <textarea name="message" id="message" class="input-md round form-control" style="height: 84px;" placeholder="Message"></textarea>
                                        </div>
                                        
                                    </div>
                                    
                                </div>
                                
                                <div class="clearfix">
                                    
                                    <div class="cf-right-col">
                                        
                                        <!-- Inform Tip -->                                        
                                        <div class="form-tip pt-20">
                                            <i class="fa fa-info-circle"></i> All the fields are required
                                        </div>
                                        
                                    </div>
                                    
                                    <div class="cf-left-col">
                                        
                                        <!-- Send Button -->
                                        <div class="align-left pt-10">
                                            <button class="submit_btn btn btn-mod btn-medium btn-round" id="submit_btn">Submit Message</button>
                                        </div>
                                        
                                    </div>
                                    
                                </div>
                                
                                
                                
                                <div id="result"></div>
                            </form>
                            
                        </div>
                    </div>
                    <!-- End Contact Form -->
                    
                </div>
            </section>
            <!-- End Contact Section -->
            
            
            
            
            <!-- Google Map -->
            <div class="google-map">
                
                <div data-address="40b Ordinance Road, Trans-Amadi Industrial Layout,
Port Harcourt, Rivers State, 
 Nigeria" id="map-canvas"></div>
                
                <div class="map-section">
                    
                    <div class="map-toggle">
                        <div class="mt-icon">
                            <i class="fa fa-map-marker"></i>
                        </div>
                        <div class="mt-text font-alt">
                            <div class="mt-open">Open the map <i class="fa fa-angle-down"></i></div>
                            <div class="mt-close">Close the map <i class="fa fa-angle-up"></i></div>
                        </div>
                    </div>
                    
                </div>
                
            </div>
            <!-- End Google Map -->
      
     </div>
</template>

<script>
    export default {
            
    }

</script>

<style> 

.gold-text {
  color: #3392ffc9 !important; }

  .bab{
    margin-top: 40px;
    padding : 1em;
  }

  #success_page h1 {
    font-size:24px;
    font-weight:bold; 
    text-transform:uppercase;
  }
  
  .loader1 {
    vertical-align: super;
    padding-left: 20px;
}
  
  .form-control {
    border-radius: 0 !important;
    box-shadow: none !important;
  }
  
  .contact-wrapper {
    display:block;
    padding:70px 0;
    position:relative;
    background-color:#eee;
  }
  
  .contact-wrapper h2 {
    margin-top:10%;
    color: #9c8ea5;
  }


  .contact-wrapper p {
    color: #9c8ea5;
  }


  #contactform {
    margin:15px 0;
    }
  #contactform .form-control {
    margin: 10px 0;
    height: 50px;
    font-weight: 500;
    font-size: 12px;
    } 
    
  #contactform textarea {
    height:150px !important;
    }
  
  #contactform span.required{ 
    font-size: 13px; color: #fff; 
    } 
  
  .btn-primary {
    display: inline-block;
    padding: 6px 13px;
    margin-bottom: 0;
    font-size: 14px;
    font-weight: 700;
    line-height: 1.428571429;
    text-align: center;
    vertical-align: middle;
    cursor: pointer;
    white-space: nowrap;
    background: 0 0;
    color: #9c8ea5!important;
    border: 1px dashed #9c8ea5;
    margin-top: 30px;
    text-transform: uppercase;
  }
  
  .contact-box img {
    padding-bottom:15px;
    margin-bottom:30px;
  }
  .contact-box {
    margin:0;
    color:#36a3fa;
    padding:0;
  }
  
  .contact-box h2 {
    margin: 20px 0;
    font-size: 13px;
    text-transform: uppercase;
    color: #9c8ea5;
    font-weight: 700;
  }
  
  .btn-contact:hover {
    background: none !important;
    border-color: #fff !important;
  }

  #map{
    height:450px;
    width:100%;
    margin-bottom:80px;
  }
  #map img{
    max-width:inherit
    }
  .map{
    position:relative
    }
  .map .row{
    position:relative
    }
    
  .infobox img {
    width:100% !important;
  }
  .map .searchmodule {
    padding:18px 10px
  }

  .jtbtn {
    display: inline-block;
    padding: 6px 13px;
    margin-bottom: 20px;
    font-size: 16px;
    font-weight: 700;
    line-height: 1.5;
    text-align: center;
    vertical-align: middle;
    cursor: pointer;
    white-space: nowrap;
    background: 0 0;
    color: #9c8ea5!important;
    border: 1px dashed #9c8ea5;
    margin-top: 30px;
    text-transform: uppercase;
  }
  
  .jtbtn:hover {
    text-decoration:none;
    background-color:#fff;
    color: #fcc60f; 
  }

  .nav-tabs > li.active > a, .nav-tabs > li.active > a:hover, .nav-tabs > li.active > a:focus {
    font-weight: 700 !important;
    font-size: 12px !important;
    border: 1px dashed #FFF !important;
    text-transform: uppercase;
    padding: 10px;
    border: 1px dashed #F7C221 !important;
    letter-spacing: 3px;
    color: #F7C221 !important;
  }
  
  .nav-tabs > li > a {
    border: none !important;
    background: none !important;
    font-weight: 500 !important;
    font-size: 12px !important;
    border: 1px dashed #FFF;
    text-transform: uppercase;
    padding: 10px !important;
    letter-spacing: 3px !important;
    color: #999 !important;
  }
  
  .nav-tabs {
    border: 0 !important;
    padding-bottom: 40px;
  }
  
  .btn-contact {
    border-radius:0 !important;
    margin-bottom: 75px;
    }
      
  .btn-contact:hover {
    background:none  !important;
    margin-bottom: 75px;
    }
      
  .nav-tabs > li {
    float:none;
    margin:20px 10px 0 !important;
    display:inline-block;
    } 
    
  
  .infobox {
    display: inline-block;
    padding: 5px;
    position: relative;
    width: 270px;
  }
  .infobox img {
    width:80px !important;
    padding-right:10px
  }
  .infobox .title {
    font-size:13px;
    font-weight:bold;
    margin-top:0;
    margin-bottom:0;
    text-transform:uppercase;
    padding-bottom:5px;
  }
  .infobox .title a {
    font-weight:bold;
  }
    
  .btn-primary:hover, .btn-primary:focus, .btn-primary:active, .btn-primary.active, .open > .dropdown-toggle.btn-primary {
  color: #FFF !important;
  background-color: #F7C221 !important;
  border-color: #F7C221 !important;
  }
  
  .error_message {
  color: #F00!important;
  }
  
  .contact-box .fa {
    padding-top: 0.2em;
    font-size: 40px;
    color: #fff;
  }
      
  

</style>







 
