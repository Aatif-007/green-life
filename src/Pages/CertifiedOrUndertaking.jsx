import React, { useContext, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { usePdf } from "../Context/PdfGenerate";
import { useFormContext } from "../Context/FormContext";
import  html2pdf  from "html2pdf.js";

const CertifiedOrUndertaking = () => {
  const navigate = useNavigate();
  
  const { formData } = useFormContext();
  const reportRef = useRef()
  
  
  const generatePDF = () => {
    const element = reportRef.current;
    html2pdf().from(element).save("undertakingordeclaration.pdf");
  };
  
  // const { generatePDF, reportRef } = usePdf();

  const handleSaveData = () => {
    navigate("/declearation");
  };
  return (
    <div className="p-6 mx-72">
      <div
        className="container mx-auto border-2 border-gray-600 p-10 "
        ref={reportRef}
      >
        <div className="flex justify-end">
          <label className="text-right">
            Date:
            <input type="date"  className="cursor-pointer" />
          </label>
        </div>
        <h2 className="text-center text-[22px] font-semibold">
          CERTIFICATE/UNDERTAKING
        </h2>
        <div className="mt-8">
          <p className="text-[18px]">
            This is to certify that we{" "}
            <input
              type="text"
              className="border border-gray-300 outline-none"
            />{" "}
            Installed Solar PV System for Consumer Name:
            <input
              type="text"
              className="border border-gray-300 outline-none"
              value={formData.consumerName}
            />
            
            Consumer No:{" "}
            <input
              type="text"
              className="border border-gray-300 outline-none"
              value={formData.consumerNumber}
            />{" "}
            Address:
            <input
              type="text"
              className="border border-gray-300 outline-none"
            />
            Of load{" "}
            <input
              type="text"
              className="border border-gray-300 outline-none"
            />
            .KW is working properly with electrical safety & Islanding switch in
            case of any presence of backup inverter an arrangement should be
            made in such way the backup inverter supply should never be
            synchronized with solar inverter to avoid any electrical accident
            due to back feeding We are held responsible for proper working of
            islanding system electrical safety of the system in case of back
            feed to the de-energized grid.
          </p>
        </div>

        <div className="flex justify-end mt-20">
          <p>
            Name of Agency
            <span className="block">[Stamp & Seal]</span>
          </p>
        </div>
      </div>

      <div className="mt-4 text-center">
        <button
          onClick={() => generatePDF()}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Download PDF
        </button>
        <button
          onClick={handleSaveData}
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Save Data
        </button>
      </div>
    </div>
  );
};

CertifiedOrUndertaking.displayName = "CertifiedOrUndertaking";

export default CertifiedOrUndertaking;
