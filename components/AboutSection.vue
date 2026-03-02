<script setup>
</script>

<template>
  <section id="about" class="about-card" aria-labelledby="about-heading">
    <div class="flex flex-col h-full rounded-2xl border border-[var(--border)] bg-[var(--bg-secondary)] p-8 shadow-[0_10px_40px_rgba(0,0,0,0.25)] transition duration-300 hover:shadow-[0_16px_48px_rgba(0,0,0,0.35)]">
      <!-- Icon -->
      <div class="mb-6 flex h-12 w-12 items-center justify-center rounded-xl text-[var(--accent)]" style="background: rgba(37, 99, 235, 0.15);">
        <i class="fa-solid fa-laptop-code text-xl" aria-hidden="true"></i>
      </div>
      <h2 id="about-heading" class="font-heading mb-3 text-2xl font-semibold text-[var(--text-primary)]">
        About Me
      </h2>
      <p class="mb-6 flex-1 text-[15px] leading-relaxed text-[var(--text-secondary)]" style="font-family: var(--font-body);">
        I'm a Toronto-based web developer, passionate about crafting accessible and user-centric digital experiences.
      </p>
      <NuxtLink
        to="/#about"
        class="inline-flex items-center gap-1.5 text-[15px] font-semibold text-white no-underline transition hover:opacity-90"
        style="background: var(--accent); padding: 10px 18px; border-radius: 8px;"
      >
        Read More
        <span aria-hidden="true">&rsaquo;</span>
      </NuxtLink>
    </div>
  </section>
</template>
