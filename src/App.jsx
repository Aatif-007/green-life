import React from "react";

// import Sld from "./Pages/Sld";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { FormProvider } from "./Context/FormContext";
import SolarPowerPlantReport from "./Pages/SolarPowerPlantReport";


import { PdfProvider } from "./Context/PdfGenerate";

import DeclarationforDCR from "./Pages/DeclarationforDCR";
import GenerationSystem from "./Pages/GenerationSystem";
import Agreement from "./Pages/Agreement";

const App = () => {
  return (
    <div>
      <PdfProvider>
        <FormProvider>
          <Router>
            <Routes>
              <Route path="/" element={<SolarPowerPlantReport />} />
              <Route path="/declarationfordcr" element={<DeclarationforDCR />} />
              
              <Route
                path="/generationsystem"
                element={<GenerationSystem />}
              />
              <Route path="/agreement" element={ <Agreement />} />
            </Routes>
          </Router>
        </FormProvider>
      </PdfProvider>
    </div>
  );
};

export default App;
