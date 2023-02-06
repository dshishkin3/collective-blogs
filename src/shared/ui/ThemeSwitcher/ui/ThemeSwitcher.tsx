import { Theme, useTheme } from "app/prodivers/themeProvider";
import React, { FC } from "react";
import { classNames } from "shared/lib/classNames/classNames";

import LightIcon from "shared/assets/icons/theme-light.svg";
import DarkIcon from "shared/assets/icons/theme-dark.svg";

import styles from "./ThemeSwitcher.module.scss";
import { Button, ThemeButton } from "shared/ui/Button/Button";

interface ThemeSwitherProps {
  className?: string;
}

export const ThemeSwitcher: FC<ThemeSwitherProps> = ({ className }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      theme={ThemeButton.CLEAR}
      className={classNames(styles.ThemeSwither, {}, [className])}
      onClick={toggleTheme}
    >
      {theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}
    </Button>
  );
};
