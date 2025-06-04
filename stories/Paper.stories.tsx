import type { Meta, StoryObj } from "@storybook/react";
import { Typography, Paper } from "../src/main";
import Box from "@mui/material/Box";

const meta = {
  title: "Components/Paper",
  component: Paper,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Paper>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <Box p="20px 40px">
        <Typography variant="h5">This is a Paper</Typography>
      </Box>
    ),
  },
};

export const PlaygroundPaper: Story = {
  args: {
    env: "play",
    children: (
      <Box p="20px 40px">
        <Typography variant="h5">This is a Playground Paper</Typography>
      </Box>
    ),
  },
};
