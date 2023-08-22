import { StoryFn } from "@storybook/react";
import { Theme } from "app/prodivers/themeProvider";

import "app/styles/index.scss";

export const ThemeDecorator = (theme: Theme) => (Story: StoryFn) =>
  (
    <div className={`app ${theme}`}>
      <Story />
    </div>
  );
