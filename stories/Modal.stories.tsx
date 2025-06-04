import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import { Button, Modal } from "../src/main";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Components/Modal",
  component: Modal,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    env: {
      control: { type: "select", options: ["play", "hub"] },
    },
  },
  args: {
    onClose: fn(),
  },
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Modal Title",
    hideCloseButton: false,
    open: false,
  },
  render: function Default(args) {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
      setOpen(true);
    };

    const handleClose = () => {
      setOpen(false);
    };

    return (
      <>
        <Button variant="contained" onClick={handleOpen}>
          Open Modal
        </Button>
        <Modal
          {...args}
          open={open}
          onClose={handleClose}
          actions={[
            <Button key="1" variant="outlined" onClick={handleClose}>
              Отменить
            </Button>,
            <Button key="2" variant="contained" onClick={handleClose}>
              Закрыть
            </Button>,
          ]}
        >
          <p>This is the content of the modal.</p>
        </Modal>
      </>
    );
  },
};

export const WithoutTopRightCloseButton: Story = {
  args: {
    title: "Modal Title",
    hideCloseButton: true,
    open: false,
  },
  render: function WithoutTopRightCloseButton(args) {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
      setOpen(true);
    };

    const handleClose = () => {
      setOpen(false);
    };

    return (
      <>
        <Button variant="contained" onClick={handleOpen}>
          Open Modal
        </Button>
        <Modal
          {...args}
          open={open}
          onClose={handleClose}
          actions={
            <Button variant="contained" onClick={handleClose}>
              Закрыть
            </Button>
          }
        >
          <p>
            This modal cannot be closed by clicking outside or pressing escape.
          </p>
        </Modal>
      </>
    );
  },
};

export const PlaygroundDialog: Story = {
  args: {
    title: "Modal Title",
    hideCloseButton: false,
    open: false,
    env: "play"
  },
  render: function Default(args) {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
      setOpen(true);
    };

    const handleClose = () => {
      setOpen(false);
    };

    return (
      <>
        <Button variant="contained" onClick={handleOpen}>
          Open Modal
        </Button>
        <Modal
          {...args}
          open={open}
          onClose={handleClose}
          actions={[
            <Button key="1" variant="outlined" onClick={handleClose}>
              Отменить
            </Button>,
            <Button key="2" variant="contained" onClick={handleClose}>
              Закрыть
            </Button>,
          ]}
        >
          <p>This is the content of the modal.</p>
        </Modal>
      </>
    );
  },
};
