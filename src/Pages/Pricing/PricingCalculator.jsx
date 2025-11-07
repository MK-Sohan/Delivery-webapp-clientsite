import React, { useState } from "react";

const PricingCalculator = () => {
    const [parcelType, setParcelType] = useState("");
    const [destination, setDestination] = useState("");
    const [weight, setWeight] = useState("");
    const [cost, setCost] = useState(null);

    const parcelTypes = [
        "Document",
        "Electronics",
        "Clothing",
        "Food Item",
        "Fragile Item",
        "Other",
    ];

    const districts = [
        "Dhaka", "Chittagong", "Rajshahi", "Khulna", "Barisal", "Sylhet", "Rangpur", "Mymensingh",
        "Cumilla", "Gazipur", "Narayanganj", "Tangail", "Bogra", "Jessore", "Narsingdi", "Dinajpur",
        "Faridpur", "Pabna", "Noakhali", "Kushtia", "Jamalpur", "Naogaon", "Sirajganj", "Cox’s Bazar",
        "Manikganj", "Feni", "Brahmanbaria", "Joypurhat", "Jhenaidah", "Chuadanga", "Magura", "Satkhira",
        "Bagerhat", "Narail", "Pirojpur", "Jhalokathi", "Bhola", "Patuakhali", "Barguna", "Habiganj",
        "Maulvibazar", "Sunamganj", "Nilphamari", "Lalmonirhat", "Kurigram", "Gaibandha", "Thakurgaon",
        "Panchagarh", "Sherpur", "Netrokona", "Madaripur", "Gopalganj", "Shariatpur", "Kishoreganj"
    ];

    const calculateCost = () => {
        if (!parcelType || !destination || !weight) {
            alert("Please fill all fields!");
            return;
        }

        const baseCost = destination === "Dhaka" ? 80 : 160;
        const weightCost = parseFloat(weight) * 20;
        setCost(baseCost + weightCost);
    };

    const resetForm = () => {
        setParcelType("");
        setDestination("");
        setWeight("");
        setCost(null);
    };

    return (
        <section className="py-16 px-6 md:px-16 lg:px-24 bg-white">
            <div className="max-w-5xl mx-auto border border-dashed border-blue-200 rounded-2xl p-8 shadow-sm">
                {/* Header */}
                <div className="mb-10 border-b border-dashed pb-6">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#004c3f] mb-2">
                        Pricing Calculator
                    </h2>
                    <p className="text-gray-500 text-sm md:text-base leading-relaxed">
                        Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle.
                        From personal packages to business shipments — we deliver on time, every time.
                    </p>
                </div>

                {/* Calculator Section (Form + Result) */}
                <div className="text-center">
                    <h3 className="text-xl font-semibold text-[#004c3f] mb-8">
                        Calculate Your Cost
                    </h3>

                    <div className="grid grid-cols-1 lg:flex lg:justify-center gap-3    ">
                        {/* Left: Form */}
                        <div className="max-w-md mx-auto w-full lg:w-[50%] flex flex-col gap-5 text-left ">
                            {/* Parcel Type */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Parcel type
                                </label>
                                <select
                                    value={parcelType}
                                    onChange={(e) => setParcelType(e.target.value)}
                                    className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-400"
                                >
                                    <option value="">Select Parcel type</option>
                                    {parcelTypes.map((type, index) => (
                                        <option key={index} value={type}>
                                            {type}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            {/* Delivery Destination */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Delivery Destination
                                </label>
                                <select
                                    value={destination}
                                    onChange={(e) => setDestination(e.target.value)}
                                    className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-400"
                                >
                                    <option value="">Select Delivery Destination</option>
                                    {districts.map((district, index) => (
                                        <option key={index} value={district}>
                                            {district}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            {/* Weight */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Weight (KG)
                                </label>
                                <input
                                    type="number"
                                    value={weight}
                                    onChange={(e) => setWeight(e.target.value)}
                                    placeholder="Enter weight"
                                    className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-400"
                                />
                            </div>

                            {/* Buttons */}
                            <div className="flex gap-4 mt-2">
                                <button
                                    onClick={resetForm}
                                    className="w-1/2 py-2 border border-green-400 text-green-700 rounded-md hover:bg-green-50 transition"
                                >
                                    Reset
                                </button>
                                <button
                                    onClick={calculateCost}
                                    className="w-1/2 py-2 bg-lime-400 text-white font-semibold rounded-md hover:bg-lime-500 transition"
                                >
                                    Calculate
                                </button>
                            </div>
                        </div>

                        {/* Right: Result */}
                        <div className="flex justify-center items-center lg:w-[50%]  ">
                            {cost !== null ? (
                                <h3 className="text-5xl md:text-6xl font-extrabold text-black">
                                    {cost} Tk
                                </h3>
                            ) : (
                                <p className="text-gray-400 text-lg">Your result will appear here</p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PricingCalculator;
