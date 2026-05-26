import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
} from 'react-icons/fa'

const ContactSection = () => {
  return (
    <section id="contacto" className="scroll-mt-28 bg-[#fdf7f5] py-24">
      <div className="mx-auto max-w-4xl px-4">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <h2 className="text-3xl font-extrabold text-[#b87580] sm:text-4xl">
            Contacto
          </h2>

          <p className="mt-4 text-lg leading-8 text-neutral-600">
            Estamos aquí para ayudarte. Contacta con Monroe Oficial para
            reservar tu cita de manicura, pedicura o belleza.
          </p>
        </div>

        <div className="space-y-5">
          
          {/* Dirección */}
          <div className="flex gap-5 rounded-xl bg-white px-6 py-6 shadow-[0_10px_30px_rgba(216,163,168,0.12)]">
            <div className="pt-1 text-xl text-[#d8a3a8]">
              <FaMapMarkerAlt />
            </div>

            <div>
              <h3 className="text-xl font-bold text-[#b87580]">
                Dirección
              </h3>

              <p className="mt-2 text-lg text-neutral-600">
                C/ de Ntra. Sra. de Begoña, 17, Villaverde, 28021 Madrid
              </p>
            </div>
          </div>

          {/* Teléfono */}
          <div className="flex gap-5 rounded-xl bg-white px-6 py-6 shadow-[0_10px_30px_rgba(216,163,168,0.12)]">
            <div className="pt-1 text-xl text-[#d8a3a8]">
              <FaPhoneAlt />
            </div>

            <div>
              <h3 className="text-xl font-bold text-[#b87580]">
                Teléfono
              </h3>

              <a
                href="tel:641553656"
                className="mt-2 block whitespace-nowrap text-lg text-neutral-600 transition hover:text-[#d8a3a8]"
              >
                641 553 656
              </a>
            </div>
          </div>

          {/* Email */}
          <div className="flex gap-5 rounded-xl bg-white px-6 py-6 shadow-[0_10px_30px_rgba(216,163,168,0.12)]">
            <div className="pt-1 text-xl text-[#d8a3a8]">
              <FaEnvelope />
            </div>

            <div>
              <h3 className="text-xl font-bold text-[#b87580]">
                Email
              </h3>

              <a
                href="mailto:info@monroeoficial.com"
                className="mt-2 block text-lg text-neutral-600 transition hover:text-[#d8a3a8]"
              >
                info@monroeoficial.com
              </a>
            </div>
          </div>

          {/* Horario */}
          <div className="flex gap-4 rounded-xl bg-white px-4 py-6 shadow-[0_10px_30px_rgba(216,163,168,0.12)] sm:gap-5 sm:px-6">
            <div className="pt-1 text-xl text-[#d8a3a8]">
              <FaClock />
            </div>

            <div className="w-full min-w-0">
              <h3 className="text-xl font-bold text-[#b87580]">
                Horario
              </h3>

              <div className="mt-4 space-y-4 text-base text-neutral-700 sm:text-lg">
                {[
                  ['Lunes', '10:30–20:00'],
                  ['Martes', '10:30–20:00'],
                  ['Miércoles', '10:30–20:00'],
                  ['Jueves', '10:30–20:00'],
                  ['Viernes', '10:30–20:00'],
                  ['Sábado', '10:30–20:00'],
                  ['Domingo', '10:30–20:00'],
                ].map(([day, hours]) => (
                  <div
                    key={day}
                    className="flex flex-col border-b border-[#f4e3df] pb-3 last:border-b-0 last:pb-0 sm:flex-row sm:items-center sm:justify-between sm:gap-6"
                  >
                    <span className="font-semibold text-[#b87580]">
                      {day}
                    </span>

                    <span className="mt-1 leading-7 text-neutral-700 sm:mt-0 sm:text-right">
                      {hours}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default ContactSection