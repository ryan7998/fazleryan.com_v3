<script setup>
const showFullAbout = ref(false)

// Scroll-triggered entrance
const { revealRef: sectionRef, revealed } = useScrollReveal()

// Cursor spotlight
const { cardRef: spotRef, onMouseMove: onSpotMove, onMouseLeave: onSpotLeave, spotlightStyle } = useCardSpotlight({
  size: 400,
  color: 'rgba(37, 99, 235, 0.09)',
})

// Card tilt
const { containerRef: tiltRef, onMouseMove: onTiltMove, onMouseLeave: onTiltLeave, tiltX, tiltY } = useMouseTilt({
  tiltAmount: 2.5,
  cssPrefix: 'about-card',
})

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
    id="about"
    ref="sectionRef"
    class="relative overflow-hidden px-6 pt-10 pb-20"
    aria-labelledby="about-me-heading"
  >
    <!-- Floating background blobs -->
    <div class="blob blob-tl" aria-hidden="true" />
    <div class="blob blob-br" aria-hidden="true" />

    <div
      class="reveal-wrap mx-auto w-full max-w-[1200px]"
      :class="{ 'is-revealed': revealed }"
    >
      <div
        :ref="setCardRef"
        class="relative w-full rounded-3xl border border-white/70 bg-white/80 px-6 py-6 text-[15px] leading-relaxed text-[var(--hero-text-secondary)] shadow-[0_18px_55px_rgba(15,23,42,0.18)] backdrop-blur-xl sm:px-8 sm:py-7"
        style="font-family: var(--font-body);"
        :style="cardTiltStyle"
        @mousemove="onCardMouseMove"
        @mouseleave="onCardMouseLeave"
      >
        <!-- Cursor spotlight overlay -->
        <div
          class="pointer-events-none absolute inset-0 rounded-3xl transition-[background] duration-150"
          :style="spotlightStyle"
          aria-hidden="true"
        />

        <div class="relative mx-auto space-y-4">
          <h2
            id="about-me-heading"
            class="mb-4 flex items-center gap-3 font-heading text-2xl font-semibold tracking-tight text-[var(--hero-text-primary)] sm:text-3xl"
          >
            <span
              class="flex h-12 w-12 items-center justify-center rounded-xl text-[var(--accent)]"
              style="background: rgba(37, 99, 235, 0.15);"
            >
              <i class="fa-solid fa-user-gear text-xl" aria-hidden="true"></i>
            </span>
            <span>About Me</span>
          </h2>

          <p>
            I'm Fazle Ryan, a full-stack developer in Kitchener, ON, Canada. I build web apps that feel simple on the
            surface and stay solid underneath, which is basically the whole job.
          </p>
          <p>
            My strongest lane is backend and product infrastructure: Laravel and Node.js, clean REST APIs, auth flows,
            background jobs, queues, caching, and databases that stay consistent when real users start doing real
            things. I learned this the honest way, by shipping features, getting paged by bugs, then building the
            guardrails so those bugs do not get a sequel.
          </p>

          <Transition
            enter-active-class="transition-opacity duration-200"
            enter-from-class="opacity-0"
            enter-to-class="opacity-100"
            leave-active-class="transition-opacity duration-150"
            leave-from-class="opacity-100"
            leave-to-class="opacity-0"
          >
            <div v-if="showFullAbout" class="space-y-4">
              <p>
                On the frontend, I work in React and Vue and I care about polish. Not "make it pretty," but "make it
                obvious." Clean layout, consistent components, fast load, responsive behavior, and UI states that do not
                panic when the API is slow or the data is empty. I also like building dashboards, because a good
                dashboard is where messy systems go to become understandable.
              </p>
              <p>
                I use AI tools daily to move faster, but I do not ship AI spaghetti. I use them like power tools: great
                for acceleration, dangerous without measurements. I still review, refactor, and test like a grown-up.
              </p>
              <p>
                If you need someone who can take a feature end-to-end, ask the annoying-but-important questions early,
                and deliver code that your future self won't hate, that's me.
              </p>
            </div>
          </Transition>

          <div class="mt-5 flex justify-center">
            <button
              type="button"
              class="inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-7 py-3 text-[14px] font-semibold text-white shadow-[0_14px_35px_rgba(37,99,235,0.45)] transition hover:-translate-y-0.5 hover:opacity-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-white cursor-pointer"
              @click="showFullAbout = !showFullAbout"
            >
              <span>{{ showFullAbout ? 'Show less' : 'Read full bio' }}</span>
              <i
                class="fa-solid fa-chevron-down transition-transform duration-200"
                :class="showFullAbout ? 'rotate-180' : ''"
                aria-hidden="true"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
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

/* ── Floating background blobs ── */
.blob {
  position: absolute;
  border-radius: 9999px;
  pointer-events: none;
  filter: blur(70px);
  will-change: transform;
}
.blob-tl {
  width: 400px;
  height: 400px;
  top: -120px;
  left: -120px;
  background: rgba(59, 130, 246, 0.13);
  animation: float-a 11s ease-in-out infinite;
}
.blob-br {
  width: 320px;
  height: 320px;
  bottom: -80px;
  right: -80px;
  background: rgba(129, 140, 248, 0.12);
  animation: float-a 9s ease-in-out infinite reverse;
}

@keyframes float-a {
  0%, 100% { transform: translateY(0) scale(1); }
  50%       { transform: translateY(-20px) scale(1.04); }
}
</style>
