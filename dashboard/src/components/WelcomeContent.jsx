import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase, faUsers, faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import PieChart from "./PieChart";
import gsap from "gsap";
import study from "../components/study.jpeg";
const WelcomeContent = () => {
  useEffect(() => {
    // Select the pieces of the chart using the class name
    const pieces = gsap.utils.toArray(".piece");

    // Enhanced break effect (more noticeable displacement)
    gsap.fromTo(
      pieces,
      {
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
        rotation: 0,
        skewX: 0,
        skewY: 0,
      },
      {
        opacity: 0.9, // Slight opacity change
        x: (i) => gsap.utils.random(-100, 100), // Increase scatter range for larger displacement
        y: (i) => gsap.utils.random(-100, 100),
        scale: (i) => gsap.utils.random(0.9, 1.1), // More noticeable scaling
        rotation: (i) => gsap.utils.random(-15, 15), // Increase rotation for a stronger crack effect
        skewX: (i) => gsap.utils.random(-5, 5), // Slightly more skew
        skewY: (i) => gsap.utils.random(-5, 5),
        duration: 0.4, // Keep the crack effect fast
        ease: "power2.out", // Slightly stronger ease for the break effect
        stagger: 0.05,
        onComplete: mergePieces,
      }
    );

    // Function to merge pieces back together with background color change
    function mergePieces() {
      // Change background color before merging
      gsap.to(".chart-container", {
        backgroundColor: "#e0f7fa", // Soft background color during merge
        duration: 0.6, // Smooth transition
      });

      // Merge the pieces back together
      gsap.to(pieces, {
        x: 0,
        y: 0,
        opacity: 1,
        scale: 1,
        rotation: 0,
        skewX: 0,
        skewY: 0,
        duration: 0.6, // Keep the merge smooth
        ease: "power2.inOut", // Soft ease for a fluid merge
        stagger: 0.05,
        onComplete: resetBackground, // Reset background after merge
      });
    }

    // Reset background color after merge completes
    function resetBackground() {
      gsap.to(".chart-container", {
        backgroundColor: "#ffffff", // Revert to original background color
        duration: 0.6, // Smooth transition back
      });
    }
  }, []);

  return (
    <div className="upper piece">
      <div className="upper-first piece">
        <h2 className="piece">Welcome back Gagan</h2>
        <h4 className="piece">
          <span>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi
          </span>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi
          </span>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi
          </span>
        </h4>
        <div className="main-upper piece">
          <div className="main-upper-inner dual-dlip piece">
            <div className="dual-dlip-child piece">
              <div className="job-count">
                <FontAwesomeIcon icon={faBriefcase} className="icon" />
                <span className="label">
                  Total Orders: <span className="count">30</span>
                </span>
              </div>
              <div className="applicant-count">
                <FontAwesomeIcon icon={faUsers} className="icon" />
                <span className="label">
                  Total Delivered: <span className="count">12</span>
                </span>
              </div>
            </div>
            <div className="dual-dlip-child piece">
              <div className="job-count piece">
                <FontAwesomeIcon icon={faCircleXmark} className="icon piece" />
                <span className="label">
                  Total Cancelled: <span className="count">15</span>
                </span>
              </div>
            </div>
          </div>
          <div className="main-upper-inner piece">
            <PieChart />
          </div>
          <div className="main-upper-inner piece">
            <div className="info-section piece">
              <img src={study} alt="Description" className="info-image" />
              <h3 className="info-title piece">More Order Details</h3>
              <p className="info-text piece">
                Here is some descriptive text about the image or topic. You can
                include any relevant information you want to share.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeContent;
