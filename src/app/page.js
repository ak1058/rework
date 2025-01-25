"use client";

import React, { useRef } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FeaturePage from "./components/FeaturePage";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";

export default function Home() {
  const pricingRef = useRef(null);
  const featureRef = useRef(null);
  const heroRef = useRef(null);

  const handleScrollTo = (section) => {
    if (section === "pricing") {
      pricingRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (section === "feature") {
      featureRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (section === "hero") {
      heroRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      <Navbar onLinkClick={handleScrollTo} />
      <div ref={heroRef}>
      <Hero onLinkClick={handleScrollTo} />
      </div>
      <div ref={featureRef}>
        <FeaturePage />
      </div>
      <div ref={pricingRef}>
        <Pricing />
      </div>
      <Footer onLinkClick={handleScrollTo} />
    </div>
  );
}
