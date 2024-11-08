import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { usePdf } from "../Context/PdfGenerate"; // Assuming PdfGenerate is your context file
import { useFormContext } from "../Context/FormContext";
import html2pdf from "html2pdf.js";
import stamp from "../assets/images/stamp.jpeg"

const SolarPowerPlantReport = () => {
  const navigate = useNavigate();
  const { formData, setFormData } = useFormContext();
  const reportRef = useRef();

  const generatePDF = () => {
    const element = reportRef.current;
    html2pdf().from(element).save("solarpowerplant.pdf");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    console.log(formData);
  };

  return (
    <div className="p-3 mx-52">
      <div className="flex justify-center items-center" ref={reportRef}>
        <div className="p-5" ref={reportRef}>
          <h1 className="text-2xl font-bold mb-2 text-center">
            Work Completion Report for Solar Power Plant
          </h1>
          <table className="border border-black text-base">
            <thead>
              <tr>
                <th className="border border-black">Sr.No</th>
                <th className="border border-black p-2">Component</th>
                <th className="border border-black p-2 w-[45%]">Observation</th>
              </tr>
            </thead>
            <tbody>
              <tr className="">
                <td className="border border-black p-2 text-center">1</td>
                <td className="border border-black p-2">Consumer Name</td>
                <td className="border border-black px-2">
                  <input
                    type="text"
                    className="w-full border-none outline-none text-lg"
                    name="consumerName"
                    onChange={handleChange}
                  />
                </td>
              </tr>
              <tr>
                <td className="border border-black p-2 text-center">2</td>
                <td className="border border-black p-2 ">Consumer number</td>
                <td className="border border-black p-2">
                  <input
                    type="text"
                    className="w-full p-1 border-none border-gray-300 outline-none text-lg"
                    name="consumerNumber"
                    onChange={handleChange}
                  />
                </td>
              </tr>
              <tr className="">
                <td className="border border-black p-2 text-center">3</td>
                <td className="border border-black p-2">
                  Site/Location With Complete Address
                </td>
                <td className="border border-black p-2">
                  
                  <input className="w-full p-1 border-none border-gray-300 outline-none text-lg"
                  onChange={handleChange}
                  name="address"
                 />

                  
                </td>
              </tr>
              <tr>
                <td className="border border-black p-2 text-center">4</td>
                <td className="border border-black p-2">
                  Category: Govt/Private Sector
                </td>
                <td className="border border-black ">
                  <input type="text" className="w-full p-1 border-none border-gray-300 outline-none text-lg" />
                </td>
              </tr>
              <tr>
                <td className="border border-black p-2 text-center">5</td>
                <td className="border border-black p-2">Sanction number</td>
                <td className="border border-black p-2">
                  <input type="text" className="w-full p-1 border-none border-gray-300 outline-none text-lg" />
                </td>
              </tr>

              <tr>
                <td className=" p-2 text-center">6</td>
                <td className="border border-black p-2">
                  Sanctioned Capacity of solar PV system (KW) Installed
                </td>
                <td className="border border-black p-2">
                  <input
                    type="text"
                    className="w-full p-1 border-none border-gray-300 outline-none text-lg"
                  />
                </td>
              </tr>
              <tr>
                <td className="border-r border-black p-2 text-center"></td>
                <td className=" p-2">
                  Capacity of solar PV system (KW) DC (Inverter) Mono
                </td>
                <td className="border border-black p-2">
                  <input type="text" className="w-full p-1 border-none border-gray-300 outline-none text-lg" />
                </td>
              </tr>
              <tr>
                <td className="border-t border-black  p-2 text-center"></td>
                <td className="border border-black p-2">
                  Specification of the Modules
                </td>
                <td className="border border-black p-2">
                  <input
                    type="text"
                    className="w-full p-1 border-none border-gray-300 outline-none text-lg"
                  />
                </td>
              </tr>
              <tr>
                <td className=" p-2 text-center"></td>
                <td className="border border-black p-2">
                  Type of modules (Poly/Mono etc.)
                </td>
                <td className="border border-black p-2">
                  <input
                    type="text"
                    className="w-full p-1 border-none border-gray-300 outline-none text-lg"
                  />
                </td>
              </tr>
              <tr>
                <td className=" p-2 text-center"></td>
                <td className="border border-black p-2">
                  Make of manufacturing
                </td>
                <td className="border border-black p-2">
                  <input
                    type="text"
                    className="w-full p-1 border-none border-gray-300 outline-none text-lg"
                  />
                </td>
              </tr>
              <tr>
                <td className=" p-2 text-center"></td>
                <td className="border border-black p-2">Wattage per module</td>
                <td className="border border-black p-2"><input type="text" className="w-full p-1 border-none border-gray-300 outline-none text-lg" /></td>
              </tr>
              <tr>
                <td className=" p-2 text-center"></td>
                <td className="border border-black p-2">No. of Module</td>
                <td className="border border-black p-2">
                <input type="text" className="w-full p-1 border-none border-gray-300 outline-none text-lg" />
                </td>
              </tr>
              <tr>
                <td className=" p-2 text-center">7</td>
                <td className="border border-black p-2">Module Efficiency</td>
                <td className="border border-black p-2">
                <input type="text" className="w-full p-1 border-none border-gray-300 outline-none text-lg" />
                </td>
              </tr>
              <tr>
                <td className=" p-2 text-center"></td>
                <td className="border border-black p-2">
                  No. of series & parallel Combinations
                </td>
                <td className="border border-black p-2">
                <input type="text" className="w-full p-1 border-none border-gray-300 outline-none text-lg" />
                </td>
              </tr>
              <tr>
                <td className=" p-2 text-center"></td>
                <td className="border border-black p-2">
                  Tilt Angle of modules
                </td>
                <td className="border border-black p-2">
                <input type="text" className="w-full p-1 border-none border-gray-300 outline-none text-lg" />
                </td>
              </tr>
              <tr>
                <td className=" p-2 text-center"></td>
                <td className="border border-black p-2">
                  IEC certificate (Enclose IEC Certificate)
                </td>
                <td className="border border-black p-2">
                <input type="text" className="w-full p-1 border-none border-gray-300 outline-none text-lg" />
                </td>
              </tr>
              <tr>
                <td className=" p-2 text-center"></td>
                <td className="border border-black p-2">
                  Whether Imported or Indigenous
                </td>
                <td className="border border-black p-2"><input type="text" className="w-full p-1 border-none border-gray-300 outline-none text-lg" /></td>
              </tr>
              <tr>
                <td className=" p-2 text-center"></td>
                <td className="border border-black p-2">
                  RFID tag is pasted inside or out side
                </td>
                <td className="border border-black p-2">-</td>
              </tr>
              <tr>
                <td className=" p-2 text-center"></td>
                <td className="border-l border-black p-2">Type Of RFID</td>
                <td className="border border-black p-2">
                  <input
                    type="text"
                    className="w-full  border-none border-gray-300 outline-none text-lg"
                  />
                </td>
              </tr>
              <tr>
                <td className="border-t border-black p-2 text-center"></td>
                <td className="border border-black p-2">PCU</td>
                <td className="border border-black p-2">
                  <input
                    type="text"
                    className="w-full  border-none border-gray-300 outline-none text-lg"
                  />
                </td>
              </tr>
              <tr>
                <td className=" p-2 text-center"></td>
                <td className="border border-black p-2">Make</td>
                <td className="border border-black p-2">
                  <input
                    type="text"
                    className="w-full  border-none border-gray-300 outline-none text-lg"
                  />
                </td>
              </tr>
              <tr>
                <td className=" p-2 text-center"></td>
                <td className="border border-black p-2">Rating</td>
                <td className="border border-black p-2">
                  <input
                    type="text"
                    className="w-full  border-none border-gray-300 outline-none text-lg"
                  />
                </td>
              </tr>
              <tr>
                <td className=" p-2 text-center">8</td>
                <td className="border border-black p-2">
                  Type of charge controller/ MPPT
                </td>
                <td className="border border-black p-2"><input type="text" className="w-full p-1 border-none border-gray-300 outline-none text-lg" /></td>
              </tr>
              <tr>
                <td className=" p-2 text-center"></td>
                <td className="border border-black p-2">
                  Capacity of Inverter
                </td>
                <td className="border border-black p-2"><input type="text" className="w-full p-1 border-none border-gray-300 outline-none text-lg" /></td>
              </tr>
              <tr className="">
                <td className=" p-2 text-center"></td>
                <td className="border border-black p-2">HPD</td>
                <td className="border border-black p-2">-</td>
              </tr>
              <tr>
                <td className="border-b border-black p-2 text-center"></td>
                <td className="border border-black p-2">
                  Year of manufacturing
                </td>
                <td className="border border-black p-2"><input type="text" className="w-full p-1 border-none border-gray-300 outline-none text-lg" /></td>
              </tr>

              <tr>
                <td className="border-t border-black p-2 text-center"></td>
                <td className="border border-black p-2">AC Output</td>
                <td className="border border-black p-2"><input type="text" className="w-full p-1 border-none border-gray-300 outline-none text-lg" /></td>
              </tr>
              <tr>
                <td className=" p-2 text-center"></td>
                <td className="border border-black p-2">
                  Whether hybrid or stand alone
                </td>
                <td className="border border-black p-2"><input type="text" className="w-full p-1 border-none border-gray-300 outline-none text-lg" /></td>
              </tr>
              <tr>
                <td className=" p-2 text-center">9</td>
                <td className="border border-black p-2">
                  Whether Indigenous or imported
                </td>
                <td className="border border-black p-2"><input type="text" className="w-full p-1 border-none border-gray-300 outline-none text-lg" /></td>
              </tr>
              <tr>
                <td className=" p-2 text-center"></td>
                <td className="border border-black p-2">
                  (Enclose test certificate as per MNRE requirement)
                </td>
                <td className="border border-black p-2"><input type="text" className="w-full p-1 border-none border-gray-300 outline-none text-lg" /></td>
              </tr>
              <tr>
                <td className=" p-2 text-center"></td>
                <td className="border border-black p-2">
                  Input voltage to inverter
                </td>
                <td className="border border-black p-2"><input type="text" className="w-full p-1 border-none border-gray-300 outline-none text-lg" /></td>
              </tr>

              <tr>
                <td className="border-t border-black p-2 text-center"></td>
                <td className="border border-black p-2">Structures</td>
                <td className="border border-black p-2"><input type="text" className="w-full p-1 border-none border-gray-300 outline-none text-lg" /></td>
              </tr>
              <tr>
                <td className=" p-2 text-center">10</td>
                <td className="border border-black p-2">
                  Tracking or non-tracking
                </td>
                <td className="border border-black p-2"><input type="text" className="w-full p-1 border-none border-gray-300 outline-none text-lg" /></td>
              </tr>
              <tr>
                <td className=" p-2 text-center"></td>
                <td className="border border-black p-2">
                  Indigenous or Imported
                </td>
                <td className="border border-black p-2"><input type="text" className="w-full p-1 border-none border-gray-300 outline-none text-lg" /></td>
              </tr>

              <tr>
                <td className="border-t border-black p-2 text-center">11</td>
                <td className="border border-black p-2">
                  DC Cables Make And Size
                </td>
                <td className="border border-black p-2"><input type="text" className="w-full p-1 border-none border-gray-300 outline-none text-lg" /></td>
              </tr>
              <tr>
                <td className=" p-2 text-center"></td>
                <td className="border border-black p-2">Voltage of cable</td>
                <td className="border border-black p-2"> <input type="text" className="w-full p-1 border-none border-gray-300 outline-none text-lg" /></td>
              </tr>

              <tr>
                <td className="border-t border-black p-2 text-center">12</td>
                <td className="border border-black p-2">
                  AC & DC Distribution Box
                </td>
                <td className="border border-black p-2">Both Installed</td>
              </tr>
              <tr>
                <td className=" p-2 text-center"></td>
                <td className="border border-black p-2">Make</td>
                <td className="border border-black p-2">
                  {" "}
                  Green Life Solution Pvt Ltd
                </td>
              </tr>
              <tr>
                <td className="border-t border-black p-2 text-center"></td>
                <td className="border border-black p-2">
                  Earthing and Protections
                </td>
                <td className="border border-black p-2"><input type="text" className="w-full p-1 border-none border-gray-300 outline-none text-lg" /></td>
              </tr>
              <tr>
                <td className=" p-2 text-center">13</td>
                <td className="border border-black p-2">Structures</td>
                <td className="border border-black p-2"><input type="text" className="w-full p-1 border-none border-gray-300 outline-none text-lg" /></td>
              </tr>
              <tr>
                <td className=" p-2 text-center"></td>
                <td className="border border-black p-2">Lightening Arrester</td>
                <td className="border border-black p-2"><input type="text" className="w-full p-1 border-none border-gray-300 outline-none text-lg" /></td>
              </tr>
              <tr>
                <td className=" border border-black p-2 text-center">14</td>
                <td className="border border-black p-2">
                  Monitoring Mechanism for the Installed System
                </td>
                <td className="border border-black p-2"><input type="text" className="w-full p-1 border-none border-gray-300 outline-none text-lg" /></td>
              </tr>
            </tbody>
          </table>
          <div className="mt-2 text-md p-4 leading-relaxed">
            We Green Life Solution Pvt Ltd &{" "}
            <input
              type="text"
              className="border-b border-gray-300 outline-none mx-1 w-56 px-2 text-lg"
              value={formData.consumerName}
            />{" "}
            [Consumer] bearing Consumer Number{" "}
            <input
              type="text"
              className="border-b border-gray-300 outline-none mx-1 w-56 px-2 text-lg"
              value={formData.consumerNumber}
            />{" "}
            Ensured structural stability of installed solar power plant and
            obtained requisite permissions from the concerned authority. If in
            future, by virtue of any means due to collapsing or damage to
            installed solar power plant, MSEDCL will not be held responsible for
            any loss to property or human life, if any.
          </div>

          <div className="flex justify-between mx-24 mt-1 mb-2 text-xl ">
            <div className="">
              <p className="mb-2">Signature [Vendor]</p>
              <img src={stamp} alt="stamp of Company" className="w-[40%] relative"/>
            </div>
            <p>Signature[Consumer]</p>
          </div>
        </div>
      </div>
      <div className="mt-4 text-center">
        <button
          onClick={() => generatePDF(SolarPowerPlantReport.displayName)}
          className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
        >
          Download PDF
        </button>
        <button
          onClick={() => navigate("/earthingdetails")}
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Save Data
        </button>
      </div>
    </div>
  );
};

SolarPowerPlantReport.displayName = "SolarPowerPlantReport";

export default SolarPowerPlantReport;
