/** 

=========================================================
* Vision UI PRO React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/vision-ui-dashboard-pro-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com/)

* Design and Coded by Simmmple & Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Visionware.

*/

import { useState } from "react";

// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";

// Vision UI Dashboard PRO React components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
import VuiButton from "components/VuiButton";

// Vision UI Dashboard PRO React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";

// Wizard page components
import About from "layouts/applications/wizard/components/About";
import Account from "layouts/applications/wizard/components/Account";
import Address from "layouts/applications/wizard/components/Address";

function getSteps() {
  return ["About", "Account", "Address"];
}

function getStepContent(stepIndex) {
  switch (stepIndex) {
    case 0:
      return <About />;
    case 1:
      return <Account />;
    case 2:
      return <Address />;
    default:
      return null;
  }
}

function Wizard() {
  const [activeStep, setActiveStep] = useState(0);
  const steps = getSteps();
  const isLastStep = activeStep === steps.length - 1;

  const handleNext = () => setActiveStep(activeStep + 1);
  const handleBack = () => setActiveStep(activeStep - 1);

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <VuiBox pt={3} pb={8}>
        <Grid container justifyContent="center">
          <Grid item xs={12} lg={8}>
            <VuiBox mt={6} mb={1} textAlign="center">
              <VuiBox mb={1}>
                <VuiTypography variant="h3" fontWeight="bold" color="white">
                  Build Your Profile
                </VuiTypography>
              </VuiBox>
              <VuiTypography variant="button" fontWeight="regular" color="white">
                This information will let us know more about you.
              </VuiTypography>
            </VuiBox>

            <Stepper activeStep={activeStep} alternativeLabel>
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
            <Card>
              <VuiBox p={2}>
                <VuiBox>
                  {getStepContent(activeStep)}
                  <VuiBox mt={3} width="100%" display="flex" justifyContent="space-between">
                    {activeStep === 0 ? (
                      <VuiBox />
                    ) : (
                      <VuiButton variant="gradient" color="light" onClick={handleBack}>
                        back
                      </VuiButton>
                    )}
                    <VuiButton
                      variant="contained"
                      color="info"
                      onClick={!isLastStep ? handleNext : undefined}
                    >
                      {isLastStep ? "send" : "next"}
                    </VuiButton>
                  </VuiBox>
                </VuiBox>
              </VuiBox>
            </Card>
          </Grid>
        </Grid>
      </VuiBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Wizard;
