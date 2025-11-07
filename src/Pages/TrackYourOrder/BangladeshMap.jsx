import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix default marker icons
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl:
        "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
    iconUrl:
        "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
    shadowUrl:
        "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

// Component to move map dynamically
const ChangeMapView = ({ coords }) => {
    const map = useMap();
    map.setView(coords, 10);
    return null;
};

const BangladeshMap = () => {
    const [search, setSearch] = useState("");
    const [coords, setCoords] = useState([23.8103, 90.4125]); // Default: Dhaka
    const [placeName, setPlaceName] = useState("Dhaka");
    const [loading, setLoading] = useState(false);

    // Search using OpenStreetMap Nominatim API
    const handleSearch = async () => {
        if (!search.trim()) return;

        setLoading(true);
        try {
            const response = await fetch(
                `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
                    search
                )}`
            );
            const data = await response.json();

            if (data && data.length > 0) {
                const { lat, lon, display_name } = data[0];
                setCoords([parseFloat(lat), parseFloat(lon)]);
                setPlaceName(display_name);
            } else {
                alert("Place not found. Please try another location.");
            }
        } catch (error) {
            console.error("Error fetching location:", error);
            alert("Something went wrong. Try again later.");
        }
        setLoading(false);
    };

    return (
        <section className="py-16 px-6 md:px-16 lg:px-24 bg-gray-50 rounded-3xl">
            <div className="max-w-5xl mx-auto text-center">
                {/* Header */}
                <h2 className="text-3xl md:text-4xl font-bold text-[#004c3f] mb-6">
                    We are available in 64 districts
                </h2>

                {/* Search bar */}
                <div className="flex justify-center items-center gap-3 max-w-md mx-auto mb-10">
                    <input
                        type="text"
                        placeholder="Search here"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        onKeyDown={(e) => e.key === "Enter" && handleSearch()} // 👈 added this line
                        className="w-full border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-lime-400"
                    />
                    <button
                        onClick={handleSearch}
                        disabled={loading}
                        className="bg-lime-400 text-white font-semibold px-6 py-2 rounded-full hover:bg-lime-500 transition disabled:opacity-50"
                    >
                        {loading ? "Searching..." : "Search"}
                    </button>
                </div>

                <hr className="my-10 border-gray-200" />

                {/* Subheader */}
                <h3 className="text-xl font-semibold text-[#004c3f] mb-6">
                    We deliver almost all over Bangladesh
                </h3>

                {/* Map */}
                <div className="h-[400px] w-full rounded-2xl overflow-hidden shadow-md">
                    <MapContainer
                        center={coords}
                        zoom={7}
                        scrollWheelZoom={true}
                        className="h-full w-full"
                    >
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker position={coords}>
                            <Popup>
                                <b>{placeName}</b>
                            </Popup>
                        </Marker>
                        <ChangeMapView coords={coords} />
                    </MapContainer>
                </div>
            </div>
        </section>
    );
};

export default BangladeshMap;
