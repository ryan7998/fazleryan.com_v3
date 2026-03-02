import { ref, computed } from 'vue'

/**
 * Reusable mouse-follow tilt for interactive panels/banners.
 * Tracks cursor over a container and exposes CSS variables for 3D tilt.
 */
export function useMouseTilt(options?: {
  /** Tilt intensity in degrees (default 4) */
  tiltAmount?: number
  /** Prefix for CSS variables: --{prefix}-tilt-x, --{prefix}-tilt-y (default 'tilt') */
  cssPrefix?: string
}) {
  const tiltAmount = options?.tiltAmount ?? 4
  const cssPrefix = options?.cssPrefix ?? 'tilt'

  const tiltX = ref(0)
  const tiltY = ref(0)
  const containerRef = ref<HTMLElement | null>(null)

  function onMouseMove(event: MouseEvent) {
    if (!containerRef.value) return
    const rect = containerRef.value.getBoundingClientRect()
    const x = (event.clientX - rect.left) / rect.width - 0.5
    const y = (event.clientY - rect.top) / rect.height - 0.5

    tiltX.value = -(y * tiltAmount)
    tiltY.value = x * tiltAmount
  }

  function onMouseLeave() {
    tiltX.value = 0
    tiltY.value = 0
  }

  const style = computed(() => ({
    [`--${cssPrefix}-tilt-x`]: `${tiltX.value}deg`,
    [`--${cssPrefix}-tilt-y`]: `${tiltY.value}deg`,
  }))

  return {
    containerRef,
    tiltX,
    tiltY,
    onMouseMove,
    onMouseLeave,
    style,
  }
}
