import { Link } from 'react-router-dom'

const services = [
  {
    title: 'Manicura profesional',
    description:
      'Cuidado completo de tus manos y uñas con acabado elegante, limpio y duradero.',
    image:
      'https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Pedicura estética',
    description:
      'Tratamiento especializado para embellecer y cuidar tus pies con máxima suavidad y bienestar.',
    image:
      'https://images.unsplash.com/photo-1519014816548-bf5fe059798b?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Uñas semipermanentes',
    description:
      'Color intenso, brillo impecable y resistencia para lucir unas uñas perfectas durante semanas.',
    image:
      'https://images.unsplash.com/photo-1599206676335-193c82b13c9e?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Diseño de uñas',
    description:
      'Diseños personalizados, acabados modernos y detalles exclusivos para resaltar tu esencia.',
    image:
      'https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&w=900&q=80',
  },
]

const Treatments = () => {
  return (
    <section id="servicios" className="scroll-mt-28 bg-[#fdf7f5] py-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-16 text-center">
          <span className="text-sm font-bold uppercase tracking-[0.25em] text-[#d8a3a8]">
            Servicios destacados
          </span>

          <h2 className="mt-3 text-3xl font-extrabold text-[#b87580] sm:text-4xl">
            Manicura y pedicura en Villaverde Alto
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-lg text-neutral-600 sm:text-xl">
            En Monroe Oficial trabajamos para resaltar tu belleza con servicios
            de manicura, pedicura y cuidado estético en un ambiente elegante,
            cercano y profesional.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col overflow-hidden rounded-2xl bg-white shadow-[0_10px_30px_rgba(216,163,168,0.15)] transition hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(216,163,168,0.25)] sm:flex-row"
            >
              <div className="h-56 w-full sm:h-auto sm:w-[40%]">
                <img
                  src={service.image}
                  alt={`${service.title} en Villaverde Alto - Monroe Oficial`}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>

              <div className="flex w-full flex-col justify-between p-6 sm:w-[60%]">
                <div>
                  <h3 className="text-xl font-extrabold text-[#b87580] sm:text-2xl">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-base leading-8 text-neutral-600 sm:text-lg">
                    {service.description}
                  </p>
                </div>

                <div className="mt-6">
                  <Link
                    to="/tratamientos"
                    className="inline-flex items-center gap-2 text-base font-semibold text-[#d8a3a8] transition hover:text-[#b87580]"
                  >
                    Más información →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 text-center">
          <p className="text-lg font-medium text-neutral-700">
            ¿Lista para lucir unas uñas perfectas?
          </p>

          <Link
            to="/tratamientos"
            className="mt-5 inline-flex items-center rounded-xl bg-[#d8a3a8] px-8 py-4 text-lg font-bold text-white shadow-lg transition hover:bg-[#c98f96]"
          >
            Ver todos los servicios
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Treatments