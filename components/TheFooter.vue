<script setup>
</script>

<template>
  <footer
    class="relative overflow-hidden px-6 py-12 text-[var(--text-secondary)]"
    style="background: var(--footer-gradient);"
  >
    <div class="relative z-10 mx-auto max-w-[1200px]">
      <p class="text-center text-sm">
        © {{ new Date().getFullYear() }} Mohammed. All rights reserved.
      </p>
      <nav class="mt-4 flex justify-center gap-6" aria-label="Footer links">
        <NuxtLink to="/" class="text-sm text-[var(--soft-blue)] no-underline transition hover:underline focus-visible:outline focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-transparent">
          Home
        </NuxtLink>
        <NuxtLink to="/#about" class="text-sm text-[var(--soft-blue)] no-underline transition hover:underline focus-visible:outline focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-transparent">
          About
        </NuxtLink>
        <NuxtLink to="/#contact" class="text-sm text-[var(--soft-blue)] no-underline transition hover:underline focus-visible:outline focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-transparent">
          Contact
        </NuxtLink>
      </nav>
    </div>
  </footer>
</template>
