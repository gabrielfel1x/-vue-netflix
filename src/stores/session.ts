import type { IUser } from '@/types'
import { defineStore } from 'pinia'

export const useSessionStore = defineStore('session', {
  state: () => ({
    user: null as null | IUser,
  }),
  actions: {
    async getUser() {
      await new Promise(resolve => setTimeout(resolve, 3000))

      this.user = { id: '1234', name: 'Foo', lastName: 'Bar' }
    },
  },
  getters: {
    fullName(state) {
      if (!state.user) {
        return ''
      }

      return state.user.name + ' ' + state.user.lastName
    },
  },
})
