<script setup>
const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Work', to: '/#product' },
  { label: 'About', to: '/#about' },
  { label: 'Contact', to: '/#contact' },
]

const menuOpen = ref(false)

function closeMenu() { menuOpen.value = false }
function toggleMenu() { menuOpen.value = !menuOpen.value }

function onKeydown(e) {
  if (e.key === 'Escape') closeMenu()
}

const route = useRoute()
watch(() => route.fullPath, closeMenu)

onMounted(() => document.addEventListener('keydown', onKeydown))
onUnmounted(() => document.removeEventListener('keydown', onKeydown))
</script>

<template>
  <header
    class="sticky top-0 z-50 font-heading"
    style="background: rgba(15, 23, 42, 0.85); backdrop-filter: blur(14px); border-bottom: 1px solid rgba(31,41,55,0.6);"
  >
    <nav
      class="mx-auto flex max-w-[1200px] items-center justify-between px-6 py-4"
      aria-label="Main navigation"
    >
      <!-- Brand -->
      <NuxtLink
        to="/"
        class="text-xl font-bold text-white no-underline transition hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
        @click="closeMenu"
      >
        Fazle Ryan C.
      </NuxtLink>

      <!-- Desktop links -->
      <ul class="hidden list-none items-center gap-8 p-0 md:flex text-white">
        <li v-for="link in navLinks" :key="link.label">
          <NuxtLink
            :to="link.to"
            class="text-[15px] font-medium text-white no-underline transition duration-200 hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
          >
            {{ link.label }}
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            to="/#contact"
            class="inline-flex min-h-[44px] items-center justify-center rounded-[10px] px-7 py-3 text-[15px] font-semibold text-white no-underline shadow-[0_10px_25px_rgba(37,99,235,0.25)] transition duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
            style="background: var(--accent);"
          >
            Hire me
          </NuxtLink>
        </li>
      </ul>

      <!-- Mobile: hamburger button -->
      <button
        type="button"
        class="relative flex h-11 w-11 flex-col items-center justify-center gap-[5px] rounded-xl text-white transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] md:hidden"
        :aria-expanded="menuOpen"
        aria-label="Toggle navigation menu"
        @click="toggleMenu"
      >
        <span
          class="block h-[2px] w-5 origin-center rounded-full bg-current transition-all duration-300"
          :style="menuOpen ? 'transform: translateY(7px) rotate(45deg)' : ''"
        />
        <span
          class="block h-[2px] w-5 rounded-full bg-current transition-all duration-300"
          :style="menuOpen ? 'opacity: 0; transform: scaleX(0)' : ''"
        />
        <span
          class="block h-[2px] w-5 origin-center rounded-full bg-current transition-all duration-300"
          :style="menuOpen ? 'transform: translateY(-7px) rotate(-45deg)' : ''"
        />
      </button>
    </nav>
  </header>

  <!-- Mobile menu: full-screen overlay + panel -->
  <Teleport to="body">
    <!-- Dark backdrop -->
    <Transition
      enter-active-class="transition-opacity duration-300"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition-opacity duration-200"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="menuOpen"
        class="fixed inset-0 z-[60] bg-black/60 md:hidden"
        aria-hidden="true"
        @click="closeMenu"
      />
    </Transition>

    <!-- Slide-in panel -->
    <Transition
      enter-active-class="transition-transform duration-300 ease-out"
      enter-from-class="translate-x-full"
      enter-to-class="translate-x-0"
      leave-active-class="transition-transform duration-250 ease-in"
      leave-from-class="translate-x-0"
      leave-to-class="translate-x-full"
    >
      <nav
        v-if="menuOpen"
        class="fixed top-0 right-0 z-[70] flex h-full w-[300px] flex-col md:hidden"
        style="background: #0F172A; border-left: 1px solid #1F2937;"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
      >
        <!-- Panel header: brand + close button -->
        <div class="flex items-center justify-between border-b border-[#1F2937] px-6 py-5">
          <span class="text-lg font-bold text-white">Menu</span>
          <button
            type="button"
            class="flex h-10 w-10 items-center justify-center rounded-lg text-white/70 transition hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
            aria-label="Close menu"
            @click="closeMenu"
          >
            <!-- X icon -->
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M15 5L5 15M5 5L15 15" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            </svg>
          </button>
        </div>

        <!-- Nav links -->
        <ul class="flex flex-col gap-1 px-4 py-6 list-none p-0">
          <li v-for="link in navLinks" :key="link.label">
            <NuxtLink
              :to="link.to"
              class="flex items-center gap-3 rounded-xl px-4 py-3.5 text-[16px] font-medium text-white no-underline transition duration-200 hover:bg-white/10 hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
              @click="closeMenu"
            >
              {{ link.label }}
            </NuxtLink>
          </li>
        </ul>

        <!-- CTA button at the bottom -->
        <div class="mt-auto border-t border-[#1F2937] px-6 py-6">
          <NuxtLink
            to="/#contact"
            class="flex min-h-[48px] w-full items-center justify-center rounded-[10px] text-[16px] font-semibold text-white no-underline shadow-[0_10px_25px_rgba(37,99,235,0.25)] transition duration-200 hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
            style="background: var(--accent);"
            @click="closeMenu"
          >
            Hire me
          </NuxtLink>
        </div>
      </nav>
    </Transition>
  </Teleport>
</template>
