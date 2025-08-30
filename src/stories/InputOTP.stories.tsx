import type { Meta, StoryObj } from '@storybook/nextjs-vite';

const meta = {
  title: 'UI/InputOTP',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    // We'll create a basic InputOTP example here
    return (
      <div className="flex space-x-2">
        <input
          type="text"
          maxLength={1}
          className="w-10 h-10 text-center border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="text"
          maxLength={1}
          className="w-10 h-10 text-center border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="text"
          maxLength={1}
          className="w-10 h-10 text-center border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <span className="flex items-center">-</span>
        <input
          type="text"
          maxLength={1}
          className="w-10 h-10 text-center border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="text"
          maxLength={1}
          className="w-10 h-10 text-center border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="text"
          maxLength={1}
          className="w-10 h-10 text-center border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
    );
  },
};

export const Simple: Story = {
  render: () => (
    <div className="flex space-x-2">
      <input
        type="text"
        maxLength={1}
        className="w-10 h-10 text-center border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <input
        type="text"
        maxLength={1}
        className="w-10 h-10 text-center border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <input
        type="text"
        maxLength={1}
        className="w-10 h-10 text-center border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <input
        type="text"
        maxLength={1}
        className="w-10 h-10 text-center border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  ),
};