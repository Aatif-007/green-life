import React, { useRef } from 'react';
import daigram from '../assets/images/WhatsApp Image 2024-11-05 at 4.08.30 PM.jpeg';
import { useNavigate } from 'react-router-dom';
import html2pdf from 'html2pdf.js';

const Sld = () => {
  const navigate = useNavigate();
  const reportRef = useRef();

  const generatePDF = () => {
    const element = reportRef.current;
    html2pdf().from(element).save("sld.pdf");
  };

  const SaveData = () => {
    alert("Data Saved");
    navigate("/declarationcertificate");
  };

  return (
    <>
      <div>
        <div className="flex items-center justify-center p-10" ref={reportRef}>
          <div>
            <img src={daigram} alt="Diagram" className="w-[90%] h-full" />
          </div>
        </div>
        <div className="flex items-center justify-center gap-x-4 my-4">
          <button
            onClick={generatePDF}
            className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
          >
            Download PDF
          </button>
          <button
            onClick={SaveData}
            className="bg-green-500 text-white px-4 py-2 rounded"
          >
            Save Data
          </button>
        </div>
      </div>
    </>
  );
};

export default Sld;
