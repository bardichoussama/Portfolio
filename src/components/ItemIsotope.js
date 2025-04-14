import Isotope from "isotope-layout";
import Link from "next/link";
import { Fragment, useEffect, useRef, useState } from "react";
import { parallax } from "../utils";
const ItemIsotope = () => {
  useEffect(() => {
    parallax();
  }, []);

  // Isotope
  const isotope = useRef();
  const [filterKey, setFilterKey] = useState("box-item");
  useEffect(() => {
    setTimeout(() => {
      isotope.current = new Isotope(".portfolio-items", {
        itemSelector: ".box-item",
        percentPosition: true,
        masonry: {
          columnWidth: ".box-item",
        },
        animationOptions: {
          duration: 750,
          easing: "linear",
          queue: false,
        },
      });
    }, 1000);
  }, []);

  useEffect(() => {
    const circle = document.querySelectorAll(".circle");
    circle.forEach((e) => {
      e.addEventListener("mouseenter", (m) => {
        if (!e.getElementsByClassName("ink")[0]) {
          const span = document.createElement("span");
          span.classList.add("ink");
          e.appendChild(span);
          span.classList.add("ink-animate");
        }
      });
      e.addEventListener("mouseleave", (m) => {
        const span = document.querySelector(".ink");
        if (span) {
          span.classList.remove("ink-animate");
        }
      });
    });
  }, []);

  return (
    <Fragment>
      {/* portfolio items */}
      <div className="box-items portfolio-items">
        <div className="box-item">
          <div className="image">
            <a href="#gallery-1" className="has-popup-gallery hover-animated">
            <img src="images/Briefd/Welcome-page@2x.png" className="wp-post-image" alt="" />
              <span className="info circle">
                <span className="centrize full-width">
                  <span className="vertical-center">
                    <span className="icon fas fa-images" />
                    <span className="desc">
                      <span className="name">Briefd</span>
                    </span>
                  </span>
                </span>
              </span>
            </a>
            <div id="gallery-2" className="mfp-hide">
              <a href="images/Briefd/Welcome-page@2x.png" />
              <a href="images/Briefd/Prof-Dashborad.png" />
              <a href="images/Briefd/Formateur-Briefs.png" />
              <a href="images/Briefd/Create Brief.png" />
             
            </div>
          </div>
        </div>
        <div className="box-item">
          <div className="image">
            <a href="#gallery-2" className="has-popup-gallery hover-animated">
            <img src="images/We care/Before-Signup.png" className="wp-post-image" alt="" />
              <span className="info circle">
                <span className="centrize full-width">
                  <span className="vertical-center">
                    <span className="icon fas fa-images" />
                    <span className="desc">
                      <span className="name">We care</span>
                    </span>
                  </span>
                </span>
              </span>
            </a>
            <div id="gallery-1" className="mfp-hide">
              <a href="images/We care/Before-Signup.png" />
              <a href="images/We care/Doctor-Login.png" />
              <a href="images/We care/Doctor-Dashboard.png" />
              <a href="images/We care/Doctor-Requests.png" />
              <a href="images/We care/Doctor-Settings.png" />
          
             
            </div>
          </div>
        </div>
        
       
        <div className="box-item">
          <div className="image">
            <a
              href="https://www.youtube.com/embed/S4L8T2kFFck"
              className="has-popup-video hover-animated"
            >
              <img src="images/work2.jpg" className="wp-post-image" alt="" />
              <span className="info circle">
                <span className="centrize full-width">
                  <span className="vertical-center">
                    <span className="icon fas fa-video" />
                    <span className="desc">
                      <span className="name">Fertility of Some Plants</span>
                    </span>
                  </span>
                </span>
              </span>
            </a>
          </div>
        </div>
       
   
        <div className="box-item">
          <div className="image">
            <a
              href="images/vrchat.png"
              className="has-popup-image hover-animated"
            >
              <img src="images/vrchat.png" className="wp-post-image" alt="" />
              <span className="info circle">
                <span className="centrize full-width">
                  <span className="vertical-center">
                    <span className="icon fas fa-image" />
                    <span className="desc">
                      <span className="name">ITSJO VR</span>
                    </span>
                  </span>
                </span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default ItemIsotope;
