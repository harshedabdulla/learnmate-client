import React, { useEffect, useState } from "react";
import Navbar from "./NavBar";
import axios from "axios";

const StudyPlanner = () => {
  const [studyPlan, setStudyPlan] = useState([]);

  useEffect(() => {
    const fetchStudyPlan = async () => {
      try {
        const response = await axios.post(
          "http://172.25.0.105:8000/studyPlan?email=angeloantu%40gmail.com"
        );
        setStudyPlan(response.data.studyPlan);
      } catch (error) {
        console.error("Error fetching study plan data:", error);
      }
    };

    fetchStudyPlan();
  }, []);

  return (
    <div className="w-screen">
      <Navbar />
      <div className="flex flex-col items-center w-screen text-center bg-gradient-to-tr from-violet-700 via-green-600 to-green-400 mt-3">
        <h1 className="text-3xl text-white font-bold mb-4 mt-4">Study Planner</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-24">
          {studyPlan.map((slot, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-8 flex flex-col"
            >
              <p className="text-lg font-semibold mb-2">Day {index + 1}</p>
              <div>
              <h6 className="text-gray-500 text-sm md:text-base">{slot.date}</h6>
             
                <p className="text-gray-700 text-md md:text-base">{slot.topic}</p>
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StudyPlanner;
