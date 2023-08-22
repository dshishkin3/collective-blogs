import type { Meta, StoryObj } from "@storybook/react";

import { ThemeDecorator } from "shared/config/storybook/themeDecorator/themeDecorator";
import { Theme } from "app/prodivers/themeProvider";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";

const meta: Meta<typeof AppLink> = {
  component: AppLink,
  title: "widget/AppLink",
};

export default meta;
type Story = StoryObj<typeof AppLink>;

export const Primary: Story = {
  render: () => (
    <AppLink theme={AppLinkTheme.PRIMARY} to="">
      text
    </AppLink>
  ),
};
Primary.decorators = [ThemeDecorator(Theme.LIGHT)];

export const Secondary: Story = {
  render: () => (
    <AppLink theme={AppLinkTheme.SECONDARY} to="">
      text
    </AppLink>
  ),
};
Secondary.decorators = [ThemeDecorator(Theme.DARK)];
