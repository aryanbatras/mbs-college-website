import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import CountUp from '../components/design-system/CountUp'

const meta: Meta<typeof CountUp> = {
  title: 'Design System/CountUp',
  component: CountUp,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    to: { control: { type: 'number' } },
    from: { control: { type: 'number' } },
    duration: { control: { type: 'range', min: 0.5, max: 5, step: 0.1 } },
  },
}

export default meta
type Story = StoryObj<typeof CountUp>

export const Default: Story = {
  args: {
    from: 0,
    to: 100,
    separator: ',',
    direction: 'up',
    duration: 1,
    className: 'text-4xl font-bold text-[#00274C]',
  },
}
