<script setup>
useHead({
  title: 'Fazle | Portfolio',
  meta: [{ name: 'description', content: 'Web developer specializing in accessible, human-centered digital experiences.' }],
  link: [
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
    { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000&family=Inter:wght@400;500;600;700&display=swap' },
  ],
  htmlAttrs: { lang: 'en' },
})
</script>

<template>
  <div class="min-h-screen bg-[var(--bg-primary)]">
    <TheNav />
    <main>
      <NuxtPage />
    </main>
    <TheFooter />
  </div>
</template>
