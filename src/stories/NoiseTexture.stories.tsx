import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { NoiseTexture } from '../components/design-system/NoiseTexture'

const meta: Meta<typeof NoiseTexture> = {
  title: 'Design System/NoiseTexture',
  component: NoiseTexture,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    frequency: { control: { type: 'range', min: 0.1, max: 1, step: 0.05 } },
    octaves: { control: { type: 'range', min: 1, max: 10, step: 1 } },
    slope: { control: { type: 'range', min: 0.05, max: 0.5, step: 0.05 } },
    noiseOpacity: { control: { type: 'range', min: 0.1, max: 1, step: 0.1 } },
  },
}

export default meta
type Story = StoryObj<typeof NoiseTexture>

export const Default: Story = {
  args: {
    frequency: 0.4,
    octaves: 6,
    slope: 0.15,
    noiseOpacity: 0.6,
  },
  render: (args) => (
    <div className="relative h-96 w-96 rounded-xl overflow-hidden bg-white border">
      <NoiseTexture {...args} />
      <div className="relative z-10 flex items-center justify-center h-full">
        <h2 className="text-2xl font-bold text-gray-900">Noise Texture</h2>
      </div>
    </div>
  ),
}

export const DarkTheme: Story = {
  args: {
    frequency: 0.5,
    octaves: 4,
    slope: 0.2,
    noiseOpacity: 0.75,
  },
  render: (args) => (
    <div className="relative h-96 w-96 rounded-xl overflow-hidden bg-[#1B1F23]">
      <NoiseTexture {...args} className="opacity-75" />
      <div className="relative z-10 flex items-center justify-center h-full">
        <h2 className="text-2xl font-bold text-white">Dark Noise</h2>
      </div>
    </div>
  ),
}

export const FineGrain: Story = {
  args: {
    frequency: 0.8,
    octaves: 8,
    slope: 0.1,
    noiseOpacity: 0.5,
  },
  render: (args) => (
    <div className="relative h-96 w-96 rounded-xl overflow-hidden bg-[#1E3A5F]">
      <NoiseTexture {...args} className="opacity-60" />
      <div className="relative z-10 flex items-center justify-center h-full">
        <h2 className="text-2xl font-bold text-white">Fine Grain</h2>
      </div>
    </div>
  ),
}

export const CoarseGrain: Story = {
  args: {
    frequency: 0.2,
    octaves: 3,
    slope: 0.3,
    noiseOpacity: 0.8,
  },
  render: (args) => (
    <div className="relative h-96 w-96 rounded-xl overflow-hidden bg-[#B45309]">
      <NoiseTexture {...args} className="opacity-50" />
      <div className="relative z-10 flex items-center justify-center h-full">
        <h2 className="text-2xl font-bold text-white">Coarse Grain</h2>
      </div>
    </div>
  ),
}
