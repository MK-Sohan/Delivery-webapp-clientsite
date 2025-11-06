import React from "react";
import bgImage from "../../assets/be-a-merchant-bg.png";
import img from "../../assets/location-merchant.png";
const SatisfactionSection = () => {
    return (
        <section className="flex justify-center relative bg-[#002E2E] text-white py-12 px-6 md:px-12 lg:px-20 rounded-3xl overflow-hidden mt-10 m-auto w-[93%] h-[438px]">
            {/* Background image ABOVE the green color */}
            <div
                className="absolute inset-0 bg-no-repeat bg-cover bg-center opacity-100 z-10"
                style={{
                    backgroundImage: `url(${bgImage})`,
                }}
            ></div>

            {/* Dark green overlay (below text but above background) */}
            <div className="absolute inset-0 bg-[#002E2E]/90 z-20"></div>

            {/* Actual content */}
            <div className="relative z-30 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
                {/* Left Text Content */}
                <div className="md:w-1/2 space-y-5 text-center md:text-left">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-snug">
                        Merchant and Customer Satisfaction <br />
                        <span className="text-white">is Our First Priority</span>
                    </h2>

                    <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                        We offer the lowest delivery charge with the highest value along
                        with 100% safety of your product. Profast Courier delivers your
                        parcels in every corner of Bangladesh right on time.
                    </p>

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 pt-2">
                        <button className="bg-lime-400 text-black font-semibold px-3 py-3 rounded-full hover:bg-lime-300 transition duration-300">
                            Become a Merchant
                        </button>
                        <button className="border border-lime-400 text-lime-400 font-semibold px-3 py-3 rounded-full hover:bg-lime-400 hover:text-black transition duration-300">
                            Earn with Profast Courier
                        </button>
                    </div>
                </div>

                {/* Right Illustration */}
                <div className="md:w-1/2 flex justify-center md:justify-end">
                    <img
                        src={img} // ✅ Replace with your image path
                        alt="Parcel Illustration"
                        className="w-72 md:w-80 lg:w-96 object-contain"
                    />
                </div>
            </div>
        </section>
    );
};

export default SatisfactionSection;
