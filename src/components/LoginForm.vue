<template>
  <Form @submit="onSubmit" class="login-form">
    <h1 class="text-3xl font-bold mb-6 mr-auto">Entrar</h1>
    
    <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
    <div class="input-group">
      <div class="relative">
        <Field
          name="email"
          type="email"
          class="input-field"
          :rules="validateEmail"
          placeholder=" "
          v-model="email"
        />
        <label for="email" class="floating-label">Email ou número de celular</label>
        <ErrorMessage name="email" class="error" />
      </div>
    </div>

    <div class="input-group">
      <div class="relative">
        <Field
          name="password"
          type="password"
          class="input-field"
          :rules="validatePassword"
          placeholder=" "
          v-model="password"
        />
        <label for="password" class="floating-label">Senha</label>
        <ErrorMessage name="password" class="error" />
      </div>
    </div>

    <p-btn label="Entrar" class="login-btn" type="submit" />

    <div class="alternative-login">
      <span>OU</span>
      <p-btn label="Usar um código de acesso" class="access-code-btn" />
    </div>
    <div class="additional-options">
      <RouterLink to="/forgot-password" class="forgot-password">Esqueceu a senha?</RouterLink>
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
        <RouterLink to="/learn-more" class="learn-more-link">Saiba mais.</RouterLink>
      </p>
    </div>
  </form>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Form, Field, ErrorMessage } from 'vee-validate';
import '@/css/Form/button.css';
import '@/css/Form/input.css';
import '@/css/Form/login-form.css';
import '@/css/Form/misc.css';
import { useAuth } from '@/composables/useAuth';
const { login, errorMessage } = useAuth();
const email = ref('');
const password = ref('');
const rememberMe = ref(false);
const loginError = ref(false);

function validateEmail(value: any) {
  if (!value) return 'Este campo é obrigatório';
  const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  if (!regex.test(value)) return 'Informe um email ou número de telefone válido.';
  return true;
}

function validatePassword(value: any) {
  if (!value) return 'Este campo é obrigatório';
  if (value.length < 6) return 'A senha deve ter no mínimo 6 caracteres';
  return true;
}

async function onSubmit(values: any) {
  await login(values.email, values.password);
  if (errorMessage.value) {
    console.log(errorMessage.value);
  } else {
    console.log("Login bem-sucedido!");
  }
}
</script>
