import type { Preview } from "@storybook/react";

import { Theme } from "app/prodivers/themeProvider";

import { StyleDecorator } from "../../src/shared/config/storybook/styleDecorator/styleDecorator";
import { ThemeDecorator } from "../../src/shared/config/storybook/themeDecorator/themeDecorator";
import { RouterDecorator } from "../../src/shared/config/storybook/routerDecorator/RouterDecorator";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [StyleDecorator, ThemeDecorator(Theme.LIGHT), RouterDecorator],
};

export default preview;
