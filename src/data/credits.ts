export interface CreditLink {
  label: string
  url: string
}

export interface Credit {
  name: string
  url: string
  extra?: CreditLink
}

// @doc CREDIT-DATA
export const credits: Credit[] = [
  {
    name: 'Pxlkit UI Kit and Icon Builder',
    url: 'https://github.com/Joangeldelarosa/pxlkit',
  },
  { name: 'use-sound', url: 'https://github.com/joshwcomeau/use-sound' },
  {
    name: 'Pixabay Sound Effects',
    url: 'https://pixabay.com/sound-effects/',
    extra: {
      label: 'License summary',
      url: 'https://pixabay.com/service/license-summary/',
    },
  },
  {
    name: 'Space Spheremaps Pixelart Starfields',
    url: 'https://space-spheremaps.itch.io/pixelart-starfields',
  },
  {
    name: 'Pixelify Sans via Fontsource',
    url: 'https://fontsource.org/fonts/pixelify-sans',
  },
]
