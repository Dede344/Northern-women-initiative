import React from "react";
import Layout from "@/components/layout/Layout";
// Team members with real roles
const teamMembers = [
  {
    name: "Fatima Yusuf",
    role: "Founder",
    image: "/assets/team/fatima.jpg",
  },
  {
    name: "Grace Okafor",
    role: "Secretary",
    image: "/assets/team/grace.jpg",
  },
  {
    name: "Amina Bello",
    role: "Managing Director",
    image: "/assets/team/amina.jpg",
  },
  {
    name: "Ngozi Uche",
    role: "Director of Program",
    image: "/assets/team/ngozi.jpg",
  },
  {
    name: "Halima Musa",
    role: "Logistic Manager",
    image: "/assets/team/halima.jpg",
  },
  {
    name: "Bola Adeyemi",
    role: "Head of Operation",
    image: "/assets/team/bola.jpg",
  },
  {
    name: "Chinwe Eze",
    role: "Human Resources Management",
    image: "/assets/team/chinwe.jpg",
  },
];

const partners = [
  { name: "NITDA", logo: "/assets/partners/nitda.png" },
  { name: "Ministry Of Women Affair, Nigeria", logo: "/assets/partners/ministry-women.png" },
];

const OurTeam: React.FC = () => {
  return (
    <Layout>
      {/* Hero Section - matches About page structure and colors */}
      <section className="bg-gradient-hero py-20">
        <div className="container-section">
          <div className="max-w-3xl">
            <span className="text-secondary font-medium text-sm uppercase tracking-wider">
              Our Team
            </span>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary-foreground mt-3 mb-6">
              Northern Women Initiative Team
            </h1>
            <p className="text-lg text-primary-foreground/90">
              A dedicated team working together to deliver impact across all our programs.
            </p>
          </div>
        </div>
      </section>

      {/* Team and Partners Section */}
      <div className="max-w-6xl mx-auto py-12 px-4">
        <h1 className="text-4xl font-bold mb-8 text-center">Meet the Team</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-16">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="bg-white rounded-lg shadow p-6 flex flex-col items-center transition-transform duration-200 hover:scale-105 hover:shadow-lg group cursor-pointer"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-24 h-24 rounded-full object-cover mb-4 border-2 border-primary group-hover:border-secondary"
                onError={(e) => (e.currentTarget.src = 'https://via.placeholder.com/96')}
              />
              <h2 className="text-xl font-semibold mb-1 group-hover:text-primary transition-colors duration-200">{member.name}</h2>
              <p className="text-gray-600 group-hover:text-secondary transition-colors duration-200">{member.role}</p>
            </div>
          ))}
        </div>

        <h1 className="text-3xl font-bold mb-6 text-center">Our Partners</h1>
        <div className="flex flex-wrap justify-center gap-8">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="flex flex-col items-center transition-transform duration-200 hover:scale-105 cursor-pointer"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="w-32 h-16 object-contain mb-2 bg-white rounded shadow"
                onError={(e) => (e.currentTarget.src = 'https://via.placeholder.com/128x64')}
              />
              <span className="text-gray-700 text-sm text-center">{partner.name}</span>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default OurTeam;