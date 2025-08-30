import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Card, CardHeader, CardContent, CardFooter, CardTitle, CardDescription, CardAction } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';

const meta = {
  title: 'UI/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Create project</CardTitle>
        <CardDescription>Deploy your new project in one-click.</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Card content goes here.</p>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Create Project</Button>
      </CardFooter>
    </Card>
  ),
};

export const WithAction: Story = {
  render: () => (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Notifications</CardTitle>
        <CardDescription>You have 3 unread messages.</CardDescription>
        <CardAction>
          <Button variant="outline" size="sm">Mark all read</Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <p className="text-sm">New comment on your post</p>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <p className="text-sm">Project deployed successfully</p>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
            <p className="text-sm">Update available</p>
          </div>
        </div>
      </CardContent>
    </Card>
  ),
};

export const WithBadges: Story = {
  render: () => (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Next.js Project</CardTitle>
        <CardDescription>A full-stack React framework</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          <Badge>TypeScript</Badge>
          <Badge variant="secondary">React</Badge>
          <Badge variant="outline">Tailwind CSS</Badge>
        </div>
      </CardContent>
      <CardFooter className="justify-between">
        <Button variant="outline">Preview</Button>
        <Button>Deploy</Button>
      </CardFooter>
    </Card>
  ),
};