import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from '../components/ui/accordion';

const meta = {
  title: 'UI/Accordion',
  component: Accordion,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['single', 'multiple'],
    },
  },
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    type: "single",
    collapsible: true,
  },
  render: (args) => (
    <Accordion {...args} className="w-full max-w-md">
      <AccordionItem value="item-1">
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Is it styled?</AccordionTrigger>
        <AccordionContent>
          Yes. It comes with default styles that matches the other components&apos; aesthetic.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Is it animated?</AccordionTrigger>
        <AccordionContent>
          Yes. It&apos;s animated by default, but you can disable it if you prefer.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};

export const Multiple: Story = {
  args: {
    type: "multiple",
  },
  render: (args) => (
    <Accordion {...args} className="w-full max-w-md">
      <AccordionItem value="item-1">
        <AccordionTrigger>Can I open multiple items?</AccordionTrigger>
        <AccordionContent>
          Yes! With type=&quot;multiple&quot;, you can have multiple accordion items open at the same time.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>How about this one?</AccordionTrigger>
        <AccordionContent>
          This one can also be open simultaneously with the first one.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>And this one too?</AccordionTrigger>
        <AccordionContent>
          Absolutely! All three can be open at the same time.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};

export const Single: Story = {
  args: {
    type: "single",
    collapsible: false,
  },
  render: (args) => (
    <Accordion {...args} className="w-full max-w-md" defaultValue="item-1">
      <AccordionItem value="item-1">
        <AccordionTrigger>Always one open</AccordionTrigger>
        <AccordionContent>
          With collapsible=false, there&apos;s always one item open.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Click to switch</AccordionTrigger>
        <AccordionContent>
          When you open this, the other one closes automatically.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};