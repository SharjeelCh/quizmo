import React from "react";

const AboutUs = () => {
 return (
  <div className="bg-gray-100 py-10 px-4 h-screen mt-4 rounded-t-2xl">
   <h2 className="text-center text-3xl font-semibold mb-8">What We Do</h2>
   <p className="text-center text-lg mb-12">
    We offer a wide range of services to enhance your Quizmo experience
   </p>

   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
    {/* Quizzes Card */}
    <div className="bg-white p-6 rounded-lg shadow-md">
     <div className="text-center mb-4">
      <div className="bg-indigo-100 p-3 rounded-full inline-block">
       <span className="text-indigo-500 text-4xl">&#x1F4DA;</span>{" "}
       {/* Book Emoji */}
      </div>
     </div>
     <h3 className="text-center text-xl font-semibold mb-4">Quizzes</h3>
     <ul className="text-center text-gray-600">
      <li>Variety of Quizzes</li>
      <li>Interactive Questions</li>
      <li>Timed Challenges</li>
      <li>Customizable Quizzes</li>
     </ul>
    </div>

    {/* Learning Card */}
    <div className="bg-white p-6 rounded-lg shadow-md">
     <div className="text-center mb-4">
      <div className="bg-green-100 p-3 rounded-full inline-block">
       <span className="text-green-500 text-4xl">&#x1F4C8;</span>{" "}
       {/* Chart Emoji */}
      </div>
     </div>
     <h3 className="text-center text-xl font-semibold mb-4">Learning</h3>
     <ul className="text-center text-gray-600">
      <li>Track Progress</li>
      <li>In-depth Analysis</li>
      <li>Personalized Tips</li>
      <li>Resource Library</li>
     </ul>
    </div>

    {/* Community Card */}
    <div className="bg-white p-6 rounded-lg shadow-md">
     <div className="text-center mb-4">
      <div className="bg-pink-100 p-3 rounded-full inline-block">
       <span className="text-pink-500 text-4xl">&#x1F465;</span>{" "}
       {/* People Emoji */}
      </div>
     </div>
     <h3 className="text-center text-xl font-semibold mb-4">Community</h3>
     <ul className="text-center text-gray-600">
      <li>Join Discussions</li>
      <li>Connect with Peers</li>
      <li>Share Knowledge</li>
      <li>Compete with Friends</li>
     </ul>
    </div>
   </div>
  </div>
 );
};

export default AboutUs;
