import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Progress } from '../components/ui/progress';
import { Label } from '../components/ui/label';

const meta = {
  title: 'UI/Progress',
  component: Progress,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Progress>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: 33,
  },
  render: (args) => (
    <div className="w-60">
      <Progress {...args} />
    </div>
  ),
};

export const WithLabel: Story = {
  render: () => (
    <div className="w-60 space-y-2">
      <div className="flex justify-between">
        <Label>Loading...</Label>
        <span className="text-sm text-muted-foreground">60%</span>
      </div>
      <Progress value={60} />
    </div>
  ),
};

export const Complete: Story = {
  args: {
    value: 100,
  },
  render: (args) => (
    <div className="w-60">
      <Progress {...args} />
    </div>
  ),
};

export const Empty: Story = {
  args: {
    value: 0,
  },
  render: (args) => (
    <div className="w-60">
      <Progress {...args} />
    </div>
  ),
};