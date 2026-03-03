import { ref, onMounted, onUnmounted } from 'vue'

/**
 * Observes an element and sets `revealed` to true once it enters the viewport.
 * Disconnects after first reveal (fires once).
 */
export function useScrollReveal(options: {
  threshold?: number
  rootMargin?: string
} = {}) {
  const revealRef = ref<HTMLElement | null>(null)
  const revealed = ref(false)
  let observer: IntersectionObserver | null = null

  onMounted(() => {
    if (!revealRef.value) return
    observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          revealed.value = true
          observer?.disconnect()
        }
      },
      {
        threshold: options.threshold ?? 0.1,
        rootMargin: options.rootMargin ?? '0px 0px -60px 0px',
      },
    )
    observer.observe(revealRef.value)
  })

  onUnmounted(() => observer?.disconnect())

  return { revealRef, revealed }
}
