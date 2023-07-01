import React, { useEffect, useState } from 'react';
import { Document, Page } from 'react-pdf';
import axios from 'axios';
import NavBar from './NavBar';
import { motion } from 'framer-motion';

const Learnnote = () => {
  const [pdfData, setPdfData] = useState(null);
  const [isToggleOn, setIsToggleOn] = useState(false);

  useEffect(() => {
    const fetchPdfData = async () => {
      try {
        const response = await axios.post(
          'http://172.25.0.105:8000/get_notes_pdf?email=angeloantu%40gmail.com',
          { responseType: 'arraybuffer' }
        );

        const arrayBuffer = response.data;
        const base64Data = btoa(
          new Uint8Array(arrayBuffer).reduce(
            (data, byte) => data + String.fromCharCode(byte),
            ''
          )
        );
        setPdfData(base64Data);
      } catch (error) {
        console.error('Error fetching PDF data:', error);
      }
    };

    fetchPdfData();
  }, []);

  const handleToggle = () => {
    setIsToggleOn(!isToggleOn);
  };

  return (
    <div>
      <div className="w-screen">
        <NavBar />
        <div className="flex flex-col items-center h-screen w-screen text-center bg-gradient-to-tr from-violet-700 via-green-600 to-green-400 mt-3">
          <h1 className="text-3xl text-white font-bold mb-4 mt-4">Study session</h1>
          <div className="h-screen flex w-screen justify-center align-center">
            <div className="flex-1 bg-violet-50 border-r-4 border-indigo-300 p-8 font-semibold text-2xl">
              Learn
              <div className="grid grid-cols-1">
                <motion.div
                  className="bg-slate-100 rounded-lg shadow-lg h-80 mt-12"
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: 0.2 }}
                >
                  <div className="flex flex-col items-center justify-center mt-4">
                    <iframe
                      width="560"
                      height="250"
                      src="https://www.youtube.com/embed/3oNzkS1WYas" // Update the URL here
                      title="YouTube video player"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                    <h3 className="mt-4">Video</h3>
                  </div>
                </motion.div>
              </div>
            </div>
            <div className="flex-1 bg-violet-50 p-8 font-semibold text-2xl">
              Notes
              <div className="grid grid-cols-1">
              <button
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded mt-4"
                onClick={handleToggle}
              >
                Change
              </button>
              </div>
              <motion.div
                className="bg-slate-100 rounded-lg shadow-lg h-80 mt-12"
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.2 }}
              >
                <div className="flex flex-col items-center justify-center mt-4">
                  
                  {isToggleOn ? (
                    <div>
                      {pdfData ? (
                        <Document
                          file={`data:application/pdf;base64,${pdfData}`}
                          options={{ workerSrc: '/pdf.worker.js' }} // Provide the path to pdf.worker.js
                        >
                          <Page pageNumber={1} />
                        </Document>
                      ) : (
                        <div>Loading my PDF...</div>
                      )}
                    </div>
                  ) : (
                    <div>
                      <p>PDF to text</p>
                    </div>
                  )}
                </div>
              </motion.div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Learnnote;
