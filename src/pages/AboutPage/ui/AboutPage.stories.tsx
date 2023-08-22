import type { Meta, StoryObj } from "@storybook/react";

import { ThemeDecorator } from "shared/config/storybook/themeDecorator/themeDecorator";
import { Theme } from "app/prodivers/themeProvider";
import AboutPage from "./AboutPage";

const meta: Meta<typeof AboutPage> = {
  component: AboutPage,
  title: "pages/AboutPage",
};

export default meta;
type Story = StoryObj<typeof AboutPage>;

export const Normal: Story = {
  render: () => <AboutPage />,
};
Normal.decorators = [ThemeDecorator(Theme.LIGHT)];

export const Dark: Story = {
  render: () => <AboutPage />,
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
