import { useTheme } from "app/prodivers/themeProvider";
import { classNames } from "shared/lib/classNames/classNames";
import { AppRouter } from "./prodivers/router";
import { NavBar } from "widgets/NavBar";
import { SideBar } from "widgets/SideBar";

import "./styles/index.scss";

const App = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <NavBar />
      <div className="content-page">
        <SideBar />
        <AppRouter />
      </div>
    </div>
  );
};

export default App;
