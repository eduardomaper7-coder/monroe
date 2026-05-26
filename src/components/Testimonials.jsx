const reviews = [
  {
    text: 'Me encantó el resultado de mis uñas. El trato fue muy cercano y el acabado quedó precioso. Sin duda volveré.',
    name: 'Laura M.',
    time: 'Hace 2 semanas',
  },
  {
    text: 'Muy profesionales y cuidadosas. La manicura me quedó elegante, limpia y con un diseño justo como quería.',
    name: 'Sara P.',
    time: 'Hace 1 mes',
  },
  {
    text: 'Un salón muy bonito en Villaverde Alto. Ambiente agradable, atención excelente y mucho cuidado en cada detalle.',
    name: 'Andrea G.',
    time: 'Hace 3 semanas',
  },
]

const Testimonials = () => {
  return (
    <section className="bg-[#fdf7f5] py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mx-auto mb-14 max-w-4xl text-center">
          <h2 className="text-3xl font-extrabold text-[#b87580] sm:text-4xl">
            Lo que dicen nuestras clientas
          </h2>

          <p className="mt-4 text-lg text-neutral-600 md:whitespace-nowrap">
            Experiencias reales de clientas que confían en Monroe Oficial para el cuidado de sus manos y pies.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {reviews.map((review, index) => (
            <article
              key={index}
              className="flex min-h-[300px] flex-col rounded-xl bg-white p-6 shadow-[0_8px_24px_rgba(216,163,168,0.12)] transition hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(216,163,168,0.18)] sm:min-h-[320px] sm:p-7"
            >
              <p className="flex-1 text-sm leading-7 text-neutral-700 sm:text-[15px] sm:leading-8">
                “{review.text}”
              </p>

              <div className="mt-6 sm:mt-8">
                <p className="text-lg font-bold text-[#b87580] sm:text-xl">
                  {review.name}
                </p>

                <p className="mt-1 text-sm text-neutral-500">
                  {review.time}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials