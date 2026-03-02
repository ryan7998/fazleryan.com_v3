import { ref, computed } from 'vue'

/**
 * Reusable mouse-follow tilt and glow for interactive panels/banners.
 * Tracks cursor over a container and exposes CSS variables for 3D tilt and a glow position.
 */
export function useMouseTilt(options?: {
  /** Tilt intensity in degrees (default 4) */
  tiltAmount?: number
  /** Prefix for CSS variables: --{prefix}-tilt-x, --{prefix}-tilt-y, --{prefix}-glow-x, --{prefix}-glow-y (default 'tilt') */
  cssPrefix?: string
}) {
  const tiltAmount = options?.tiltAmount ?? 4
  const cssPrefix = options?.cssPrefix ?? 'tilt'

  const tiltX = ref(0)
  const tiltY = ref(0)
  const glowX = ref(50)
  const glowY = ref(40)
  const containerRef = ref<HTMLElement | null>(null)

  function onMouseMove(event: MouseEvent) {
    if (!containerRef.value) return
    const rect = containerRef.value.getBoundingClientRect()
    const x = (event.clientX - rect.left) / rect.width - 0.5
    const y = (event.clientY - rect.top) / rect.height - 0.5

    tiltX.value = -(y * tiltAmount)
    tiltY.value = x * tiltAmount
    glowX.value = (x + 0.5) * 100
    glowY.value = (y + 0.5) * 100
  }

  function onMouseLeave() {
    tiltX.value = 0
    tiltY.value = 0
    glowX.value = 50
    glowY.value = 40
  }

  const style = computed(() => ({
    [`--${cssPrefix}-tilt-x`]: `${tiltX.value}deg`,
    [`--${cssPrefix}-tilt-y`]: `${tiltY.value}deg`,
    [`--${cssPrefix}-glow-x`]: `${glowX.value}%`,
    [`--${cssPrefix}-glow-y`]: `${glowY.value}%`,
  }))

  return {
    containerRef,
    tiltX,
    tiltY,
    glowX,
    glowY,
    onMouseMove,
    onMouseLeave,
    style,
  }
}
