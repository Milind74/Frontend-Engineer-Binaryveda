import React from "react";
import styles from "../Styles/Navbar.module.css";
import illustarator from "../assets/illustration.png";
import apiteam from "../assets/apiTeam.png"
import graph from "../assets/graphQL.png"
import superchargeWorkflow from "../assets/superchargeWorkflow.png"
import showcase from "../assets/showcase.png"

// superchargeWorkflow

const Navbar = () => {
  return (
    <div className={styles.container1}>
      <nav class="navbar navbar-expand-lg ">
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
          <div className={styles.childleft2}>
            <h1>Lets build the future of the design now</h1>
            <p>
              Create amazing tools and integrations for 1 million users or
              customise Marvel for your team
            </p>
            <div className={styles.childdbtn}>
              <button className={styles.childbtn1}>Submit you app</button>
              <button className={styles.childbtn2}>View app docs</button>
            </div>
          </div>
        </div>

        <div className={styles.childright}>
          <img src={illustarator} alt="" />
        </div>
      </div>

      <div className={styles.childthirdlayer}>
        <h3>Experience the freedom to build features,right away.</h3>
        <p>
          you cn now harness components of our platform and build powerful
          integrations for our 2 million users- or simply just for your team
        </p>
      </div>

      <div  className={styles.forthlayer}>
        <div >
          <img src={apiteam} alt="" />
          <p>Dedicated API Team</p>
          <p>Our team are available for user's questions via <br />our Slack Developer Community and Email </p>
        </div>
        <div>
        <img src={graph} alt="" />
        <p>Our API uses Graph QL</p>
        <p>No handling server side.Get many Api's <br/>
        resopnse in a single request
        </p>

        </div>
        <div>
          <img src={superchargeWorkflow} alt="" />
          <p>Supercharge your workflow</p>
        <p>Automate workflow, integrate data <br/> and take Marvel to the next level <br/>
        </p>
        </div>
      </div>
{/* second last layer */}
<div className={styles.secondlastchild}>
        <div className={styles.secondlastleft}>
          <div className={styles.childleft1}>
            <h4>Showcase your app in our integration directory</h4>
            <p>
              Building something special? We're always <br /> looking to work 
              with partners who wants <br /> to  help the world bring their ideas  to life
            </p>
            <div className={styles.childdbtn}>
              <button className={styles.childbtn2}>Submit you app</button>
              <button className={styles.childbtn3}>View app docs</button>
            </div>
          </div>
        </div>

        <div className={styles.childright1}>
          <img src={showcase} alt="" />
        </div>
      </div>

{/* //5th layer/ */}

      
      
    </div>
  );
};

export default Navbar;