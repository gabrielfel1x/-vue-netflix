<script setup lang="ts">
// @ts-ignore
import { ref } from 'vue'

const login = {
  to: '/login',
  label: 'entrar',
}
</script>

<template>
  <RouterLink :to="login.to">
    <p-btn>{{ login.label }}</p-btn>
  </RouterLink>
</template>
