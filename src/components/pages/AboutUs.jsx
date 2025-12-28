import React, { forwardRef } from "react";
import { useNavigate } from "react-router-dom";
import { SOCIAL_LINKS } from "../../constants/heroConstants";
import HeroBackground from "../sections/hero/HeroBackground";
import MainButton from "../ui/MainButton";

const AboutUs = forwardRef((props, ref) => {
  const navigate = useNavigate();

  return (
    <section
      ref={ref}
      className="w-full flex flex-col md:block relative md:opacity-0 md:translate-y-20"
    >
      {/* Mobile-Only Image: To ensure AboutUs stands alone when scroll animation is disabled on mobile */}
      <div className="md:hidden relative w-full h-[50vh] shrink-0">
        <HeroBackground simple imageClass="object-bottom" />
      </div>

      <div className="about-content-inner relative z-20 w-full flex-1 bg-background px-6 py-12 flex flex-col items-center justify-center text-center">
        {/* Subtitle */}
        <h3 className="font-urbanist text-primary-color/70 uppercase tracking-[0.2em] text-sm md:text-base mb-6 md:mb-8">
          About Resonance Rehab
        </h3>

        {/* Main Title */}
        <h1 className="font-autumn text-5xl md:text-7xl lg:text-[5.5rem] leading-[0.9] mb-8 md:mb-12 flex flex-col items-center">
          <div className="block">
            <span className="text-secondary-color">Care</span>{" "}
            <span className="text-primary-color">That Connects.</span>
          </div>
          <div className="block mt-2 md:mt-2">
            <span className="text-secondary-color md:ml-4">Love</span>{" "}
            <span className="text-primary-color">That Protects.</span>
          </div>
        </h1>

        {/* CTA Button - Desktop/Responsive */}
        <div className="mb-8 md:mb-12">
          <MainButton
            onClick={() => navigate("/contact")}
            className="inline-flex items-center justify-center px-8 py-3 md:px-10 md:py-4 text-base md:text-lg font-bold tracking-wide transition-transform hover:scale-105 hover:shadow-lg active:scale-95"
          >
            Start Your Child’s Journey
          </MainButton>
        </div>

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
});

export default AboutUs;
