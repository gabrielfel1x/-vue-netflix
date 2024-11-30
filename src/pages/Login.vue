<template>
  <div class="login-view">
    <header class="header">
      <RouterLink to="/">
        <NetflixLogo />
      </RouterLink>
    </header>
    <div class="login-container">
      <LoginForm />
    </div>
  </div>
</template>

<script setup lang="ts">
import LoginForm from '@/components/LoginForm.vue';
import NetflixLogo from '@/components/NetflixLogo.vue';
import { RouterLink } from 'vue-router';
import "@/css/login.css";
</script>
