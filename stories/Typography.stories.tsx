import type { Meta, StoryObj } from "@storybook/react";
import Stack from "@mui/material/Stack";
import { Typography } from "../src/main";

const meta = {
  title: "Components/Typography",
  component: Typography,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: [
        "h1",
        "h2",
        "h3",
        "h4",
        "h5",
        "h6",
        "subtitle1",
        "subtitle2",
        "body1",
        "body2",
        "button",
        "caption",
        "console",
      ],
    },
    color: {
      control: { type: "color" },
    },
    outline: {
      control: { type: "color" },
    },
  },
} satisfies Meta<typeof Typography>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: "body1",
    children: "Default Typography",
  },
};

export const Variants: Story = {
  render: () => (
    <Stack>
      <Typography variant="h1">Heading 1</Typography>
      <Typography variant="h2">Heading 2</Typography>
      <Typography variant="h3">Heading 3</Typography>
      <Typography variant="h4">Heading 4</Typography>
      <Typography variant="h5">Heading 5</Typography>
      <Typography variant="h6">Heading 6</Typography>
      <Typography variant="subtitle1">Subtitle 1</Typography>
      <Typography variant="subtitle2">Subtitle 2</Typography>
      <Typography variant="body1">Body 1</Typography>
      <Typography variant="body2">Body 2</Typography>
      <Typography variant="button">Button</Typography>
      <Typography variant="caption">Caption</Typography>
      <Typography variant="console">Console</Typography>
    </Stack>
  ),
};

export const ColorsWithOutline: Story = {
  render: () => (
    <Stack spacing={2}>
      <Typography variant="console" outline="#90caf9">
        Primary with Outline
      </Typography>
      <Typography variant="console" outline="#ce93d8">
        Secondary with Outline
      </Typography>
      <Typography variant="console" outline="#f44336">
        Error with Outline
      </Typography>
      <Typography variant="console" outline="#66bb6a">
        Success with Outline
      </Typography>
    </Stack>
  ),
};
