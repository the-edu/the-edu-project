import { useState } from 'react';

import { RadioGroup } from '@/components/ui/radio-group';
import { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'ui/RadioGroup',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    return (
      <RadioGroup defaultValue="1">
        <RadioGroup.Item value="1" />
        <RadioGroup.Item value="2" />
        <RadioGroup.Item value="3" />
      </RadioGroup>
    );
  },
};

export const WithLabel: Story = {
  render: () => {
    return (
      <RadioGroup defaultValue="1">
        <RadioGroup.Option value="1">라디오 옵션 1</RadioGroup.Option>
        <RadioGroup.Option value="2">라디오 옵션 2</RadioGroup.Option>
        <RadioGroup.Option value="3">라디오 옵션 3</RadioGroup.Option>
      </RadioGroup>
    );
  },
};

export const Disabled: Story = {
  render: () => {
    return (
      <RadioGroup
        defaultValue="1"
        disabled
      >
        <RadioGroup.Option value="1">라디오 옵션 1</RadioGroup.Option>
        <RadioGroup.Option value="2">라디오 옵션 2</RadioGroup.Option>
        <RadioGroup.Option value="3">라디오 옵션 3</RadioGroup.Option>
      </RadioGroup>
    );
  },
};

export const ItemDisabled: Story = {
  render: () => {
    return (
      <RadioGroup defaultValue="1">
        <RadioGroup.Option value="1">라디오 옵션 1</RadioGroup.Option>
        <RadioGroup.Option
          value="2"
          disabled
        >
          라디오 옵션 2
        </RadioGroup.Option>
        <RadioGroup.Option value="3">라디오 옵션 3</RadioGroup.Option>
      </RadioGroup>
    );
  },
};

export const Controlled: Story = {
  render: () => {
    const [value, setValue] = useState('1');

    return (
      <RadioGroup
        value={value}
        onValueChange={setValue}
      >
        <RadioGroup.Option value="1">라디오 옵션 1</RadioGroup.Option>
        <RadioGroup.Option value="2">라디오 옵션 2</RadioGroup.Option>
        <RadioGroup.Option value="3">라디오 옵션 3</RadioGroup.Option>
      </RadioGroup>
    );
  },
};
