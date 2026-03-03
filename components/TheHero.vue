<script setup>
const { containerRef, onMouseMove, onMouseLeave, style } = useMouseTilt({
  tiltAmount: 3,
  cssPrefix: 'hero',
})

// Subtle animated orbs + bottom waves — sit behind the banner image on desktop,
// and provide the full animated background on mobile where no image is shown.
const { canvasRef: waveCanvasRef } = useCanvasWaves({
  orbs: {
    count: 10,
    hues: [245, 260, 280, 220],
    minR: 40, maxR: 120,
    minOpacity: 0.2, maxOpacity: 0.5,
    maxSpeed: 0.25,
  },
  waves: [
    { amp: 22, freq: 0.007, speed: 0.010, phase: 0,   yRatio: 0.55, color: 'rgba(99,  102, 241, 0.12)' },
    { amp: 18, freq: 0.011, speed: 0.016, phase: 1.8, yRatio: 0.68, color: 'rgba(139,  92, 246, 0.16)' },
    { amp: 14, freq: 0.015, speed: 0.022, phase: 3.5, yRatio: 0.80, color: 'rgba(168,  85, 247, 0.20)' },
  ],
})

const heroPills = [
  'Laravel APIs',
  'Node.js Automation',
  'Playwright Crawling',
  'Redis & Bull Queues',
  'Vue.js Dashboards',
  'Elasticsearch Pipelines',
]
</script>

<template>
  <section
    ref="containerRef"
    class="hero-banner relative flex w-full max-w-full items-center overflow-hidden px-6 py-20 box-border"
    aria-label="Hero"
    @mousemove="onMouseMove"
    @mouseleave="onMouseLeave"
    :style="style"
  >
    <!-- Full-bleed banner only on desktop; on mobile we use text + circular image -->
    <div
      class="hero-banner-bg absolute inset-0 hidden bg-no-repeat md:block"
      style="background-image: url('/hero-banner.png');"
    />
    <!-- Animated canvas: orbs + waves (always present; image sits on top on desktop) -->
    <canvas
      ref="waveCanvasRef"
      class="absolute inset-0 h-full w-full pointer-events-none"
      aria-hidden="true"
    />
    <!-- Overlay for text readability (desktop) -->
    <div
      class="absolute inset-0 pointer-events-none hidden md:block"
      style="background: var(--hero-blend-overlay);"
    />

    <!-- Content: on mobile = text + circular photo below; on desktop = text over banner -->
    <div class="hero-inner relative z-10 mx-auto w-full min-w-0 max-w-[1200px] flex flex-col gap-8 pb-6 md:pb-10">
      <div class="hero-copy max-w-[640px] font-heading">
        <h1 class="mb-5 text-[36px] font-bold leading-[1.15] text-[var(--hero-text-primary)] md:text-[42px] lg:text-[48px]">
          Full-Stack Prouct Engineer building scalable web apps, APIs, and crawlers.
        </h1>
        <p
          class="mb-8 max-w-[560px] text-base leading-relaxed text-[var(--hero-text-secondary)] md:text-lg"
          style="font-family: var(--font-body);"
        >
          Laravel + Node.js + Vue/React. Production systems with queues, real-time updates, and data pipelines.
        </p>
        <div class="mb-8 flex flex-wrap gap-3">
          <NuxtLink
            to="/#portfolio"
            class="hero-btn-primary inline-flex min-h-[48px] items-center justify-center rounded-xl px-7 py-3.5 text-[15px] font-semibold text-white no-underline shadow-lg transition duration-200 hover:-translate-y-0.5 hover:opacity-95 focus-visible:outline focus-visible:ring-2 focus-visible:ring-[var(--accent-purple)] focus-visible:ring-offset-2 focus-visible:ring-offset-white md:text-[16px]"
            style="background: var(--accent-purple);"
          >
            View Projects
          </NuxtLink>
          <NuxtLink
            to="/#contact"
            class="hero-btn-secondary inline-flex min-h-[48px] items-center justify-center gap-2 rounded-xl border-2 px-7 py-3.5 text-[15px] font-semibold no-underline transition duration-200 hover:-translate-y-0.5 hover:opacity-90 focus-visible:outline focus-visible:ring-2 focus-visible:ring-[var(--accent-purple)] focus-visible:ring-offset-2 focus-visible:ring-offset-white md:text-[16px]"
            style="color: var(--hero-text-primary); border-color: var(--accent-purple); background: white;"
          >
            Contact
          </NuxtLink>
        </div>
        <div class="flex flex-wrap gap-2">
          <span
            v-for="pill in heroPills"
            :key="pill"
            class="hero-pill inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-[13px] font-medium md:text-[14px]"
            style="background: var(--hero-pill-bg); color: var(--hero-pill-text);"
          >
            <i class="fa-solid fa-circle h-3.5 w-3.5 shrink-0 text-[var(--accent-purple)]" aria-hidden="true"></i>
            {{ pill }}
          </span>
        </div>
      </div>

      <!-- Mobile: circular profile image below the copy -->
      <div class="hero-mobile-avatar flex justify-center md:hidden" aria-hidden="true">
        <div class="hero-avatar-ring relative flex h-[200px] w-[200px] shrink-0 items-center justify-center sm:h-[240px] sm:w-[240px]">
          <img
            src="/profile_mobile.png"
            alt=""
            class="hero-mobile-img h-full w-full rounded-full object-cover"
            width="240"
            height="240"
          />
        </div>
      </div>
    </div>

    <!-- Wave transition at bottom of hero (flows into content section) -->
    <div class="absolute bottom-0 left-0 right-0 h-24 pointer-events-none" aria-hidden="true">
      <svg class="absolute bottom-0 w-full h-full" viewBox="0 0 1440 96" preserveAspectRatio="none">
        <path fill="var(--bg-primary)" d="M0 96V48 Q360 0 720 48 T1440 48V96H0Z" />
      </svg>
    </div>
  </section>
</template>

<style scoped>
.hero-banner {
  width: 100%;
  min-height: 65vh;
}
.hero-banner-bg {
  min-height: 100%;
  background-size: cover;
  background-position: center top;
  transform-origin: center;
  transform: translate3d(calc(var(--hero-tilt-y, 0deg) * 0.6), calc(var(--hero-tilt-x, 0deg) * 0.6), 0);
  transition: transform 200ms ease-out;
}

.hero-inner {
  transform-style: preserve-3d;
  transform:
    perspective(1400px)
    rotateX(var(--hero-tilt-x, 0deg))
    rotateY(var(--hero-tilt-y, 0deg));
  transition: transform 200ms ease-out;
}

/* Show more of the top of the photo in the circle (stops head from being cut) */
.hero-mobile-img {
  object-position: center 20%;
}
.hero-avatar-ring {
  border-radius: 9999px;
  box-shadow:
    0 0 0 4px color-mix(in oklch, var(--accent) 25%, transparent),
    0 20px 40px rgba(0, 0, 0, 0.15);
}
@media (min-width: 768px) {
  .hero-banner {
    min-height: 70vh;
    aspect-ratio: 16 / 9;
    background: none;
  }
  .hero-banner-bg {
    background-position: right top;
  }
}
</style>
