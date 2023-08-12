import React from "react";
import { t } from "i18next";

import styles from "./PageError.module.scss";

export const PageError = () => {
  // eslint-disable-next-line no-restricted-globals
  const reloadPage = () => location.reload();

  return (
    <div className={styles.pageError}>
      <h1>{t("Произошла непредвиденная ошибка")}</h1>
      <button onClick={reloadPage}>{t("Перезагрузить страницу")}</button>
    </div>
  );
};
