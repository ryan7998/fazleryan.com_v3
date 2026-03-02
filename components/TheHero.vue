<script setup>
const { containerRef, onMouseMove, onMouseLeave, style } = useMouseTilt({
  tiltAmount: 10,
  cssPrefix: 'hero',
})
</script>

<template>
  <section
    ref="containerRef"
    class="hero-banner relative w-full max-w-full overflow-hidden px-6 pt-20 pb-0 box-border"
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
    <!-- Overlay for text readability (desktop) -->
    <div
      class="absolute inset-0 pointer-events-none hidden md:block"
      style="background: var(--hero-blend-overlay);"
    />

    <!-- Content: on mobile = text + circular photo below; on desktop = text over banner -->
    <div class="hero-inner relative z-10 mx-auto w-full min-w-0 max-w-[1200px] flex min-h-[65vh] flex-col justify-center gap-10 pb-8 md:min-h-[70vh] md:gap-0 md:pb-0">
      <div class="max-w-[600px] font-heading">
        <p class="mb-4 text-xl text-[var(--text-muted)] md:text-2xl">
          Hi, I'm Fazle
        </p>
        <h1 class="mb-6 text-[48px] font-bold leading-[1.1] text-[var(--text-primary)] md:text-[64px]">
          I build <span class="text-[var(--accent)]">web</span> solutions.
        </h1>
        <p
          class="mb-10 max-w-[520px] text-lg leading-relaxed text-[var(--text-secondary)] md:text-xl"
          style="font-family: var(--font-body);"
        >
          I'm a web developer specializing in building accessible, human-centered digital products.
        </p>
        <div class="flex flex-wrap gap-4">
          <NuxtLink
            to="/#portfolio"
            class="inline-flex min-h-[48px] items-center justify-center rounded-[10px] px-8 py-4 text-base font-semibold text-white no-underline shadow-[0_10px_25px_rgba(37,99,235,0.3)] transition duration-200 hover:-translate-y-0.5 hover:opacity-95 focus-visible:outline focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg-primary)] md:text-[17px]"
            style="background: var(--accent);"
          >
            View My Work
          </NuxtLink>
          <NuxtLink
            to="/#contact"
            class="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-[10px] px-8 py-4 text-base font-semibold text-white no-underline shadow-[0_10px_25px_rgba(124,58,237,0.25)] transition duration-200 hover:-translate-y-0.5 hover:opacity-95 focus-visible:outline focus-visible:ring-2 focus-visible:ring-[var(--accent-purple)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg-primary)] md:text-[17px]"
            style="background: var(--accent-purple);"
          >
            Contact Me
            <span class="text-[0.9em]" aria-hidden="true">&rsaquo;</span>
          </NuxtLink>
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
  background: linear-gradient(180deg, var(--bg-primary) 0%, color-mix(in oklch, var(--bg-primary) 85%, var(--accent) 15%) 100%);
}
.hero-banner-bg {
  min-height: 100%;
  background-size: cover;
  background-position: center top;
  transform-origin: center;
  transform: translate3d(calc(var(--hero-tilt-y, 0deg) * 0.6), calc(var(--hero-tilt-x, 0deg) * 0.6), 0);
  transition: transform 200ms ease-out;
}

/* Interactive glow that follows the cursor on desktop */
.hero-banner::before {
  content: "";
  position: absolute;
  inset: -40%;
  background:
    radial-gradient(
      circle at var(--hero-glow-x, 50%) var(--hero-glow-y, 40%),
      rgba(59, 130, 246, 0.22),
      transparent 60%
    );
  mix-blend-mode: screen;
  opacity: 0.7;
  pointer-events: none;
  transition: opacity 200ms ease-out, background-position 200ms ease-out;
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
