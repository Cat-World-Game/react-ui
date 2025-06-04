import type { Meta, StoryObj } from "@storybook/react";
import { Typography, Tooltip } from "../src/main";

const meta = {
  title: "Components/Tooltip",
  component: Tooltip,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "This is a tooltip",
    followCursor: false,
    children: <Typography color="common.black">Hover me</Typography>,
  },
};

export const TooltipThatFollowCursor: Story = {
  args: {
    title: "This is a tooltip",
    followCursor: true,
    children: <Typography color="common.black">Hover me right-left</Typography>,
  },
};
