import { useState } from "react";
import { t } from "i18next";

import { classNames } from "shared/lib/classNames/classNames";
import { ThemeSwitcher } from "shared/ui/ThemeSwitcher";
import { LangSwitcher } from "shared/ui/LangSwitcher/LangSwitcher";

import styles from "./SideBar.module.scss";

export const SideBar = () => {
  const [collapsed, setCollapsed] = useState(false);

  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <div
      data-testid="sidebar"
      className={classNames(styles.SideBar, { [styles.collapsed]: collapsed })}
    >
      <button data-testid="sidebar-toggle" onClick={onToggle}>
        {t("toggle")}
      </button>
      <div className={styles.switchers}>
        <ThemeSwitcher />
        <LangSwitcher />
      </div>
    </div>
  );
};
