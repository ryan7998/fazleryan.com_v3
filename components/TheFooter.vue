<script setup>
const { canvasRef } = useCanvasWaves({
  orbs: {
    count: 14,
    hues: [245, 260, 280, 210],
    minR: 25,
    maxR: 80,
    minOpacity: 0.05,
    maxOpacity: 0.18,
    maxSpeed: 0.35,
  },
  waves: [
    { amp: 28, freq: 0.007, speed: 0.012, phase: 0,   yRatio: 0.38, color: 'rgba(99,  102, 241, 0.22)' },
    { amp: 22, freq: 0.010, speed: 0.018, phase: 2.1, yRatio: 0.52, color: 'rgba(139,  92, 246, 0.28)' },
    { amp: 18, freq: 0.013, speed: 0.024, phase: 4.3, yRatio: 0.64, color: 'rgba(168,  85, 247, 0.35)' },
    { amp: 14, freq: 0.018, speed: 0.030, phase: 1.7, yRatio: 0.76, color: 'rgba(79,   70, 229, 0.45)' },
  ],
})

// Gentle tilt on individual footer blocks — drive transform directly from tiltX/tiltY
// so no CSS-variable indirection is needed (avoids scoped-CSS specificity issues).
const {
  containerRef: brandRef,
  onMouseMove: onBrandMove,
  onMouseLeave: onBrandLeave,
  tiltX: brandTiltX,
  tiltY: brandTiltY,
} = useMouseTilt({ tiltAmount: 20, cssPrefix: 'footer-brand' })

const brandStyle = computed(() => ({
  transform: `perspective(900px) rotateX(${brandTiltX.value}deg) rotateY(${brandTiltY.value}deg)`,
  transition: 'transform 180ms ease-out',
  transformStyle: 'preserve-3d',
}))

const {
  containerRef: navRef,
  onMouseMove: onNavMove,
  onMouseLeave: onNavLeave,
  tiltX: navTiltX,
  tiltY: navTiltY,
} = useMouseTilt({ tiltAmount: 20, cssPrefix: 'footer-nav' })

const navStyle = computed(() => ({
  transform: `perspective(900px) rotateX(${navTiltX.value}deg) rotateY(${navTiltY.value}deg)`,
  transition: 'transform 180ms ease-out',
  transformStyle: 'preserve-3d',
}))
</script>

<template>
  <footer
    id="contact"
    class="relative overflow-hidden"
    style="background: linear-gradient(180deg, #0f0c29 0%, #1a1060 40%, #24243e 100%); min-height: 280px;"
  >
    <!-- JS canvas: waves + orbs -->
    <canvas ref="canvasRef" class="absolute inset-0 h-full w-full pointer-events-none" aria-hidden="true" />

    <!-- Content layer -->
    <div class="relative z-10 mx-auto flex max-w-[1200px] flex-col gap-10 px-6 py-14">

      <!-- Top row: brand + nav + social -->
      <div class="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">

        <!-- Brand -->
        <div
          ref="brandRef"
          class="space-y-2"
          :style="brandStyle"
          @mousemove="onBrandMove"
          @mouseleave="onBrandLeave"
        >
          <p class="font-heading text-xl font-bold text-white tracking-tight">
            Fazle Ryan Chowdhury
          </p>
          <p class="max-w-[360px] text-sm leading-relaxed" style="color: rgba(203,213,255,0.75);">
            Full-stack developer crafting reliable,<br />human-centered web products.
          </p>

          <!-- Contact + social -->
          <div class="mt-3 flex flex-col gap-3 text-sm" aria-label="Contact information">
            <div class="flex flex-wrap items-center gap-3" style="color: rgba(203,213,255,0.82);">
              <a
                href="mailto:mail@fazleryan.com"
                class="inline-flex items-center gap-2 no-underline transition hover:opacity-100"
              >
                <i class="fa-solid fa-envelope text-xs" aria-hidden="true"></i>
                <span>mail@fazleryan.com</span>
              </a>
              <span class="hidden text-[rgba(148,163,184,0.7)] md:inline">·</span>
              <a
                href="tel:+14372346677"
                class="inline-flex items-center gap-2 no-underline transition hover:opacity-100"
              >
                <i class="fa-solid fa-phone text-xs" aria-hidden="true"></i>
                <span>+1 (437) 234-6677</span>
              </a>
            </div>

            <div class="flex gap-3 pt-1" aria-label="Social links">
            <a
              href="https://github.com/ryan7998"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              class="flex h-9 w-9 items-center justify-center rounded-full transition"
              style="background: rgba(255,255,255,0.08); color: rgba(203,213,255,0.85);"
              onmouseenter="this.style.background='rgba(255,255,255,0.18)'"
              onmouseleave="this.style.background='rgba(255,255,255,0.08)'"
            >
              <i class="fa-brands fa-github text-sm" aria-hidden="true"></i>
            </a>
            <a
              href="https://www.upwork.com/freelancers/fazleryan"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Upwork"
              class="flex h-9 w-9 items-center justify-center rounded-full transition"
              style="background: rgba(255,255,255,0.08); color: rgba(203,213,255,0.85);"
              onmouseenter="this.style.background='rgba(255,255,255,0.18)'"
              onmouseleave="this.style.background='rgba(255,255,255,0.08)'"
            >
              <i class="fa-brands fa-upwork text-sm" aria-hidden="true"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/fazle-ryan"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              class="flex h-9 w-9 items-center justify-center rounded-full transition"
              style="background: rgba(255,255,255,0.08); color: rgba(203,213,255,0.85);"
              onmouseenter="this.style.background='rgba(255,255,255,0.18)'"
              onmouseleave="this.style.background='rgba(255,255,255,0.08)'"
            >
              <i class="fa-brands fa-linkedin-in text-sm" aria-hidden="true"></i>
            </a>
            </div>
          </div>
        </div>

        <!-- Nav links -->
        <nav
          ref="navRef"
          class="flex flex-col gap-3 text-sm md:items-end"
          :style="navStyle"
          @mousemove="onNavMove"
          @mouseleave="onNavLeave"
          aria-label="Footer navigation"
        >
          <p class="text-xs font-semibold uppercase tracking-widest" style="color: rgba(203,213,255,0.5);">Navigation</p>
          <NuxtLink
            to="/"
            class="no-underline transition hover:opacity-100"
            style="color: rgba(203,213,255,0.75);"
            onmouseenter="this.style.color='#ffffff'"
            onmouseleave="this.style.color='rgba(203,213,255,0.75)'"
          >
            Home
          </NuxtLink>
          <NuxtLink
            to="/#product"
            class="no-underline transition"
            style="color: rgba(203,213,255,0.75);"
            onmouseenter="this.style.color='#ffffff'"
            onmouseleave="this.style.color='rgba(203,213,255,0.75)'"
          >
            Work
          </NuxtLink>
          <NuxtLink
            to="/#about-me-heading"
            class="no-underline transition"
            style="color: rgba(203,213,255,0.75);"
            onmouseenter="this.style.color='#ffffff'"
            onmouseleave="this.style.color='rgba(203,213,255,0.75)'"
          >
            About
          </NuxtLink>
        </nav>
      </div>

      <!-- Divider -->
      <div class="border-t" style="border-color: rgba(255,255,255,0.1);"></div>

      <!-- Copyright -->
      <p class="text-center text-xs" style="color: rgba(203,213,255,0.5);">
        © {{ new Date().getFullYear() }} Fazle Ryan. All rights reserved.
      </p>
    </div>
  </footer>
</template>

