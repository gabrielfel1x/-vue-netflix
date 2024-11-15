<script setup lang="ts">
import { ref, onMounted } from 'vue'
import NetflixLogo from './NetflixLogo.vue'
import { useRouter } from 'vue-router'

const isScrolled = ref(false)
const router = useRouter()

function goToLogin() {
  router.push("/login")
}

function goToHome() {
  router.push("/")
}

onMounted(() => {
  window.addEventListener('scroll', () => {
    isScrolled.value = window.scrollY > 0
  })
})
</script>

<template>
  <header :class="[{ 'scrolled': isScrolled }, 'header']">
    <div class="container">
      <div class="logo">
        <button @click="goToHome">
          <NetflixLogo />
        </button>
      </div>
      <div class="login">
        <button @click="goToLogin">Entrar</button>
      </div>
    </div>
  </header>
</template>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 50;
  background-color: transparent;
  transition: all 0.3s ease-in-out;
  width: 100%;
  padding: 1rem;
}

.header.scrolled {
  background-color: black;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.container {
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}


.login button {
  background-color: white;
  color: black;
  padding: 0.5rem 1rem;
  border-radius: 2rem;
  border: none;
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;
  transition: background-color 0.3s ease-in-out;
}

.login button:hover {
  background-color: lightgray;
}

@media (max-width: 768px) {
  .container {
    align-items: start;
  }

  .logo {
    margin-bottom: 1rem;
  }

  .login button {
    font-size: 0.9rem;
    padding: 0.4rem 1rem;
  }
}

@media (max-width: 480px) {
  .logo svg {
    width: 120px;
  }

  .login button {
    font-size: 0.8rem;
    padding: 0.3rem 0.8rem;
  }
}
</style>
