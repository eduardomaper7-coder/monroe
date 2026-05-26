const FeaturedBox = () => {
  return (
    <section className="bg-[#fdf7f5] py-16 pb-12">
      <div className="mx-auto max-w-7xl px-4">
        <div className="relative overflow-hidden rounded-[28px] bg-[#f4e3df] min-h-[auto] lg:min-h-[520px]">
          
          {/* Imagen */}
          <div className="h-[260px] w-full lg:h-[520px] lg:w-[62%]">
            <img
              src="https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=1200&q=80"
              alt="Manicura y pedicura en Monroe Oficial Villaverde Alto"
              className="h-full w-full object-cover"
            />
          </div>

          {/* Caja texto */}
          <div className="relative lg:absolute lg:right-12 lg:top-1/2 lg:w-[42%] lg:-translate-y-1/2">
            <div className="m-4 rounded-[24px] bg-white p-6 shadow-[0_20px_60px_rgba(216,163,168,0.16)] sm:p-8 md:p-10">
              
              <h2 className="text-2xl font-extrabold leading-tight text-[#b87580] sm:text-4xl">
                Resalta tu esencia con una atención{' '}
                <span className="text-[#d8a3a8]">personalizada</span>
              </h2>

              <p className="mt-4 text-sm leading-7 text-neutral-600 sm:text-lg">
                En Monroe Oficial cuidamos cada detalle para que tus manos y
                pies luzcan elegantes, sofisticados y perfectamente cuidados.
                Servicios de manicura, pedicura y belleza adaptados a tu estilo.
              </p>

              <div className="mt-6">
                <a
                  href="tel:641553656"
                  className="inline-flex rounded-xl bg-[#d8a3a8] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#c98f96] sm:px-7 sm:py-4 sm:text-base"
                >
                  Pide cita llamando al 641 553 656
                </a>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturedBox