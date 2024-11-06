import html2pdf from "html2pdf.js";
import React, { useRef } from "react";
import { HiOutlinePrinter } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

const DeclarationCertificate = () => {
  const navigate = useNavigate();
  const reportRef = useRef();

  const generatePDF = () => {
    const element = reportRef.current;
    html2pdf().from(element).save("declarationcertificate.pdf");
  };

  const SaveData = () => {
    alert('Data saved')
    navigate("/certificate")
  }
  return (
    <div className="">
      <div
        className="flex items-center justify-center bg-gray-200 "
        ref={reportRef}
      >
        <div className="bg-white mx-5 px-4 my-4 py-3">
          <h1 className="text-2xl font-medium my-3 text-center">Declaration</h1>
          <p className="mb-3 text-lg text-center font-medium">
            To whomsoever this may concern
          </p>
          <p className="text-base font-medium my-4">
            Reference: Simplified procedure of MNRE for installation of rooftop
            solar project
          </p>
          <p className="">
            We hereby declare that we are fully aware of the binding provisions
            of the ALMM order <br /> and the Lists there under, while installing
            the rooftop solar system <br /> of{" "}
            <input
              type="text"
              className="w-20 border-b  text-lg font-semibold"
            />{" "}
            KW capacity at the residence of{" "}
            <input type="text" className="w-32 border text-lg" />
            having <br /> project site at{" "}
            <input type="text" className="border text-lg" />
          </p>
          <ul className="list-decimal list-inside space-y-4 my-2 font-normal text-base pl-8">
            <li>
              We understand that the List-1 (Solar PV Modules) of ALMM Order{" "}
              <br />, Annexure-1 of the O M, issued by MNRE on
              <input type="text" className="w-32 border text-lg" /> will be
              updated by MNRE from time to time.
            </li>
            <li>
              The modules procured for this project shall be from List-1 of the
              ALMM Order <br /> applicable on the date of such modules.
            </li>
            <li>
              Non-compliance with the ALMM Order provisions, including those{" "}
              <br /> mentioned above, may result in penal action, such as
              blacklisting.
            </li>
            <li>
              The Details of SPG Modules installed at the site are as follows:
            </li>
          </ul>

          <table className="min-w-full bg-white border border-gray-300">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b border-gray-300 bg-gray-200 text-center">
                  Make
                </th>
                <th className="py-2 px-4 border-b border-gray-300 bg-gray-200 text-center">
                  <input type="text" className="w-full border text-lg" />
                </th>
                <th className="py-2 px-4 border-b border-gray-300 bg-gray-200 text-center">
                  Capacity
                </th>
                <th className="py-2 px-4 border-b border-gray-300 bg-gray-200 text-center">
                  <input type="text" className="text-lg" /> Watts
                </th>
              </tr>
            </thead>
            <thead>
              <tr>
                <th className="py-2 px-4 border-b border-gray-300 bg-gray-200 text-center">
                  Sr. No
                </th>
                <th className="py-2 px-4 border-b border-gray-300 bg-gray-200 text-center">
                  Serial Number
                </th>
                <th className="py-2 px-4 border-b border-gray-300 bg-gray-200 text-center">
                  Sr. No
                </th>
                <th className="py-2 px-4 border-b border-gray-300 bg-gray-200 text-center">
                  Serial Number
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-2 px-4 border-b border-gray-300 text-center">
                  1
                </td>
                <td className="py-2 px-4 border-b border-gray-300 text-center">
                  <input type="text" className="w-full border text-lg" />
                </td>
                <td className="py-2 px-4 border-b border-gray-300 text-center">
                  8
                </td>
                <td className="py-2 px-4 border-b border-gray-300 text-center">
                  <input type="text" className="w-full border text-lg " />
                </td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b border-gray-300 text-center">
                  2
                </td>
                <td className="py-2 px-4 border-b border-gray-300 text-center">
                  <input type="text" className="w-full border text-lg" />
                </td>
                <td className="py-2 px-4 border-b border-gray-300 text-center">
                  9
                </td>
                <td className="py-2 px-4 border-b border-gray-300 text-center">
                  <input type="text" className="w-full border text-lg" />
                </td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b border-gray-300 text-center">
                  3
                </td>
                <td className="py-2 px-4 border-b border-gray-300 text-center">
                  <input type="text" className="w-full border text-lg " />
                </td>
                <td className="py-2 px-4 border-b border-gray-300 text-center">
                  10
                </td>
                <td className="py-2 px-4 border-b border-gray-300 text-center">
                  <input type="text" className="w-full border text-lg" />
                </td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b border-gray-300 text-center">
                  4
                </td>
                <td className="py-2 px-4 border-b border-gray-300 text-center">
                  <input type="text" className="w-full border text-lg " />
                </td>
                <td className="py-2 px-4 border-b border-gray-300 text-center">
                  11
                </td>
                <td className="py-2 px-4 border-b border-gray-300 text-center">
                  <input type="text" className="w-full border text-lg" />
                </td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b border-gray-300 text-center">
                  5
                </td>
                <td className="py-2 px-4 border-b border-gray-300 text-center">
                  <input type="text" className="w-full border text-lg" />
                </td>
                <td className="py-2 px-4 border-b border-gray-300 text-center">
                  12
                </td>
                <td className="py-2 px-4 border-b border-gray-300 text-center">
                  <input type="text" className="w-full border text-lg" />
                </td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b border-gray-300 text-center">
                  6
                </td>
                <td className="py-2 px-4 border-b border-gray-300 text-center">
                  <input type="text" className="w-full border text-lg" />
                </td>
                <td className="py-2 px-4 border-b border-gray-300 text-center">
                  13
                </td>
                <td className="py-2 px-4 border-b border-gray-300 text-center">
                  <input type="text" className="w-full border text-lg" />
                </td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b border-gray-300 text-center">
                  7
                </td>
                <td className="py-2 px-4 border-b border-gray-300 text-center">
                  <input type="text" className="w-full border text-lg " />
                </td>
                <td className="py-2 px-4 border-b border-gray-300 text-center">
                  14
                </td>
                <td className="py-2 px-4 border-b border-gray-300 text-center">
                  <input type="text" className="w-full border text-lg" />
                </td>
              </tr>
              {/* Add more rows as needed */}
            </tbody>
          </table>

          <table className=" bg-white border border-gray-300 my-5 w-96 px-5">
            <thead>
              <tr className="border ">
                <td>Invertor Make :</td>
                <td>
                  <input type="text" className="border text-lg" />
                </td>
              </tr>
              <tr className="border ">
                <td> SR No :</td>
                <td>
                  <input type="text" className="border text-lg" />
                </td>
              </tr>
            </thead>
          </table>

          <p className="my-3">
            Name :{" "}
            <input type="text" className="border-gray-400 w-80 text-lg " />
          </p>
          <p className="my-3">
            Organization Name :{" "}
            <input type="text" className="border-gray-400 w-80 text-lg " />
          </p>
          <p className="my-3">
            Date:{" "}
            <input type="date" className="border-gray-400 w-80 text-lg " />
          </p>

          <div className="flex items-center justify-end text-xl font-medium mt-10 mb-12">
            <p>
              Vendor Signature <br /> [Stamp & Seal]
            </p>
          </div>
        </div>
      </div>
      <div className="pdf flex items-center justify-center gap-5 bg-gray-200">
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
  );
};

export default DeclarationCertificate;