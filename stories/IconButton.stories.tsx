import type { Meta, StoryObj } from "@storybook/react";
import Stack from "@mui/material/Stack";
import { CloseIcon, IconButton } from "../src/main";

const meta = {
  title: "Components/IconButton",
  component: IconButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: { type: "select" },
      options: ["small", "medium", "large"],
    },
  },
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: <CloseIcon />,
  },
};

export const IconButtonVariantsAndSizes: Story = {
  render: () => (
    <Stack spacing={2} alignItems="center">
      <Stack spacing={1} direction="row" alignItems="center">
        <IconButton size="small">
          <CloseIcon fontSize="small" />
        </IconButton>
        <IconButton size="medium">
          <CloseIcon />
        </IconButton>
        <IconButton size="large">
          <CloseIcon fontSize="large" />
        </IconButton>
      </Stack>
      <Stack spacing={1} direction="row" alignItems="center">
        <IconButton size="small" disabled>
          <CloseIcon fontSize="small" />
        </IconButton>
        <IconButton size="medium" disabled>
          <CloseIcon />
        </IconButton>
        <IconButton size="large" disabled>
          <CloseIcon fontSize="large" />
        </IconButton>
      </Stack>
    </Stack>
  ),
};

export const PlaygroundIconButtonVariantsAndSizes: Story = {
  render: () => (
    <Stack spacing={2} alignItems="center">
      <Stack spacing={1} direction="row" alignItems="center">
        <IconButton env="play" size="small">
          <CloseIcon fontSize="small" />
        </IconButton>
        <IconButton env="play" size="medium">
          <CloseIcon />
        </IconButton>
        <IconButton env="play" size="large">
          <CloseIcon fontSize="large" />
        </IconButton>
      </Stack>
      <Stack spacing={1} direction="row" alignItems="center">
        <IconButton env="play" size="small" disabled>
          <CloseIcon fontSize="small" />
        </IconButton>
        <IconButton env="play" size="medium" disabled>
          <CloseIcon />
        </IconButton>
        <IconButton env="play" size="large" disabled>
          <CloseIcon fontSize="large" />
        </IconButton>
      </Stack>
    </Stack>
  ),
};
