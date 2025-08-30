import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Slider } from '../components/ui/slider';
import { Label } from '../components/ui/label';

const meta = {
  title: 'UI/Slider',
  component: Slider,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Slider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="w-60">
      <Slider defaultValue={[33]} max={100} step={1} />
    </div>
  ),
};

export const WithLabel: Story = {
  render: () => (
    <div className="w-60 space-y-3">
      <div className="flex justify-between">
        <Label>Volume</Label>
        <span className="text-sm text-muted-foreground">50%</span>
      </div>
      <Slider defaultValue={[50]} max={100} step={1} />
    </div>
  ),
};

export const Range: Story = {
  render: () => (
    <div className="w-60 space-y-3">
      <Label>Price Range</Label>
      <Slider defaultValue={[20, 80]} max={100} step={1} />
      <div className="flex justify-between text-sm text-muted-foreground">
        <span>$20</span>
        <span>$80</span>
      </div>
    </div>
  ),
};

export const Disabled: Story = {
  render: () => (
    <div className="w-60">
      <Slider defaultValue={[50]} max={100} step={1} disabled />
    </div>
  ),
};