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

// Vision UI Dashboard PRO React base styles
import typography from "assets/theme/base/typography";
import colors from "assets/theme/base/colors";

// Vision UI Dashboard PRO React helper functions
import pxToRem from "assets/theme/functions/pxToRem";

const { size, fontWeightRegular } = typography;
const { grey, white } = colors;

export default {
  styleOverrides: {
    label: {
      marginTop: `${pxToRem(8)} !important`,
      fontWeight: fontWeightRegular,
      fontSize: size.md,
      color: grey[300],

      "&.Mui-active": {
        fontWeight: `${fontWeightRegular} !important`,
        color: `${white.main} !important`,
      },

      "&.Mui-completed": {
        fontWeight: `${fontWeightRegular} !important`,
        color: `${white.main} !important`,
      },
    },
  },
};
