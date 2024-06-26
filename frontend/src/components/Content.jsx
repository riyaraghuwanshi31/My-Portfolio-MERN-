import React from 'react';
import { Link, Router } from 'react-router-dom';

import Contact from "./Contact";
import Connect from "./Connect";


const Content = () => {
  return (
    <div className="container">

      <div className="front">

        <model-viewer id="orbit-demo" src="https://models.readyplayer.me/64ef0a5f42c59d7dceb2f38d.glb"
          camera-controls touch-action="pan-y" disable-zoom alt="cube"></model-viewer>
        <header>
          <nav>

            <img src="/avtLogo.png" alt="logo" />
            <div className="transition1">
              <h5>
                Developer Student Karateka
              </h5>
            </div>



          </nav>
        </header>

        <main>
          <p id="threewords"> <a id="name"> Hello! I'm Riya Raghuwanshi </a> <br>
          </br>  Welcome to my portfolio! <br></br>
            I'm a passionate developer proficient in <br></br> the  MERN stack and a skilled Java programmer.
          </p>
        </main>
      </div>

      <section id='intro'>
        <div className="Card">
          <h2 id="cIntro">About me</h2>
          <p id="cPara">
            I am a versatile full-stack developer proficient in the MERN stack and a skilled Java programmer with expertise in Data Structures and Algorithms (DSA). My proficiency in Java and DSA enables me to develop efficient and scalable solutions. With a strong foundation in both front-end and back-end development, I thrive on the challenges of problem-solving and continuously exploring new technologies to expand my technical horizons

          </p>
        </div>
      </section>


      <section id="skills">

        <div id="item-1" class="sk">

          <h1>Skills</h1>

          <ul>
            <div class="Skill">
              <h4>Java</h4>
              <div class="cont">
                I possess extensive proficiency in Java and Data Structures
                and Algorithms (DSA), <br></br> bolstered by my certification from Apna College's
                Alpha batch program, which <br></br> encompasses a comprehensive Java + DSA curriculum.
              </div>
            </div>


            <div class="SkillO">
              <h4>C/C++</h4>

              <div class="cont">
                At the outset of my coding journey, I honed my skills in C and C++, <br></br>
                which served as a solid springboard for building my foundation.
              </div>
            </div>




            <div class="Skill">
              <h4>HTML and CSS</h4>
              <div class="cont">
                I possess a solid foundation in HTML and CSS,which I've effectively <br></br>
                demonstrated through various project showcases.
                <h3 class="hightlighted"> I've mastered Bootstrap to enhance my web development skills. </h3>
              </div>
            </div>



            <div class="SkillO">
              <h4>Javascript</h4>
              <div class="cont">
                I have a foundational grasp of JavaScript, which I've <br></br> demonstrated
                through my involvement in numerous projects.
              </div>
            </div>





            <div class="Skill">
              <h4>Node.js</h4>
              <div class="cont">
                I am proficient in Node.js, using it as a backend language to build robust <br></br> server-side applications. Node.js is a versatile runtime environment that <br></br>  allows me to create efficient and  scalable backend solutions.
              </div>
            </div>


            <div class="SkillO">
              <h4>Express.js</h4>
              <div class="cont">
                I'm highly proficient in Express.js, a Node.js framework used to develop<br></br> scalable  web applications. I leverage Express.js for efficient routing, <br></br>  middleware management, and other essential backend functionalities.
              </div>
            </div>


            <div class="Skill">
              <h4>MongoDB</h4>
              <div class="cont">
                I have extensive proficiency in MongoDB and am currently utilizing <br></br> it in numerous projects as the primary database. Additionally, this portfolio also <br></br> showcases projects that utilize MongoDB.
              </div>
            </div>






            <div class="SkillO">
              <h4>React</h4>

              <div class="cont">


                I have a foundational understanding of React and am currently focused on <br></br> deepening my knowledge. I am actively engaged in various React <br></br>  projects to enhance my skills.
              </div>
            </div>


          </ul>

          <div id='iconD'>

            <div>
              <ul className='iconUL' id='ul1'>
                <li><img src="javaL.png" alt="" /></li>
                <li><img src="JsL.png" alt="" /></li>
                <li><img src="htmlL.png" alt="" /></li>
                <li><img src="CSSL.png" alt="" /></li>
                <li><img src="bootstrapL.png" alt="" /></li>
              </ul>
            </div>


            <div>
              <ul className='iconUL' id='ul2'>
                <li><img src="nodejs.png" alt="" /></li>
                <li><img src="express.png" alt="" /></li>
                <li><img src="mongo.png" alt="" /></li>
                <li><img src="react.png" alt="" /></li>
                <li><img src="C++L.png" alt="" /></li>
                <li><img className='clogo' src="CL.png" alt="" /></li>
              </ul>

            </div>

          </div>


        </div>

      </section>







      <section id="Achievements">

        <div id="item1">

          <h1 id="ach">Achievements</h1>
        </div>

        <div className="items" id="item2">
          <h2>GSSOC '24 contributor</h2>
          <div className="AchCont">
            As a passionate and proactive contributor to the GirlScript Summer of Code 2024 (GSSOC '24), I had the opportunity to work on impactful open-source projects and collaborate with a diverse community of developers.
          </div>
        </div>
        <div className="items" id="item3">
          <h2>AIR 76 in Code combat 3.0</h2>
          <div className="AchCont">
            I had the opportunity to participate in Coding Ninja's
            program, where I encountered challenging DSA problems
            that required a deep understanding of advanced data structures
            and algorithms. I leveraging my problem-solving
            skills and expertise in DSA concepts to overcome the challenges.
          </div>
        </div>
        <div className="items" id="item4">
          <h2>Selected in Abhyuday IIT Bombay’s Social Fest</h2>
          <div className="AchCont">
            I pitched a concept focused on women's empowerment during my participation
            in Abhyuday, and our proposal received approval.
            As the team leader,I devised a plan to promote homemade food and offer meal services to those
            in need.
            <br></br><br></br>
            For our upcoming project, my team and I are excited to embark on the development
            of a dedicated website to support this initiative.
          </div>
        </div>
        <div className="items" id="item5">
          <h2>Java and DSA certification</h2>

          <div className="AchCont">
            I completed the Java and DSA course through Apna College, a reputable platform.
            This experience significantly enhanced my coding skills. <br></br> <br></br>
            Throughout the course, I successfully tackled numerous DSA challenges and comprehensively
            mastered all the key concepts.
          </div>

        </div>
        <div className="items" id="item6">
          <h2>Front-end web development Certificate by DevTown</h2>

          <div className="AchCont">
            Certified by devDown and Microsoft in Front-end Development. <br></br><br></br>
            I honed my skills during a 7-day devTown bootcamp, covering HTML, CSS, and basic React.js.

          </div>
        </div>

        <div className="items" id="item7">
          <h2>C++ Certification</h2>

          <div className="AchCont">
            At the beginning of my college journey, I embarked on my C++ learning path and earned
            certification from Samyak Computer Classes. <br></br> <br></br>
            I gained proficiency in both C and C++ programming languages.
          </div>

        </div>

      </section>


      <section id="projects">


        <div id="ProjCont" className="projHead">
          <h3>My Work</h3>
          <h1>Projects</h1>

          <div className="projFlex">
            <div className="p1">
              <div className="Pimg">
                <img src="/Avatarnew.png" alt="Image" className="projImg"></img>
              </div>
              <div className="projDes">
                <h2> <a href="/index" className="projName">My Portfolio</a></h2>
                <div className="detail"></div>

              </div>
            </div>

            <div className="p1">
              <div className="Pimg">
                <img src="/APNA DABBA logo smal.png" alt="Image" className="projImg"></img>
              </div>
              <div className="projDes">
                <h2> <a href="https://riyaraghuwanshi31.github.io/Apna-Dabba-Repl/" target="_blank" className="projName" >Apna Dabba</a></h2>
                <div className="detail"></div>

              </div>

            </div>

            <div className="p1">
              <div className="Pimg">
                <img src="/weatherapi.png" alt="Image" className="projImg"></img>
              </div>
              <div className="projDes">
                <h2> <a href="https://riyaraghuwanshi31.github.io/Weather-App/" target="_blank" className="projName" >Weather App</a></h2>
                <div className="detail"></div>

              </div>

            </div>

            



          </div>


          <div className="projFlex">


          <div className="p1">
              <div className="Pimg">
                <img src="/logo.png" alt="Image" className="projImg" id="apnacollege"></img>
              </div>
              <div className="projDes">
                <h2><a href="https://riyaraghuwanshi31.github.io/Safe-Campus-360/" target="_blank" className="projName">Safe Campus 360</a></h2>
              </div>
            </div>



            <div className="p1">
              <div className="Pimg">
                <img src="/final logo apna college.png" alt="Image" className="projImg" id="apnacollege"></img>
              </div>
              <div className="projDes">
                <h2><a href="https://riyaraghuwanshi31.github.io/Apna-College-Website-Educational-Website-/  " target="_blank" className="projName">Educational
                  Website</a></h2>


              </div>

            </div>

            <div className="p1">
              <div className="Pimg">
                <img src="/onlineSite.png" alt="Image" className="projImg"></img>
              </div>
              <div className="projDes">
                <h2><a href="" target="_blank"
                  className="projName">Online shopping website</a></h2>
              </div>
            </div>




          </div>


        </div>
      </section>

      <Contact />

      <section id='conBg'>
        <Connect />

      </section>




    </div >



  )
}

export default Content;
