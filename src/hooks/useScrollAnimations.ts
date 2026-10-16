import { useEffect } from 'react'

export function useScrollAnimations() {
  useEffect(() => {
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)')
    const animations = new Set<Animation>()
    const elements = document.querySelectorAll<HTMLElement>(
      '.about-copy > *, .portrait-block, .section-heading > *, ' +
      '.project-row > *, .experience-layout .small-title, .skill, ' +
      '.timeline article, .contact-section > .eyebrow, .contact-layout > *, .footer',
    )
    if (!('IntersectionObserver' in window)) return

    const observer = new IntersectionObserver(entries => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue
        observer.unobserve(entry.target)
        if (motion.matches) continue

        const element = entry.target as HTMLElement
        const sideways = element.matches('.portrait-block, .project-visual')
        const animation = element.animate(
          [
            { opacity: 0, transform: sideways ? 'translateX(-24px)' : 'translateY(28px)' },
            { opacity: 1, transform: 'translate(0, 0)' },
          ],
          { duration: 850, easing: 'cubic-bezier(.22, 1, .36, 1)' },
        )
        animations.add(animation)
        animation.onfinish = () => animations.delete(animation)
      }
    }, { threshold: 0.12 })

    elements.forEach(element => observer.observe(element))
    const stopMotion = () => {
      if (motion.matches) {
        animations.forEach(animation => animation.cancel())
        animations.clear()
      }
    }
    motion.addEventListener('change', stopMotion)
    return () => {
      observer.disconnect()
      animations.forEach(animation => animation.cancel())
      motion.removeEventListener('change', stopMotion)
    }
  }, [])
}
