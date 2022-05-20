import BaseFooter from "./BaseFooter";
import BaseHeader from "./BaseHeader";
import Sections from "./Sections";
import React, { useState, useEffect } from "react";
import PublicHeader from "./PublicHeader";

function Triple() {
  return (
    <div>
      {/* Triple */}
      <PublicHeader />
      <BaseHeader />
      <Sections />
      {/* <BaseFooter /> */}
    </div>
  );
}

export default Triple;
