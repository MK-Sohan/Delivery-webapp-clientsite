import React, { useState } from "react";

const AboutUs = () => {
    const [activeTab, setActiveTab] = useState("Story");

    const tabs = [
        { name: "Story" },
        { name: "Mission" },
        { name: "Success" },
        { name: "Team & Others" },
    ];

    const content = {
        Story: `We started with a simple promise — to make parcel delivery fast, reliable, and stress-free. Over the years, our commitment to real-time tracking, efficient logistics, and customer-first service has made us a trusted partner for thousands. Whether it's a personal gift or a time-sensitive business delivery, we ensure it reaches its destination — on time, every time.`,
        Mission: `Our mission is to redefine logistics through technology and dedication. We aim to deliver not just parcels but trust and convenience — ensuring every shipment is handled with precision and care.`,
        Success: `Our success is built on customer satisfaction. Every on-time delivery, every happy client fuels our growth and motivates us to reach even higher standards of service excellence.`,
        "Team & Others": `Behind every delivery stands a passionate team. From drivers to support staff — we are united by one goal: to make every delivery simple, fast, and stress-free for our customers.`,
    };

    return (
        <section className="py-16 px-6 md:px-16 lg:px-24 bg-white">
            <div className="max-w-5xl mx-auto border border-blue-200 rounded-2xl p-8 shadow-sm">
                {/* Header */}
                <div className="mb-10 border border-dotted border-blue-200 p-4 rounded-lg">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#004c3f] mb-2">
                        About Us
                    </h2>
                    <p className="text-gray-500 text-sm md:text-base leading-relaxed">
                        Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle.
                        From personal packages to business shipments — we deliver on time, every time.
                    </p>
                </div>

                {/* Tabs */}
                <div className="border border-dotted border-blue-200 p-6 rounded-lg">
                    <div className="flex flex-wrap gap-6 mb-6 text-lg">
                        {tabs.map((tab) => (
                            <button
                                key={tab.name}
                                onClick={() => setActiveTab(tab.name)}
                                className={`transition-all duration-300 font-semibold ${activeTab === tab.name
                                        ? "text-green-600 scale-105"
                                        : "text-gray-700 hover:text-green-500"
                                    }`}
                            >
                                {tab.name}
                            </button>
                        ))}
                    </div>

                    {/* Tab Content */}
                    <div className="text-gray-600 leading-relaxed space-y-5">
                        <p>{content[activeTab]}</p>
                        <p>{content[activeTab]}</p>
                        <p>{content[activeTab]}</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
