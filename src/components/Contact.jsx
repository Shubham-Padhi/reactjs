import React from 'react';
import "../styles/Contact.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
  return (
    <>
      <section className="contact-sec sec-pad">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="contact-detail">
                <h1 className="section-title">Contact us</h1>

                <ul className="contact-ul">
                  <li><FontAwesomeIcon icon={faLocationDot} /> Benglore, Domlur</li>

                  <li>
                    <FontAwesomeIcon icon={faPhone} />
                    <a href="tel:08510004495"><b>0255000XXXX</b></a>,
                    <a href="tel:08510005495"><b>0251600XXXX</b></a>
                  </li>

                  <li>
                    <FontAwesomeIcon icon={faEnvelope} />
                    <a href="mailto:pardeepkumar4bjp@gmail.com"><b>nextwebi@gmail.com</b></a>
                  </li>
                </ul>

                <span>
                  <a href="/" className="fb"><FontAwesomeIcon icon={faFacebook} /></a>
                  <a href="/" className="insta"><FontAwesomeIcon icon={faInstagram} /></a>
                  <a href="/" className="twitter"><FontAwesomeIcon icon={faTwitter} /></a>
                </span>
              </div>
            </div>

            <div className="col-md-6">
              <form action="#" className="contFrm" method="POST">
                <div className="row">
                  <div className="col-sm-6">
                    <input type="text" name="name" placeholder="Your Name" className="inptFld" required />
                  </div>

                  <div className="col-sm-6">
                    <input type="email" name="email" placeholder="Email Address" className="inptFld" required />
                  </div>

                  <div className="col-sm-6">
                    <input type="tel" name="phone" placeholder="Phone Number" className="inptFld" required />
                  </div>

                  <div className="col-sm-6">
                    <input type="text" name="sub" placeholder="Subject" className="inptFld" required />
                  </div>

                  <div className="col-12">
                    <textarea className="inptFld" rows="" cols="" placeholder="Your Message..." required></textarea>
                  </div>

                  <div className="col-13">
                    <input type="submit" name="submit" value="SUBMIT" className="inptBtn" />
                  </div>
                </div>
              </form>
            </div>
          </div>

          <div style={{ textAlign: 'center', marginTop: '20px' }}>
          
              <script>
                document.write(new Date().getFullYear());
              </script>
             
       
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
