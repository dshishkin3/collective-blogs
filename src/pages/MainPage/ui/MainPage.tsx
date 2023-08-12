import { BugButton } from "app/prodivers/errorBoundary";
import React from "react";
import { useTranslation } from "react-i18next";

const MainPage = () => {
  const { t } = useTranslation();

  return (
    <div>
      {t("Главная страница")}
      <BugButton />
    </div>
  );
};

export default MainPage;
