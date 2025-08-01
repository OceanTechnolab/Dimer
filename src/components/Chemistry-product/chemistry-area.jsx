import React from "react";

const ProductCard = ({ heading, description, brochureText = "download broch", onView }) => {
    return (
        <div className="product-card">
            <h2 className="heading">{heading}</h2>

            <div className="brochure-section">
                <p>{description}</p>
            </div>

            <button className="view-button" onClick={onView}>
                View Product
            </button>
        </div>
    );
};

const ChemistryArea = () => {
    return (
        <div className="chemistry-area">
            <h5>Chemistry Products are substances used in research, industry, or daily life, designed for specific chemical reactions or applications.</h5>
        <div className="card-grid pt-10 pb-120">
            <ProductCard
                heading="ASYMMETRIC SYNTHESIS"
                description="Asymmetric Synthesis is the process of making molecules with a specific 3D orientation, favoring one enantiomer over the other."
                onView={() => window.location.href = '/asymmetric-synthesis'}
            />
            <ProductCard
                heading="MATERIAL SCIENCE"
                description="Material Science is the study of materials' structure and properties, aiming to improve their performance in various applications."
                onView={() => window.location.href = '/material-science'}
            />
            <ProductCard
                heading="CELL CULTURE"
                description="Cell Culture is a technique used to grow cells under controlled conditions for research and development purposes."
                onView={() => window.location.href = '/cell-culture'}
            />
            <ProductCard
                heading="CELL CULTURE"
                description="Cell Culture is a technique used to grow cells under controlled conditions for research and development purposes."
                onView={() => window.location.href = '/cell-culture'}
            />
             </div>
        </div>
    );
};

export default ChemistryArea;
