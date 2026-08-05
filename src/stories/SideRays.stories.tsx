import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import SideRays from '../components/design-system/SideRays'

const meta: Meta<typeof SideRays> = {
  title: 'Design System/SideRays',
  component: SideRays,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    speed: { control: { type: 'range', min: 0.5, max: 5, step: 0.1 } },
    intensity: { control: { type: 'range', min: 0.5, max: 5, step: 0.1 } },
    spread: { control: { type: 'range', min: 0.5, max: 4, step: 0.1 } },
    origin: {
      control: { type: 'select' },
      options: ['top-right', 'top-left', 'bottom-right', 'bottom-left'],
    },
    tilt: { control: { type: 'range', min: -45, max: 45, step: 1 } },
    saturation: { control: { type: 'range', min: 0, max: 3, step: 0.1 } },
    blend: { control: { type: 'range', min: 0, max: 1, step: 0.05 } },
    falloff: { control: { type: 'range', min: 0.5, max: 4, step: 0.1 } },
    opacity: { control: { type: 'range', min: 0, max: 1, step: 0.05 } },
  },
}

export default meta
type Story = StoryObj<typeof SideRays>

export const Default: Story = {
  args: {
    speed: 2.5,
    rayColor1: '#EAB308',
    rayColor2: '#96c8ff',
    intensity: 2,
    spread: 2,
    origin: 'top-right',
    tilt: 0,
    saturation: 1.5,
    blend: 0.75,
    falloff: 1.6,
    opacity: 1.0,
  },
  decorators: [
    (Story) => (
      <div style={{ width: '100%', height: '600px', position: 'relative', background: '#1B1F23' }}>
        <Story />
      </div>
    ),
  ],
}

export const WarmRays: Story = {
  args: {
    speed: 2,
    rayColor1: '#F97316',
    rayColor2: '#FCD34D',
    intensity: 3,
    spread: 1.5,
    origin: 'top-left',
    tilt: 10,
    saturation: 2,
    blend: 0.6,
    falloff: 1.2,
    opacity: 0.9,
  },
  decorators: [
    (Story) => (
      <div style={{ width: '100%', height: '600px', position: 'relative', background: '#0F172A' }}>
        <Story />
      </div>
    ),
  ],
}

export const SubtleRays: Story = {
  args: {
    speed: 1.5,
    rayColor1: '#1E3A5F',
    rayColor2: '#B45309',
    intensity: 1.5,
    spread: 1,
    origin: 'bottom-right',
    tilt: -5,
    saturation: 1,
    blend: 0.5,
    falloff: 2,
    opacity: 0.7,
  },
  decorators: [
    (Story) => (
      <div style={{ width: '100%', height: '600px', position: 'relative', background: '#FAF7F1' }}>
        <Story />
      </div>
    ),
  ],
}
