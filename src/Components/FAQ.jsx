import { useState } from "react";

const faqs = [
  { question: "Can you edit a video with custom requirements??", answer: "Yes, you are always welcome to come with custom requirements. If you have any special instructions then you can discuss it with me in WhatsApp or Instagram." },
  { question: "Do you edit videos on urgent basis like hours or in a day?", answer: "Yes, with additional charges I also edit videos urgently." },
  { question: "Can we enter into a contract?", answer: "Yes, you can!" },
  { question: "Can I schedule a meeting?", answer: "Yes! Please let me know when you are free and we are good to go" }
];

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-15 font-sans overflow-hidden">
      <div className="max-w-auto mx-auto px-6">
        <h2 className="text-left lg:text-7xl md:text-6xl sm:text-5xl text-4xl text-[#1a1a1a] mb-10">FAQ</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-300 rounded-xl">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center p-4 text-lg text-gray-900 font-medium focus:outline-none"
              >
                {faq.question}
                <span className="text-2xl">{activeIndex === index ? "−" : "+"}</span>
              </button>
              {activeIndex === index && (
                <div className="p-4 text-gray-700 border-t border-gray-300">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
