import React, { useContext, useRef } from "react";
import logo from "../assets/images/logo.jpeg";
import footer from "../assets/images/WhatsApp Image 2024-11-05 at 2.26.18 PM.jpeg";

import { useFormContext } from "../Context/FormContext";
import { useNavigate } from "react-router-dom";

import html2pdf from "html2pdf.js";

const GuaranteeCertificate = () => {

    const { formData } = useFormContext();
    const navigate = useNavigate()
    const reportRef = useRef();

    const generatePDF = () => {
      const element = reportRef.current;
      html2pdf().from(element).save("Guaranteecertificate.pdf");
  };

  const SaveData = () => {
    alert("Data saved")
    navigate("/sld")
  }
  return (
    <div className="flex items-center justify-center min-h-screen ">
      <div className="">
      <div className="bg-white p-8 rounded-lg max-w-3xl w-full" ref={reportRef}>
        <div className="flex flex-col items-center ">
          <img
            src={logo}
            alt="Solar Plant"
            className="mb-4 w-[20%] h-1/2 object-cover rounded-lg"
          />
          <h1 className="text-2xl font-semibold mb-3 text-center">
            Earthing Details of Solar Plant
          </h1>
        </div>

        {/* Table */}

        <div className="overflow-x-auto p-4">
          <h2 className="text-2xl font-bold text-center mb-2">
            Guarantee Certificate
          </h2>
          <table className="min-w-full bg-white border border-gray-400">
            <tbody>
              <tr>
                <td className="w-16 py-2 px-4 border border-gray-400 text-center">
                  1
                </td>
                <td className="py-2 px-4 border border-gray-400 text-center">
                  Name & Address of the Empanelled Agency
                </td>
                <td className="py-2 px-4 border border-gray-400 text-center">
                  M/s Green Life Solutions Pvt Ltd.
                </td>
              </tr>
              <tr>
                <td className="w-16 py-2 px-4 border border-gray-400 text-center">
                  2
                </td>
                <td className="py-2 px-4 border border-gray-400 text-center">
                  Name & Address of DISCOM
                </td>
                <td className="py-2 px-4 border border-gray-400 text-center">
                  Maharastra State Electricity Distribution Co Ltd
                </td>
              </tr>
              <tr>
                <td className="w-16 py-2 px-4 border border-gray-400 text-center">
                  3
                </td>
                <td className="py-2 px-4 border border-gray-400 text-center">
                  Name & Address of BENEFICIARY
                </td>
                <td className="py-2 px-4 border border-gray-400 text-center">
                  <input type="text" className="w-full border text-xl" />
                </td>
              </tr>
              <tr>
                <td className="w-16 py-2 px-4 border border-gray-400 text-center">
                  4
                </td>
                <td className="py-2 px-4 border border-gray-400 text-center" >
                  Consumer No
                </td>
                <td className="py-2 px-4 border border-gray-400 text-center">
                  <input type="text" className="w-full border text-xl" value={formData.consumerNumber}  />
                </td>
              </tr>
              <tr>
                <td className="w-16 py-2 px-4 border border-gray-400 text-center">
                  5
                </td>
                <td className="py-2 px-4 border border-gray-400 text-center">
                  Date of Commissioning of the system
                </td>
                <td className="py-2 px-4 border border-gray-400 text-center">
                  <input type="text" className="w-full border text-xl" />
                </td>
              </tr>
              <tr>
                <td className="w-16 py-2 px-4 border border-gray-400 text-center">
                  6
                </td>
                <td className="border border-gray-400">
                  <div className="py-2 px-4 border-b border-gray-400">
                    Details of PV Module(s) supplied in the System (Name of the
                    EOI applicant):
                  </div>
                  <div className="py-2 px-4 border-b border-gray-400">
                    Module Make
                  </div>
                  <div className="py-2 px-4 border-b border-gray-400">
                    Wattage of the PV Modules
                  </div>
                  <div className="py-2 px-4">Warranty</div>
                </td>
                <td className="border border-gray-400">
                  <div className="py-3 px-4 border-b border-gray-400">
                    <input type="text" className="w-full text-xl" />
                  </div>
                  <div className="py-3 px-4 border-b border-gray-400">
                    <input type="text" className="w-full border text-xl" />
                  </div>
                  <div className="py-3 px-4 border-b border-gray-400">
                    <input type="text" className="w-full border text-xl" />
                  </div>
                  <div className="py-3 px-4">
                    <input type="text" className="w-full border text-xl" />
                  </div>
                </td>
              </tr>
              <tr>
                <td className="w-16 py-2 px-4 border border-gray-400 text-center">
                  7
                </td>
                <td className="border border-gray-400">
                  <div className="py-2 px-4 border-b border-gray-400">
                    Details of PCU/Electronics & other BOS items: System (Name
                    of the EOI applicant):
                  </div>
                  <div className="py-2 px-4 border-b border-gray-400">
                    Inverter Make
                  </div>
                  <div className="py-2 px-4 border-b border-gray-400">
                    Inverter Serial No
                  </div>
                  <div className="py-2 px-4">Warranty</div>
                </td>
                <td className="border border-gray-400">
                  <div className="py-3 px-4 border-b border-gray-400">
                    <input type="text" className="w-full text-xl" />
                  </div>
                  <div className="py-3 px-4 border-b border-gray-400">
                    <input type="text" className="w-full border text-xl" />
                  </div>
                  <div className="py-3 px-4 border-b border-gray-400">
                    <input type="text" className="w-full border text-xl" />
                  </div>
                  <div className="py-3 px-4">
                    <input type="text" className="w-full border text-xl" />
                  </div>
                </td>
              </tr>
              <tr></tr>
              <tr>
                <td className="w-16 py-2 px-4 border border-gray-400 text-center">
                  8
                </td>
                <td className="py-2 px-4 border border-gray-400 text-center">
                  Designation & Address of the person to be Contacted for
                  claiming Warranty obligations
                </td>
                <td className="py-2 px-4 border border-gray-400 text-center">
                  Customer Care
                </td>
              </tr>
              <tr>
                <td className="w-16 py-2 px-4 border border-gray-400 text-center">
                  9
                </td>
                <td className="py-2 px-4 border border-gray-400 text-center">
                  Local Service Centre Address:
                </td>
                <td className="py-2 px-4 border border-gray-400 text-center">
                  Plot No XI - 74/6, MIDC Industrial Area, Hingna MIDC, Nagpur-
                  440016
                </td>
              </tr>
              <tr>
                <td className="w-16 py-2 px-4 border border-gray-400 text-center">
                  10
                </td>
                <td className="py-2 px-4 border border-gray-400 text-center">
                  Mobile no
                </td>
                <td className="py-2 px-4 border border-gray-400 text-center">
                  9225332014
                </td>
              </tr>
              <tr>
                <td className="w-16 py-2 px-4 border border-gray-400 text-center">
                  11
                </td>
                <td className="py-2 px-4 border border-gray-400 text-center">
                  Email Id
                </td>
                <td className="py-2 px-4 border border-gray-400 text-center">
                  Info@greenlifesolution.in
                </td>
              </tr>

              <td colSpan="3" className="py-2 px-4 border border-gray-400 text-sm ">
                The grid connected solar system is warranted for its performance
                for a period of five years and the Empanelled Agency/Supplier
                (undersigned) undertakes to replace the components which do not
                perform as per specifications, due to manufacturing defect, at
                no cost to the beneficiary as per EOI Conditions.
              </td>
            </tbody>
          </table>
        </div>

        <div className="my-4 p-4 flex flex-col">
            <p className="flex items-center justify-start gap-x-5 my-2">Name : <span>Prachi Jamankar</span> </p>
            <p className="flex items-center justify-start gap-x-5 my-2">Designation: <span>Liasioning Execatuive</span></p>
            <p className="flex items-center justify-start gap-x-5 my-2">Date : <input type="date" className="border text-xl" /></p>
            <p className="flex items-center justify-start gap-x-5 my-2">Name : <span>M/s Green Life Solutions Pvt Ltd.</span></p>
            <p className="flex items-center justify-start gap-x-5 my-2">Address of the Empanelled Agency:  <span>Plot No XI - 74/6, MIDC Industral Area, Hingna MIDC, Nagpur- 440016</span></p>
        </div>
        <div className="footer">
          <img src={footer} alt="Footer" />
        </div>
      </div>
        <div className="pdf flex items-center justify-center gap-5 my-4">
        <button
          onClick={() => generatePDF()}
          className="bg-blue-500 text-white px-4 py-2 rounded"
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
    </div>
  );
};

export default GuaranteeCertificate;
