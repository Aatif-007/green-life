import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { usePdf } from "../Context/PdfGenerate";
import  html2pdf  from "html2pdf.js";
import { useFormContext } from "../Context/FormContext";

const Declearation = () => {
  // const { generatePDF, reportRef } = usePdf();
  const navigate = useNavigate();
  const { formData } = useFormContext();
  const reportRef = useRef()
  const handleSaveData = () => {
    alert("All Data saved")
    navigate("/");
  };

  const generatePDF = () => {
    const element = reportRef.current;
    html2pdf().from(element).save("selfdeclaration.pdf");
  };

  return (
    <div className="p-6 mx-72">
      <div className="px-12 py-20  border-2 border-gray-700" ref={reportRef}>
        <div className="flex justify-end text-[20px] mr-28">Annexure-A</div>
        <h2 className="text-[20px] font-semibold text-center">
          Undertaking/Self- Declaration for Domestic Content Requirement
          fulfillment
        </h2>
        <p className="text-center mt-8">(On a plain Paper)</p>
        <div className="mt-8">
          <ol className="space-y-4 text-[18px]">
            <li>
              <p>
                1. This is to certify that M/S <input type="text" className="border border-gray-300 outline-none px-2" /> [Company Name] has installed KW
                [Capacity] Grid Connected Rooftop Solar Plant for <input type="text" className="border border-gray-300 outline-none px-2" value={formData.consumerName} /> [Consumer
                Name] at
                <input
                  type="text"
                  className="border border-gray-300 outline-none px-2"
                />
                [Address] under application number
                <input
                  type="text"
                  className="border border-gray-300 outline-none px-2"
                />
                . dated [date of application] under <input type="text" className="border border-gray-300 outline-none  px-2" /> [DISCOM Name].
              </p>
            </li>
            <li>
              <p>
                2. It is hereby undertaken that the PV modules installed for the
                above-mentioned project are domestically manufactured using
                domestic manufactured solar cells. The details of installed PV
                Modules are as follows:
              </p>
            </li>
            <li>
              1. PV Module Capacity:{" "}
              <input
                type="text"
                className="border border-gray-300 outline-none"
              />{" "}
            </li>
            <li>
              2. Number of PV Modules:{" "}
              <input
                type="text"
                className="border border-gray-300 outline-none"
              />
            </li>
            <li>
              3. Sr No of PV Module :{" "}
              <input
                type="text"
                className="border border-gray-300 outline-none"
              />
            </li>
            <li>
              4. PV Module Make:
              <input
                type="text"
                className="border border-gray-300 outline-none"
              />
            </li>
            <li>
              5. Cell manufacturer’s name:
              <input
                type="text"
                className="border border-gray-300 outline-none"
              />
            </li>
            <li>
              6. Cell GST invoice No:
              <input
                type="text"
                className="border border-gray-300 outline-none"
              />
            </li>
            <li>
              <p>
                3. The above undertaking is based on the certificate issued by
                PV Module manufacturer/supplier while supplying the above
                mentioned order.
              </p>
            </li>
            <li>
              <p>
                4. I,
                <input
                  type="text"
                  className="border border-gray-300 outline-none"
                />
                on behalf of M/S [Company Name] further declare that the
                information given above is true and correct and nothing has been
                concealed therein. If anything is found incorrect at any stage,
                then REC/ MNRE may take any appropriate action against my
                company for wrong declaration. Supporting documents and proof of
                the above information will be provided as and when requested by
                MNRE.
              </p>
            </li>
          </ol>
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
Declearation.displayName = "Declearation";
export default Declearation;
