<script setup>
const { canvasRef } = useCanvasWaves({
  orbs: {
    count: 14,
    hues: [245, 260, 280, 210],
    minR: 25, maxR: 80,
    minOpacity: 0.05, maxOpacity: 0.18,
    maxSpeed: 0.35,
  },
  waves: [
    { amp: 28, freq: 0.007, speed: 0.012, phase: 0,   yRatio: 0.38, color: 'rgba(99,  102, 241, 0.22)' },
    { amp: 22, freq: 0.010, speed: 0.018, phase: 2.1, yRatio: 0.52, color: 'rgba(139,  92, 246, 0.28)' },
    { amp: 18, freq: 0.013, speed: 0.024, phase: 4.3, yRatio: 0.64, color: 'rgba(168,  85, 247, 0.35)' },
    { amp: 14, freq: 0.018, speed: 0.030, phase: 1.7, yRatio: 0.76, color: 'rgba(79,   70, 229, 0.45)' },
  ],
})
</script>

<template>
  <footer
    id="contact"
    class="relative overflow-hidden"
    style="background: linear-gradient(180deg, #0f0c29 0%, #1a1060 40%, #24243e 100%); min-height: 280px;"
  >
    <!-- JS canvas: waves + orbs -->
    <canvas ref="canvasRef" class="absolute inset-0 h-full w-full" aria-hidden="true" />

    <!-- Content layer -->
    <div class="relative z-10 mx-auto flex max-w-[1200px] flex-col gap-10 px-6 py-14">

      <!-- Top row: brand + nav + social -->
      <div class="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">

        <!-- Brand -->
        <div class="space-y-2">
          <p class="font-heading text-xl font-bold text-white tracking-tight">
            Fazle Ryan Chowdhury
          </p>
          <p class="max-w-[320px] text-sm leading-relaxed" style="color: rgba(203,213,255,0.75);">
            Full-stack developer crafting reliable,<br>human-centered web products.
          </p>

          <!-- Social icons -->
          <div class="flex gap-3 pt-3" aria-label="Social links">
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

        <!-- Nav links -->
        <nav class="flex flex-col gap-3 text-sm md:items-end" aria-label="Footer navigation">
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
