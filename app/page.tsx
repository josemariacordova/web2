"use client"

import Image from "next/image"
import { useState } from "react"

export default function Home() {
  const [copied, setCopied] = useState(false)

  const handleContact = () => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)

    if (isMobile) {
      window.location.href = "mailto:contacto@republicafederaldeantioquia.org"
    } else {
      navigator.clipboard.writeText("contacto@republicafederaldeantioquia.org")
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  return (
    <>
      <div className="relative min-h-screen w-full overflow-hidden bg-white">
        <div className="absolute inset-0 w-full h-full opacity-20 bg-gradient-to-b from-red-900/20 to-yellow-600/10" />

        <header className="relative z-10 px-6 py-5">
          <div className="flex items-center justify-between">
            <button className="logo-hover transition-all">
              <Image src="/images/rob-mark.svg" alt="RAF" width={38} height={38} className="w-10 h-10" />
            </button>

            <button
              onClick={handleContact}
              className="font-alfabet font-light text-black text-[10px] md:text-xs border border-black px-5 py-1.5 hover:bg-red-600 hover:border-red-600 hover:text-white transition-colors"
              style={{ borderRadius: "4px" }}
            >
              {copied ? "COPIED!" : "CONTACTO"}
            </button>
          </div>

          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <h2 className="hidden md:block font-ivyjournal font-normal text-black text-xs md:text-sm whitespace-nowrap">
              ( MOVIMIENTO RAF )
            </h2>
          </div>
        </header>

        <div className="relative z-10 flex min-h-[calc(100vh-88px)] items-center justify-center px-6">
          <div className="text-center flex flex-col items-center">
            <div className="text-black text-base font-light mb-3">+</div>

            <div className="w-px h-20 bg-black/30 mb-6" />

            <div className="text-black text-base font-light mb-6">+</div>

            <h1 className="font-ivyjournal font-thin text-black text-3xl md:text-4xl lg:text-5xl max-w-[820px] leading-tight mb-10">
              Antioquia Libre, Soberana y Federal
              <br />
              Reivindicando nuestra historia, defendiendo nuestra identidad.
            </h1>

            <p className="font-alfabet font-light text-black text-sm md:text-base max-w-[680px] leading-relaxed mb-10">
              Bienvenido al espacio oficial del Movimiento RAF (República Federal de Antioquia). Somos un movimiento
              ciudadano e independentista comprometido con la recuperación de la autonomía, soberanía e identidad
              histórica del pueblo antioqueño.
            </p>

            <div className="text-black text-base font-light mb-3">+</div>

            <div className="w-px h-20 bg-black/30" />

            <div className="text-black text-base font-light mt-3">+</div>
          </div>
        </div>
      </div>

      {/* NUESTRA HISTORIA */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-center mb-16">
            <div className="font-alfabet font-normal text-black text-[10px] md:text-xs border border-black px-5 py-1.5 rounded-full uppercase">
              2. Nuestra Historia
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            <h3 className="font-ivyjournal italic font-normal text-black text-3xl md:text-4xl mb-8 text-center">
              El Camino a la Soberanía
            </h3>
            <p className="font-alfabet font-light text-black text-sm md:text-base leading-relaxed mb-10 text-center">
              Para comprender nuestro presente, debemos recordar los hitos que moldearon la identidad de nuestra tierra:
            </p>

            <div className="space-y-6">
              <div className="border-l-2 border-red-600 pl-6">
                <h4 className="font-alfabet font-normal text-black text-sm md:text-base mb-1">1781 – La Rebelión de los Comuneros</h4>
                <p className="font-alfabet font-light text-black text-sm md:text-base leading-relaxed">
                  El primer gran grito de libertad contra los abusos y los altos impuestos del gobierno colonial.
                  Municipios como Guarne se convirtieron en cuna de resistencia e inspiración para las futuras generaciones.
                </p>
              </div>

              <div className="border-l-2 border-red-600 pl-6">
                <h4 className="font-alfabet font-normal text-black text-sm md:text-base mb-1">1584 - 1826 – Santa Fe de Antioquia</h4>
                <p className="font-alfabet font-light text-black text-sm md:text-base leading-relaxed">
                  La «Ciudad Madre», primera capital y centro administrativo, político y cultural que sentó las bases de nuestra región.
                </p>
              </div>

              <div className="border-l-2 border-red-600 pl-6">
                <h4 className="font-alfabet font-normal text-black text-sm md:text-base mb-1">1811 - 1813 – Antioquia República Independiente</h4>
                <p className="font-alfabet font-light text-black text-sm md:text-base leading-relaxed">
                  El 11 de agosto de 1810 se instaló el Primer Congreso, el 21 de marzo de 1811 se declaró la independencia total y en 1812 se promulgó la Constitución de Antioquia. Bajo el liderazgo de Juan del Corral (1813), Antioquia actuó como un Estado soberano con gobierno y leyes propias.
                </p>
              </div>

              <div className="border-l-2 border-red-600 pl-6">
                <h4 className="font-alfabet font-normal text-black text-sm md:text-base mb-1">1820 – El Legado de José María Córdova</h4>
                <p className="font-alfabet font-light text-black text-sm md:text-base leading-relaxed">
                  Héroe de la independencia y defensor indiscutible de la libertad antioqueña, quien combatió por la autonomía e integridad de nuestro pueblo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VERDAD HISTÓRICA - LIBRO BLANCO */}
      <section className="bg-[#f8f8f8] py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-center mb-16">
            <div className="font-alfabet font-normal text-black text-[10px] md:text-xs border border-black px-5 py-1.5 rounded-full uppercase">
              3. La Verdad Histórica
            </div>
          </div>

          <div className="max-w-4xl mx-auto text-center">
            <h3 className="font-ivyjournal italic font-normal text-black text-3xl md:text-4xl mb-4">
              El Libro Blanco de Antioquia
            </h3>
            <p className="font-alfabet font-normal text-black text-sm md:text-base mb-8">
              La prueba documental de nuestro derecho a decidir.
            </p>
            <p className="font-alfabet font-light text-black text-sm md:text-base leading-relaxed mb-10">
              El Libro Blanco de Antioquia reúne las actas, leyes, constituciones y manifiestos que demuestran que
              Antioquia nació como una nación libre y soberana, con instituciones propias y fundamentos jurídicos sólidos.
            </p>

            <blockquote className="border-l-4 border-red-600 pl-6 py-4 italic text-lg md:text-xl font-ivyjournal text-black mb-8">
              "Antioquia no es una porción de Colombia; es un pueblo libre, que por su situación, por sus costumbres y
              por sus intereses, no puede ser gobernado por leyes que se dicten a 600 leguas de distancia."
              <div className="mt-4 text-sm not-italic font-alfabet">— El Libro Blanco de Antioquia</div>
            </blockquote>
          </div>
        </div>
      </section>

      {/* PROYECTOS ACTUALES - CRRA */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-center mb-16">
            <div className="font-alfabet font-normal text-black text-[10px] md:text-xs border border-black px-5 py-1.5 rounded-full uppercase">
              4. Proyectos Actuales
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            <h3 className="font-ivyjournal italic font-normal text-black text-3xl md:text-4xl mb-4 text-center">
              Convención Revolucionaria (CRRA)
            </h3>
            <p className="font-alfabet font-light text-black text-sm md:text-base leading-relaxed mb-10 text-center">
              Estamos trabajando de manera organizada en la construcción de la República Federal de Antioquia. A través
              de la CRRA (Convención Revolucionaria República de Antioquia), impulsamos los siguientes pilares:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="border border-black p-6 rounded" style={{ borderRadius: "4px" }}>
                <h4 className="font-alfabet font-normal text-black text-sm md:text-base mb-3 uppercase">Estructura Republicana</h4>
                <p className="font-alfabet font-light text-black text-sm md:text-base leading-relaxed">
                  Presentación y consolidación de los símbolos patrios, la Constitución Política y los documentos de
                  identidad federal.
                </p>
              </div>

              <div className="border border-black p-6 rounded" style={{ borderRadius: "4px" }}>
                <h4 className="font-alfabet font-normal text-black text-sm md:text-base mb-3 uppercase">Junta de Gobierno Ciudadana</h4>
                <p className="font-alfabet font-light text-black text-sm md:text-base leading-relaxed">
                  Convocatoria a ciudadanos con competencias, liderazgo y vocación de servicio para trazar la hoja de
                  ruta política y social.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LLAMADO A LA ACCIÓN */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-center mb-16">
            <div className="font-alfabet font-normal text-black text-[10px] md:text-xs border border-black px-5 py-1.5 rounded-full uppercase">
              5. ¡Súmate al Movimiento!
            </div>
          </div>

          <div className="max-w-4xl mx-auto text-center">
            <h3 className="font-ivyjournal italic font-normal text-black text-3xl md:text-4xl mb-4">
              El futuro de Antioquia está en nuestras manos.
            </h3>
            <p className="font-alfabet font-light text-black text-sm md:text-base leading-relaxed mb-10">
              La libertad y la autodeterminación se construyen con la participación activa de cada ciudadano.
              ¿Cómo puedes apoyar?
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              <div className="border border-black p-6 rounded" style={{ borderRadius: "4px" }}>
                <h4 className="font-alfabet font-normal text-black text-sm mb-3 uppercase">Infórmate y comparte</h4>
                <p className="font-alfabet font-light text-black text-sm leading-relaxed">
                  Difunde la verdad histórica y el contenido de nuestro sitio web con más antioqueños.
                </p>
              </div>

              <div className="border border-black p-6 rounded" style={{ borderRadius: "4px" }}>
                <h4 className="font-alfabet font-normal text-black text-sm mb-3 uppercase">Asiste a las reuniones</h4>
                <p className="font-alfabet font-light text-black text-sm leading-relaxed">
                  Participa en los encuentros mensuales convocados por los canales oficiales de la RAF.
                </p>
              </div>

              <div className="border border-black p-6 rounded" style={{ borderRadius: "4px" }}>
                <h4 className="font-alfabet font-normal text-black text-sm mb-3 uppercase">Sé parte del cambio</h4>
                <p className="font-alfabet font-light text-black text-sm leading-relaxed">
                  Aporta tu talento, liderazgo y trabajo para consolidar los proyectos de la CRRA.
                </p>
              </div>
            </div>

            <p className="font-ivyjournal italic font-normal text-black text-xl md:text-2xl">
              ¡Unidad, disciplina y amor por Antioquia!
            </p>
          </div>
        </div>
      </section>





      {/* FOOTER - GRACIAS */}
      <section className="bg-[#f8f8f8] pt-24 md:pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col items-center justify-center">
            <div className="text-black text-base font-light mb-3">+</div>
            <div className="w-px h-48 bg-black/30 mb-8" />

            <div className="flex items-center gap-12 md:gap-20">
              <h2 className="font-ivyjournal font-thin text-black text-3xl md:text-4xl lg:text-5xl">Movimiento RAF</h2>
            </div>

            <div className="w-px h-24 bg-black/30 mt-8" />

            <div className="mt-12">
              <button
                onClick={handleContact}
                className="font-alfabet font-light text-black text-[10px] md:text-xs border border-black px-5 py-1.5 hover:bg-red-600 hover:border-red-600 hover:text-white transition-colors"
                style={{ borderRadius: "4px" }}
              >
                {copied ? "¡COPIADO!" : "CONTACTO"}
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
