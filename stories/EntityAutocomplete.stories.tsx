import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { EntityAutocomplete, type EntityOption } from "../src/main";
import Box from "@mui/material/Box";
import { useState } from "react";

const meta = {
  title: "Components/EntityAutocomplete",
  component: EntityAutocomplete,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: { type: "select" },
      options: ["small", "medium"],
    },
  },
  args: {
    onChange: fn(),
    onFocus: fn(),
    onBlur: fn(),
  },
} satisfies Meta<typeof EntityAutocomplete>;

export default meta;
type Story = StoryObj<typeof meta>;

const options = [
  { id: "1", name: "Bluestar" },
  { id: "2", name: "Leafpaw" },
  { id: "3", name: "Elderkit" },
];

export const Default: Story = {
  args: {
    value: null,
    options,
    placeholder: "Select an option",
    label: "Options",
  },
  render: function Default(args) {
    const [value, setValue] = useState<EntityOption | null>(null);

    const handleChange = (newValue: EntityOption | null) => {
      setValue(newValue);
      args.onChange(newValue);
    };

    return (
      <Box width="400px">
        <EntityAutocomplete {...args} value={value} onChange={handleChange} />
      </Box>
    );
  },
};
