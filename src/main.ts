import './css/index.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const plugins = ['primevue'] as const

async function loadPlugins() {
  for (const plugin of plugins) {
    const { default: defaultFn } = await import(`./plugins/${plugin}.ts`)

    const fn = defaultFn || (() => Promise.resolve())

    await fn({ app })
  }
}

const app = createApp(App)

app.use(createPinia())
app.use(router)

loadPlugins().finally(() => {
  app.mount('#app')
})
