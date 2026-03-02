<script setup>
</script>

<template>
  <section
    class="relative overflow-hidden px-6 pb-24 pt-20"
    style="background: var(--hero-gradient); min-height: 560px;"
  >
    <img
      src="/profile.png"
      alt="Fazle Ryan Chowdhury"
      class="absolute top-0 right-0 w-[70%] h-full object-cover object-top pointer-events-none select-none"
      aria-hidden="true"
    />

    <!-- Left fade: seamless blend of image into dark banner (uses CSS variable for consistency) -->
    <div
      class="absolute inset-0 pointer-events-none"
      style="background: var(--hero-blend-overlay);"
    />

    <!-- Text content sits above image and fades -->
    <div class="relative z-10 mx-auto max-w-[1200px]">
      <div class="max-w-[560px] font-heading">
        <p class="mb-3 text-lg text-[var(--text-muted)]">
          Hello, I'm Fazle
        </p>
        <h1 class="mb-5 text-[56px] font-bold leading-[1.1] text-[var(--text-primary)]">
          I build things <span class="text-[var(--accent)]">for the web.</span>
        </h1>
        <p
          class="mb-8 max-w-[480px] text-base leading-relaxed text-[var(--text-secondary)]"
          style="font-family: var(--font-body);"
        >
          I'm a web developer specializing in building exceptional digital experiences.
          Currently, I'm focused on creating accessible, human-centered products.
        </p>
        <div class="flex flex-wrap gap-4">
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
    </div>
  </section>
</template>
