import { definePreset } from '@primevue/themes'
import Aura from '@primevue/themes/aura'

export const NetflixPreset = definePreset(Aura, {
  semantic: {
    primary: {
      50: '{red.50}',
      100: '{red.100}',
      200: '{red.200}',
      300: '{red.300}',
      400: '{red.400}',
      500: '{red.500}',
      600: '{red.600}',
      700: '{red.700}',
      800: '{red.800}',
      900: '{red.900}',
    },
    secondary: {
      50: '{gray.50}',
      100: '{gray.100}',
      200: '{gray.200}',
      300: '{gray.300}',
      400: '{gray.400}',
      500: '{gray.500}',
      600: '{gray.600}',
      700: '{gray.700}',
      800: '{gray.800}',
      900: '{gray.900}',
    },
    foreground: {
      500: '{white}',
    },
    destructive: {
      500: '{red.700}',
    },
    muted: {
      500: '{gray.700}',
    },
  },
  colorScheme: {
    light: {
      primary: {
        color: '{red.700}',
        foreground: '{white}',
      },
      secondary: {
        color: '{gray.800}',
        foreground: '{white}',
      },
      background: {
        color: '{gray.50}',
      },
      card: {
        color: '{white}',
        foreground: '{gray.900}',
      },
    },
    dark: {
      primary: {
        color: '{red.600}',
        foreground: '{white}',
      },
      secondary: {
        color: '{gray.900}',
        foreground: '{white}',
      },
      background: {
        color: '{gray.900}',
      },
      card: {
        color: '{gray.800}',
        foreground: '{white}',
      },
      destructive: {
        color: '{red.800}',
        foreground: '{white}',
      },
      muted: {
        color: '{gray.600}',
        foreground: '{gray.300}',
      },
    },
  },
  radius: {
    base: '0.5rem',
  },
})
