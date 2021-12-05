import * as React from "react";

import {Routes} from "@pages/routes";
import {GlobalStyles} from "./global-styles";

export const App: React.FC = () => (
  <>
    <Routes />
    <GlobalStyles />
  </>
);
