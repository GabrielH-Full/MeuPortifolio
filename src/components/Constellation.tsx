import { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import brainSamples from '../assets/brain-particles.json'

export default function Constellation() {
  const ref = useRef<HTMLCanvasElement>(null)
  const anchorRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const canvas = ref.current
    const anchor = anchorRef.current
    if (!canvas || !anchor) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let seed = 42
    const random = () => { seed = (seed * 16807) % 2147483647; return seed / 2147483647 }
    const particles = brainSamples.map(([sx, sy, r, g, b, light]) => {
      const x = (sx - 250) / 225
      const y = (sy - 225) / 225
      const depth = Math.sqrt(Math.max(0, 1 - (x / 1.04) ** 2 - ((y + .17) / .78) ** 2))
      const ambient = sy < 25 || (sx < 55 && sy < 100) || (sy > 365 && (sx < 210 || sx > 330))
      return {
        x, y, z: depth * .3,
        color: 'rgb(' + r + ',' + g + ',' + b + ')',
        opacity: ambient ? .25 : .28 + light / 255 * .62,
        size: ambient ? 2 + random() * 2 : 1.15 + light / 255 * .8 + random() * .45,
        phase: random() * Math.PI * 2,
        speed: (random() - .5) * .6,
        scatterX: (random() - .5) * 3.6,
        scatterY: (random() - .5) * 2.8,
        screenX: random(), screenY: random(),
        ambient,
      }
    })
    let width = 0, height = 0, frame = 0, elapsed = 0, lastTime = 0
    let targetScroll = window.scrollY, smoothScroll = window.scrollY
    let originX = 0, originY = 0, artWidth = 0, artHeight = 0
    let heroTop = 0, heroHeight = 1
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)')
    const hero = anchor.closest('section')
    const clamp = (value: number) => Math.min(1, Math.max(0, value))
    const easeOut = (value: number) => 1 - (1 - value) ** 3

    const draw = () => {
      ctx.clearRect(0, 0, width, height)
      if (!width || !height) return
      const time = reduced.matches ? 0 : elapsed / 1000
      const arrival = reduced.matches ? 1 : easeOut(clamp(elapsed / 1000))
      const progress = reduced.matches ? 0 : clamp((smoothScroll - heroTop) / (heroHeight * .65))
      const dispersion = progress * progress * (3 - 2 * progress)
      const scale = Math.min(artWidth / 2.35, artHeight / 2.15)
      const turn = reduced.matches ? 0 : Math.sin(time * .22) * .055
      const cosTurn = Math.cos(turn), sinTurn = Math.sin(turn)
      const centerY = originY - smoothScroll
      for (const p of particles) {
        const breathing = reduced.matches ? 0 : Math.sin(time * .7 + p.y * 4) * .004
        const driftX = reduced.matches ? 0 : Math.sin(time * .45 + p.phase) * (p.ambient ? .028 : .003)
        const driftY = reduced.matches ? 0 : Math.cos(time * .38 + p.phase) * (p.ambient ? .035 : .003)
        const scatter = (1 - arrival) * .55
        const x = (p.x * cosTurn + p.z * sinTurn) * (1 + breathing) + driftX + p.scatterX * scatter
        const y = p.y * (1 + breathing) + driftY + p.scatterY * scatter
        const brainX = originX + x * scale
        const brainY = centerY + y * scale
        // Shared flowing waves keep nearby particles moving coherently, while
        // independent phases add gentle variation. Targets cover the viewport.
        const flowX = Math.sin(time * .24 + p.screenY * 6.28) * 22 + Math.sin(time * .4 + p.phase) * 7
        const flowY = Math.cos(time * .2 + p.screenX * 6.28) * 20 + Math.cos(time * .36 + p.phase) * 7
        const screenX = 12 + p.screenX * Math.max(0, width - 24) + flowX
        const screenY = 12 + p.screenY * Math.max(0, height - 24) + flowY
        const arc = Math.sin(dispersion * Math.PI) * Math.sin(p.phase) * 65
        const px = brainX + (screenX - brainX) * dispersion + arc
        const py = brainY + (screenY - brainY) * dispersion - arc * .45
        const size = p.size * Math.min(1.2, Math.max(.62, artWidth / 540))
        const rotation = p.phase + time * p.speed
        const shimmer = reduced.matches ? 1 : .9 + .1 * Math.sin(time * 1.1 + p.phase)
        ctx.strokeStyle = p.color
        ctx.globalAlpha = p.opacity * shimmer * (.3 + arrival * .7) * (1 - dispersion * .62)
        ctx.lineWidth = p.ambient ? .8 : .72
        ctx.beginPath()
        for (let corner = 0; corner < 3; corner++) {
          const angle = rotation + corner * Math.PI * 2 / 3
          const tx = px + Math.cos(angle) * size
          const ty = py + Math.sin(angle) * size
          if (corner === 0) ctx.moveTo(tx, ty)
          else ctx.lineTo(tx, ty)
        }
        ctx.closePath()
        ctx.stroke()
      }
    }
    const tick = (now: number) => {
      frame = 0
      if (document.hidden || reduced.matches) return
      const delta = lastTime ? Math.min(now - lastTime, 50) : 16.67
      elapsed += delta
      lastTime = now
      // Exponential damping makes wheel, touch and anchor jumps continuous and
      // independent of refresh rate, in both scroll directions.
      smoothScroll += (targetScroll - smoothScroll) * (1 - Math.exp(-delta / 140))
      draw()
      frame = requestAnimationFrame(tick)
    }
    const syncAnimation = () => {
      cancelAnimationFrame(frame)
      frame = 0
      lastTime = 0
      if (reduced.matches) { smoothScroll = targetScroll; draw(); return }
      if (!document.hidden) frame = requestAnimationFrame(tick)
    }
    const updateScroll = () => {
      targetScroll = window.scrollY
      if (reduced.matches) { smoothScroll = targetScroll; draw() }
    }
    const measure = () => {
      const viewport = canvas.getBoundingClientRect()
      const rect = anchor.getBoundingClientRect()
      width = viewport.width
      height = viewport.height
      artWidth = rect.width
      artHeight = rect.height
      originX = rect.left + rect.width / 2
      originY = rect.top + window.scrollY + rect.height / 2
      if (hero) {
        const heroRect = hero.getBoundingClientRect()
        heroTop = heroRect.top + window.scrollY
        heroHeight = heroRect.height
      }
      const ratio = Math.min(window.devicePixelRatio || 1, 2)
      canvas.width = Math.round(width * ratio)
      canvas.height = Math.round(height * ratio)
      ctx.setTransform(ratio, 0, 0, ratio, 0, 0)
      updateScroll()
      draw()
    }
    const resize = new ResizeObserver(measure)
    resize.observe(canvas)
    resize.observe(anchor)
    if (hero) resize.observe(hero)
    reduced.addEventListener('change', syncAnimation)
    document.addEventListener('visibilitychange', syncAnimation)
    window.addEventListener('scroll', updateScroll, { passive: true })
    window.addEventListener('resize', measure)
    measure()
    syncAnimation()
    return () => {
      cancelAnimationFrame(frame)
      resize.disconnect()
      reduced.removeEventListener('change', syncAnimation)
      document.removeEventListener('visibilitychange', syncAnimation)
      window.removeEventListener('scroll', updateScroll)
      window.removeEventListener('resize', measure)
    }
  }, [])
  return <><div ref={anchorRef} className="constellation-anchor" aria-hidden="true" />{createPortal(<canvas ref={ref} className="constellation" aria-hidden="true" />, document.body)}</>
}
