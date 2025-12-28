import React from "react";
import { SOCIAL_LINKS } from "../../constants/heroConstants";
import HeroBackground from "../sections/hero/HeroBackground";

// Assets from Figma Design
// Using standard assets now for the bottom decorative element removal.

const AboutUs = () => {
  return (
    <section className="w-full min-h-screen flex flex-col md:block md:relative overflow-hidden">
      {/* Background Image Section 
          Mobile: Top 40% height, relative.
          Desktop: Full screen, absolute behind content.
      */}
      <div className="relative w-full h-[50vh] md:absolute md:inset-0 md:h-full md:z-0">
        <HeroBackground simple imageClass="object-top" />
        {/* Desktop Overlay: Only visible on md+ to dim the background for text */}
        <div className="hidden md:block absolute inset-0 bg-background/85 z-10" />
      </div>

      {/* Content Section 
          Mobile: Bottom section, solid background.
          Desktop: Centered overlay, transparent background.
      */}
      <div className="relative z-20 w-full flex-1 bg-background px-6 py-12 flex flex-col items-center justify-center text-center md:bg-transparent md:h-full md:py-0">
        {/* Subtitle */}
        <h3 className="font-urbanist text-primary-color/70 uppercase tracking-[0.2em] text-sm md:text-base mb-6 md:mb-8">
          About Resonance Rehab
        </h3>

        {/* Main Title */}
        {/* Main Title */}
        <h1 className="font-autumn text-5xl md:text-7xl lg:text-[5.5rem] leading-[1.1] mb-8 md:mb-12 flex flex-col items-center">
          <div className="block">
            <span className="text-secondary-color">Care</span>{" "}
            <span className="text-primary-color">That Connects.</span>
          </div>
          <div className="block mt-2 md:mt-2">
            <span className="text-secondary-color md:ml-4">Love</span>{" "}
            <span className="text-primary-color">That Protects.</span>
          </div>
        </h1>

        {/* Body Text */}
        <div className="space-y-6 max-w-2xl mx-auto font-urbanist text-primary-color/80 text-lg md:text-xl leading-relaxed">
          <p>
            At Resonance Rehab, we believe every child deserves the best start
            in life.
          </p>
          <p>
            Our certified therapists, psychologists, and counselors help
            children overcome developmental, behavioral, and emotional
            challenges, with kindness, patience, and expertise.
          </p>
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-6 mt-12 md:mt-16">
          {SOCIAL_LINKS.map((icon) => (
            <a
              key={icon}
              href="#"
              className="group transition-transform hover:scale-110"
              aria-label={icon}
            >
              <img
                src={`/icons/${icon}.svg`}
                alt={icon}
                className="w-6 h-6 md:w-7 md:h-7 text-primary-color brightness-0 opacity-70 group-hover:opacity-100 transition-opacity"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
export default AboutUs;
