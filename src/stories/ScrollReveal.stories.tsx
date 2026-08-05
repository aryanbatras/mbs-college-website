import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import ScrollReveal from '../components/design-system/ScrollReveal'

const meta: Meta<typeof ScrollReveal> = {
  title: 'Design System/ScrollReveal',
  component: ScrollReveal,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    enableBlur: { control: 'boolean' },
    baseOpacity: { control: { type: 'range', min: 0, max: 1, step: 0.05 } },
    baseRotation: { control: { type: 'range', min: 0, max: 15, step: 0.5 } },
    blurStrength: { control: { type: 'range', min: 0, max: 20, step: 1 } },
  },
}

export default meta
type Story = StoryObj<typeof ScrollReveal>

export const Default: Story = {
  args: {
    children:
      'When does a man die? When he is hit by a bullet? No! When he suffers a disease? No! When he ate a soup made out of a poisonous mushroom? No! A man dies when he is forgotten!',
    baseOpacity: 0,
    enableBlur: true,
    baseRotation: 5,
    blurStrength: 10,
    textClassName: 'text-[#1B1F23]',
  },
  decorators: [
    (Story) => (
      <div
        style={{
          height: '300vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '2rem',
        }}
      >
        <div style={{ maxWidth: '800px' }}>
          <Story />
        </div>
      </div>
    ),
  ],
}

export const NoBlur: Story = {
  args: {
    children: 'Simple reveal without blur effect. Just opacity and rotation.',
    enableBlur: false,
    baseOpacity: 0.1,
    baseRotation: 3,
    textClassName: 'text-[#1E3A5F]',
  },
  decorators: [
    (Story) => (
      <div style={{ height: '300vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}>
        <div style={{ maxWidth: '800px' }}>
          <Story />
        </div>
      </div>
    ),
  ],
}

export const StrongBlur: Story = {
  args: {
    children: 'Heavy blur creates a dramatic reveal effect as you scroll through the content.',
    enableBlur: true,
    baseOpacity: 0,
    baseRotation: 8,
    blurStrength: 20,
    textClassName: 'text-[#B45309]',
  },
  decorators: [
    (Story) => (
      <div style={{ height: '300vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}>
        <div style={{ maxWidth: '800px' }}>
          <Story />
        </div>
      </div>
    ),
  ],
}
