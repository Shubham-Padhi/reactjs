import React from 'react';

const Service = () => {
  return (
    <div >
      <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
    />

<body>
    <div className="container">
      <h1 className='our'>Our Services</h1>
      <div class="row">
        <div class="service">
          <i class="fas fa-laptop-code"></i>
          <h2 class="service_heading">Website Design</h2>
          <p class="service_para">
         We will provide service of Website design using React JS & Pure CSS3 with some well know library.
          </p>
               <a href="mailto:blogtriggers@gmail.com" class="service_btn"> Contact us </a>
        </div>
        <div class="service">
          <i class="fas fa-chart-line"></i>
          <h2 class="service_heading">SEO Service</h2>
          <p class="service_para">
            In SEO Service we will provide you OnPage SEO, OffPage SEO, Technical SEO etc...
          </p>
               <a href="mailto:blogtriggers@gmail.com" class="service_btn"> Contact us </a>
        </div>
       
        
        <div class="service">
          <i class="fas fa-mobile-alt"></i>
          <h2 class="service_heading">App Development Using Kodular</h2>
          <p class="service_para">
            In Application service we will provide you to make an application using kodular website.
          </p>
          <a href="mailto:blogtriggers@gmail.com" class="service_btn"> Contact us </a>
        </div>
        
       
      </div>
    </div>
  </body>
    </div>
  );
}

export default Service;
