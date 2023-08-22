import type { Meta, StoryObj } from "@storybook/react";

import { ThemeDecorator } from "shared/config/storybook/themeDecorator/themeDecorator";
import { Theme } from "app/prodivers/themeProvider";
import { NavBar } from "./NavBar";

const meta: Meta<typeof NavBar> = {
  component: NavBar,
  title: "widget/NavBar",
};

export default meta;
type Story = StoryObj<typeof NavBar>;

export const Light: Story = {
  render: () => <NavBar />,
};
Light.decorators = [ThemeDecorator(Theme.LIGHT)];

export const Dark: Story = {
  render: () => <NavBar />,
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
