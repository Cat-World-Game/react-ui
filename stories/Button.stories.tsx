import type { Meta, StoryObj } from "@storybook/react";
import Stack from "@mui/material/Stack";
import { Button } from "../src/main";

const meta = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    env: {
      control: { type: "select" },
      options: ["play", "hub"],
    },
  },
  args: { onClick: () => {} },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: "contained",
    size: "medium",
    children: "Button",
    loading: false,
    loadingPosition: "start",
  },
};

export const VariantsAndSizes: Story = {
  render: () => (
    <Stack spacing={1}>
      <Stack spacing={1} direction="row" alignItems="center">
        <Button variant="outlined" size="small">
          Outlined Small
        </Button>
        <Button variant="outlined" size="medium">
          Outlined Medium
        </Button>
        <Button variant="outlined" size="large">
          Outlined Large
        </Button>
      </Stack>
      <Stack spacing={1} direction="row" alignItems="center">
        <Button variant="contained" size="small">
          Contained Small
        </Button>
        <Button variant="contained" size="medium">
          Contained Medium
        </Button>
        <Button variant="contained" size="large">
          Contained Large
        </Button>
      </Stack>
      <Stack spacing={1} direction="row" alignItems="center">
        <Button variant="text" size="small">
          Text Small
        </Button>
        <Button variant="text" size="medium">
          Text Medium
        </Button>
        <Button variant="text" size="large">
          Text Large
        </Button>
      </Stack>
    </Stack>
  ),
};

export const DisabledVariants: Story = {
  render: () => (
    <Stack spacing={1}>
      <Stack spacing={1} direction="row" alignItems="center">
        <Button variant="outlined" size="small" disabled>
          Outlined Small
        </Button>
        <Button variant="outlined" size="medium" disabled>
          Outlined Medium
        </Button>
        <Button variant="outlined" size="large" disabled>
          Outlined Large
        </Button>
      </Stack>
      <Stack spacing={1} direction="row" alignItems="center">
        <Button variant="contained" size="small" disabled>
          Contained Small
        </Button>
        <Button variant="contained" size="medium" disabled>
          Contained Medium
        </Button>
        <Button variant="contained" size="large" disabled>
          Contained Large
        </Button>
      </Stack>
      <Stack spacing={1} direction="row" alignItems="center">
        <Button variant="text" size="small" disabled>
          Text Small
        </Button>
        <Button variant="text" size="medium" disabled>
          Text Medium
        </Button>
        <Button variant="text" size="large" disabled>
          Text Large
        </Button>
      </Stack>
    </Stack>
  ),
};

export const PlaygroundDisabledVariantsAndSizes: Story = {
  render: () => (
    <Stack spacing={1}>
      <Stack spacing={1} direction="row" alignItems="center">
        <Button env="play" variant="contained" size="small">
          Contained Small
        </Button>
        <Button env="play" variant="contained" size="medium">
          Contained Medium
        </Button>
        <Button env="play" variant="contained" size="large">
          Contained Large
        </Button>
      </Stack>
      <Stack spacing={1} direction="row" alignItems="center">
        <Button env="play" variant="contained" size="small" disabled>
          Contained Small
        </Button>
        <Button env="play" variant="contained" size="medium" disabled>
          Contained Medium
        </Button>
        <Button env="play" variant="contained" size="large" disabled>
          Contained Large
        </Button>
      </Stack>
      <Stack spacing={1} direction="row" alignItems="center">
        <Button env="play" variant="text" size="small">
          Text Small
        </Button>
        <Button env="play" variant="text" size="medium">
          Text Medium
        </Button>
        <Button env="play" variant="text" size="large">
          Text Large
        </Button>
      </Stack>
      <Stack spacing={1} direction="row" alignItems="center">
        <Button env="play" variant="text" size="small" disabled>
          Text Small
        </Button>
        <Button env="play" variant="text" size="medium" disabled>
          Text Medium
        </Button>
        <Button env="play" variant="text" size="large" disabled>
          Text Large
        </Button>
      </Stack>
    </Stack>
  ),
};
