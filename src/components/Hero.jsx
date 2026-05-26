const Hero = () => {
  const whatsappNumber = '34641553656'
  const whatsappMessage = encodeURIComponent(
    'Hola, quiero pedir cita en Monroe Oficial.'
  )
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`

  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768

  return (
    <section
      id="inicio"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
      style={{
        backgroundImage: "url('/hero-manicura-pedicura-getafe.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: isMobile ? 'scroll' : 'fixed',
      }}
    >
      {/* Overlay rosa beige */}
      <div className="absolute inset-0 bg-[#d8a3a8]/35"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-[#f7eee9]/35 via-[#d8a3a8]/35 to-[#8b6f68]/75"></div>

      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center px-4 pb-12 pt-24 text-center sm:pb-16 sm:pt-28">
        <div className="mb-4 flex flex-col items-center sm:mb-6">
          <span className="text-lg font-light tracking-widest text-white/90 sm:text-2xl">
            SALÓN DE MANICURA Y PEDICURA EN VILLAVERDE ALTO
          </span>

          <span className="text-2xl font-extrabold tracking-wide text-[#fff7f4] sm:text-3xl md:text-4xl">
            Monroe Oficial
          </span>
        </div>

        <h1 className="max-w-4xl text-3xl font-extrabold leading-tight text-white sm:text-5xl md:text-7xl">
          Belleza y cuidado para tus manos y pies
        </h1>

        <p className="mt-6 hidden max-w-3xl text-lg leading-9 text-white/90 sm:block sm:text-xl">
          En Monroe Oficial cuidamos cada detalle para que tus manos y pies
          luzcan perfectos. Manicura, pedicura, uñas y servicios de belleza con
          atención cercana y profesional en Villaverde Alto.
        </p>

        <div className="mt-6 flex flex-col gap-2 sm:mt-8 sm:flex-row sm:gap-3">
          <span className="rounded-full bg-[#fff7f4]/95 px-5 py-2 text-sm font-bold text-[#b87580] shadow-lg sm:px-6 sm:py-3 sm:text-base">
            Manicura y pedicura
          </span>

          <span className="rounded-full bg-[#fff7f4]/95 px-5 py-2 text-sm font-bold text-[#b87580] shadow-lg sm:px-6 sm:py-3 sm:text-base">
            Centro de belleza en Villaverde Alto
          </span>
        </div>

        <div className="mt-8 flex w-full flex-col gap-3 sm:mt-10 sm:w-auto sm:flex-row">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full items-center justify-center gap-3 rounded-xl bg-[#d8a3a8] px-6 py-4 text-base font-extrabold text-white shadow-xl transition hover:bg-[#c98f96] sm:w-auto sm:px-8 sm:text-lg"
            aria-label="Pedir cita por WhatsApp"
          >
            <img
              src="/whatsapp.png"
              alt=""
              className="h-6 w-6 sm:h-7 sm:w-7"
              aria-hidden="true"
            />
            Pedir cita por WhatsApp
          </a>

          <a
            href="tel:641553656"
            className="flex w-full items-center justify-center rounded-xl bg-[#fff7f4]/95 px-6 py-4 text-base font-extrabold text-[#b87580] shadow-xl transition hover:bg-white sm:w-auto sm:px-8 sm:text-lg whitespace-nowrap"
            aria-label="Llamar a Monroe Oficial"
          >
            Llamar ahora
          </a>
        </div>

        <a
          href="#servicios"
          className="mt-5 hidden items-center rounded-xl border border-[#fff7f4] px-8 py-4 text-lg font-semibold text-white transition hover:bg-[#fff7f4] hover:text-[#b87580] sm:inline-flex"
        >
          Ver servicios de belleza
        </a>

        <a
          href="#servicios"
          className="mt-12 hidden flex-col items-center text-base font-medium text-white sm:inline-flex"
        >
          Descubre más
          <span className="mt-2 text-2xl">⌄</span>
        </a>
      </div>

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#d8a3a8] shadow-2xl transition hover:scale-110 hover:bg-[#c98f96] sm:h-16 sm:w-16"
        aria-label="Escribir por WhatsApp"
      >
        <img
          src="/whatsapp.png"
          alt="WhatsApp"
          className="h-8 w-8 sm:h-10 sm:w-10"
        />
      </a>
    </section>
  )
}

export default Hero