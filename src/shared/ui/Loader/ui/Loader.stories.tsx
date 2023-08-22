import type { Meta, StoryObj } from "@storybook/react";

import { ThemeDecorator } from "shared/config/storybook/themeDecorator/themeDecorator";
import { Theme } from "app/prodivers/themeProvider";
import { Loader } from "./Loader";

const meta: Meta<typeof Loader> = {
  component: Loader,
  title: "widget/Loader",
};

export default meta;
type Story = StoryObj<typeof Loader>;

export const Normal: Story = {
  render: () => <Loader />,
};
Normal.decorators = [ThemeDecorator(Theme.LIGHT)];

export const Dark: Story = {
  render: () => <Loader />,
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
