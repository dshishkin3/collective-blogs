import type { Meta, StoryObj } from "@storybook/react";
import { t } from "i18next";

import { ThemeDecorator } from "shared/config/storybook/themeDecorator/themeDecorator";
import { Theme } from "app/prodivers/themeProvider";

import { Button, ThemeButton } from "./Button";

const meta: Meta<typeof Button> = {
  component: Button,
  title: "widget/Button",
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  render: () => <Button>{t("Primary")}</Button>,
};
Primary.decorators = [ThemeDecorator(Theme.LIGHT)];

export const Clear: Story = {
  render: () => <Button theme={ThemeButton.CLEAR}>{t("Clear")}</Button>,
};
Clear.decorators = [ThemeDecorator(Theme.LIGHT)];

export const Outlined: Story = {
  render: () => <Button theme={ThemeButton.OUTLINE}>{t("Outlined")}</Button>,
};
Clear.decorators = [ThemeDecorator(Theme.LIGHT)];

export const OutlinedDark: Story = {
  render: () => <Button theme={ThemeButton.OUTLINE}>{t("Outlined")}</Button>,
};
OutlinedDark.decorators = [ThemeDecorator(Theme.DARK)];
