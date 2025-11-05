import React, { useState } from "react";
import { ChevronDown, ChevronUp, ArrowRight } from "lucide-react";
import { MoveUpRight } from 'lucide-react';
import { Link } from "react-router";

const faqs = [
    {
        question: "How does this posture corrector work?",
        answer:
            "A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day. Here’s how it typically functions: A posture corrector works by providing support and gentle alignment to your shoulders.",
    },
    {
        question: "Is it suitable for all ages and body types?",
        answer:
            "Yes, posture correctors are designed to fit various body types and can be adjusted for comfort. However, it’s recommended to consult a healthcare professional for children or people with specific conditions.",
    },
    {
        question: "Does it really help with back pain and posture improvement?",
        answer:
            "Yes, regular use of a posture corrector can help relieve mild back pain and improve posture by training your muscles to align properly.",
    },
    {
        question: "Does it have smart features like vibration alerts?",
        answer:
            "Some posture correctors include smart sensors that gently vibrate when you slouch, helping you develop better posture habits over time.",
    },
    {
        question: "How will I be notified when the product is back in stock?",
        answer:
            "You can subscribe to our email notifications. We’ll send you an update as soon as the product becomes available again.",
    },
];

export default function FaqSection() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFaq = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className=" py-16 px-6">
            <div className="max-w-[80%] mx-auto text-center mb-10">
                <h2 className="text-3xl sm:text-4xl font-semibold text-gray-800 mb-4">
                    Frequently Asked Question (FAQ)
                </h2>
                <p className="text-gray-500 max-w-2xl mx-auto">
                    Enhance posture, mobility, and well-being effortlessly with Posture
                    Pro. Achieve proper alignment, reduce pain, and strengthen your body
                    with ease!
                </p>
            </div>

            <div className="max-w-[80%] mx-auto space-y-4">
                {faqs.map((faq, index) => (
                    <div
                        key={index}
                        className={`border border-gray-200 rounded-xl bg-white shadow-sm transition-all duration-300 ${openIndex === index ? "bg-teal-50 border-teal-200" : ""
                            }`}
                    >
                        <button
                            onClick={() => toggleFaq(index)}
                            className="w-full flex justify-between items-center px-5 py-4 text-left"
                        >
                            <span
                                className={`font-medium text-gray-800 text-base sm:text-lg transition-colors ${openIndex === index ? "text-teal-700" : "text-gray-800"
                                    }`}
                            >
                                {faq.question}
                            </span>
                            {openIndex === index ? (
                                <ChevronUp className="w-5 h-5 text-teal-700 transition-transform duration-300" />
                            ) : (
                                <ChevronDown className="w-5 h-5 text-gray-600 transition-transform duration-300" />
                            )}
                        </button>

                        <div
                            className={`overflow-hidden transition-all duration-500 ease-in-out ${openIndex === index ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                                }`}
                        >
                            <div className="px-5 pb-5 text-gray-600 leading-relaxed text-sm sm:text-base">
                                {faq.answer}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="text-center mt-10">
                <button className="bg-lime-300 hover:bg-lime-400 transition-colors text-gray-900 font-medium py-3 px-6 rounded-full inline-flex items-center gap-2">
                    See More FAQ’s
                    <ArrowRight className="w-5 h-5" />
                </button>
                <Link className=""><button className='bg-black text-[#CAEB66] rounded-full p-[10px]'><MoveUpRight /></button></Link>
            </div>
        </section>
    );
}
