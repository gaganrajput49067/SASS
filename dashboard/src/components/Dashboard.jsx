import React, { useEffect } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import "./Dashboard.scss";
import MainContent from "./MainContent";
import gsap from "gsap";
const Dashboard = () => {
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
    <>
      <Header />
      <div className="dashboard-container piece">
        <div className="sideDiv piece">
          <Sidebar className="sidebar piece" />
        </div>
        <div className="main-content piece">
          <MainContent />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
