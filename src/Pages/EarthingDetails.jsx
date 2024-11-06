import React, { useRef } from "react";
import { HiOutlinePrinter } from "react-icons/hi";
import footer from "../assets/images/WhatsApp Image 2024-11-05 at 2.26.18 PM.jpeg";
import logo from "../assets/images/logo.jpeg";
import { useFormContext } from "../Context/FormContext";
import { useNavigate } from "react-router-dom";
import html2pdf from "html2pdf.js";

const EarthingDetails = () => {
  const { formData, setFormData } = useFormContext();
  const reportRef = useRef();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    console.log(formData);
  };

  const generatePDF = () => {
    const element = reportRef.current;
    html2pdf().from(element).save("Earthingdetails.pdf");
  };

  const SaveData = () => {
    alert("Data Saved")
    navigate("/guaranteecertificate")
  }
  return (
    <div className="flex items-center justify-center min-h-screen ">
      <div className="">
        <div
          className="bg-white p-8 rounded-lg  max-w-3xl w-full"
          ref={reportRef}
        >
          <div className="flex flex-col items-center ">
            <img
              src={logo}
              alt="Solar Plant"
              className="mb-4  w-[20%] h-1/2 object-cover rounded-lg"
            />
            <h1 className="text-2xl font-semibold mb-6 text-center">
              Earthing Details of Solar Plant
            </h1>
          </div>

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
                      className="w-1/2 border border-black text-xl"
                      name="consumerName"
                      onChange={handleChange}
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
                      className="w-1/2 border border-black text-xl"
                      name="consumerNumber"
                      onChange={handleChange}
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
                      className="w-1/2 border border-black text-xl"
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
                      className="w-full border border-black outline-none text-xl"
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
                      className="w-full border border-black outline-none text-xl"
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
                      className="w-full border border-black outline-none text-xl"
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
            <p className="font-medium my-4 flex items-center">
              Authorized Signatory:
              <input type="text" className="ml-4 p-2   rounded w-1/2 text-xl" />
            </p>
            <p className="font-medium my-4 flex items-center">
              Date:
              <input type="date" className="ml-4 p-2  rounded  text-xl" />
            </p>
          </div>
          <div className="footer relative bottom-0 mt-6">
            <img src={footer} alt="Footer" />
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
          onClick={()=>SaveData()}
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