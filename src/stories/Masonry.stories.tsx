import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import Masonry from '../components/design-system/Masonry'

const meta: Meta<typeof Masonry> = {
  title: 'Design System/Masonry',
  component: Masonry,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    animateFrom: {
      control: { type: 'select' },
      options: ['top', 'bottom', 'left', 'right', 'center', 'random'],
    },
    duration: { control: { type: 'range', min: 0.2, max: 2, step: 0.1 } },
    stagger: { control: { type: 'range', min: 0.01, max: 0.2, step: 0.01 } },
    hoverScale: { control: { type: 'range', min: 0.8, max: 1.1, step: 0.05 } },
  },
}

export default meta
type Story = StoryObj<typeof Masonry>

const sampleItems = [
  { id: '1', img: 'https://picsum.photos/id/1015/600/900', url: '#', height: 400 },
  { id: '2', img: 'https://picsum.photos/id/1011/600/750', url: '#', height: 250 },
  { id: '3', img: 'https://picsum.photos/id/1020/600/800', url: '#', height: 600 },
  { id: '4', img: 'https://picsum.photos/id/1025/600/700', url: '#', height: 300 },
  { id: '5', img: 'https://picsum.photos/id/1035/600/850', url: '#', height: 450 },
  { id: '6', img: 'https://picsum.photos/id/1040/600/650', url: '#', height: 350 },
  { id: '7', img: 'https://picsum.photos/id/1043/600/780', url: '#', height: 500 },
  { id: '8', img: 'https://picsum.photos/id/1047/600/600', url: '#', height: 280 },
  { id: '9', img: 'https://picsum.photos/id/1050/600/720', url: '#', height: 380 },
  { id: '10', img: 'https://picsum.photos/id/1055/600/900', url: '#', height: 550 },
]

export const Default: Story = {
  args: {
    items: sampleItems,
    ease: 'power3.out',
    duration: 0.6,
    stagger: 0.05,
    animateFrom: 'bottom',
    scaleOnHover: true,
    hoverScale: 0.95,
    blurToFocus: true,
    colorShiftOnHover: false,
  },
}

export const AnimateFromLeft: Story = {
  args: {
    items: sampleItems,
    animateFrom: 'left',
    blurToFocus: true,
  },
}

export const WithColorShift: Story = {
  args: {
    items: sampleItems,
    animateFrom: 'random',
    colorShiftOnHover: true,
    scaleOnHover: true,
  },
}
