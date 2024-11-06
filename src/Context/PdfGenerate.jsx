// PdfContext.js
import React, { createContext, useContext, useRef } from "react";
import html2pdf from "html2pdf.js";

const PdfContext = createContext();

export const PdfProvider = ({ children }) => {
  const reportRef = useRef();
  const consumerNameRef = useRef(""); // For holding consumer name

  const setConsumerName = (name) => {
    consumerNameRef.current = name;
  };

  const generatePDF = () => {
    const element = reportRef.current;
    html2pdf().from(element).save("SolarPowerPlantReport.pdf");
  };

  return (
    <PdfContext.Provider
      value={{ reportRef, consumerNameRef, setConsumerName, generatePDF }}
    >
      {children}
    </PdfContext.Provider>
  );
};

export const usePdf = () => useContext(PdfContext);
