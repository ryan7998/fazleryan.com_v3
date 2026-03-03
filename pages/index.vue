<script setup>
import { ref, onMounted, onUnmounted } from 'vue'


// Global cursor glow — a large soft radial gradient that follows the mouse
// across the whole page, giving sections a "lit" feeling.
const glowX = ref(0)
const glowY = ref(0)
const glowActive = ref(false)

function onMouseMove(e) {
  glowX.value = e.clientX
  glowY.value = e.clientY
  glowActive.value = true
}

onMounted(() => window.addEventListener('mousemove', onMouseMove))
onUnmounted(() => window.removeEventListener('mousemove', onMouseMove))
</script>

<template>
  <div>
    <!-- Soft cursor glow that follows the mouse across all body sections -->
    <div
      v-show="glowActive"
      class="pointer-events-none fixed inset-0 z-[1]"
      :style="{
        background: `radial-gradient(circle 650px at ${glowX}px ${glowY}px, rgba(129,140,248,0.07), transparent 70%)`,
      }"
      aria-hidden="true"
    />
    <TheHero />
    <ProductSection />
    <AboutMeSection />
  </div>
</template>
