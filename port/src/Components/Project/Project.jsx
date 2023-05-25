import React from 'react';
import Image1 from './Image1.jsx';
import Image2 from './Image2.jsx';
import Image3 from './Image3.jsx';
import Image4 from './Image4.jsx';

import { useState } from 'react';
import sk1 from '../../Assets/sk1.png';
import sk2 from '../../Assets/sk2.png';
import sk3 from '../../Assets/sk3.png';
import sk4 from '../../Assets/sk4.png';
import sk5 from '../../Assets/sk5.png';
import sk6 from '../../Assets/sk6.png';
import ec1 from '../../Assets/ec1.png';
import ec2 from '../../Assets/ec2.png';
import ec3 from '../../Assets/ec3.png';
import ec4 from '../../Assets/ec4.png';
import ec5 from '../../Assets/ec5.png';
import ec6 from '../../Assets/ec6.png';
import ec7 from '../../Assets/ec7.png';
import ec8 from '../../Assets/ec8.png';
import fc1 from '../../Assets/fc1.png';
import fc2 from '../../Assets/fc2.png';
import fc3 from '../../Assets/fc3.png';
import fc4 from '../../Assets/fc4.png';
import fc5 from '../../Assets/fc5.png';
import fc6 from '../../Assets/fc6.png';

import m1 from '../../Assets/m1.png';
import m2 from '../../Assets/m2.png';
import m3 from '../../Assets/m3.png';
import m4 from '../../Assets/m4.png';
import m5 from '../../Assets/m5.png';
import m6 from '../../Assets/m6.png';
import './Project.css';

const ecArr = [ec1, ec2, ec3, ec4, ec5, ec6,ec7,ec8];
const skArr = [sk1, sk2, sk3, sk4, sk5, sk6];
const fcArr = [fc1, fc2, fc3, fc4, fc5, fc6];
const mArr = [m1, m2, m3, m4, m5, m6];

const Project = () => {


  return (
    <section className="project section" id="project" >
      <h2 className="section_title">Projects</h2>
      <span className="section_subtitle">works</span>

      <div className="project_container container">

        <div className="project_item">
          <div className="project_img-div">
            {/* <img className src={fc} id="fcImg" alt="Project Img"/> */}
            <Image3 imgs={ecArr} />
          </div>

          <div>
            <h3>Ecommerce App</h3>
            <p>Ecommerce is a Ecommerce app. It allows users to sort , search , cart , make real payment and engage with content. Ecommerce app is accessible on various devices and is designed with scalability and maintainability in mind.</p>
            <p className="tech_stack">Tech Stack <span>- React, Node JS, Express, MongoDB, Braintree, Bootstrap, CSS</span></p>

            <div className="project_item-btndiv">
              <a href="https://github.com/Rohan1366/ecommerce" target='_blank' rel="noreferrer" > <button>Github</button> </a>
              <a href="https://inquisitive-plum-vest.cyclic.app/" target='_blank' rel="noreferrer" > <button>Demo <i className="bx bx-right-arrow-alt "></i></button></a>
            </div>
          </div>
        </div>

        <div className="project_item">
          <div className="project_img-div">
            {/* <img className src={fc} id="fcImg" alt="Project Img"/> */}
            <Image4 imgs={mArr} />
          </div>

          <div>
            <h3>Movix</h3>
            <p>Movix is a Movie app. It allows users to share Movies, Search Movies, Sort Movies, Watch Movies and engage with content. Moviex is accessible on various devices and It was responsive.</p>
            <p className="tech_stack">Tech Stack <span>- React, Redux , Bootstrap , TMDB API, Css</span></p>

            <div className="project_item-btndiv">
              <a href="https://github.com/Rohan1366/Moviex" target='_blank' rel="noreferrer" > <button>Github</button> </a>
              <a href="https://movix-ecru.vercel.app/" target='_blank' rel="noreferrer" > <button>Demo <i className="bx bx-right-arrow-alt "></i></button></a>
            </div>
          </div>
        </div>

        <div className="project_item">
          <div className="project_img-div">
            {/* <img className src={fc} id="fcImg" alt="Project Img"/> */}
            <Image1 imgs={fcArr} />
          </div>

          <div>
            <h3>First Cry</h3>
            <p>FirstCry.com - This project is an e-commerce application for kids' products,
              providing customers with a seamless shopping experience.</p>
            <p className="tech_stack">Tech Stack <span>- HTML, CSS, Javascript, LocalStorage, JSON-Server</span></p>

            <div className="project_item-btndiv">
              <a href="https://github.com/Rohan1366/firstCry" target='_blank' rel="noreferrer" > <button>Github</button> </a>
              <a href="https://first-cry.netlify.app/" target='_blank' rel="noreferrer" > <button>Demo <i className="bx bx-right-arrow-alt "></i></button></a>
            </div>
          </div>
        </div>

        <div className="project_item">
          <div className="project_img-div">
            {/* <img src={bb1} alt="Project Img"/> */}
            <Image2 imgs={skArr} />
          </div>

          <div>

            <h3>SkinStore</h3>
            <p>SkinStore.com is online Skin Care store. SkinStore created for buying Skincare Products</p>
            <p className="tech_stack">Tech Stack <span>- HTML, CSS, Javascript, LocalStorage</span></p>

            <div className="project_item-btndiv">
              <a href="https://github.com/Rohan1366/Skin_Care_Clone" target='_blank' rel="noreferrer" > <button>Github</button> </a>
              <a href="https://hilarious-donut-4d9a54.netlify.app/" target='_blank' rel="noreferrer" ><button>Demo <i className="bx bx-right-arrow-alt contact_button-icon"></i></button> </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}

export default Project
