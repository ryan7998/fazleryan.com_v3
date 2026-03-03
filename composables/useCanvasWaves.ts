import { ref, onMounted, onUnmounted } from 'vue'

export interface WaveConfig {
  /** Vertical height of the sine oscillation in px */
  amp?: number
  /** Horizontal frequency of the wave */
  freq?: number
  /** How fast the phase advances per frame */
  speed?: number
  /** Starting phase offset (radians) — staggers waves so they don't all peak together */
  phase?: number
  /** 0–1: vertical position in the canvas where the wave baseline sits */
  yRatio?: number
  color: string
}

export interface OrbConfig {
  count?: number
  /** Array of HSL hue values to pick from randomly */
  hues?: number[]
  minR?: number
  maxR?: number
  minOpacity?: number
  maxOpacity?: number
  /** Max absolute speed in px/frame */
  maxSpeed?: number
}

export interface UseCanvasWavesOptions {
  waves?: WaveConfig[]
  orbs?: OrbConfig
}

export function useCanvasWaves(options: UseCanvasWavesOptions = {}) {
  const canvasRef = ref<HTMLCanvasElement | null>(null)
  let animationId: number | null = null
  let resizeCleanup: (() => void) | null = null

  onMounted(() => {
    const canvas = canvasRef.value
    if (!canvas) return
    const ctx = canvas.getContext('2d')!

    function resize() {
      const el = canvasRef.value
      if (!el) return
      el.width = el.offsetWidth
      el.height = el.offsetHeight
    }
    resize()
    window.addEventListener('resize', resize)
    resizeCleanup = () => window.removeEventListener('resize', resize)

    // --- Orbs ---
    const orbCfg = options.orbs ?? {}
    const orbCount    = orbCfg.count      ?? 14
    const orbHues     = orbCfg.hues       ?? [245, 260, 280, 210]
    const orbMinR     = orbCfg.minR       ?? 25
    const orbMaxR     = orbCfg.maxR       ?? 80
    const orbMinOp    = orbCfg.minOpacity ?? 0.05
    const orbMaxOp    = orbCfg.maxOpacity ?? 0.18
    const orbSpeed    = orbCfg.maxSpeed   ?? 0.35

    const orbs = Array.from({ length: orbCount }, () => ({
      x:       Math.random() * canvas.width,
      y:       Math.random() * canvas.height,
      r:       Math.random() * (orbMaxR - orbMinR) + orbMinR,
      vx:      (Math.random() - 0.5) * orbSpeed * 2,
      vy:      (Math.random() - 0.5) * orbSpeed * 2,
      opacity: Math.random() * (orbMaxOp - orbMinOp) + orbMinOp,
      hue:     orbHues[Math.floor(Math.random() * orbHues.length)]!,
    }))

    // --- Waves ---
    type ResolvedWave = Required<WaveConfig>
    const waveCfgs: ResolvedWave[] = (options.waves ?? []).map(w => ({
      amp:    w.amp    ?? 25,
      freq:   w.freq   ?? 0.010,
      speed:  w.speed  ?? 0.020,
      phase:  w.phase  ?? 0,
      yRatio: w.yRatio ?? 0.5,
      color:  w.color,
    }))

    // --- Animation loop ---
    function draw() {
      const W = canvas.width
      const H = canvas.height
      ctx.clearRect(0, 0, W, H)

      // Orbs
      for (const o of orbs) {
        o.x += o.vx
        o.y += o.vy
        if (o.x < -o.r)    o.x = W + o.r
        if (o.x > W + o.r) o.x = -o.r
        if (o.y < -o.r)    o.y = H + o.r
        if (o.y > H + o.r) o.y = -o.r

        const g = ctx.createRadialGradient(o.x, o.y, 0, o.x, o.y, o.r)
        g.addColorStop(0, `hsla(${o.hue}, 85%, 68%, ${o.opacity})`)
        g.addColorStop(1, `hsla(${o.hue}, 85%, 68%, 0)`)
        ctx.beginPath()
        ctx.arc(o.x, o.y, o.r, 0, Math.PI * 2)
        ctx.fillStyle = g
        ctx.fill()
      }

      // Waves (filled from baseline down to canvas bottom)
      for (const w of waveCfgs) {
        w.phase += w.speed
        const baseY = H * w.yRatio
        ctx.beginPath()
        ctx.moveTo(0, H)
        for (let x = 0; x <= W; x += 3) {
          ctx.lineTo(x, baseY + Math.sin(x * w.freq + w.phase) * w.amp)
        }
        ctx.lineTo(W, H)
        ctx.closePath()
        ctx.fillStyle = w.color
        ctx.fill()
      }

      animationId = requestAnimationFrame(draw)
    }

    draw()
  })

  onUnmounted(() => {
    if (animationId !== null) cancelAnimationFrame(animationId)
    resizeCleanup?.()
  })

  return { canvasRef }
}
