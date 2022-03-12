import React from "react";
import styles from "../Styles/Navbar.module.css";
import illustarator from '../assets/illustration.png'

const Navbar = () => {
  return (
    <div className={styles.container1}>
      <nav  class="navbar navbar-expand-lg ">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            Marvel
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a className={styles.link} aria-current="page" href="#">
                  |
                </a>
              </li>
              <li class="nav-item">
                <a className={styles.link} aria-current="page" href="#">
                  Developer
                </a>
                
              </li>
            </ul>
            <div class="d-flex">
              <p class="nav-item">
                <a className={styles.link} aria-current="page" href="#">
                  Why Marvel
                </a>
              </p>
              <p class="nav-item">
                <a className={styles.link} aria-current="page" href="#">
                  Experties
                </a>
              </p>
              <p class="nav-item">
                <a className={styles.link} aria-current="page" href="#">
                  Pricing
                </a>
              </p>

              <p class="nav-item">
                <a className={styles.link} aria-current="page" href="#">
                  Sign in
                </a>
              </p>

              {/* <input class="div-control me-2" type="search" placeholder="Search" aria-label="Search"> */}
              <button className={styles.btn} type="submit">

                Sign up free
              </button>
            </div>
          </div>
        </div>
      </nav>
      

      <div className={styles.child}>
          <div className={styles.childleft}>
              <div className={styles.childleft1}>
              <h1>Lets build the future of the design now</h1>
              <p>Create amazing tools and integrations for 1 million
                   users or customise Marvel for your team

              </p>
              <div  className={styles.childdbtn} >
                  <button  className={styles.childbtn1}>Submit you app</button>
                  <button  className={styles.childbtn2}>View app docs</button>

                  </div>

              </div>
          </div>

          <div className={styles.childright}>
              <img src={illustarator} alt="" />
          </div>

      </div>


      <div className={styles.childright}>
          <h5>Experience the freedom to build features,right away.</h5>
<p>you cn now harness components of our platform and build powerful
  
    integrations for our 2 million users- or simply just for your team
</p>
      </div>
    </div>
  );
};

export default Navbar;
