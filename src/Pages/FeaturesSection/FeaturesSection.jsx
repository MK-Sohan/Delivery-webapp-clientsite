import React from "react";
import imag from '../../assets/live-tracking.png'
import imag2 from '../../assets/safe-delivery.png'

const features = [
    {
        title: "Live Parcel Tracking",
        description:
            "Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment’s journey and get instant status updates for complete peace of mind.",
        img: imag, // Replace with your image path
    },
    {
        title: "100% Safe Delivery",
        description:
            "We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time.",
        img: imag2, // Replace with your image path
    },
    {
        title: "24/7 Call Center Support",
        description:
            "Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns—anytime you need us.",
        img: imag2, // Replace with your image path
    },
];

const FeaturesSection = () => {
    return (
        <div className=" ">
            <div className="border-t border-dashed max-w-[93%] m-auto">

            </div>
            <section className=" py-12 px-4 md:px-10 lg:px-16">
                <div className=" mx-auto space-y-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="flex flex-col md:flex-row items-center bg-white rounded-2xl shadow-sm p-6 md:p-8 gap-6"
                        >
                            {/* Image Section */}
                            <div className="flex-shrink-0 w-full md:w-1/4 flex justify-center">
                                <img
                                    src={feature.img}
                                    alt={feature.title}
                                    className="w-40 md:w-44 lg:w-52 object-contain"
                                />
                            </div>

                            {/* Text Section */}
                            <div className="md:w-3/4 text-center md:text-left">
                                <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            <div className="border-b border-dashed  max-w-[93%] m-auto">

            </div>
        </div>
    );
};

export default FeaturesSection;
