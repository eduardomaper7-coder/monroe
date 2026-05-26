const treatments = [
  {
    name: 'Manicura clásica',
    image:
      'https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Manicura semipermanente',
    image:
      'https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Pedicura estética',
    image:
      'https://images.unsplash.com/photo-1519014816548-bf5fe059798b?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Pedicura completa',
    image:
      'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Diseño de uñas',
    image:
      'https://images.unsplash.com/photo-1599206676335-193c82b13c9e?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Uñas acrílicas',
    image:
      'https://images.unsplash.com/photo-1610992015732-2449b76344bc?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Uñas de gel',
    image:
      'https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Retirada de esmalte',
    image:
      'https://images.unsplash.com/photo-1610992015732-2449b76344bc?auto=format&fit=crop&w=800&q=80',
    note: 'Cuidado delicado de la uña natural',
  },
  {
    name: 'Decoración personalizada',
    image:
      'https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=800&q=80',
    note: 'Nail art y acabados exclusivos',
  },
]

const AllTreatments = () => {
  return (
    <main className="bg-[#fdf7f5] pt-32 pb-20">
      <section className="mx-auto max-w-7xl px-4">
        <div className="mx-auto mb-12 max-w-4xl text-center">
          <span className="inline-flex rounded-full bg-[#d8a3a8] px-5 py-2 text-sm font-bold text-white">
            Manicura y pedicura en Villaverde Alto
          </span>

          <h1 className="mt-6 text-4xl font-extrabold leading-tight text-[#b87580] sm:text-5xl">
            Servicios de belleza
          </h1>

          <p className="mt-5 text-lg leading-8 text-neutral-700">
            Descubre nuestros servicios más exclusivos. Para una atención
            personalizada, contacta con Monroe Oficial y reserva tu cita.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {treatments.map((treatment, index) => (
            <article
              key={index}
              className="overflow-hidden rounded-3xl bg-white shadow-[0_10px_30px_rgba(216,163,168,0.14)] transition hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(216,163,168,0.20)]"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={treatment.image}
                  alt={`${treatment.name} en Villaverde Alto - Monroe Oficial`}
                  className="h-full w-full object-cover transition duration-500 hover:scale-105"
                  loading="lazy"
                />
              </div>

              <div className="p-6">
                <div>
                  <h2 className="text-2xl font-extrabold text-[#b87580]">
                    {treatment.name}
                  </h2>

                  {treatment.note && (
                    <p className="mt-1 text-sm font-semibold text-neutral-500">
                      {treatment.note}
                    </p>
                  )}
                </div>

                <a
                  href="/#contacto"
                  className="mt-6 inline-flex font-bold text-[#d8a3a8] transition hover:text-[#b87580]"
                >
                  Más información →
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="mx-auto mt-14 max-w-5xl rounded-3xl bg-white px-8 py-10 text-center shadow-[0_10px_30px_rgba(216,163,168,0.14)]">
          <h2 className="text-3xl font-extrabold text-[#b87580]">
            ¿Buscas otro servicio?
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-neutral-700">
            Si necesitas un servicio adicional que no aparece aquí,
            consúltanos sin compromiso. Estaremos encantadas de atenderte
            personalmente o llamando al{' '}
            <a
              href="tel:641553656"
              className="inline-block whitespace-nowrap font-extrabold text-[#d8a3a8] hover:underline"
            >
              641 553 656
            </a>
            .
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="/#contacto"
              className="rounded-xl bg-[#d8a3a8] px-8 py-4 text-lg font-bold text-white shadow-lg transition hover:bg-[#c98f96]"
            >
              Más información
            </a>

            <a
              href="tel:641553656"
              className="rounded-xl border-2 border-[#d8a3a8] px-8 py-4 text-lg font-bold text-[#d8a3a8] transition hover:bg-[#d8a3a8] hover:text-white"
            >
              Llamar ahora
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}

export default AllTreatments