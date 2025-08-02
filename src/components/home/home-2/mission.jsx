import React from 'react';

function Mission() {
  const missionData = [
    {
      id: 1,
      title: "Mission",
      icon: "fas fa-search",
      description: "To enable research needs of customer for realizing their chemistry. We consider our statement a commitment to our customers.",
      iconColor: "#ff6b35"
    },
    {
      id: 2,
      title: "Vision", 
      icon: "fas fa-eye",
      description: "At Dimer, we strive to be very energetic & innovative to acknowledge customer needs for exploring their experiment.",
      iconColor: "#4285f4"
    },
    {
      id: 3,
      title: "Core Values",
      icon: "fas fa-chart-line",
      description: "Our core values- Accountability, Optimism, Respect, Trust, Communication — are embedded in our Code of Conduct, which establishes standards for ethical behavior & compliance with regulations.",
      iconColor: "#ff9500"
    }
  ];

  return (
    <section className="mission-area pt-130 pb-130">
      <div className="container">
        <div className="text-center tp-section">
          <span className="tp-section__sub-title left-line right-line  mb-20">
            Our Commitment and Vision
          </span>
          <h2 className="tp-section__title mb-4">
            Core Values Driving Our Excellence
          </h2>
        </div>
        
        <div className="row g-4">
          {missionData.map((item, index) => (
            <div key={item.id} className="col-lg-4 col-md-6 col-12">
              <div 
                className="mission-card p-4 shadow-lg h-100 text-center"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mission-icon mb-4">
                  <div 
                    className="icon-wrapper d-inline-flex align-items-center justify-content-center rounded-circle"
                    style={{
                      width: '80px',
                      height: '80px',
                      backgroundColor: `${item.iconColor}20`,
                      border: `2px solid ${item.iconColor}30`
                    }}
                  >
                    <i 
                      className={item.icon}
                      style={{
                        fontSize: '32px',
                        color: item.iconColor
                      }}
                    ></i>
                  </div>
                </div>
                
                <h4 className="services-item__tp-title mb-3">
                  {item.title}
                </h4>
                
                <p className="mission-description mb-0">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Mission;
