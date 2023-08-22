import type { Meta, StoryObj } from "@storybook/react";

import { ThemeDecorator } from "shared/config/storybook/themeDecorator/themeDecorator";
import { Theme } from "app/prodivers/themeProvider";
import { NotFoundPage } from "./NotFoundPage";

const meta: Meta<typeof NotFoundPage> = {
  component: NotFoundPage,
  title: "pages/NotFoundPage",
};

export default meta;
type Story = StoryObj<typeof NotFoundPage>;

export const Normal: Story = {
  render: () => <NotFoundPage />,
};
Normal.decorators = [ThemeDecorator(Theme.LIGHT)];

export const Dark: Story = {
  render: () => <NotFoundPage />,
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
