import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import ShinyText from '../components/design-system/ShinyText'

const meta: Meta<typeof ShinyText> = {
  title: 'Design System/ShinyText',
  component: ShinyText,
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
    speed: { control: { type: 'range', min: 0.5, max: 5, step: 0.1 } },
    spread: { control: { type: 'range', min: 30, max: 180, step: 5 } },
  },
}

export default meta
type Story = StoryObj<typeof ShinyText>

export const Default: Story = {
  args: {
    text: 'Shiny Text Effect',
    speed: 2,
    delay: 0,
    color: '#b5b5b5',
    shineColor: '#ffffff',
    spread: 120,
    direction: 'left',
    yoyo: false,
    pauseOnHover: false,
  },
}
