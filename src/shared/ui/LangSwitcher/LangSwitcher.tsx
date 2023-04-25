import { useTranslation } from "react-i18next";

import { Button, ThemeButton } from "../Button/Button";

import styles from "./LangSwitcher.module.scss";

export const LangSwitcher = () => {
  const { t, i18n } = useTranslation();

  const toggle = () => {
    i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
  };

  return (
    <div className={styles.container}>
      <Button theme={ThemeButton.CLEAR} onClick={toggle}>
        {t("Язык")}
      </Button>
    </div>
  );
};
