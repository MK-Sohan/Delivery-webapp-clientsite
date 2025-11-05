import React, { useEffect, useRef } from "react";
import casio from "../../assets/brands/casio.png";
import randstad from "../../assets/brands/randstad.png";
import Amazon from "../../assets/brands/amazon.png";
import Moonstar from "../../assets/brands/moonstar.png";
import Start from "../../assets/brands/start.png";
import StartPeople from "../../assets/brands/start-people 1.png";

const logos = [
    { name: "Casio", src: casio },
    { name: "Amazon", src: Amazon },
    { name: "Moonstar", src: Moonstar },
    { name: "Start", src: Start },
    { name: "StartPeople", src: StartPeople },
    { name: "Randstad", src: randstad },
];

const BrandCarousel = () => {
    const trackRef = useRef(null);

    useEffect(() => {
        const track = trackRef.current;
        let position = 0;
        const speed = 2; // Adjust scroll speed (px per frame)

        const move = () => {
            position += speed;
            if (position >= track.scrollWidth / 2) {
                position = 0;
            }
            track.style.transform = `translateX(${-position}px)`; // negative for correct scroll direction
            requestAnimationFrame(move);
        };

        requestAnimationFrame(move);
    }, []);

    return (
        <section className="py-10 overflow-hidden">
            <h2 className="text-center text-xl md:text-2xl font-semibold text-gray-800 mb-8">
                We've helped thousands of sales teams
            </h2>

            <div className="relative overflow-hidden w-full">
                <div
                    ref={trackRef}
                    className="flex w-max"
                    style={{
                        transform: "translateX(0)",
                        whiteSpace: "nowrap",
                        willChange: "transform",
                    }}
                >
                    {[...logos, ...logos].map((logo, index) => (
                        <div
                            key={index}
                            className="flex-shrink-0 w-32 md:w-40 mx-8 flex items-center justify-center"
                        >
                            <img
                                src={logo.src}
                                alt={logo.name}
                                className="w-full object-contain grayscale hover:grayscale-0 transition duration-300"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BrandCarousel;
