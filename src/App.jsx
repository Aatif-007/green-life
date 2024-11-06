import React from "react";
import EarthingDetails from "./Pages/EarthingDetails";
import DeclarationCertificate from "./Pages/DeclarationCertificate";
import Sld from "./Pages/Sld";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GuaranteeCertificate from "./Pages/GuaranteeCertificate";
import { FormProvider } from "./Context/FormContext";
import SolarPowerPlantReport from "./Pages/SolarPowerPlantReport";
import CertifiedOrUndertaking from "./Pages/CertifiedOrUndertaking";
import Declearation from "./Pages/Declearation";
import { PdfProvider } from "./Context/PdfGenerate";

const App = () => {
  return (
    <div>
      <PdfProvider>
        <FormProvider>
          <Router>
            <Routes>
              <Route path="/" element={<SolarPowerPlantReport />} />
              <Route path="/earthingdetails" element={<EarthingDetails />} />
              <Route path="/sld" element={<Sld />} />
              <Route
                path="/declarationcertificate"
                element={<DeclarationCertificate />}
              />
              
              <Route
                path="/guaranteecertificate"
                element={<GuaranteeCertificate />}
              />
              <Route path="/certificate" element={<CertifiedOrUndertaking />} />
              <Route path="/declearation" element={<Declearation />} />
            </Routes>
          </Router>
        </FormProvider>
      </PdfProvider>
    </div>
  );
};

export default App;
