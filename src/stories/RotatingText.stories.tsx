import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import RotatingText from '../components/design-system/RotatingText'

const meta: Meta<typeof RotatingText> = {
  title: 'Design System/RotatingText',
  component: RotatingText,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    rotationInterval: { control: { type: 'range', min: 500, max: 5000, step: 100 } },
    staggerDuration: { control: { type: 'range', min: 0, max: 0.1, step: 0.005 } },
    staggerFrom: {
      control: { type: 'select' },
      options: ['first', 'last', 'center', 'random'],
    },
    splitBy: {
      control: { type: 'select' },
      options: ['characters', 'words', 'lines'],
    },
  },
}

export default meta
type Story = StoryObj<typeof RotatingText>

export const Default: Story = {
  args: {
    texts: ['React', 'Bits', 'Is', 'Cool!'],
    rotationInterval: 2000,
    staggerFrom: 'last',
    staggerDuration: 0.025,
    mainClassName: 'px-3 py-2 bg-[#B45309] text-white overflow-hidden rounded-lg text-2xl font-bold',
    splitLevelClassName: 'overflow-hidden pb-1',
    transition: { type: 'spring', damping: 30, stiffness: 400 },
  },
}

export const NavyTheme: Story = {
  args: {
    texts: ['MBSCET', 'Engineering', 'Technology', 'Excellence'],
    rotationInterval: 2500,
    staggerFrom: 'first',
    staggerDuration: 0.03,
    mainClassName: 'px-4 py-2 bg-[#1E3A5F] text-white overflow-hidden rounded-lg text-3xl font-bold',
    splitLevelClassName: 'overflow-hidden pb-1',
    transition: { type: 'spring', damping: 25, stiffness: 300 },
  },
}

export const SplitByWords: Story = {
  args: {
    texts: ['Build Amazing Things', 'Ship Faster', 'Scale Worldwide'],
    rotationInterval: 3000,
    splitBy: 'words',
    staggerFrom: 'center',
    staggerDuration: 0.05,
    mainClassName: 'px-4 py-3 bg-[#1B1F23] text-[#FAF7F1] overflow-hidden rounded-xl text-2xl font-bold',
    splitLevelClassName: 'overflow-hidden pb-1',
    transition: { type: 'spring', damping: 20, stiffness: 400 },
  },
}
