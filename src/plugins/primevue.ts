import type { PluginContext } from '@/types'
import PrimeVue from 'primevue/config'
import { NetflixPreset } from '@/utils/theme'
import { Button } from 'primevue'

export default function ({ app }: PluginContext) {
  app.use(PrimeVue, {
    theme: {
      preset: NetflixPreset,
    },
  })

  app.component('p-btn', Button)
}
