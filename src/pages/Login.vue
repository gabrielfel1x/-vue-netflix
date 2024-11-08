<template>
  <div class="login-view">
    <header class="header">
        <NetflixLogo />
    </header>
    <div class="login-container">
      <LoginForm />
    </div>
  </div>
</template>
  
<script setup lang="ts">
import LoginForm from '@/components/LoginForm.vue'
import NetflixLogo from '@/components/NetflixLogo.vue'
import "@/css/login.css"
</script>
  