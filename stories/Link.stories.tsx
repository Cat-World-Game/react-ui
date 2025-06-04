import type { Meta, StoryObj } from "@storybook/react";
import { Link } from "../src/main";

const meta = {
  title: "Components/Link",
  component: Link,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Link>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    href: "#",
    children: "Hover me to see the effect. You better not click on me",
  },
};
