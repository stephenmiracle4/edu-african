import React, { useState } from "react";
import "./AICards.css";

const AICards = () => {
  // Data for info cards
  const [infoCards] = useState([
    {
      id: 1,
      title: "Why Choose Us?",
      content:
        "At EduBin, we’re dedicated to delivering quality, culturally relevant education tailored to Africa’s unique needs. With years of expertise, a student-centered approach, and innovative learning solutions, we make education accessible, inclusive, and impactful. By choosing us, you’re not just investing in your future, you’re contributing to Africa’s growth and transformation. Let’s build a brighter tomorrow together!",
    },
    {
      id: 2,
      title: "Our Mission",
      content:
        "Empowering Africa through accessible, inclusive, and innovative education for a brighter future.",
    },
    {
      id: 3,
      title: "Our Vision",
      content:
        "To be the leading platform transforming education in Africa, fostering innovation, inclusivity, and lifelong learning for sustainable development.",
    },
  ]);

  // State to track expanded content for each card
  const [expandedCard, setExpandedCard] = useState(false);

  // Toggle the expanded state of the card's content
  const toggleExpand = (id) => {
    setExpandedCard(expandedCard === id ? false : id);
  };

  // Data for stats section
  const stats = [
    { id: 1, name: "Students Enrolled", value: "30,000+" },
    { id: 2, name: "Courses Uploaded", value: "41,000+" },
    { id: 3, name: "People Certified", value: "11,000+" },
    { id: 4, name: "Global Teachers", value: "39,000+" },
  ];

  return (
    <div className="container">
      {/* Info Section */}
      <div className="info-section">
        {infoCards.map((card) => (
          <div key={card.id} className="info-card">
            <h1 className="info-number">{`0${card.id}`}</h1>
            <h2>{card.title}</h2>
            <p>
              {expandedCard === card.id
                ? card.content 
                : `${card.content.substring(0, 100)}...`} 
            </p>
            <button onClick={() => toggleExpand(card.id)}>
              {expandedCard === card.id ? "See Less" : "See More"}
            </button>
          </div>
        ))}
      </div>

      {/* Stats Section */}
      <div>
      <dl className="mt-16 grid grid-cols-1 gap-20 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.name} className="flex flex-col-reverse gap-1">
                <dt className="text-base/7 text-#ffa500-350">{stat.name}</dt>
                <dd className="text-4xl font-semibold tracking-tight text-dar-blue">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>
    </div>
  );
};

export default AICards;
