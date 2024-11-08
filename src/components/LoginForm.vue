<template>
    <form @submit.prevent="onSubmit" class="login-form">
      <h1 class="text-3xl font-bold mb-6 mr-auto">Entrar</h1>
      <div class="input-group">
        <div class="relative">
          <p-input class="input-field" id="email"  v-model="email" placeholder=" " required  />
          <label for="email" class="floating-label">Email ou número de celular</label>
        </div>
      </div>
      <div class="input-group">
        <div class="relative">
          <p-input v-model="password" id="password" class="input-field"  required  placeholder=" " type="password" />
          <label for="password" class="floating-label">Senha</label>
        </div>
      </div>
      <p-btn label="Entrar" class="login-btn" />
  
      
      <div class="alternative-login">
          <span>OU</span>
          <p-btn label="Usar um código de acesso" class="access-code-btn" />
        </div>
        <div class="additional-options">
          <RouterLink to="/forgot-password" class="forgot-password"
            >Esqueceu a senha?</RouterLink
          >
        </div>
        
        <div class="remember-me">
        <p-checkbox id="checkbox" v-model="rememberMe" label="Lembre-se de mim" />
        <span>Lembre-se de mim</span>

        </div>

      <div class="sign-up">
        <p>
          Novo por aqui?
          <RouterLink to="/signup" class="sign-up-link">Assine agora.</RouterLink>
        </p>
      </div>
  
      <div class="captcha-info">
        <p>
          Esta página é protegida pelo Google reCAPTCHA para garantir que você não
          é um robô.
          <RouterLink to="/learn-more" class="learn-more-link"
            >Saiba mais.</RouterLink
          >
        </p>
      </div>
  </form>
</template>
    
<script setup lang="ts">
  import { ref } from 'vue';
  import '@/css/Form/button.css'
  import '@/css/Form/input.css'
  import '@/css/Form/login-form.css'
  import '@/css/Form/misc.css'
  
  const email = ref('')
  const password = ref('')
  const rememberMe = ref(false)
  
  function onSubmit() {
    console.log('Email:', email.value)
    console.log('Password:', password.value)
    console.log('Remember Me:', rememberMe.value)
  }
  </script>
