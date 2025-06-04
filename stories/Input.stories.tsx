import type { Meta, StoryObj } from "@storybook/react";
import Stack from "@mui/material/Stack";
import { CloseIcon, Input } from "../src/main";

const meta = {
  title: "Components/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    env: {
      control: { type: "select" },
      options: ["play", "hub"],
    },
    size: {
      control: { type: "select" },
      options: ["small", "medium"],
    },
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Default Input",
    placeholder: "Placeholder",
  },
};

export const PlayVariant: Story = {
  args: {
    label: "Play Input",
    placeholder: "Placeholder",
    env: "play",
  },
};

export const VariantsAndStates: Story = {
  render: () => (
    <>
      <Stack direction="row" spacing={2}>
        <Input label="Default" placeholder="Placeholder" />
        <Input label="Default Small" size="small" placeholder="Placeholder" />
      </Stack>
      <Stack direction="row" spacing={2}>
        <Input label="Disabled" disabled placeholder="Placeholder" />
        <Input
          label="Disabled Small"
          disabled
          size="small"
          placeholder="Placeholder"
        />
      </Stack>
      <Stack direction="row" spacing={2}>
        <Input
          label="Error"
          error
          helperText="Error message"
          placeholder="Placeholder"
        />
        <Input
          label="Error Small"
          error
          helperText="Error message"
          size="small"
          placeholder="Placeholder"
        />
      </Stack>
    </>
  ),
};

export const PlaygroundVariantsAndStates: Story = {
  render: () => (
    <>
      <Stack direction="row" spacing={2}>
        <Input label="Play" env="play" placeholder="Placeholder" />
        <Input
          label="Play Small"
          env="play"
          size="small"
          placeholder="Placeholder"
        />
      </Stack>
      <Stack direction="row" spacing={2}>
        <Input
          label="Play Disabled"
          env="play"
          disabled
          placeholder="Placeholder"
        />
        <Input
          label="Play Disabled Small"
          env="play"
          disabled
          size="small"
          placeholder="Placeholder"
        />
      </Stack>
      <Stack direction="row" spacing={2}>
        <Input
          label="Play Error"
          env="play"
          error
          helperText="Error message"
          placeholder="Placeholder"
        />
        <Input
          label="Play Error Small"
          env="play"
          error
          helperText="Error message"
          size="small"
          placeholder="Placeholder"
        />
      </Stack>
    </>
  ),
};

export const PlaygroundWithAdornments: Story = {
  args: {
    label: "Play Input",
    placeholder: "Placeholder",
    env: "play",
    endAdornment: <CloseIcon />,
    startAdornment: <CloseIcon />,
  },
};
