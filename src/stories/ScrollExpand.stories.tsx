import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import ScrollExpand from '../components/design-system/ScrollExpand'

const meta: Meta<typeof ScrollExpand> = {
  title: 'Design System/ScrollExpand',
  component: ScrollExpand,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    startWidth: { control: { type: 'range', min: 20, max: 80, step: 1 } },
    startHeight: { control: { type: 'range', min: 20, max: 80, step: 1 } },
    startRadius: { control: { type: 'range', min: 0, max: 48, step: 1 } },
    mediaZoom: { control: { type: 'range', min: 1, max: 2, step: 0.05 } },
    scrollDistance: { control: { type: 'range', min: 0.5, max: 3, step: 0.1 } },
  },
}

export default meta
type Story = StoryObj<typeof ScrollExpand>

export const Default: Story = {
  args: {
    src: 'https://picsum.photos/id/1015/1200/800',
    alt: 'Mountain landscape',
    title: 'Built to Scale',
    scrollHint: 'Scroll to expand',
    startWidth: 42,
    startHeight: 58,
    mediaZoom: 1.35,
    scrollDistance: 1.2,
  },
  decorators: [
    (Story) => (
      <div style={{ height: '300vh' }}>
        <Story />
      </div>
    ),
  ],
}

export const WithOverlayContent: Story = {
  args: {
    src: 'https://picsum.photos/id/1025/1200/800',
    alt: 'Pug dog',
    title: 'Every Pixel, Everywhere',
    scrollHint: 'Scroll down',
    startWidth: 50,
    startHeight: 65,
    mediaZoom: 1.2,
  },
  render: (args) => (
    <div style={{ height: '300vh' }}>
      <ScrollExpand {...args}>
        <h2 style={{ color: 'white', fontSize: '2rem', fontWeight: 700 }}>
          Content Fades In
        </h2>
        <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.1rem', marginTop: '0.5rem' }}>
          This content appears as the media reaches full bleed.
        </p>
      </ScrollExpand>
    </div>
  ),
}

export const WindowScroll: Story = {
  args: {
    src: 'https://picsum.photos/id/1035/1200/800',
    alt: 'Forest',
    title: 'Window Scroll Mode',
    scrollHint: 'Scroll the page',
    useWindowScroll: true,
    startWidth: 45,
    startHeight: 60,
    mediaZoom: 1.4,
  },
  decorators: [
    (Story) => (
      <div style={{ height: '250vh' }}>
        <Story />
      </div>
    ),
  ],
}
