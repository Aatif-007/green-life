import React, { useRef } from "react";
import footer from "../assets/images/WhatsApp Image 2024-11-05 at 2.26.18 PM.jpeg";
import logo from "../assets/images/logo.jpeg";
import { useFormContext } from "../Context/FormContext";
import { useNavigate } from "react-router-dom";
import html2pdf from "html2pdf.js";

const EarthingDetails = () => {
  const { formData, setFormData } = useFormContext();
  const reportRef = useRef();
  const navigate = useNavigate();

  const generatePDF = () => {
    const element = reportRef.current;
    html2pdf().from(element).save("Earthingdetails.pdf");
  };

  const SaveData = () => {
    alert("Data Saved");
    navigate("/guaranteecertificate");
  };
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="">
        <div
          className="bg-white p-8 rounded-lg  max-w-3xl w-full"
          ref={reportRef}
        >
          <div className="flex justify-end items-center p-4">
            <img
              src={logo}
              alt="Solar Plant"
              className=" h-32 object-cover rounded-lg"
            />
          </div>
          <h1 className="text-center text-xl font-medium my-2">Earthing Details of Solar Plant</h1>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-black">
              <thead>
                {/* First row above column headings */}
                <tr>
                  <th
                    colSpan="5"
                    className="py-2 px-4 border border-black text-start text-lg font-medium"
                  >
                    Consumer Name :{" "}
                    <input
                      type="text"
                      className="border-b border-black outline-none mx-1 w-1/2 px-2 text-lg"
                      name="consumerName"
                      value={formData.consumerName}
                    />
                  </th>
                </tr>
                {/* Second row above column headings */}
                <tr>
                  <th
                    colSpan="5"
                    className="py-2 px-4 border border-black text-start text-lg font-medium"
                  >
                    Consumer Number :{" "}
                    <input
                      type="text"
                      className="border-b border-black outline-none mx-1 w-1/2 px-2 text-lg"
                      name="consumerNumber"
                      value={formData.consumerNumber}
                    />
                  </th>
                </tr>
                <tr>
                  <th
                    colSpan="5"
                    className="py-2 px-4 border border-black text-start text-lg font-medium"
                  >
                    Plant Capacity :{" "}
                    <input
                      type="text"
                      className="border-b border-black outline-none mx-1 w-1/2 px-2 text-lg"
                    />
                  </th>
                </tr>
                {/* Column headings */}
                <tr>
                  <th className="py-2 px-4 border border-black text-left">
                    Earthing
                  </th>
                  <th className="py-2 px-4 border border-black text-left">
                    Purpose
                  </th>
                  <th className="py-2 px-4 border border-black text-left">
                    Electrode Size & Material
                  </th>
                  <th className="py-2 px-4 border border-black text-left">
                    Earth Conductor Size and Material
                  </th>
                  <th className="py-2 px-4 border border-black text-left">
                    Resistance Value in OHMS
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-2 px-4 border border-black">E-1</td>
                  <td className="py-2 px-4 border border-black">
                    Array and Structure
                  </td>
                  <td className="py-2 px-4 border border-black">
                    17 mm Cu bonded Rod
                  </td>
                  <td className="py-2 px-4 border border-black">
                    16 Sqmm Aluminium XLPE Coated Cable
                  </td>
                  <td className="py-2 px-4 border border-black">
                    <input
                      type="number"
                      className="w-full border-b border-black outline-none text-xl"
                    />
                  </td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border border-black">E-2</td>
                  <td className="py-2 px-4 border border-black">AC side</td>
                  <td className="py-2 px-4 border border-black">
                    17 mm Cu bonded Rod
                  </td>
                  <td className="py-2 px-4 border border-black">
                    16 Sqmm Aluminium XLPE Coated Cable
                  </td>
                  <td className="py-2 px-4 border border-black">
                    <input
                      type="number"
                      className="w-full border-b border-black outline-none text-xl"
                    />
                  </td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border border-black">E-3</td>
                  <td className="py-2 px-4 border border-black">LA</td>
                  <td className="py-2 px-4 border border-black">
                    17 mm Cu bonded Rod
                  </td>
                  <td className="py-2 px-4 border border-black">
                    16 Sqmm Aluminium XLPE Coated Cable
                  </td>
                  <td className="py-2 px-4 border border-black">
                    <input
                      type="number"
                      className="w-full border-b border-black outline-none text-xl"
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="w-full max-w-3xl">
            <h1 className="text-xl font-medium my-10">
              For Green Life Solutions Pvt. Ltd.
            </h1>

            <div className="font-medium my-4 flex items-center">
              <span className="w-1/3 text-lg">Authorized Signatory:</span>
              <input
                type="text"
                className="ml-4 p-2 w-1/3 text-xl  border-gray-300 outline-none"
              />
            </div>

            <div className="font-medium my-4 flex items-center">
              <span className="w-1/3 text-lg">Date:</span>
              <input
                type="date"
                className="ml-4 p-2 w-1/3 text-xl  border-gray-300 outline-none"
              />
            </div>
          </div>
          <div className="relative min-h-64">
            {/* Other page content */}

            <div className="footer absolute bottom-0 w-full">
              <img src={footer} alt="Footer" className="w-full" />
            </div>
          </div>
        </div>
        <div className="pdf flex items-center justify-center gap-5 my-4">
          <button
            onClick={() => generatePDF()}
            className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
          >
            Download PDF
          </button>
          <button
            onClick={() => SaveData()}
            className="bg-green-500 text-white px-4 py-2 rounded"
          >
            Save Data
          </button>
        </div>
      </div>
    </div>
  );
};

export default EarthingDetails;
