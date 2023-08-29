
import React, { useState, useEffect } from 'react';
import './App.css';

function App() {

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);


  const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {
    const handleScroll = event => {
      setScrollTop(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  const AnchorAbout = () => {
    window.location = `#AboutUs`
  }

  return (


    <div className="App">

      <div className="FreePickInfo"><a href="https://www.freepik.com/free-vector/parallax-background-with-hot-air-balloon-fly_21427480.htm#page=2&query=parallax%20plane&position=3&from_view=search&track=ais">Image by upklyak on</a>  Freepik</div>

      <div className="LogoContainer"
        style={{
          backgroundColor: `${scrollTop >= 500 ? "#58a0d4" : "transparent"}`
        }}
      > Balloooon</div>

      <nav>
        <div className="BtnContainer">
          <button onClick={AnchorAbout}>About Us</button>
          <button>Book your dream</button>
          <button>Contact</button>
        </div>

      </nav>

      <div className="ParallaxContainer">

        <img
          className="ParallaxImage"
          src={require("./Images/Layer1_Background.png")}
          style={{
            left: "0px",
            bottom: "0px",
            zIndex: 1
          }}
          alt="Background"
        />

        <img
          className="ParallaxImage"
          src={require("./Images/Layer5_Trees.png")}
          style={{
            left: "0px",
            bottom: "0px",
            zIndex: 6
          }}
          alt="Trees"
        />

        <img
          className="ParallaxImage"
          src={require("./Images/Layer2_Mountain2.png")}
          style={{
            transform: `translate(${-mousePos.x / 70}px, ${-mousePos.y / 100}px)`,
            left: "0px",
            bottom: "-15px",
            zIndex: 2
          }}
          alt="Mountain2"
        />

        <img
          className="ParallaxImage"
          src={require("./Images/Layer4_Mountain1.png")}
          style={{
            transform: `translate(${mousePos.x / 60}px, ${mousePos.y / 60}px)`,
            left: "-40px",
            bottom: "-15px",
            zIndex: 5
          }}
          alt="Mountain1"
        />

        <img
          className="ParallaxImage"
          src={require("./Images/Layer3_Cloud.png")}
          style={{
            transform: `translate(${-mousePos.y / 85}px, ${mousePos.x / 80}px)`,
            right: "-20px",
            bottom: "0px",
            zIndex: 3
          }}
          alt="Cloud"
        />

        <img
          className="ParallaxImage"
          src={require("./Images/Layer4_Balloon1.png")}
          style={{
            transform: `translate(${mousePos.x / 75}px, ${-mousePos.y / 90}px)`,
            right: "-20px",
            bottom: "0px",
            zIndex: 4
          }}
          alt="Balloon1"
        />

        <img
          className="ParallaxImage"
          src={require("./Images/Layer4_Balloon2.png")}
          style={{
            transform: `translate(${mousePos.x / 75}px, ${mousePos.y / 70}px)`,
            right: "-20px",
            bottom: "0px",
            zIndex: 4
          }}
          alt="Balloon2"
        />

        <h2
          style={{
            transform: `translate(${(scrollTop * 0.8)}px, 0px)`
          }}
        >
          <p> make </p>   <p>your dreams</p>   <p>come true</p>
        </h2>


      </div>


      <div className="ContentContainer">

        <div className="AboutUsSection">

          <div className="AboutUsTitle" id='AboutUs'> About Us </div>

          <div className="ParallaxAboutUs">

            <img
              className="ParallaxImageAbout"
              src={require("./Images/BigBalloonAlone.png")}
              style={{
                transform: `translate(${-mousePos.y / 100}px, ${-mousePos.x / 150}px)`,
                width: "450px",
                height: "auto",
                right: "-20px",
                top: "20px",
                zIndex: 1
              }}
              alt="Balloon2"
            />

            <img
              className="ParallaxImageAbout"
              src={require("./Images/SmallBalloonAlone.png")}
              style={{
                transform: `translate(${-mousePos.x / 100}px, ${mousePos.y / 150}px)`,
                width: "250px",
                height: "auto",
                left: "-20px",
                zIndex: 1
              }}
              alt="Balloon2"
            />

          </div>


          <div className="AboutUsContent">

            <p>
              Welcome to the wildest ride in the sky – BALLOOOON! We're not just a company, we're dream merchants. Ever wanted to float like a carefree marshmallow? Well, we make that a reality. Our team of seasoned balloonatics takes your wanderlust to new heights, quite literally.
            </p>
            <p>
              Whether you're a morning sparrow or a sunset owl, we've got you covered with flights at all hours. Sunrise? Check. Sunset? Double check. Midnight stargazing? Heck, why not! Our ballooning bonanza knows no bounds.
            </p>
            <p>
              And variety? Oh boy, do we have it! Short and sweet aerial appetizers for those tight on time, or epic airborne odysseys for the true adventurers. Fancy floating over serene valleys, quaint villages, or even that suspiciously well-trimmed neighbor's backyard – we fly where your heart desires.
            </p>
            <p>
              So, if you're tired of mundane gravity holding you down, hop on board the BalloonRover and let those dreams soar. We're in the business of defying gravity and making memories, one balloonatic voyage at a time!
            </p>

          </div>

          <div className="BookContainer">
            <div className="BookHover">Book Trip Today!</div>
            <div className="BookTitle">Mountaints at day</div>
            <div className="LeftType">
              <img src={require("./Images/BalonikXD3.jpg")} alt="" />
              <div className="BookInfo">
                <div className="BookDesription">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, in. Soluta aut neque, doloribus, autem asperiores vitae, adipisci odit molestias perspiciatis fugit eveniet fugiat perferendis praesentium voluptatem non beatae facilis.
                </div>
                <div className="BookAttribute">
                  <div className="Attribute">Day</div>
                  <div className="Attribute">Mountains</div>
                  <div className="Attribute">Forest</div>
                  <div className="Attribute">Lake</div>
                </div>
              </div>
            </div>
          </div>

          <div className="BookContainer">
            <div className="BookHover">Book Trip Today!</div>
            <div className="BookTitle">Mountaints at day</div>
            <div className="RightType">
              <img src={require("./Images/BalonixXD.png")} alt="" />
              <div className="BookInfo">
                <div className="BookDesription">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, in. Soluta aut neque, doloribus, autem asperiores vitae, adipisci odit molestias perspiciatis fugit eveniet fugiat perferendis praesentium voluptatem non beatae facilis.
                </div>
                <div className="BookAttribute">
                  <div className="Attribute">Day</div>
                  <div className="Attribute">Mountains</div>
                  <div className="Attribute">Forest</div>
                  <div className="Attribute">Lake</div>
                </div>
              </div>
            </div>
          </div>


          <div className="BookContainer">
            <div className="BookHover">Book Trip Today!</div>
            <div className="BookTitle">Mountaints at day</div>
            <div className="LeftType">
              <img src={require("./Images/BalonixXD2.png")} alt="" />
              <div className="BookInfo">
                <div className="BookDesription">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, in. Soluta aut neque, doloribus, autem asperiores vitae, adipisci odit molestias perspiciatis fugit eveniet fugiat perferendis praesentium voluptatem non beatae facilis.
                </div>
                <div className="BookAttribute">
                  <div className="Attribute">Day</div>
                  <div className="Attribute">Mountains</div>
                  <div className="Attribute">Forest</div>
                  <div className="Attribute">Lake</div>
                </div>
              </div>
            </div>
          </div>


        </div>




        <div className="BookSection"></div>



        <div className="ContactSection"></div>

      </div>


    </div>
  );
}

export default App;
