import React, { useRef } from "react";
import { useFormContext } from "../Context/FormContext";
import html2pdf from "html2pdf.js";
import { useNavigate } from "react-router-dom";

const DeclarationforDCR = () => {
  const { formData } = useFormContext();
  const reportRef = useRef();
  const navigate = useNavigate();
  const generatePDF = () => {
    const element = reportRef.current;
    html2pdf().from(element).save("declrationforDCR.pdf");
  };

  const saveData = () => {
    alert("Data saved");
    navigate("/agreement");
  };

  return (
    <>
      <div className="flex justify-center py-10 text-lg">
        {/* Main report container */}
        <div
          className="w-full max-w-4xl bg-white p-8 rounded-lg shadow-lg"
          ref={reportRef}
        >
          {/* Header Section */}
          <div className="text-center mb-8">
            <p className="text-lg font-medium my-3">
              Undertaking/Self- Declaration for Domestic Content Requirement
              fulfillment{" "}
            </p>
            <p>(On a plain Paper)</p>
          </div>
          <div className="text-left mb-8">
            {/* Paragraph 1 */}
            <p className="mb-4" style={{ lineHeight: "1.8" }}>
              1. This is to certify that M/S
              <input
                type="text"
                className="border-b-2 border-black mx-2 w-60 px-2"
                value={"Green Life Solution Pvt Ltd"}
              />
              has installed
              <input
                type="text"
                className="border-b-2 border-black mx-2 w-20 px-2"
              />
              Grid Connected Rooftop Solar Plant for
              <input
                type="text"
                className="border-b-2 border-black mx-2 w-60 px-2"
                value={formData.consumerName}
              />
              at
              <input
                type="text"
                className="border-b-2 border-black mx-2 w-80 px-2"
                value={formData.address}
              />
              under application number
              <input
                type="text"
                className="border-b-2 border-black mx-2 w-40 px-2"
                value={formData.consumerNumber}
              />
              dated
              <input
                type="date"
                className="border-b-2 border-black mx-2 px-2"
              />
              under
              <input
                type="text"
                className="border-b-2 border-black mx-2 w-60 px-2"
              />
              .
            </p>

            {/* Paragraph 2 */}
            <p className="mb-4" style={{ lineHeight: "1.8" }}>
              2. It is hereby undertaken that the PV modules installed for the
              above-mentioned project are domestically manufactured using
              domestically manufactured solar cells. The details of installed PV
              Modules are as follows:
            </p>
            <ul className="list-decimal pl-8 mb-4 leading-loose">
              <li >
                PV Module Capacity:{" "}
                <input
                  type="text"
                  className="border-b-2 border-black w-56 px-2"
                  value={formData.totalCapacity}
                />
              </li>
              <li className="my-4">
                Number of PV Modules:{" "} 
                <input
                  type="number"
                  className="border-b-2 border-black w-20 px-2"
                  value={formData.numberOfModule}
                />
              </li>
              <li className="my-4">
                Sr No of PV Module:{" "}
                <input
                  type="text"
                  className="border-b-2 border-black w-40 px-2"
                />
              </li>
              <li  className="my-4">
                PV Module Make:{" "}
                <input
                  type="text"
                  className="border-b-2 border-black w-60 px-2"
                  
                />
              </li>
              <li  className="my-4">
                Cell manufacturer’s name:{" "}
                <input
                  type="text"
                  className="border-b-2 border-black w-60 px-2"
                />
              </li>
              <li  className="my-4">
                Cell GST invoice No:{" "}
                <input
                  type="text"
                  className="border-b-2 border-black w-60 px-2"
                />
              </li>
            </ul>

            {/* Paragraph 3 */}
            <p className="mb-4" style={{ lineHeight: "1.8" }}>
              3. The above undertaking is based on the certificate issued by PV
              Module manufacturer/supplier while supplying the above-mentioned
              order.
            </p>

            {/* Paragraph 4 */}
            <p className="mb-4" style={{ lineHeight: "1.8" }}>
              4. I,
              <input
                type="text"
                className="border-b-2 border-black mx-2 w-64 px-2 my-3 "
              />
              on behalf of M/S
              <span className="font-medium mx-2">
                Green Life Solution Pvt Ltd
              </span>
              further declare that the information given above is true and
              correct and nothing has been concealed therein. If anything is
              found incorrect at any stage, then REC/ MNRE may take any
              appropriate action against my company for wrong declaration.
              Supporting documents and proof of the above information will be
              provided as and when requested by MNRE.
            </p>
          </div>
          <div className="flex justify-end leading-loose">
            <span className="mt-3"><p className="font-medium">Signature with official Seal</p>
            <p className="my-3">For M/S <input type="text" value={"Green Life Solutions Pvt Ltd"} className="w-60 border-b border-black px-2"/></p>
            <p className="my-3">Name: <input type="text" className="w-52 border-b border-black px-2" /> </p>
            <p className="my-3">Designation:<input type="text" className="w-52 border-b border-black px-2" /> </p>
            <p className="my-3">Phone: <input type="text" className="w-52 border-b border-black px-2" /></p>
            <p className="my-3">Email: <input type="text" className="w-52 border-b border-black px-2" /></p>
            </span> 
            
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center gap-5 mt-3">
        <button
          onClick={() => generatePDF()}
          className="bg-blue-500 text-white px-6 py-3 rounded"
        >
          Download PDF
        </button>
        <button
          onClick={() => saveData()}
          className="bg-green-500 text-white px-6 py-3 rounded"
        >
          Save Data
        </button>
      </div>
    </>
  );
};

export default DeclarationforDCR;
