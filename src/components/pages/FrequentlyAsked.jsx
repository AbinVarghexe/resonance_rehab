import React, { useState, forwardRef } from "react";
import { faqData } from "../../data/faqData";
import { FAQCard } from "../ui/Faqcard";

const FrequentlyAsked = forwardRef((props, ref) => {
  const [showFullFAQ, setShowFullFAQ] = useState(false);

  if (showFullFAQ) {
    return <FullFAQPage onBack={() => setShowFullFAQ(false)} />;
  }

  const questions = faqData.generalTechnical.questions;

  return (
    <div ref={ref} className="min-h-screen bg-background">
      <div className="container-custom py-6 sm:py-8 md:py-12 px-4 md:px-6">
        <div className="text-center mb-6 sm:mb-8 md:mb-12 mt-6 sm:mt-8 md:mt-16">
          <h1 className="font-autumn text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-3 sm:mb-4 px-2 sm:px-4">
            <span className="text-primary-color">Frequently </span>
            <span className="text-secondary-color italic">Asked</span>
            <span className="text-primary-color"> Questions</span>
          </h1>
        </div>

        <div className="max-w-3xl mx-auto px-4 md:px-0">
          <h2 className="font-urbanist text-secondary-color text-center text-xs sm:text-sm md:text-base font-medium mb-5 sm:mb-6 md:mb-8">
            General & Technical
          </h2>

          <div className="space-y-3 sm:space-y-4 md:space-y-6">
            {questions.slice(0, 3).map((faq, index) => (
              <FAQCard
                key={index}
                question={faq.question}
                answer={faq.answer}
              />
            ))}
          </div>

          <div className="relative mt-3 sm:mt-4 md:mt-6">
            <div className="bg-white rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 shadow-sm max-h-[80px] sm:max-h-[90px] md:max-h-[150px] overflow-hidden">
              <h3 className="font-urbanist text-primary-color font-bold text-base sm:text-lg md:text-2xl lg:text-3xl mb-1 sm:mb-1.5 md:mb-2">
                {questions[3].question}
              </h3>
              <p className="font-urbanist text-primary-color/80 font-light text-xs sm:text-sm md:text-base leading-relaxed">
                {questions[3].answer}
              </p>
            </div>

            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 sm:h-20 md:h-28 bg-gradient-to-t from-background via-background/90 to-transparent rounded-b-xl sm:rounded-b-2xl" />

            <div className="absolute inset-0 flex items-end justify-center pb-3 sm:pb-4 md:pb-8">
              <button
                onClick={() => setShowFullFAQ(true)}
                className="bg-button-main text-primary-color font-urbanist font-bold px-4 sm:px-5 md:px-6 py-2 sm:py-2 md:py-2.5 rounded-full shadow-lg hover:opacity-90 active:opacity-80 transition text-xs sm:text-sm md:text-base focus-ring z-10 active:scale-95"
                aria-label="View complete frequently asked questions"
              >
                View Full FAQ
              </button>
            </div>
          </div>

          {/* Extra padding to ensure button is visible during scroll */}
          <div className="h-16 sm:h-20 md:h-32"></div>
        </div>
      </div>
    </div>
  );
});

FrequentlyAsked.displayName = "FrequentlyAsked";

const FullFAQPage = ({ onBack }) => {
  return (
    <div className="fixed inset-0 z-[100] overflow-y-auto bg-background animate-in fade-in duration-300">
      <div className="container-custom py-6 sm:py-8 md:py-12 px-4 md:px-6">
        <div className="text-center mb-6 sm:mb-8 md:mb-12 mt-6 sm:mt-8 md:mt-16">
          <h1 className="font-autumn text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-3 sm:mb-4 px-2 sm:px-4">
            <span className="text-primary-color">Frequently </span>
            <span className="text-secondary-color italic">Asked</span>
            <span className="text-primary-color"> Questions</span>
          </h1>
        </div>

        <div className="max-w-3xl mx-auto space-y-6 sm:space-y-8 md:space-y-12 px-4 md:px-0">
          {Object.values(faqData).map((category, index) => (
            <div key={index}>
              <h2 className="font-urbanist text-secondary-color text-center text-xs sm:text-sm md:text-base font-medium mb-5 sm:mb-6 md:mb-8">
                {category.title}
              </h2>

              <div className="space-y-3 sm:space-y-4 md:space-y-6">
                {category.questions.map((faq, i) => (
                  <FAQCard
                    key={i}
                    question={faq.question}
                    answer={faq.answer}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8 sm:mt-10 md:mt-12 lg:mt-16 px-4 pb-6 sm:pb-8">
          <button
            onClick={onBack}
            className="bg-secondary-color text-white font-urbanist font-semibold px-5 sm:px-6 md:px-8 py-2 sm:py-2.5 md:py-3 rounded-full hover:opacity-90 active:opacity-80 transition text-xs sm:text-sm md:text-base active:scale-95 w-full sm:w-auto max-w-xs sm:max-w-none"
          >
            Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default FrequentlyAsked;