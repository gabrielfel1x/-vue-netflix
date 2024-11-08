import type { PluginContext } from '@/types'
import PrimeVue from 'primevue/config'
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'
import Checkbox from 'primevue/checkbox'

export default function ({ app }: PluginContext) {
  app.use(PrimeVue, { unstyled: true })

  app.component('p-input', InputText)
  app.component('p-checkbox', Checkbox)
  app.component('p-btn', Button)
}
