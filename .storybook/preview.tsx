import type { Preview } from '@storybook/nextjs-vite'
import { Geist, Geist_Mono, Playfair_Display } from 'next/font/google'
import '../src/app/globals.css'

const geist = Geist({
  variable: '--font-geist',
  subsets: ['latin'],
  display: 'swap',
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
  display: 'swap',
})

const playfair = Playfair_Display({
  variable: '--font-playfair',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#FAFAF8' },
        { name: 'dark', value: '#1B1F23' },
        { name: 'navy', value: '#1E3A5F' },
        { name: 'accent-soft', value: '#FEF3C7' },
      ],
    },
    a11y: {
      test: 'todo',
    },
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <div
        className={`${geist.variable} ${geistMono.variable} ${playfair.variable}`}
        style={{ padding: '2rem', minHeight: '200px', width: '100%', fontFamily: 'var(--font-geist), sans-serif' }}
      >
        <Story />
      </div>
    ),
  ],
}

export default preview
