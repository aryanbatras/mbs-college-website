import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { Highlighter } from '../components/design-system/TextHighlighter'

const meta: Meta<typeof Highlighter> = {
  title: 'Design System/TextHighlighter',
  component: Highlighter,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    action: {
      control: { type: 'select' },
      options: ['highlight', 'underline', 'box', 'circle', 'strike-through', 'crossed-off', 'bracket'],
    },
    color: { control: 'color' },
    strokeWidth: { control: { type: 'range', min: 0.5, max: 5, step: 0.5 } },
    animationDuration: { control: { type: 'range', min: 200, max: 1500, step: 100 } },
    iterations: { control: { type: 'range', min: 1, max: 5, step: 1 } },
    padding: { control: { type: 'range', min: 0, max: 10, step: 1 } },
  },
}

export default meta
type Story = StoryObj<typeof Highlighter>

export const Default: Story = {
  args: {
    action: 'highlight',
    color: '#ffd1dc',
    strokeWidth: 1.5,
    animationDuration: 600,
    iterations: 2,
    padding: 2,
  },
  render: (args) => (
    <p className="text-xl text-gray-800">
      The <Highlighter {...args}>Magic UI Highlighter</Highlighter> makes important{' '}
      <Highlighter action="underline" color="#FF9800">
        text stand out
      </Highlighter>{' '}
      effortlessly.
    </p>
  ),
}

export const Underline: Story = {
  args: {
    action: 'underline',
    color: '#B45309',
  },
  render: (args) => (
    <p className="text-xl text-gray-800">
      This text has an{' '}
      <Highlighter {...args}>underlined effect</Highlighter> applied.
    </p>
  ),
}

export const Box: Story = {
  args: {
    action: 'box',
    color: '#1E3A5F',
  },
  render: (args) => (
    <p className="text-xl text-gray-800">
      This text is inside a{' '}
      <Highlighter {...args}>box annotation</Highlighter>.
    </p>
  ),
}

export const Circle: Story = {
  args: {
    action: 'circle',
    color: '#B45309',
  },
  render: (args) => (
    <p className="text-xl text-gray-800">
      This text has a{' '}
      <Highlighter {...args}>circle annotation</Highlighter>.
    </p>
  ),
}

export const StrikeThrough: Story = {
  args: {
    action: 'strike-through',
    color: '#B91C1C',
  },
  render: (args) => (
    <p className="text-xl text-gray-800">
      This text has{' '}
      <Highlighter {...args}>strike-through</Highlighter> applied.
    </p>
  ),
}

export const MultipleHighlights: Story = {
  render: () => (
    <p className="text-xl text-gray-800 max-w-xl leading-relaxed">
      Engineering at{' '}
      <Highlighter action="highlight" color="#FEF3C7">
        MBSCET
      </Highlighter>{' '}
      combines{' '}
      <Highlighter action="underline" color="#B45309">
        theoretical knowledge
      </Highlighter>{' '}
      with{' '}
      <Highlighter action="box" color="#1E3A5F">
        practical experience
      </Highlighter>{' '}
      to prepare students for the{' '}
      <Highlighter action="circle" color="#92400E">
        real world
      </Highlighter>
      .
    </p>
  ),
}
