import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import FoldText from '../components/design-system/FoldText'

const meta: Meta<typeof FoldText> = {
  title: 'Design System/FoldText',
  component: FoldText,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'dark', value: '#00274C' },
      ],
    },
  },
  tags: ['autodocs'],
  argTypes: {
    splitBy: { control: { type: 'select' }, options: ['char', 'word', 'line'] },
    hinge: { control: { type: 'select' }, options: ['top', 'bottom', 'left', 'right'] },
    trigger: { control: { type: 'select' }, options: ['mount', 'hover', 'scroll', 'loop'] },
    duration: { control: { type: 'range', min: 0.2, max: 2, step: 0.05 } },
  },
}

export default meta
type Story = StoryObj<typeof FoldText>

export const Default: Story = {
  args: {
    text: 'Design unfolds',
    splitBy: 'char',
    hinge: 'top',
    trigger: 'mount',
    duration: 0.65,
    stagger: 0.045,
    fontSize: 'clamp(3rem, 10vw, 7rem)',
    color: '#FFCB05',
  },
}
