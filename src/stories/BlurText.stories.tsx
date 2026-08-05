import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import BlurText from '../components/design-system/BlurText'

const meta: Meta<typeof BlurText> = {
  title: 'Design System/BlurText',
  component: BlurText,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    animateBy: { control: { type: 'select' }, options: ['words', 'letters'] },
    direction: { control: { type: 'select' }, options: ['top', 'bottom'] },
    delay: { control: { type: 'range', min: 50, max: 500, step: 10 } },
  },
}

export default meta
type Story = StoryObj<typeof BlurText>

export const Default: Story = {
  args: {
    text: "Isn't this so cool?!",
    delay: 150,
    animateBy: 'words',
    direction: 'top',
    className: 'text-2xl font-bold text-[#00274C]',
  },
}
