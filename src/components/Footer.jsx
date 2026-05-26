import { FaFacebookF, FaInstagram } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-[#8b6f68] text-white">
      <div className="mx-auto max-w-7xl px-4 py-14">
        <div className="grid gap-12 md:grid-cols-2 md:items-start">
          
          {/* Info */}
          <div>
            <div className="mb-6 leading-tight">
              <span className="block text-2xl font-extrabold text-white">
                MONROE OFICIAL
              </span>

              <span className="block text-[#f4d8dc] text-lg font-semibold">
                Manicura y pedicura en Villaverde Alto
              </span>
            </div>

            <p className="max-w-2xl text-lg leading-relaxed text-white/90">
              Centro de belleza especializado en manicura, pedicura y cuidado
              estético. Trabajamos para realzar tu belleza con atención
              personalizada, profesional y elegante.
            </p>

            <div className="mt-8 flex items-center gap-5">
              <a
                href="#"
                aria-label="Facebook"
                className="text-2xl text-[#f4d8dc] transition hover:text-white"
              >
                <FaFacebookF />
              </a>

              <a
                href="https://www.instagram.com/monroeofficial____/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-2xl text-[#f4d8dc] transition hover:text-white"
              >
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* Contacto */}
          <div className="text-left md:text-right">
            <h3 className="text-3xl font-bold text-[#f4d8dc]">
              Contacto
            </h3>

            <div className="mt-6 space-y-4 text-lg leading-relaxed">
              <p>
                C/ de Ntra. Sra. de Begoña, 17<br />
                Villaverde, 28021 Madrid
              </p>

              <p>
                <a
                  href="tel:641553656"
                  className="whitespace-nowrap font-bold text-white transition hover:text-[#f4d8dc]"
                >
                  641 553 656
                </a>
              </p>

              <p>
                <a
                  href="https://www.instagram.com/monroeofficial____/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#f4d8dc] transition hover:text-white"
                >
                  @monroeofficial____
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 flex flex-col items-center justify-center gap-4 text-center">
          <p className="text-lg text-white/90">
            ¿Quieres reservar tu cita?
          </p>

          <Link
            to="/#contacto"
            className="rounded-xl bg-[#d8a3a8] px-8 py-3 text-lg font-bold text-white transition hover:bg-[#c98f96]"
          >
            Solicitar cita
          </Link>
        </div>

        {/* Footer bottom */}
        <div className="mt-12 border-t border-white/15 pt-8 text-center">
          <p className="text-base text-white/80">
            © 2026 Monroe Oficial. Todos los derechos reservados.
          </p>

          <div className="mt-5 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-[#f4d8dc]">
            <Link to="/legal" className="transition hover:text-white">
              Aviso legal · Privacidad · Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer