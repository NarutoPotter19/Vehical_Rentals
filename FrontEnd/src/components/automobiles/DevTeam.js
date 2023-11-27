
import React from "react";
import Vishnu from "../assets/Vishnu.jpg";
const teamMembers = [
  {
    id: 1,
    name: "Adena Vishnu Vardhan Reddy",
    role: "Full Stack Devolper,UI Designer",

    imageUrl: { Vishnu },
    socialLinks: {
      linkedin: "linkedin.com/in/vishnu-adena",
    },
  },
 
];

const Team = () => {
  return (
    <div className="container mx-auto mt-8 w-full py-[30px] ">
      <h1 className="text-3xl font-semibold mb-8">Our Team</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8  justify-center">
        {teamMembers.map((member) => (
          <div
            key={member.id}
            className="bg-white p-4 rounded-lg shadow-md w-[450px]"
          >
            <img
              src={Vishnu}
              alt={`${member.name}'s headshot`}
              className="w-full h-[500px] object-cover mb-4 rounded-md"
            />
            <h2 className="text-4xl font-bold mb-2">{member.name}</h2>
            <p className="text-gray-600 mb-4 text-xl">{member.role}</p>

            <div className="mt-4">
              {member.socialLinks.linkedin && (
                <a
                  href={member.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mr-4 text-blue-500 hover:underline"
                >
                  LinkedIn
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
