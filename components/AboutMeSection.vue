<script setup>
const showFullAbout = ref(false)
</script>

<template>
  <section
    class="relative px-6 py-20"
    aria-labelledby="about-me-heading"
  >
    <div class="mx-auto w-full max-w-[1200px]">
      <div
        class="w-full rounded-3xl border border-white/70 bg-white/80 px-6 py-6 text-[15px] leading-relaxed text-[var(--hero-text-secondary)] shadow-[0_18px_55px_rgba(15,23,42,0.18)] backdrop-blur-xl sm:px-8 sm:py-7"
        style="font-family: var(--font-body);"
      >
        <div class="mx-auto space-y-4">
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
            I’m Fazle Ryan, a full-stack developer in Kitchener, ON, Canada. I build web apps that feel simple on the
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
                On the frontend, I work in React and Vue and I care about polish. Not “make it pretty,” but “make it
                obvious.” Clean layout, consistent components, fast load, responsive behavior, and UI states that do not
                panic when the API is slow or the data is empty. I also like building dashboards, because a good
                dashboard is where messy systems go to become understandable.
              </p>
              <p>
                I’ve built a crawler platform with Playwright, real-time progress updates, queue-driven workers, and
                structured extraction, because copy-paste is not a data strategy and neither is “run it again and hope.”
                I’m comfortable with integrations too, like Stripe billing, third-party APIs, and the unglamorous parts
                like webhooks, retries, and idempotency.
              </p>
              <p>
                I use AI tools daily to move faster, but I do not ship AI spaghetti. I use them like power tools: great
                for acceleration, dangerous without measurements. I still review, refactor, and test like a grown-up.
              </p>
              <p>
                If you need someone who can take a feature end-to-end, ask the annoying-but-important questions early,
                and deliver code that your future self won’t hate, that’s me.
              </p>
            </div>
          </Transition>

          <div class="mt-5 flex justify-center">
            <button
              type="button"
              class="inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-7 py-3 text-[14px] font-semibold text-white shadow-[0_14px_35px_rgba(37,99,235,0.45)] transition hover:-translate-y-0.5 hover:opacity-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-white"
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

