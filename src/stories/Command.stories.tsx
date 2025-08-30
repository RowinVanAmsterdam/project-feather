import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from '../components/ui/command';

const meta = {
  title: 'UI/Command',
  component: Command,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Command>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Command className="rounded-lg border shadow-md max-w-[450px]">
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Suggestions">
          <CommandItem>
            <span>Calendar</span>
          </CommandItem>
          <CommandItem>
            <span>Search Emoji</span>
          </CommandItem>
          <CommandItem>
            <span>Calculator</span>
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Settings">
          <CommandItem>
            <span>Profile</span>
            <CommandShortcut>⌘P</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <span>Billing</span>
            <CommandShortcut>⌘B</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <span>Settings</span>
            <CommandShortcut>⌘S</CommandShortcut>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  ),
};

export const Simple: Story = {
  render: () => (
    <Command className="rounded-lg border shadow-md max-w-[300px]">
      <CommandInput placeholder="Search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandItem>Apple</CommandItem>
        <CommandItem>Banana</CommandItem>
        <CommandItem>Cherry</CommandItem>
        <CommandItem>Date</CommandItem>
        <CommandItem>Elderberry</CommandItem>
      </CommandList>
    </Command>
  ),
};

export const WithIcons: Story = {
  render: () => (
    <Command className="rounded-lg border shadow-md max-w-[400px]">
      <CommandInput placeholder="Search files..." />
      <CommandList>
        <CommandEmpty>No files found.</CommandEmpty>
        <CommandGroup heading="Recent">
          <CommandItem>
            <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z" />
            </svg>
            <span>document.pdf</span>
          </CommandItem>
          <CommandItem>
            <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M5,20H19V18H5M19,9H15A4,4 0 0,1 11,5A4,4 0 0,1 15,1A4,4 0 0,1 19,5C19,6.5 18.2,7.77 17,8.46V11H19A2,2 0 0,1 21,13A2,2 0 0,1 19,15H5A2,2 0 0,1 3,13A2,2 0 0,1 5,11H7V8.46C5.8,7.77 5,6.5 5,5A4,4 0 0,1 9,1A4,4 0 0,1 13,5A4,4 0 0,1 9,9H5V11M15,3A2,2 0 0,0 13,5A2,2 0 0,0 15,7A2,2 0 0,0 17,5A2,2 0 0,0 15,3Z" />
            </svg>
            <span>image.jpg</span>
          </CommandItem>
          <CommandItem>
            <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z" />
            </svg>
            <span>spreadsheet.xlsx</span>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  ),
};