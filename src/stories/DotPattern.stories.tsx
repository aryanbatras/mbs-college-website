import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { DotPattern } from '../components/design-system/DotPattern'

const meta: Meta<typeof DotPattern> = {
  title: 'Design System/DotPattern',
  component: DotPattern,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    width: { control: { type: 'range', min: 8, max: 40, step: 2 } },
    height: { control: { type: 'range', min: 8, max: 40, step: 2 } },
    cr: { control: { type: 'range', min: 0.5, max: 3, step: 0.5 } },
  },
}

export default meta
type Story = StoryObj<typeof DotPattern>

export const Default: Story = {
  args: {
    width: 16,
    height: 16,
    cr: 1,
  },
  render: (args) => (
    <div className="relative h-[500px] w-full overflow-hidden bg-white">
      <DotPattern {...args} />
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <h1 className="text-4xl font-bold text-[#00274C]">Dot Pattern Background</h1>
      </div>
    </div>
  ),
}
