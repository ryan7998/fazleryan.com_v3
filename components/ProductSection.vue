<script setup>
const showProductModal = ref(false)

function openProductModal() { showProductModal.value = true }
function closeProductModal() { showProductModal.value = false }

// Scroll-triggered entrance
const { revealRef: sectionRef, revealed } = useScrollReveal()

// Cursor spotlight inside the glass card
const { cardRef: spotRef, onMouseMove: onSpotMove, onMouseLeave: onSpotLeave, spotlightStyle } = useCardSpotlight({
  size: 420,
  color: 'rgba(124, 58, 237, 0.1)',
})

// Subtle 3-D tilt driven by the same mouse position
const { containerRef: tiltRef, onMouseMove: onTiltMove, onMouseLeave: onTiltLeave, tiltX, tiltY } = useMouseTilt({
  tiltAmount: 3,
  cssPrefix: 'product-card',
})

// Share the same DOM element between both composable refs
function setCardRef(el) {
  const htmlEl = el instanceof HTMLElement ? el : null
  spotRef.value = htmlEl
  tiltRef.value = htmlEl
}

const cardTiltStyle = computed(() => ({
  transform: `perspective(1400px) rotateX(${tiltX.value}deg) rotateY(${tiltY.value}deg)`,
  transition: 'transform 220ms ease-out',
  transformStyle: 'preserve-3d',
}))

function onCardMouseMove(e) { onSpotMove(e); onTiltMove(e) }
function onCardMouseLeave() { onSpotLeave(); onTiltLeave() }
</script>

<template>
  <section
    id="product"
    ref="sectionRef"
    class="relative overflow-hidden px-6 pt-20 pb-10"
    aria-labelledby="product-heading"
  >
    <!-- Floating background blobs -->
    <div class="blob blob-tr" aria-hidden="true" />
    <div class="blob blob-bl" aria-hidden="true" />
    <div class="blob blob-mid" aria-hidden="true" />

    <div
      class="reveal-wrap relative mx-auto w-full max-w-[1200px] space-y-10"
      :class="{ 'is-revealed': revealed }"
    >
      <!-- Glass card — tilt + spotlight -->
      <div
        :ref="setCardRef"
        class="relative -mt-6 grid grid-cols-1 items-center gap-10 rounded-[32px] border border-white/70 bg-white/80 px-8 py-10 shadow-[0_28px_80px_rgba(15,23,42,0.28)] backdrop-blur-2xl md:-mt-10 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] md:px-12 md:py-12"
        :style="cardTiltStyle"
        @mousemove="onCardMouseMove"
        @mouseleave="onCardMouseLeave"
      >
        <!-- Cursor spotlight overlay -->
        <div
          class="pointer-events-none absolute inset-0 rounded-[32px] transition-[background] duration-150"
          :style="spotlightStyle"
          aria-hidden="true"
        />

        <!-- Copy -->
        <div class="relative space-y-6">
          <h2
            id="product-heading"
            class="flex items-center gap-3 font-heading text-2xl font-semibold tracking-tight text-[var(--hero-text-primary)] sm:text-3xl"
          >
            <span
              class="flex h-12 w-12 items-center justify-center rounded-xl text-[var(--accent)]"
              style="background: rgba(37, 99, 235, 0.15);"
            >
              <i class="fa-solid fa-diagram-project text-xl" aria-hidden="true"></i>
            </span>
            <span>My Product: CrawlerPro</span>
          </h2>
          <p class="text-[15px] leading-relaxed text-[var(--hero-text-secondary)] sm:text-base" style="font-family: var(--font-body);">
            This full-stack web crawler lets users crawl multiple URLs, extract structured data with custom selectors,
            and monitor progress live in the UI. Each crawl runs through a queue-backed pipeline, streams real-time
            status updates, and produces export-ready CSV/Excel outputs for downstream workflows.
          </p>
          <p class="text-[15px] leading-relaxed text-[var(--hero-text-secondary)] sm:text-base" style="font-family: var(--font-body);">
            The frontend is a responsive Vue 3 dashboard with a crawl builder, selector templates, nested selectors,
            and clear visibility into crawl state and results. The backend combines Express, MongoDB, Bull + Redis,
            Socket.IO, and a Playwright + Cheerio scraping stack, with an AI integration via Hugging Face for smarter
            extraction workflows.
          </p>

          <div class="flex flex-wrap gap-3 pt-2">
            <a
              href="http://crawler.onthis.website"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-2 rounded-xl bg-[var(--accent-purple)] px-5 py-2.5 text-[14px] font-semibold text-white no-underline shadow-md transition hover:-translate-y-0.5 hover:opacity-95 focus-visible:outline focus-visible:ring-2 focus-visible:ring-[var(--accent-purple)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg-primary)]"
            >
              <i class="fa-solid fa-arrow-up-right-from-square" aria-hidden="true"></i>
              Live Demo
            </a>
            <a
              href="https://github.com/ryan7998/crawler"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-2 rounded-xl border border-[var(--border)] bg-white/60 px-5 py-2.5 text-[14px] font-semibold text-[var(--hero-text-primary)] no-underline shadow-sm backdrop-blur-sm transition hover:-translate-y-0.5 hover:bg-white focus-visible:outline focus-visible:ring-2 focus-visible:ring-[var(--accent-purple)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg-primary)]"
            >
              <i class="fa-brands fa-github" aria-hidden="true"></i>
              View Repo
            </a>
          </div>

          <div class="mt-4 flex flex-wrap gap-2 text-[12px] text-[var(--hero-text-muted)]">
            <span v-for="(pill, i) in ['Vue 3 · Composition API', 'Express · MongoDB', 'Bull · Redis · Socket.IO', 'Playwright · Cheerio', 'Hugging Face AI']"
              :key="pill"
              class="pill rounded-full bg-white px-3 py-1 shadow-sm"
              :style="{ animationDelay: `${i * 80}ms` }"
              :class="{ 'pill-revealed': revealed }"
            >{{ pill }}</span>
          </div>
        </div>

        <!-- Screenshot -->
        <div
          class="group relative flex justify-center md:justify-end cursor-pointer"
          role="button"
          tabindex="0"
          @click="openProductModal"
          @keyup.enter.space.prevent="openProductModal"
        >
          <div
            class="pointer-events-none absolute inset-0 translate-y-6 opacity-70 blur-3 transition duration-500 group-hover:translate-y-3 group-hover:opacity-90"
            style="background: radial-gradient(circle at 50% 10%, rgba(129, 140, 248, 0.7), transparent 55%);"
          />
          <div
            class="relative max-w-[640px] md:max-w-[720px] overflow-hidden rounded-[32px] border border-white/60 bg-white/90 shadow-[0_28px_80px_rgba(15,23,42,0.36)] backdrop-blur-xl transition duration-500 group-hover:-translate-y-3 group-hover:scale-[1.02] group-hover:shadow-[0_36px_96px_rgba(15,23,42,0.5)]"
          >
            <img
              src="/crawlerpro.png"
              alt="CrawlerPro dashboard showing live crawl runs and statistics"
              class="block h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      <!-- View more projects button -->
      <div
        class="reveal-wrap flex justify-center"
        :class="{ 'is-revealed': revealed }"
        style="transition-delay: 0.2s;"
      >
        <a
          href="https://www.upwork.com/freelancers/fazleryan"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-7 py-3 text-[14px] font-semibold text-white no-underline shadow-[0_14px_35px_rgba(37,99,235,0.45)] transition hover:-translate-y-0.5 hover:opacity-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg-primary)]"
        >
          <i class="fa-solid fa-briefcase" aria-hidden="true"></i>
          View More Projects
        </a>
      </div>
    </div>
  </section>

  <!-- Fullscreen modal preview -->
  <Teleport to="body">
    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="showProductModal"
        class="fixed inset-0 z-[90] flex items-center justify-center bg-black/70 backdrop-blur-md"
        @click.self="closeProductModal"
      >
        <div class="relative w-[min(96vw,1100px)] max-h-[90vh]">
          <button
            type="button"
            class="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-black/60 text-white shadow-md transition hover:bg-black/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
            aria-label="Close preview"
            @click="closeProductModal"
          >
            <i class="fa-solid fa-xmark" aria-hidden="true"></i>
          </button>
          <div class="overflow-hidden rounded-[32px] bg-slate-900/90 shadow-[0_32px_120px_rgba(0,0,0,0.7)]">
            <img
              src="/crawlerpro.png"
              alt="Large preview of the CrawlerPro dashboard"
              class="block max-h-[90vh] w-full object-contain"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
