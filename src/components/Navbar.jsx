const Navbar = () => {
  return (
    <>
      <div className="fixed top-0 z-50 w-full bg-[#d8a3a8] text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-center px-3 py-1 text-center text-[11px] sm:text-sm">
          <a
            href="https://www.google.com/maps/search/?api=1&query=Calle+de+Ntra.+Sra.+de+Begoña+17+Villaverde+28021+Madrid"
            target="_blank"
            rel="noopener noreferrer"
            className="truncate hover:underline"
          >
            📍 C/ de Ntra. Sra. de Begoña, 17, Villaverde, 28021 Madrid
          </a>
        </div>
      </div>

      <header className="fixed left-0 top-[24px] z-40 w-full border-b border-[#d8a3a8]/20 bg-white/95 backdrop-blur-md sm:top-[28px]">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
          
          {/* Logo */}
          <a href="#inicio" className="flex min-w-0 items-center">
            <div className="max-w-[280px] leading-tight">
              
              <span className="block text-xs font-extrabold text-[#b87580] md:hidden">
                MONROE OFICIAL
              </span>

              <span className="block text-[11px] font-semibold text-[#d8a3a8] whitespace-nowrap md:hidden">
                Belleza y cuidado para tus manos y pies
              </span>

              <span className="hidden text-sm font-extrabold text-[#b87580] md:block md:text-xl">
                MONROE OFICIAL
              </span>

              <span className="hidden text-sm font-semibold text-[#d8a3a8] whitespace-nowrap md:block">
                Belleza y cuidado para tus manos y pies
              </span>
            </div>
          </a>

          {/* Navegación */}
          <nav className="hidden items-center gap-6 md:flex">
            <a
              href="/#inicio"
              className="text-base font-semibold text-black hover:text-[#b87580]"
            >
              Inicio
            </a>

            <a
              href="/#servicios"
              className="text-base font-semibold text-black hover:text-[#b87580]"
            >
              Servicios
            </a>

            <a
              href="/#tarifas"
              className="text-base font-semibold text-black hover:text-[#b87580]"
            >
              Precios
            </a>

            <a
              href="/#contacto"
              className="text-base font-semibold text-black hover:text-[#b87580]"
            >
              Contacto
            </a>
          </nav>

          {/* Botón teléfono */}
          <a
            href="tel:641553656"
            className="whitespace-nowrap rounded-lg bg-[#d8a3a8] px-3 py-2 text-xs font-bold text-white transition hover:bg-[#c98f96] md:px-5 md:py-2.5 md:text-sm"
          >
            📞 <span className="hidden md:inline">Llama al</span> 641 553 656
          </a>
        </div>
      </header>
    </>
  )
}

export default Navbar