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

// prop-types is a library for typechecking of props.
import PropTypes from "prop-types";

// @mui material components
import Collapse from "@mui/material/Collapse";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Icon from "@mui/material/Icon";

// Vision UI Dashboard PRO React components
import VuiBox from "components/VuiBox";

// Custom styles for the SidenavItem
import { item, itemContent, itemArrow } from "examples/Sidenav/styles/sidenavItem";

// Vision UI Dashboard PRO React contexts
import { useVisionUIController } from "context";

function SidenavItem({ color, name, active, nested, children, open, ...rest }) {
  const [controller] = useVisionUIController();
  const { miniSidenav } = controller;

  return (
    <>
      <ListItem {...rest} component="li" sx={item}>
        <VuiBox sx={(theme) => itemContent(theme, { color, active, miniSidenav, name, nested })}>
          <ListItemText primary={name} />
          {children && (
            <Icon component="i" sx={(theme) => itemArrow(theme, { open, miniSidenav })}>
              expand_less
            </Icon>
          )}
        </VuiBox>
      </ListItem>
      {children && (
        <Collapse in={open} timeout="auto" unmountOnExit>
          {children}
        </Collapse>
      )}
    </>
  );
}

// Setting default values for the props of SidenavItem
SidenavItem.defaultProps = {
  active: false,
  nested: false,
  children: false,
  open: false,
};

// Typechecking props for the SidenavItem
SidenavItem.propTypes = {
  name: PropTypes.string.isRequired,
  active: PropTypes.bool,
  nested: PropTypes.bool,
  children: PropTypes.node,
  open: PropTypes.bool,
};

export default SidenavItem;
