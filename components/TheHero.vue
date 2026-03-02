<script setup>
</script>

<template>
  <section
    class="relative overflow-hidden px-6 pb-24 pt-20 md:min-h-[560px]"
    style="background: var(--hero-gradient);"
  >
    <!-- Desktop: full-bleed image on the right -->
    <img
      src="/profile.png"
      alt=""
      class="absolute top-0 right-0 hidden w-[70%] h-full select-none object-cover object-top pointer-events-none md:block"
      aria-hidden="true"
    />

    <!-- Desktop: left + bottom blend overlays (only when full-bleed image is visible) -->
    <div
      class="absolute inset-0 pointer-events-none hidden md:block"
      style="background: var(--hero-blend-overlay);"
    />
    <div
      class="absolute inset-0 pointer-events-none hidden md:block"
      style="background: linear-gradient(to top, #0F172A 0%, rgba(15, 23, 42, 0.85) 12%, transparent 38%);"
    />

    <!-- Content wrapper: column on mobile (text then image), same as before on desktop -->
    <div class="relative z-10 mx-auto flex max-w-[1200px] flex-col items-center gap-10 md:block md:gap-0">
      <!-- Text block -->
      <div class="max-w-[560px] font-heading text-center md:text-left">
        <p class="mb-3 text-lg text-[var(--text-muted)]">
          Hello, I'm Fazle
        </p>
        <h1 class="mb-5 text-[40px] font-bold leading-[1.15] text-[var(--text-primary)] md:text-[56px]">
          I build things <span class="text-[var(--accent)]">for the web.</span>
        </h1>
        <p
          class="mb-8 max-w-[480px] text-base leading-relaxed text-[var(--text-secondary)] md:mx-0"
          style="font-family: var(--font-body);"
        >
          I'm a web developer specializing in building exceptional digital experiences.
          Currently, I'm focused on creating accessible, human-centered products.
        </p>
        <div class="flex flex-wrap justify-center gap-4 md:justify-start">
          <NuxtLink
            to="/#portfolio"
            class="inline-flex min-h-[44px] items-center justify-center rounded-[10px] px-7 py-3.5 text-[15px] font-semibold text-white no-underline shadow-[0_10px_25px_rgba(37,99,235,0.25)] transition duration-200 hover:-translate-y-0.5 focus-visible:outline focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg-primary)]"
            style="background: var(--accent);"
          >
            View Portfolio
          </NuxtLink>
          <NuxtLink
            to="/#contact"
            class="inline-flex min-h-[44px] items-center justify-center rounded-[10px] border px-7 py-3.5 text-[15px] font-semibold text-[var(--text-primary)] no-underline transition duration-200 hover:bg-white/[0.08] focus-visible:outline focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg-primary)]"
            style="background: rgba(255,255,255,0.05); border-color: var(--border);"
          >
            Get in Touch
          </NuxtLink>
        </div>
      </div>

      <!-- Mobile-only: circular profile with glow (creative focal point) -->
      <div class="hero-mobile-avatar relative flex-shrink-0 md:hidden">
        <div class="relative h-[220px] w-[220px] overflow-hidden rounded-full ring-4 ring-[var(--accent)]/40 shadow-[0_0_0_1px_rgba(37,99,235,0.2),0_0_60px_rgba(37,99,235,0.25)]">
          <img
            src="/profile_mobile.png"
            alt="Fazle Ryan Chowdhury"
            class="h-full w-full object-cover object-top"
            width="220"
            height="220"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero-mobile-avatar img {
  animation: hero-avatar-in 0.6s ease-out;
}

@keyframes hero-avatar-in {
  from {
    opacity: 0;
    transform: scale(0.92);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
</style>
