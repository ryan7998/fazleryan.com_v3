import { ref, computed } from 'vue'

/**
 * Tracks the cursor position over a card element and returns a reactive
 * radial-gradient spotlight style that follows the mouse.
 */
export function useCardSpotlight(options: {
  size?: number
  color?: string
} = {}) {
  const cardRef = ref<HTMLElement | null>(null)
  const x = ref(0)
  const y = ref(0)
  const active = ref(false)

  const size = options.size ?? 380
  const color = options.color ?? 'rgba(129, 140, 248, 0.13)'

  function onMouseMove(e: MouseEvent) {
    if (!cardRef.value) return
    const rect = cardRef.value.getBoundingClientRect()
    x.value = e.clientX - rect.left
    y.value = e.clientY - rect.top
    active.value = true
  }

  function onMouseLeave() {
    active.value = false
  }

  const spotlightStyle = computed(() => ({
    background: active.value
      ? `radial-gradient(circle ${size}px at ${x.value}px ${y.value}px, ${color}, transparent 70%)`
      : 'transparent',
  }))

  return { cardRef, onMouseMove, onMouseLeave, spotlightStyle }
}
