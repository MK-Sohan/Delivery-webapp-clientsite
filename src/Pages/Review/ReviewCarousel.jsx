import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
    {
        name: "Rasel Ahamed",
        title: "CTO",
        text: "Posture correctors improve alignment by gently guiding shoulders and spine into the proper position throughout daily activities.",
    },
    {
        name: "Awlad Hossin",
        title: "Senior Product Designer",
        text: "Posture correctors improve alignment by gently guiding shoulders and spine into the proper position throughout daily activities.",
    },
    {
        name: "Nasir Uddin",
        title: "CEO",
        text: "Posture correctors improve alignment by gently guiding shoulders and spine into the proper position throughout daily activities.",
    },
    {
        name: "Samiul Haque",
        title: "Developer",
        text: "Posture correctors improve alignment by gently guiding shoulders and spine into the proper position throughout daily activities.",
    },
    {
        name: "Anika Rahman",
        title: "UX Researcher",
        text: "Posture correctors improve alignment by gently guiding shoulders and spine into the proper position throughout daily activities.",
    },
    {
        name: "Rasel Ahamed",
        title: "CTO",
        text: "Posture correctors improve alignment by gently guiding shoulders and spine into the proper position throughout daily activities.",
    },
    {
        name: "Awlad Hossin",
        title: "Senior Product Designer",
        text: "Posture correctors improve alignment by gently guiding shoulders and spine into the proper position throughout daily activities.",
    },
    {
        name: "Nasir Uddin",
        title: "CEO",
        text: "Posture correctors improve alignment by gently guiding shoulders and spine into the proper position throughout daily activities.",
    },
    {
        name: "Samiul Haque",
        title: "Developer",
        text: "Posture correctors improve alignment by gently guiding shoulders and spine into the proper position throughout daily activities.",
    },
    {
        name: "Anika Rahman",
        title: "UX Researcher",
        text: "Posture correctors improve alignment by gently guiding shoulders and spine into the proper position throughout daily activities.",
    },
];

export default function TestimonialCarousel() {
    const [current, setCurrent] = useState(1);
    const [activeButton, setActiveButton] = useState(null);

    const nextSlide = () => {
        setActiveButton("right");
        setTimeout(() => setActiveButton(null), 300);
        setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setActiveButton("left");
        setTimeout(() => setActiveButton(null), 300);
        setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    };

    return (
        <div className="flex flex-col items-center justify-center  py-16">
            <div className="relative w-full max-w-6xl overflow-hidden">
                <div
                    className="flex transition-transform duration-700 ease-in-out"
                    style={{
                        transform: `translateX(-${current * (100 / 3)}%)`,
                    }}
                >
                    {testimonials.map((item, index) => {
                        // Calculate position relative to current
                        const position = (index - current + testimonials.length) % testimonials.length;
                        const isCenter = position === 1;
                        // const isLeft = position === testimonials.length - 3;
                        // const isRight = position === 3;

                        return (
                            <div
                                key={index}
                                className={`w-1/3 flex-shrink-0 flex h-full justify-center transition-all duration-700 ease-in-out transform ${isCenter
                                    ? "scale-100 opacity-100 blur-0"
                                    : "scale-90 opacity-60 blur-sm"
                                    }`}
                            >
                                <div
                                    className={`${isCenter ? "bg-white shadow-xl" : "bg-gray-100"
                                        } w-5/5 p-3 rounded-3xl transition-all duration-700 ease-in-out`}
                                >
                                    <Quote className="text-teal-400 w-10 h-10 mb-4" />
                                    <p className="text-gray-700 text-lg leading-relaxed mb-6">
                                        {item.text}
                                    </p>
                                    <hr className="border-dashed border-gray-300 mb-6" />
                                    <div className="flex items-center gap-4">
                                        <div className="w-14 h-14 bg-teal-900 rounded-full"></div>
                                        <div>
                                            <h4
                                                className={`font-semibold text-lg ${isCenter ? "text-teal-900" : "text-gray-400"
                                                    }`}
                                            >
                                                {item.name}
                                            </h4>
                                            <p className="text-gray-500">{item.title}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Navigation */}
                <div className="flex justify-center items-center gap-6 mt-10">
                    <button
                        onClick={prevSlide}
                        className={`p-3 rounded-full shadow transition-colors duration-300 ${activeButton === "left"
                            ? "bg-green-400 text-white"
                            : "bg-white hover:bg-gray-100"
                            }`}
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>

                    <div className="flex gap-2">
                        {testimonials.map((_, i) => (
                            <div
                                key={i}
                                className={`w-3 h-3 rounded-full transition-colors ${current === i ? "bg-teal-900" : "bg-teal-300"
                                    }`}
                            ></div>
                        ))}
                    </div>

                    <button
                        onClick={nextSlide}
                        className={`p-3 rounded-full shadow transition-colors duration-300 ${activeButton === "right"
                            ? "bg-green-400 text-white"
                            : "bg-white hover:bg-gray-100"
                            }`}
                    >
                        <ChevronRight className="w-6 h-6" />
                    </button>
                </div>
            </div>
        </div>
    );
}
