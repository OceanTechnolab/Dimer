import React from "react";
import Image from "next/image";
import periodicTable from "public/assets/img/Periodic-Table.png";

function Table() {
    return (
        <section className="7 py-20 bg-white text-center">
            {/* Centered Image */}
            <div className="image-container">
                <Image
                    src={periodicTable}
                    alt="Periodic Table"
                    width={600}
                    height={400}
                    className="rounded-md shadow-md" />
            </div>

            {/* About Content */}
            <div className="max-w-3xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-[#0f0f3d] mb-4">About Dimer Scientific</h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                    Dimer Scientific is a leading chemical research and manufacturing company with over a decade of excellence in R&D.
                    Our focus is on innovation, precision, and timely delivery of high-quality chemical compounds for industries
                    including pharmaceuticals, agriculture, and advanced materials. With a catalog of 25,000+ compounds, we empower
                    scientific breakthroughs every day.
                </p>
            </div>
        </section>
    );
}

export default Table;
