import { useEffect, useState } from 'react'

const slides = [
  {
    image:
      'https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=1000&q=80',
    alt: 'Manicura profesional en Monroe Oficial Villaverde Alto',
    badge: 'Salón de manicura y pedicura en Villaverde Alto',
  },
  {
    image:
      'https://images.unsplash.com/photo-1519014816548-bf5fe059798b?auto=format&fit=crop&w=1000&q=80',
    alt: 'Pedicura estética en Monroe Oficial Villaverde Alto',
    badge: 'Realzamos tu belleza con elegancia',
  },
]

const WhyUs = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 3500)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="bg-[#fdf7f5] py-16">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 lg:grid-cols-2">
        <div className="relative">
          <span className="absolute -left-10 top-0 hidden rotate-180 text-xs font-bold uppercase tracking-[0.4em] text-[#d8a3a8] lg:block [writing-mode:vertical-rl]">
            Monroe Oficial
          </span>

          <div className="max-w-xl">
            <span className="inline-block rounded-full bg-[#d8a3a8] px-5 py-2 text-sm font-bold text-white">
              Nuestro valor
            </span>

            <h2 className="mt-5 text-4xl font-extrabold leading-tight text-[#b87580] sm:text-5xl">
              ¿Por qué elegir nuestro salón?
            </h2>

            <p className="mt-6 text-lg leading-9 text-neutral-700">
              En Monroe Oficial cuidamos cada detalle para que tus manos y
              pies luzcan elegantes, cuidados y sofisticados con atención
              personalizada en Villaverde Alto.
            </p>

            <div className="mt-8 space-y-6">
              <div>
                <h3 className="text-2xl font-extrabold text-[#b87580]">
                  Manicura y pedicura profesional
                </h3>
                <p className="mt-2 text-lg text-neutral-600">
                  Servicios diseñados para embellecer tus uñas y conseguir un
                  acabado impecable y duradero.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-extrabold text-[#b87580]">
                  Atención personalizada
                </h3>
                <p className="mt-2 text-lg text-neutral-600">
                  Te asesoramos para encontrar el estilo que mejor refleje tu
                  personalidad.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-extrabold text-[#b87580]">
                  Ambiente exclusivo
                </h3>
                <p className="mt-2 text-lg text-neutral-600">
                  Un espacio elegante, cuidado y pensado para que disfrutes de
                  tu momento de belleza.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-extrabold text-[#b87580]">
                  Elegancia en cada detalle
                </h3>
                <p className="mt-2 text-lg text-neutral-600">
                  Trabajamos con precisión y dedicación para realzar tu belleza
                  natural.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="relative overflow-hidden rounded-[32px] shadow-[0_20px_60px_rgba(216,163,168,0.20)]">
            <div className="relative h-[500px] w-full">
              {slides.map((slide, index) => (
                <img
                  key={index}
                  src={slide.image}
                  alt={slide.alt}
                  className={`absolute inset-0 h-full w-full object-cover transition-all duration-1000 ${
                    currentSlide === index
                      ? 'scale-100 opacity-100'
                      : 'scale-105 opacity-0'
                  }`}
                />
              ))}

              <div className="absolute inset-0 bg-[#8b6f68]/20"></div>

              <div className="absolute left-6 top-6 z-10 max-w-sm rounded-2xl bg-white/95 px-5 py-4 shadow-lg backdrop-blur-sm">
                <p className="text-base font-bold leading-7 text-[#b87580]">
                  {slides[currentSlide].badge}
                </p>
              </div>
            </div>
          </div>

          <div className="absolute -bottom-6 -left-6 h-28 w-28 rounded-[28px] bg-[#d8a3a8]"></div>

          <div className="mt-6 flex items-center justify-center gap-3">
            {slides.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setCurrentSlide(index)}
                className={`h-3 w-3 rounded-full transition ${
                  currentSlide === index ? 'bg-[#d8a3a8]' : 'bg-black/20'
                }`}
                aria-label={`Ir a imagen ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyUs