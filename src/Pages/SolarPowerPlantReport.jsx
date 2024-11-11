import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { usePdf } from "../Context/PdfGenerate"; // Assuming PdfGenerate is your context file
import { useFormContext } from "../Context/FormContext";
import html2pdf from "html2pdf.js";
import stamp from "../assets/images/stamp.jpeg";

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
          <h1 className="text-2xl font-bold mb-2 text-center my-4">
            Work Completion Report for Solar Power Plant
          </h1>
          <table className="border border-black text-base p-1">
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
                  <input
                    className="w-full p-1 border-none border-gray-300 outline-none text-lg"
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
                  <input
                    type="text"
                    className="w-full p-1 border-none border-gray-300 outline-none text-lg"
                    onChange={handleChange}
                    name="category"
                  />
                </td>
              </tr>
              <tr>
                <td className="border border-black p-2 text-center">5</td>
                <td className="border border-black p-2">Sanction number</td>
                <td className="border border-black p-2">
                  <input
                    type="text"
                    className="w-full p-1 border-none border-gray-300 outline-none text-lg"
                    onChange={handleChange}
                    name="sanctionNumber"
                  />
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
                    onChange={handleChange}
                    name="sanctionCapacity"
                  />
                </td>
              </tr>
              <tr>
                <td className="border-r border-black p-2 text-center"></td>
                <td className=" p-2">Capacity of solar PV system (KW)</td>
                <td className="border border-black p-2">
                  <input
                    type="text"
                    className="w-full p-1 border-none border-gray-300 outline-none text-lg"
                    onChange={handleChange}
                    name="solarSystemCapacity"
                  />

                </td>
              </tr>
              <tr className="text-center font-medium border border-black ">
                <td></td>
                <td className="text-end text-lg p-2 ">Specification of the Modules</td>
              </tr>
              <tr>
                <td className=" p-2 text-center"></td>
                <td className="border border-black p-2">Type of modules</td>
                <td className="border border-black p-2">
                  <input
                    type="text"
                    className="w-full p-1 border-none border-gray-300 outline-none text-lg"
                    onChange={handleChange}
                    name="typeOfModules"
                  />
                </td>
              </tr>
              <tr>
                <td className=" p-2 text-center"></td>
                <td className="border border-black p-2">ALMM Model Number</td>
                <td className="border border-black p-2">
                  <input
                    type="text"
                    className="w-full p-1 border-none border-gray-300 outline-none text-lg"
                    onChange={handleChange}
                    name="almmModelNumber"
                  />
                </td>
              </tr>
              <tr>
                <td className=" p-2 text-center"></td>
                <td className="border border-black p-2">Wattage per module</td>
                <td className="border border-black p-2">
                  <input
                    type="text"
                    className="w-full p-1 border-none border-gray-300 outline-none text-lg"
                    name="wattageModule"
                  />
                </td>
              </tr>
              <tr>
                <td className=" p-2 text-center"></td>
                <td className="border border-black p-2">No. of Module</td>
                <td className="border border-black p-2">
                  <input
                    type="text"
                    className="w-full p-1 border-none border-gray-300 outline-none text-lg"
                    onChange={handleChange}
                    name="numberOfModule"
                  />
                </td>
              </tr>
              <tr>
                <td className=" p-2 text-center">7</td>
                <td className="border border-black p-2">
                  Total Capacity (KWP)
                </td>
                <td className="border border-black p-2">
                  <input
                    type="text"
                    className="w-full p-1 border-none border-gray-300 outline-none text-lg"
                    onChange={handleChange}
                    name="totalCapacity"
                  />
                </td>
              </tr>
              <tr>
                <td className=" p-2 text-center"></td>
                <td className="border border-black p-2">
                  Warrantee Details (Product + Performance)
                </td>
                <td className="border border-black p-2">
                  <input
                    type="text"
                    className="w-full p-1 border-none border-gray-300 outline-none text-lg"
                    name="warranteeDetails"
                    onChange={handleChange}
                  />
                </td>
              </tr>

              <tr className="text-center font-medium border border-black ">
                <td></td>
                <td className="text-end  text-lg p-2">PCU</td>
              </tr>
              <tr>
                <td className=" p-2 text-center"></td>
                <td className="border border-black p-2">
                  Make & Model number of Inverter
                </td>
                <td className="border border-black p-2">
                  <input
                    type="text"
                    className="w-full  border-none border-gray-300 outline-none text-lg"
                    name="inverterModelNumber"
                    onChange={handleChange}
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
                    onChange={handleChange}
                    name="rating"
                  />
                </td>
              </tr>
              <tr>
                <td className=" p-2 text-center">8</td>
                <td className="border border-black p-2">
                  Type of charge controller/ MPPT
                </td>
                <td className="border border-black p-2">
                  <input
                    type="text"
                    className="w-full p-1 border-none border-gray-300 outline-none text-lg"
                    onChange={handleChange}
                    name="mppt"
                  />
                </td>
              </tr>
              <tr>
                <td className=" p-2 text-center"></td>
                <td className="border border-black p-2">
                  Capacity of Inverter
                </td>
                <td className="border border-black p-2">
                  <input
                    type="text"
                    className="w-full p-1 border-none border-gray-300 outline-none text-lg"
                    onChange={handleChange}
                    name="capacityOfInverter"
                  />
                </td>
              </tr>
              <tr className="">
                <td className=" p-2 text-center"></td>
                <td className="border border-black p-2">HPD</td>
                <td className="border border-black p-2"><input type="text" 
                
                className="w-full p-1 border-none border-gray-300 outline-none text-lg"
                onChange={handleChange}
                name="hpd"
                /></td>
              </tr>
              <tr>
                <td className="border-b border-black p-2 text-center"></td>
                <td className="border border-black p-2">
                  Year of manufacturing
                </td>
                <td className="border border-black p-2">
                  <input
                    type="text"
                    className="w-full p-1 border-none border-gray-300 outline-none text-lg"
                    onChange={handleChange}
                    name="yearOfManufacturing"
                  />
                </td>
              </tr>

              <tr className="text-center font-medium border border-black ">
                <td></td>
                <td className="text-end  text-lg p-2">Earthing and Protections</td>
              </tr>
              <tr>
                <td className=" p-2 text-center">9</td>
                <td className="border border-black p-2">
                  No of Separate Earthings with earth Resistance
                </td>
                <td className="border border-black p-2">
                  <input
                    type="text"
                    className="w-full p-1 border-none border-gray-300 outline-none text-lg"
                    name="NoOfSeparateEarthingsWithEarthResistance"
                    onChange={handleChange}
                  />
                </td>
              </tr>
              <tr>
                <td></td>
                <td className="border border-black p-2 text-start" colSpan="3">
                  It is certified that the Earth Resistance measure in presence
                  of Licensed Electrical Contractor/Supervisor and found in
                  order i.e. 5 Ohms as per MNRE OM Dtd. 07.06.24 for CFA
                  Component
                </td>
              </tr>
              <tr>
                <td className=" border border-black p-2 text-center">10</td>
                <td className="border border-black p-2">Lightening Arrester</td>
                <td className="border border-black p-2">
                  <input
                    type="text"
                    className="w-full p-1 border-none border-gray-300 outline-none text-lg"
                    onChange={handleChange}
                    name="lighteningArrester"
                  />
                </td>
              </tr>
            </tbody>
          </table>
          <div className="mt-2 text-md p-4 leading-relaxed">
            <p className="leading-relaxed text-lg">
              We{" "}
              <input type="text" className="border-b border-black w-64 px-2 text-lg" value={"Green Life Solutions Pvt Ltd"} readOnly />{" "}
              [Vendor]& <input type="text" className="border-b border-black w-52 px-2 " value={formData.consumerName} />[Consumer] bearing Consumer
              Number <input type="text" className="border-b border-black w-52 px-2 " value={formData.consumerNumber} /> Ensured structural stability of installed
              solar power plant and obtained requisite permissions from the
              concerned authority. If in future, by virtue of any means due to
              collapsing or damage to installed solar power plant, MSEDCL will
              not be held responsible for any loss to property or human life, if
              any
            </p>

            <p className="my-4 text-lg">
              This is to Certified above Installed Solar PV System is working
              properly with electrical safety & Islanding switch in case of any
              presence of backup inverter an arrangement should be made in such
              way the backup inverter supply should never be synchronized with
              solar inverter to avoid any electrical accident due to back
              feeding. We will be held responsible for non-working of islanding
              mechanism and back feed to the de-energized grid.
            </p>
          </div>

          <div className="flex justify-between mx-24 mt-1 mb-2 text-xl ">
            <div className="">
              <p className="mb-2">Signature [Vendor]</p>
              <img src={stamp} alt="stamp of Company" className="w-[40%] my-4" />
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
          onClick={() => navigate("/generationsystem")}
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
