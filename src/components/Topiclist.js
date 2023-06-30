import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Navbar from "./NavBar";
import axios from "axios";

const Topiclist = () => {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    const fetchTopics = async () => {
      try {
        const response = await axios.get(
          "https://api.npoint.io/738eb0f30f5ebb0f7c02"
        );
        setTopics(response.data);
      } catch (error) {
        console.error("Error fetching topics:", error);
      }
    };

    fetchTopics();
  }, []);

  return (
    <div className="w-screen">
      <Navbar />
      <div className="flex flex-col items-center h-screen w-screen text-center bg-gradient-to-tr from-violet-700 via-green-600 to-green-400 mt-3">
        <h1 className="text-3xl text-white font-bold mb-4 mt-4">Topic Wise Revision</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-24">
          {topics.map((topic, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-md p-8 flex flex-col"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.img
                src={topic.image_link}
                alt={topic.Topic_name}
                className="w-full h-40 object-cover mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              />
              <motion.p
                className="text-lg font-semibold mb-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                {topic.Topic_name}
              </motion.p>
              <motion.p
                className="text-gray-500 text-sm md:text-base"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                {topic.description}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Topiclist;
