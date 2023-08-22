import type { Meta, StoryObj } from "@storybook/react";

import { ThemeDecorator } from "shared/config/storybook/themeDecorator/themeDecorator";
import { Theme } from "app/prodivers/themeProvider";
import MainPage from "./MainPage";

const meta: Meta<typeof MainPage> = {
  component: MainPage,
  title: "pages/MainPage",
};

export default meta;
type Story = StoryObj<typeof MainPage>;

export const Normal: Story = {
  render: () => <MainPage />,
};
Normal.decorators = [ThemeDecorator(Theme.LIGHT)];

export const Dark: Story = {
  render: () => <MainPage />,
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
