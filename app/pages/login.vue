<script setup lang="ts">
import * as z from "zod";
import type { FormSubmitEvent } from "@nuxt/ui";

definePageMeta({
  layout: "auth",
});

useSeoMeta({
  title: "Login",
  description: "Login to your account to continue",
});

const toast = useToast();

const fields = [
  {
    name: "email",
    type: "text" as const,
    label: "Email",
    placeholder: "Enter your email",
    required: true,
  },
  {
    name: "password",
    label: "Password",
    type: "password" as const,
    placeholder: "Enter your password",
  },
  {
    name: "remember",
    label: "Remember me",
    type: "checkbox" as const,
  },
];

const providers = [
  {
    label: "Google",
    icon: "i-simple-icons-google",
    onClick: () => {
       window.location.href = "http://localhost:9999/api/v1/account/auth/google";
    },
  },
  {
    label: "GitHub",
    icon: "i-simple-icons-github",
    onClick: () => {
      toast.add({ title: "GitHub", description: "Login with GitHub" });
    },
  },
];

const schema = z.object({
  email: z.string().email("Invalid email"),
  password: z.string().min(6, "Must be at least 6 characters"),
});

type Schema = z.output<typeof schema>;

async function onSubmit(payload: FormSubmitEvent<Schema>) {

  if (!payload.data){
    toast.add({ title: "Đăng nhập thất bại", description: "Vui lòng kiểm tra thông tin đăng nhập" });
    return;
  }

  const { data, error } = await useFetch("/api/auth/login", {
    method: "POST",
    body: payload.data,
  });

  if (error.value) {
    const msg =
      (error.value.data as any)?.message ||
      error.value.statusMessage ||
      "Đăng nhập thất bại";
    toast.add({ title: "Đăng nhập thất bại", description: msg });
  } else if (data.value) {
    toast.add({ title: "Đăng nhập thành công", description: "Chào mừng bạn trở lại!" });
    navigateTo("/");
  }
}
</script>

<template>
  <UAuthForm
    :fields="fields"
    :schema="schema"
    :providers="providers"
    title="Welcome back"
    icon="i-lucide-lock"
    @submit="onSubmit"
  >
    <template #description>
      Don't have an account?
      <ULink to="/signup" class="text-primary font-medium">Sign up</ULink>.
    </template>

    <template #password-hint>
      <ULink to="/" class="text-primary font-medium" tabindex="-1"
        >Forgot password?</ULink
      >
    </template>

    <template #footer>
      By signing in, you agree to our
      <ULink to="/" class="text-primary font-medium">Terms of Service</ULink>.
    </template>
  </UAuthForm>
</template>
