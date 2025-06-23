import { useState } from "react";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "Can you edit a video with custom requirements??",
    answer:
      "Yes, you are always welcome to come with custom requirements. If you have any special instructions then you can discuss it with me in WhatsApp or Instagram.",
  },
  {
    question: "Do you edit videos on urgent basis like hours or in a day?",
    answer: "Yes, with additional charges I also edit videos urgently.",
  },
  {
    question: "Can we enter into a contract?",
    answer: "Yes, you can!",
  },
  {
    question: "Can I schedule a meeting?",
    answer: "Yes! Please let me know when you are free and we are good to go",
  },
];

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-white w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] py-16 font-sans">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        {/* FAQ Heading - font-light */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="font-light text-left lg:text-7xl md:text-6xl sm:text-5xl text-4xl text-[#1a1a1a] mb-15 text-gray-900"
        >
          FAQ
        </motion.h2>

        {/* FAQ Items */}
        <div className="space-y-6 max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-300 rounded-xl overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center p-5 text-lg text-gray-900 font-normal focus:outline-none"
                aria-expanded={activeIndex === index}
                aria-controls={`faq-answer-${index}`}
                id={`faq-question-${index}`}
              >
                {faq.question}
                <span className="text-2xl select-none">
                  {activeIndex === index ? "−" : "+"}
                </span>
              </button>

              <motion.div
                id={`faq-answer-${index}`}
                role="region"
                aria-labelledby={`faq-question-${index}`}
                initial={{ opacity: 0, y: -10, height: 0, paddingTop: 0, paddingBottom: 0 }}
                animate={
                  activeIndex === index
                    ? {
                      opacity: 1,
                      y: 0,
                      height: "auto",
                      paddingTop: "1.25rem",
                      paddingBottom: "1.25rem",
                    }
                    : {
                      opacity: 0,
                      y: -10,
                      height: 0,
                      paddingTop: 0,
                      paddingBottom: 0,
                    }
                }
                transition={{ duration: 0.3, ease: "easeInOut" }}
                style={{ overflow: "hidden" }}
              >
                <div className="px-5 text-gray-700 font-normal">{faq.answer}</div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
