import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";

import App from "./app/App";

import { ThemeProvider } from "app/prodivers/themeProvider";

render(
  <BrowserRouter>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
