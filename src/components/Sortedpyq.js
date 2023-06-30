import React, { useEffect, useState } from 'react';
import Navbar from './NavBar';

const Sortedpyq = () => {
  const [pdfUrl, setPdfUrl] = useState('');

  useEffect(() => {
    fetchPdf();
  }, []);

  const fetchPdf = async () => {
    try {
      const response = await fetch('https://3f2ssd7loqowjtj7hnzhni7trq0blutk.lambda-url.us-east-1.on.aws/generate_pdf');
      if (response.ok) {
        const pdfData = await response.blob();
        const pdfUrl = URL.createObjectURL(pdfData);

        // Download the PDF file
        const link = document.createElement('a');
        link.href = pdfUrl;
        link.download = 'combined_pdf.pdf';
        link.click();

        // Show the PDF in the iframe
        setPdfUrl(pdfUrl);
      } else {
        throw new Error('Error fetching PDF');
      }
    } catch (error) {
      console.error('Error fetching PDF:', error);
    }
  };

  return (
    <div className="w-screen">
      <Navbar />
      <div className="flex flex-col items-center h-screen w-screen text-center bg-gradient-to-tr from-violet-700 via-green-600 to-green-400 mt-3">
        <h1 className="text-3xl text-white font-bold mb-4 mt-4">Sorted PYQ</h1>
            
          {pdfUrl && (
            <iframe src={pdfUrl} title="Sorted PYQ" className="w-full h-full"></iframe>
          )}
        </div>
      </div>
    
  );
};

export default Sortedpyq;
