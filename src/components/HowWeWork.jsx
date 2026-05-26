import {
  FaHandSparkles,
  FaSpa,
  FaPaintBrush,
  FaHeart,
} from 'react-icons/fa'

const features = [
  {
    icon: <FaHandSparkles />,
    title: 'Manicura profesional',
    text: 'Realzamos la belleza de tus manos con acabados elegantes, precisos y duraderos.',
  },
  {
    icon: <FaSpa />,
    title: 'Pedicura y bienestar',
    text: 'Tratamientos diseñados para embellecer tus pies y ofrecerte una sensación de relajación total.',
  },
  {
    icon: <FaPaintBrush />,
    title: 'Diseños personalizados',
    text: 'Creamos estilos únicos y exclusivos que reflejan tu personalidad en cada detalle.',
  },
  {
    icon: <FaHeart />,
    title: 'Atención exclusiva',
    text: 'Te ofrecemos una experiencia cercana, profesional y cuidada para que te sientas especial.',
  },
]

const HowWeWork = () => {
  return (
    <section className="bg-[#fdf7f5] py-24">
      <div className="mx-auto max-w-7xl px-4">
        
        {/* Título */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-extrabold text-[#b87580] sm:text-4xl">
            ¿Cómo trabajamos?
          </h2>

          <p className="mt-4 text-neutral-600">
            En Monroe Oficial cuidamos cada detalle para ofrecerte una experiencia
            de belleza elegante, personalizada y profesional
          </p>
        </div>

        {/* Caja principal */}
        <div className="rounded-3xl bg-white p-8 shadow-[0_20px_60px_rgba(216,163,168,0.12)] md:p-12">
          <div className="grid gap-10 md:grid-cols-2">
            
            {features.map((item, index) => (
              <div key={index} className="flex gap-5">
                
                {/* Icono */}
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#d8a3a8] text-xl text-white">
                  {item.icon}
                </div>

                {/* Texto */}
                <div>
                  <h3 className="text-lg font-extrabold text-[#b87580]">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-neutral-700">
                    {item.text}
                  </p>
                </div>

              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

export default HowWeWork