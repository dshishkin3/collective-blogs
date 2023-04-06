import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import { AboutPage } from "pages/AboutPage";
import MainPage from "pages/MainPage/ui/MainPage";
import { routeConfig } from "shared/lib/config/routeConfig/routeConfig";

const AppRouter = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {Object.values(routeConfig).map(({ element, path }) => (
          <Route
            key={path}
            path={path}
            element={
              <Suspense fallback={<div>loading...</div>}>
                <div className="page-wrapper">{element}</div>
              </Suspense>
            }
          />
        ))}
      </Routes>
    </Suspense>
  );
};

export default AppRouter;
