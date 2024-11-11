import React, { useRef } from "react";
import { useFormContext } from "../Context/FormContext";
import html2pdf from "html2pdf.js";
import { useNavigate } from "react-router-dom";

const Agreement = () => {
  const { formData } = useFormContext(); // Assuming formData has the data to populate in the report
  const reportRef = useRef();
  const navigate = useNavigate();

  const generatePDF = () => {
    const element = reportRef.current;
    html2pdf().from(element).save("Agreement.pdf");
  };

  const saveData = () => {
    // You could handle saving the data more specifically, depending on the app's context.
    // For now, we just show an alert and navigate back.
    alert("Data saved successfully!");
    // You could also make a request to save the form data on a backend, for example.
    navigate("/"); // Navigate to the homepage or some other route after saving.
  };

  return (
    <>
      <div className="flex justify-center py-10">
        {/* Main report container */}
        <div
          className="w-full max-w-4xl bg-white p-8 rounded-lg shadow-lg my-3"
          ref={reportRef}
        >
          {/* Header Section */}
          <h1 className="text-center text-lg font-medium">
            Net Metering Connection Agreement
          </h1>
          <p className="text-lg">
            This Agreement is made and entered into at Solapur on this{" "}
            <input type="text" className="border-b border-black w-28" />
            day of{" "}
            <input
              type="date"
              className="border-b border-black px-2 w-32"
            />{" "}
            between the Eligible Consumer
            <input
              type="text"
              className="border-b border-black px-2 w-46 my-4"
              value={formData.consumerName}
            />
            (NAME) having premises at
            <input
              type="text"
              className="border-b border-black px-2 w-64 my-3"
              value={formData.address}
            />
            (ADDRESS) and Consumer No.
            <input
              type="text"
              className="border-b border-black px-2 my-3 w-48"
              value={formData.consumerNumber}
            />{" "}
            As the first Party,
          </p>
          <p className="text-center text-lg">AND</p>

          <p>
            The Distribution Licensee- Maharashtra State Electricity
            Distribution Co. Ltd; and having its Registered Office at{" "}
            <input
              type="text"
              className="border-b border-black w-[30rem] my-3 px-2"
            />
            as second Party of this Agreement;
          </p>

          <p className="my-4">
            Whereas, the Eligible Consumer has applied to the Licensee for
            approval of a Net Metering Arrangement under the provisions of the
            Maharashtra Electricity Regulatory Commission (Net Metering for
            Roof-top Solar Photo Voltaic Systems) Regulations, 2015 ('the Net
            Metering Regulations') and sought its connectivity to the Licensee's
            Distribution Network ;
          </p>

          <p>
            And whereas, the Licensee has agreed to provide Network connectivity
            to the Eligible Consumer for injection of electricity generated from
            its Roof-top Solar PV System of{" "}
            <input type="text" className="my-3 border-b border-black w-24" value={formData.solarSystemCapacity} />{" "}
            kilowatt; Both Parties hereby agree as follows:-
          </p>

          <ul className="list-decimal my-4">
            <li className="my-2">
              <p className="text-lg font-medium  ">Eligiblity</p>
              <p className="font-normal pl-3 m-2">
                The Roof-top Solar PV System meets the applicable norms for
                being integrated into the Distribution Network, and that the
                Eligible Consumer shall maintain the System accordingly for the
                duration of this Agreement
              </p>
            </li>

            <li className="my-4 leading-relaxed">
              <p className="text-lg font-medium  ">
                Technical and Inter-connection Requirements:
              </p>
              <p className="pl-3 m-2">
                The metering arrangement and the inter-connection of the
                Roof-top Solar PV System with the Network of the Licensee shall
                be as per the provisions of the Net Metering Regulations and the
                technical standards and norms specified by the Central
                Electricity Authority for connectivity of distributed generation
                resources and for the installation and operation of meters.
                <p className="my-3">
                  The Eligible Consumer agrees, that he shall install, prior to
                  connection of the Roof-top Solar PV System to the Network of
                  the Licensee, an isolation device (both automatic and in built
                  within inverter and external manual relays); and the
                  <p className="my-3">
                    Licensee shall have access to it if required for the repair
                    and maintenance of the Distribution Network.
                  </p>
                  <p className="my-3">
                    The Licensee shall specify the interface/inter-connection
                    point and metering point.
                  </p>
                  <p className="my-3">
                    The Eligible Consumer shall furnish all relevant data, such
                    as voltage, frequency, circuit breaker, isolator position in
                    his System, as and when required by the Licensee.
                  </p>
                </p>
              </p>
            </li>

            <li className="leading-relaxed">
              <p className="font-medium text-lg">Safety</p>
              <p className="my-4 pl-3 m-2">
                The equipment connected to the Licensee's Distribution System
                shall be compliant with relevant International (IEEE/IEC) or
                Indian Standards (BIS), as the case may be, and the installation
                of electrical equipment shall comply with the requirements
                specified by the Central Electricity Authority regarding safety
                and electricity supply.
              </p>

              <p className="my-4 pl-3 m-2">
                The design, installation, maintenance and operation of the
                Roof-top Solar PV System shall be undertaken in a manner
                conducive to the safety of the Roof-top Solar PV System as well
                as the Licensee's Network
              </p>

              <p className="my-4 pl-3 m-2">
                If, at any time, the Licensee determines that the Eligible
                Consumer's Roof-top Solar PV System is causing or may cause
                damage to and/or results in the Licensee's other consumers or
                its assets, the Eligible Consumer shall disconnect the Roof-top
                Solar PV System from the distribution Network upon direction
                from the Licensee, and Shall undertake corrective measures at
                his own expense prior to re-connection.
              </p>

              <p className="my-4 pl-3 m-2">
                The Licensee shall not be responsible for any accident resulting
                in injury to human beings or animals or damage to property that
                may occur due to back- feeding from the Roof-top Solar PV System
                when the grid supply is off. The Licensee may disconnect the
                installation at any time in the event of such exigencies to
                prevent such accident.
              </p>
            </li>

            <li className="leading-relaxed">
              <p className="font-medium text-lg">
                Other Clearances and Approvals
              </p>
              <p className="my-4 pl-3 m-2">
                The Eligible Consumer shall obtain any statutory approvals and
                clearances that maybe required, such as from the Electrical
                Inspector or the municipal or other authorities, before
                connecting the Roof-top Solar PV System to the distribution
                Network.
              </p>
            </li>

            <li className="leading-relaxed">
              <p className="my-4 pl-3 m-2">
                Period of Agreement, and Termination
              </p>
              <p className="my-4 pl-3 m-2">
                This Agreement shall be for a period for 20 years, but may be
                terminated prematurely
              </p>
              <ul className="">
                <li>(a) By mutual consent; or</li>
                <li>
                  (b) By the Eligible Consumer, by giving 30 days' notice to the
                  Licensee{" "}
                </li>
                <li>
                  (c) By the Licensee, by giving 30 days' notice, if the
                  Eligible Consumer breaches any terms of this Agreement or the
                  provisions of the Net Metering Regulations and does not remedy
                  such breach within 30 days, or such other reasonable period as
                  may be provided, of receiving notice of such breach, or for
                  any other valid reason communicated by the Licensee in
                  writing.
                </li>
              </ul>
            </li>

            <li className="leading-relaxed">
              <p className="text-lg font-medium my-3">
                Access and Disconnection :
              </p>
              <p className="my-4 pl-3 m-2">
                The Eligible Consumer shall provide access to the Licensee to
                the metering equipment and disconnecting devices of Roof-top
                Solar PV System, both automatic and manual, by the Eligible
                Consumer.
              </p>

              <p className="my-4 pl-3 m-2">
                If, in an emergent or outage situation, the Licensee cannot
                access the disconnecting devices of the Roof-top Solar PV
                System, both automatic and manual, it may disconnect power
                supply to the premises.
              </p>

              <p className="my-7  m-2">
                6.3 Upon termination of this Agreement under Clause 5, the
                Eligible Consumer shall disconnect the Roof-top Solar PV System
                forthwith from the Network of the Licensee.
              </p>
            </li>

            <li className="leading-relaxed">
              <p className="text-lg font-medium">Liabilities:</p>
              <p className="m-2 my-4 px-3 pl-3">
                The Parties shall indemnify each other for damages or adverse
                effects of either Party's negligence or misconduct during the
                installation of the Roof-top Solar PV System, connectivity with
                the distribution Network and operation of the System.
              </p>

              <p className="m-2 my-4 px-3 pl-2">
                The Parties shall not be liable to each other for any loss of
                profits or revenues, business interruption losses, loss of
                contract or goodwill, or for indirect, consequential, incidental
                or special damages including, but not limited to, punitive or
                exemplary damages, whether any of these liabilities, losses or
                damages arise in contract, or otherwise.
              </p>
            </li>

            <li className="leading-relaxed">
              <p className="text-lg font-medium">Commercial Settlement:</p>
              <p className="m-2 my-4 px-3 pl-2">
                The commercial settlements under this Agreement shall be in
                accordance with the Net Metering Regulations.{" "}
              </p>
              <p className="m-2 my-4 px-3 pl-2">
                The Licensee shall not be liable to compensate the Eligible
                Consumer if his Rooftop Solar PV System is unable to inject
                surplus power generated into the Licensee's Network on account
                of failure of power supply in the grid/Network.
              </p>
              <p className="m-2 my-4 px-3 pl-2">
                The existing metering System, if not in accordance with the Net
                Metering Regulations, shall be replaced by a bi-directional
                meter (whole current/CT operated) or a pair of meters (as per
                the definition of 'Net Meter' in the Regulations),
              </p>
            </li>

            <li>
              <p className="text-lg font-medium">Connection Costs:</p>
              <p className="m-2 my-4 px-3 pl-2">
                The Eligible Consumer shall bear all costs related to the
                setting up of the Roof-top Solar PV System, excluding the Net
                Metering Arrangement costs.
              </p>
            </li>

            <li className="my-4">
              <p className="text-lg font-medium">Dispute Resolution:</p>
              <p className="m-2 my-4 px-3 pl-2">
                Any dispute arising under this Agreement shall be resolved
                promptly, in good faith and in an equitable manner by both the
                Parties.
              </p>
              <p className="m-2 my-4 px-3 pl-2">
                The Eligible Consumer shall have recourse to the concerned
                Consumer Grievance Redressal Forum constituted under the
                relevant Regulations in respect of any grievance regarding
                billing which has not been redressed by the Licensee.
              </p>

              <p className="m-2 my-4 px-3 pl-2">
                In the witness where of (VENDOR
                NAME) <input type="text" className="w-56 border-b mx-2 px-2 border-black" value={"Green Life Solution Pvt Ltd"}/> for and on behalf of
                Eligible Consumer and Shri.{" "}
                <input
                  type="text"
                  className="w-72 border-b mx-2 my-3 px-2 border-black"
                />{" "}
                for and on behalf of MSEDCL agree to this agreement.
              </p>
            </li>
          </ul>

          <div className="flex items-center justify-between">
            <div className="">
                  <input type="text" className="w-56 border-b border-black" />
                  <p>For Eligible Consumer</p>

                  <p className="my-5">
                    Witness 1 (VENDOR)
                  </p>
            </div>
            <div className="my-4">
                  <p>Shri<input type="text" className="w-56 border-b border-black" /> <br />for and on behalf of MSEDCL</p>
                  <p>Witness 1</p>
            </div>
          </div>

          {/* Buttons for PDF Download and Save */}
        </div>
      </div>
      <div className="flex items-center justify-center gap-5 my-4">
        <button
          onClick={generatePDF}
          className="bg-blue-500 text-white px-6 py-3 rounded"
        >
          Download PDF
        </button>
        <button
          onClick={saveData}
          className="bg-green-500 text-white px-6 py-3 rounded"
        >
          Save Data
        </button>
      </div>
    </>
  );
};

export default Agreement;
