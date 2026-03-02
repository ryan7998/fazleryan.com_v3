<script setup>
</script>

<template>
  <section
    class="relative overflow-hidden px-6 pb-24 pt-12"
    style="background: var(--hero-gradient);"
  >
    <div class="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-12 lg:grid-cols-[6fr_4fr] lg:gap-16">
      <div class="font-heading">
        <p class="mb-2 text-lg text-[var(--text-muted)]">
          Hello, I'm Mohammed
        </p>
        <h1 class="mb-5 text-[56px] font-bold leading-[1.1] text-[var(--text-primary)]">
          I build things <span class="text-[var(--accent)]">for the web.</span>
        </h1>
        <p class="mb-8 max-w-[540px] text-base leading-relaxed text-[var(--text-secondary)]" style="font-family: var(--font-body);">
          I'm a web developer specializing in building exceptional digital experiences. Currently, I'm focused on creating accessible, human-centered products.
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
      <div class="relative flex justify-center lg:justify-end">
        <div class="profile-image-wrapper relative inline-block">
          <img
            src="/profile.png"
            alt="Mohammed"
            class="relative z-10 block w-full max-w-[380px] rounded-2xl object-cover shadow-[0_0_60px_-10px_rgba(37,99,235,0.5),0_10px_40px_rgba(0,0,0,0.4)]"
          />
          <div
            class="pointer-events-none absolute inset-0 z-20 rounded-2xl"
            style="box-shadow: inset 0 0 80px 20px rgba(15, 23, 42, 0.5);"
            aria-hidden="true"
          />
        </div>
      </div>
    </div>
  </section>
</template>
