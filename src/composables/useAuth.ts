import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { loginUser } from '@/services/auth'

export function useAuth() {
  const user = ref(null)
  const router = useRouter()
  const isAuthenticated = ref(false)
  const errorMessage = ref('')

  async function login(email: string, password: string) {
    try {
      const userData = await loginUser(email, password)
      user.value = userData as never
      isAuthenticated.value = true
      errorMessage.value = ''
      router.push({ path: '/' })
    } catch (error) {
      errorMessage.value = error as string
      isAuthenticated.value = false
    }
  }

  function logout() {
    user.value = null
    isAuthenticated.value = false
    router.push({ path: '/login' })
  }

  return {
    user,
    isAuthenticated,
    errorMessage,
    login,
    logout,
  }
}
