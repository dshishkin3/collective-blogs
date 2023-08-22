import type { Meta, StoryObj } from "@storybook/react";

import { ThemeDecorator } from "shared/config/storybook/themeDecorator/themeDecorator";
import { Theme } from "app/prodivers/themeProvider";
import { PageError } from "widgets/PageError/ui/PageError";

const meta: Meta<typeof PageError> = {
  component: PageError,
  title: "widget/PageError",
};

export default meta;
type Story = StoryObj<typeof PageError>;

export const Light: Story = {
  render: () => <PageError />,
};
Light.decorators = [ThemeDecorator(Theme.LIGHT)];

export const Dark: Story = {
  render: () => <PageError />,
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
