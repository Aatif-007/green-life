import React, { useRef } from "react";
import { useFormContext } from "../Context/FormContext";
import { useNavigate } from "react-router-dom";
import html2pdf from "html2pdf.js";
import stamp from "../assets/images/stamp.jpeg";

const GenerationSystem = () => {
  const { formData, setFormData } = useFormContext();
  const reportRef = useRef();
  const navigate = useNavigate();

  const generatePDF = () => {
    const element = reportRef.current;
    html2pdf().from(element).save("Generationsystem.pdf");
  };

  const SaveData = () => {
    alert("Data Saved");
    navigate("/declarationfordcr");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    console.log(formData);
  };

  return (
    <>
    <div className="flex justify-center py-3">
      {/* Main report container */}
      <div
        className=""
        
      >
        <div className="w-full max-w-4xl bg-white p-8 rounded-lg " ref={reportRef}>
        {/* Header Section */}
        <div className="text-center my-3">
          <p className="text-lg font-medium my-2">
            Renewable Energy Generating System
          </p>
          <p className="text-lg font-medium ">Annexure -I</p>
          <p className="text-base">Commissioning Report for RE System</p>
        </div>

        {/* Table Section */}
        <div className="overflow-x-auto mb-2">
          <table className="table-auto w-full text-left text-lg">
            <thead>
              <tr>
                <th className="px-4 py-2">Sr No.</th>
                <th className="px-4 py-2">Particulars</th>
                <th className="px-4 py-2">As Commissioned</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-2">1</td>
                <td className="px-4 py-2 text-base">Name of Consumer</td>
                <td className="px-4 py-2">
                  <p>{formData.consumerName}</p>
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2">2</td>
                <td className="px-4 py-2">Consumer Number</td>
                <td className="px-4 py-2">
                <p>{formData.consumerNumber}</p>
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2">3</td>
                <td className="px-4 py-2">Mobile Number</td>
                <td className="px-4 py-2">
                  <input type="number" className="border-b text-lg border-black"  />
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2">4</td>
                <td className="px-4 py-2">E-mail</td>
                <td className="px-4 py-2">
                <input type="email" className="border-b text-lg border-black"  />
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2">5</td>
                <td className="px-4 py-2">Address of Installation</td>
                <td className="px-4 py-2"><p>{formData.address}</p></td>
              </tr>
              {/* Additional rows... */}
              <tr>
                <td className="px-4 py-2">6</td>
                <td className="px-4 py-2">RE Arrangement Type</td>
                <td className="px-4 py-2">Net Meter Arrangement</td>
              </tr>
              <tr>
                <td className="px-4 py-2">7</td>
                <td className="px-4 py-2">RE Source</td>
                <td className="px-4 py-2">
                  <input type="text" className="border-b border-black text-lg" />
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2">8</td>
                <td className="px-4 py-2">Sanctioned Capacity(KW)</td>
                <td className="px-4 py-2"><p>{formData.sanctionCapacity}</p></td>
              </tr>
              <tr>
                <td className="px-4 py-2">9</td>
                <td className="px-4 py-2">Capacity Type</td>
                <td className="px-4 py-2">
                <input type="text" className="border-b border-black text-lg" />
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2"> 10</td>
                <td className="px-4 py-2">Project Model</td>
                <td className="px-4 py-2">
                <input type="text" className="border-b border-black text-lg" />
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2">11</td>
                <td className="px-4 py-2">
                  RE installed Capacity(Rooftop)(KW)
                </td>
                <td className="px-4 py-2"><input type="text" className="border-b border-black text-lg" /></td>
              </tr>
              <tr>
                <td className="px-4 py-2">12</td>
                <td className="px-4 py-2">
                  RE installed Capacity(Rooftop + Ground)(KW)
                </td>
                <td className="px-4 py-2"><input type="text" className="border-b border-black text-lg" /></td>
              </tr>
              <tr>
                <td className="px-4 py-2">13</td>
                <td className="px-4 py-2">RE installed Capacity(Ground)(KW)</td>
                <td className="px-4 py-2"><input type="text" className="border-b border-black text-lg" /></td>
              </tr>
              <tr>
                <td className="px-4 py-2">14</td>
                <td className="px-4 py-2">Installation date</td>
                <td className="px-4 py-2">
                  <input type="date" className="" onChange={handleChange} name="date" />
                </td>
              </tr>
              
            </tbody>
            <tbody className="my-10">
            <tr>
                <td className="px-4 w-[12%] py-2">15</td>
                <td className="px-4 py-2 font-medium w-[67%]">SolarPV Details</td>
                <td className="px-4 py-2"></td>
              </tr>
              <tr>
                <td className="px-4 py-2"></td>
                <td className="px-4 py-2">Inverter Capacity(KW)</td>
                <td className="px-4 py-2">
                  <p>{formData.capacityOfInverter}</p>
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2"></td>
                <td className="px-4 py-2">Inverter Make</td>
                <td className="px-4 py-2"><input type="text" className="border-b border-black w-56" /></td>
              </tr>
              <tr>
                <td className="px-4 py-2"></td>
                <td className="px-4 py-2">No .of PV Modules</td>
                <td className="px-4 py-2"><p>{formData.numberOfModule}</p></td>
              </tr>
              <tr>
                <td className="px-4 py-2"></td>
                <td className="px-4 py-2">Module Capacity (KW)</td>
                <td className="px-4 py-2"><input type="text" className="border-b border-black px-1 " value={formData.totalCapacity}/></td>
              </tr>
            </tbody>
          </table>

          
        </div>

        {/* Proforma Section */}
        <div className="proforma  my-14">
          <p className="text-center text-lg font-medium ">Proforma-A</p>
          <p className="text-center text-base font-medium my-2">
            COMMISSIONING REPORT (PROVISIONAL) FOR GRID CONNECTED SOLAR
          </p>
          <p className="text-center text-base font-normal my-2">
            PHOTOVOLTAIC POWER PLANT (with Net-metering facility)
          </p>
          <div className="para text-center text-base mt-4 leading-loose">
            Certified that a Grid Connected SPV Power Plant of{" "}
            <input
              type="text"
              className="border-b text-lg px-2 border-black w-40"
              value={formData.solarSystemCapacity}
            />
            KWp capacity has been installed at the site{" "}
            <input
              type="text"
              className="border-b text-lg px-2 border-black w-72"
              value={formData.address}
            />
            District{" "}
            <input
              type="text"
              className="border-b text-lg px-2 border-black w-52"
            />{" "}
            of MAHARASHTRA which has been installed by M/S{" "}
            <span className="font-medium mx-2  px-2">
              Green Life Solutions Pvt Ltd
            </span>
            on
            <input
              type="date"
              className="border-b text-lg px-2 border-black w-40"
              value={formData.date}
            />{" "}
            The system is as per BIS/MNRE specifications. The system has been
            checked for its performance and found in order for further
            commissioning.
          </div>

          <div className="sign flex items-start justify-between mt-20 mb-8">
            <div className="">
              <p className="text-lg font-medium">
                Signature of the beneficiary{" "}
              </p>
            </div>
            <div className="flex flex-col items-center">
              <p className="text-lg font-medium">
                Signature of the agency with name, seal and date{" "}
              </p>
              <img src={stamp} alt=""className="w-[20%] my-2" />
            </div>
          </div>

          <div className="leading-relaxed">
            The above RTS installation has been inspected by me for
            Pre-Commissioning Testing of Roof Top Solar Connection on dt{" "}
            <input
              type="date"
              className="px-2 w-40 border-b text-lg border-black"
              value={formData.date}
            />{" "}
            as per guidelines issued by the office of The Chief Engineer vide
            letter no 21653 on dt. 18.08.2022 and found in order for
            commissioning
          </div>

          <div className="details my-8">
            <p className="text-base font-medium">Signature of the MSEDCL Officer </p>
            <p className="text-base font-medium">Name</p>
            <p className="text-base font-medium">Designation</p>
            <p className="text-base font-medium">Date and seal</p>
          </div>
        </div>
        </div>
      {/* Footer - PDF buttons */}
        <div className="flex items-center justify-center gap-5 my-4">
          <button
            onClick={() => generatePDF()}
            className="bg-blue-500 text-white px-6 py-3 rounded"
          >
            Download PDF
          </button>
          <button
            onClick={() => SaveData()}
            className="bg-green-500 text-white px-6 py-3 rounded"
          >
            Save Data
          </button>
        </div>
      </div>
      
      
    </div>
    </>
  );
};

export default GenerationSystem;
