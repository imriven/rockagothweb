/*!

=========================================================
* BLK Design System React - v1.2.2
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/blk-design-system-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// core components
import IndexNavbar from "components/RockNavbars/IndexNavbar.js";
import PageHeader from "components/PageHeader/RockPageHeader";
import Footer from "components/Footer/RockFooter.js";

// sections for this page/view
import Basics from "views/RockIndexSections/Basics.js";
import Navbars from "views/RockIndexSections/Navbars.js";
import Tabs from "views/RockIndexSections/Tabs.js";
import Pagination from "views/RockIndexSections/Pagination.js";
import Notifications from "views/RockIndexSections/Notifications.js";
import Typography from "views/RockIndexSections/Typography.js";
import JavaScript from "views/RockIndexSections/JavaScript.js";
import NucleoIcons from "views/RockIndexSections/NucleoIcons.js";
import Signup from "views/RockIndexSections/Signup.js";
import Examples from "views/RockIndexSections/Examples.js";
import Download from "views/RockIndexSections/Download.js";

export default function Rock() {
  React.useEffect(() => {
    document.body.classList.toggle("index-page");
    // Specify how to clean up after this effect:
    return function cleanup() {
      document.body.classList.toggle("index-page");
    };
  }, []);
  return (
    <>
      <IndexNavbar />
      <div className="wrapper">
        <PageHeader />
        <div className="main">
          This is Rock's index
          <Basics />
          <Navbars />
          <Tabs />
          <Pagination />
          <Notifications />
          <Typography />
          <JavaScript />
          <NucleoIcons />
          <Signup />
          <Examples />
          <Download />
        </div>
        <Footer />
      </div>
    </>
  );
}