/* ── Scroll-reveal ── */
.reveal-wrap {
  opacity: 0;
  transform: translateY(40px);
  transition: opacity 0.65s ease, transform 0.65s ease;
}
.reveal-wrap.is-revealed {
  opacity: 1;
  transform: translateY(0);
}

/* ── Tech pill stagger ── */
.pill {
  opacity: 0;
  transform: translateY(10px) scale(0.95);
  transition: opacity 0.4s ease, transform 0.4s ease, box-shadow 0.2s ease;
}
.pill-revealed {
  opacity: 1;
  transform: translateY(0) scale(1);
}
.pill:hover {
  box-shadow: 0 4px 14px rgba(124, 58, 237, 0.18);
  transform: translateY(-2px) scale(1.03);
}

/* ── Floating background blobs ── */
.blob {
  position: absolute;
  border-radius: 9999px;
  pointer-events: none;
  filter: blur(70px);
  will-change: transform;
}
.blob-tr {
  width: 480px;
  height: 480px;
  top: -160px;
  right: -140px;
  background: rgba(129, 140, 248, 0.18);
  animation: float-a 10s ease-in-out infinite;
}
.blob-bl {
  width: 360px;
  height: 360px;
  bottom: -100px;
  left: -100px;
  background: rgba(168, 85, 247, 0.14);
  animation: float-a 13s ease-in-out infinite reverse;
}
.blob-mid {
  width: 220px;
  height: 220px;
  top: 40%;
  right: 15%;
  background: rgba(236, 72, 153, 0.09);
  animation: float-b 8s ease-in-out infinite;
}

@keyframes float-a {
  0%, 100% { transform: translateY(0) scale(1); }
  50%       { transform: translateY(-22px) scale(1.04); }
}
@keyframes float-b {
  0%, 100% { transform: translateY(0) rotate(0deg); }
  50%       { transform: translateY(-14px) rotate(12deg); }
}
</style>
