import type { App } from 'vue'

export type PluginContext = {
  app: App
}

export interface IUser {
  id: string
  name: string
  lastName: string
}
