<script setup>
const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/#about' },
  { label: 'Portfolio', to: '/#portfolio' },
  { label: 'Contact', to: '/#contact' },
]
</script>

<template>
  <header
    class="sticky top-0 z-50 font-heading"
    style="background: rgba(17, 24, 39, 0.8); backdrop-filter: blur(12px);"
  >
    <nav
      class="mx-auto flex max-w-[1200px] items-center justify-between px-6 py-4"
      aria-label="Main navigation"
    >
      <NuxtLink
        to="/"
        class="text-xl font-bold text-[var(--text-primary)] no-underline transition hover:opacity-90 focus-visible:outline focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg-primary)]"
      >
        Fazle Ryan C.
      </NuxtLink>
      <ul class="flex list-none items-center gap-8 p-0">
        <li v-for="link in navLinks" :key="link.label">
          <NuxtLink
            :to="link.to"
            class="text-[15px] font-medium text-[var(--text-secondary)] no-underline transition hover:text-[var(--text-primary)] focus-visible:outline focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg-primary)]"
          >
            {{ link.label }}
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            to="/#contact"
            class="btn-primary inline-flex min-h-[44px] items-center justify-center rounded-[10px] px-7 py-3.5 text-[15px] font-semibold text-white no-underline shadow-[0_10px_25px_rgba(37,99,235,0.25)] transition duration-200 hover:-translate-y-0.5 hover:bg-[var(--accent-hover)] focus-visible:outline focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg-primary)]"
            style="background: var(--accent);"
          >
            Hire me
          </NuxtLink>
        </li>
      </ul>
    </nav>
  </header>
</template>
