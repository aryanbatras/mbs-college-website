import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { PixelImage } from '../components/design-system/PixelImage'

const meta: Meta<typeof PixelImage> = {
  title: 'Design System/PixelImage',
  component: PixelImage,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    grid: {
      control: { type: 'select' },
      options: ['6x4', '8x8', '8x3', '4x6', '3x8'],
    },
    grayscaleAnimation: { control: 'boolean' },
    pixelFadeInDuration: { control: { type: 'range', min: 300, max: 3000, step: 100 } },
    maxAnimationDelay: { control: { type: 'range', min: 500, max: 3000, step: 100 } },
    colorRevealDelay: { control: { type: 'range', min: 500, max: 3000, step: 100 } },
  },
}

export default meta
type Story = StoryObj<typeof PixelImage>

export const Default: Story = {
  args: {
    src: 'https://picsum.photos/id/1015/400/400',
    grid: '6x4',
    grayscaleAnimation: true,
    pixelFadeInDuration: 1000,
    maxAnimationDelay: 1200,
    colorRevealDelay: 1300,
  },
}

export const EightByEight: Story = {
  args: {
    src: 'https://picsum.photos/id/1025/400/400',
    grid: '8x8',
    grayscaleAnimation: true,
  },
}

export const NoGrayscale: Story = {
  args: {
    src: 'https://picsum.photos/id/1035/400/400',
    grid: '8x8',
    grayscaleAnimation: false,
  },
}

export const CustomGrid: Story = {
  args: {
    src: 'https://picsum.photos/id/1040/400/400',
    customGrid: { rows: 5, cols: 10 },
    grayscaleAnimation: true,
  },
}

export const FastAnimation: Story = {
  args: {
    src: 'https://picsum.photos/id/1043/400/400',
    grid: '8x8',
    pixelFadeInDuration: 500,
    maxAnimationDelay: 600,
    colorRevealDelay: 700,
  },
}
