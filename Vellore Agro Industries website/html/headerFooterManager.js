class SpecialHead extends HTMLElement {
    connectedCallback(){
        this.innerHTML= `
        <head>
      <!-- basic -->
      <meta charset="utf-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <!-- mobile metas -->
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <meta name="viewport" content="initial-scale=1, maximum-scale=1">
      <!-- site metas -->
      <title>Vellore Agro Industries</title>
      <meta name="keywords" content="Vellore Agro Industries, Groundnut Oil, Oil, Cold Pressed Oil, Groundnut, Press, Vellore, kangeyanallur, SIDCO, Industrial, Estate, Unit K2, roasted synthetic preservative free seed, sunflower seeds, groundnut, pumkin, almonds">
      <meta name="description" content="Vellore Agro Industries ">
      <meta name="author" content="Marthandavarman">
      <!-- bootstrap css -->
      <link rel="stylesheet" href="css/bootstrap.min.css">
      <!-- style css -->
      <link rel="stylesheet" href="css/style.css">
      <!-- Responsive-->
      <link rel="stylesheet" href="css/responsive.css">
      <!-- fevicon -->
      <link rel="icon" href="/Brand name/Veakio_D2-removebg-preview.png" type="image/gif/png" />
      <!-- Scrollbar Custom CSS -->
      <link rel="stylesheet" href="css/jquery.mCustomScrollbar.min.css">
      <!-- Tweaks for older IEs-->
      <link rel="stylesheet" href="https://netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/fancybox/2.1.5/jquery.fancybox.min.css" media="screen">

   </head>

        `
    }
}

class SpecialHeader extends HTMLElement {
    connectedCallback(){
        this.innerHTML= `
        <header>
         <!-- header inner -->
         <div class="header">
            <div class="container-fluid">
               <div class="row">
                  <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 d-flex align-items-center">
                     <!-- Logo -->
                     <div class="logo">
                        <a href="index.html">
                              <img src="./images/company_logo.webp" style="height: 100px;" alt="Vellore Agro Industries Logo">
                        </a>
                     </div>                     
                     <!-- Company Name (Next to Logo) -->
                     <div class="ml-3">
                        <a href="index.html" class="text-dark text-decoration-none">
                              <h1 class="mb-0"><b>Vellore Agro Industries</b></h1>
                        </a>
                     </div>
                  </div>
                  <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 ">
                     <nav class="navigation navbar navbar-expand-md navbar-dark ">
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarsExample04">
                           <ul class="navbar-nav mr-auto">
                              <li class="nav-item active">
                                 <a class="nav-link" href="index.html">Home</a>
                              </li>
                              <li class="nav-item">
                                 <a class="nav-link" href="products.html">Our Products</a>
                              </li>
                              <li class="nav-item">
                                 <a class="nav-link" href="intrestingfacts.html">Intresting Facts</a>
                              </li>
                              <li class="nav-item">
                                 <a class="nav-link" href="contact.html">Contact Us</a>
                              </li>
                              <!-- <li class="nav-item d_none login_btn">
                                 <a class="nav-link" href="#">Login</a>
                              </li>
                              <li class="nav-item d_none">
                                 <a class="nav-link" href="#">Register</a>
                              </li>
                              <li class="nav-item d_none sea_icon">
                                 <a class="nav-link" href="#"><i class="fa fa-shopping-bag" aria-hidden="true"></i><i class="fa fa-search" aria-hidden="true"></i></a>
                              </li> -->
                           </ul>
                        </div>
                     </nav>
                  </div>
               </div>
            </div>
         </div>
      </header>
        `
    }
}

class SpecialFooter extends HTMLElement {
    connectedCallback(){
        this.innerHTML= `      
        <footer>
         <div class="footer">
            <div class="container">
               <div class="row">
                  <div class="col-md-12">
                     <ul class="location_icon">
                        <li><a href="https://maps.app.goo.gl/1UeyGmi917Ga2MfF7"><i class="fa fa-map-marker" aria-hidden="true"></i></a><br> Vellore</li>
                        <li><a href="tel:+916374814875"><i class="fa fa-phone" aria-hidden="true"></i></a><br> +91 6374814875</li>
                        <li><a href="mailto:marketing.vai24@gmail.com"><i class="fa fa-envelope" aria-hidden="true"></i></a><br> marketing.vai24@gmail.com</li>
                     </ul>
                  </div>
               </div>
            </div>
            <div class="copyright">
               <div class="container">
                  <div class="row">
                     <div class="col-md-12">
                        <p >© 2025 All Rights Reserved. Design by<a href="https://www.linkedin.com/in/marthandavarman-vivekanandan/"><span class="blu"> Marthandavarman V</span></a></p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </footer>
        `
    }
}


      

customElements.define('special-head',SpecialHead)
customElements.define('special-header',SpecialHeader)
customElements.define('special-footer',SpecialFooter)




