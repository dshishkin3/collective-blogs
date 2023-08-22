import type { Meta, StoryObj } from "@storybook/react";

import { ThemeDecorator } from "shared/config/storybook/themeDecorator/themeDecorator";
import { Theme } from "app/prodivers/themeProvider";
import { SideBar } from "./SideBar";

const meta: Meta<typeof SideBar> = {
  component: SideBar,
  title: "widget/Sidebar"
};

export default meta;
type Story = StoryObj<typeof SideBar>;

export const Light: Story = {
  render: () => <SideBar />
};
Light.decorators = [ThemeDecorator(Theme.LIGHT)];

export const Dark: Story = {
  render: () => <SideBar />
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];