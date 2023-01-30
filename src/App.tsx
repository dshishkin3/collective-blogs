import { Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import { Suspense } from "react";

import { AboutPageLazy } from "./pages/AboutPage/AboutPage.lazy";
import { MainPageLazy } from "./pages/MainPage/MainPage.lazy";

import { useTheme } from "./theme/useTheme";

import "./styles/index.scss";

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`app ${theme}`}>
      <button onClick={toggleTheme}>сменить тему</button>
      <Link to={"/"}>Главная</Link>
      <Link to={"/about"}>О сайте</Link>

      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path={"/about"} element={<AboutPageLazy />} />
          <Route path={"/"} element={<MainPageLazy />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
