import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
} from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    title: "Endereço",
    details: ["Rua Mário Xandó de Oliveira, nº 2", "Bairro São Geraldo", "Poços de Caldas - MG"],
  },
  {
    icon: Phone,
    title: "Telefone",
    details: ["(35) 3697-2126"],
    link: "tel:+553536972126",
  },
  {
    icon: Mail,
    title: "E-mail",
    details: ["tarsodecoimbra@edu.pocosdecaldas.mg.gov.br"],
    link: "mailto:tarsodecoimbra@edu.pocosdecaldas.mg.gov.br",
  },
  {
    icon: Clock,
    title: "Horário",
    details: ["Segunda a Sexta", "07:00 - 17:00"],
  },
];

export function Contato() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 gradient-hero" />
        <div className="absolute top-20 right-10 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-blue-300/20 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-blue-100 text-sm font-medium mb-6">
              <MessageCircle className="w-4 h-4" />
              Fale Conosco
            </span>
            <h1 className="heading-xl text-white mb-6">
              Entre em
              <span className="block gradient-text-light">Contato</span>
            </h1>
            <p className="text-xl text-blue-100/90 leading-relaxed">
              Estamos aqui para ajudar. Entre em contato conosco para saber mais
              sobre nossos serviços ou agendar uma visita.
            </p>
          </div>
        </div>

        {/* Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 1440 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-auto"
          >
            <path
              d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
              fill="currentColor"
              className="text-background"
            />
          </svg>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 -mt-1 relative z-10">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info) => (
              <div
                key={info.title}
                className="group p-6 rounded-2xl glass-card shadow-soft hover-lift text-center"
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-lg shadow-blue-500/30 group-hover:scale-110 transition-transform duration-300">
                  <info.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-bold text-foreground mb-2">{info.title}</h3>
                {info.link ? (
                  <a
                    href={info.link}
                    className="text-sm text-muted-foreground hover:text-blue-600 transition-colors block truncate max-w-full"
                    title={info.details.join(" ")}
                  >
                    {info.details.map((detail, i) => (
                      <span key={i} className="block truncate">
                        {detail}
                      </span>
                    ))}
                  </a>
                ) : (
                  <div className="text-sm text-muted-foreground">
                    {info.details.map((detail, i) => (
                      <span key={i} className="block">
                        {detail}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 lg:py-24">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* WhatsApp CTA */}
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold mb-4">
                Atendimento Rapido
              </span>
              <h2 className="heading-md text-foreground mb-6">
                Prefere falar pelo <span className="gradient-text">WhatsApp</span>?
              </h2>
              <p className="text-muted-foreground mb-8">
                Entre em contato diretamente pelo WhatsApp para um atendimento
                mais rapido e personalizado.
              </p>

              <a
                href="https://wa.me/5535988543198"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold shadow-xl shadow-green-500/30 hover:shadow-green-500/50 transition-all duration-300 hover:-translate-y-1"
              >
                <MessageCircle className="w-5 h-5" />
                Chamar no WhatsApp
              </a>

              {/* Additional Info */}
              <div className="mt-8 p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100/50 border border-blue-100">
                <h3 className="font-bold text-foreground mb-4">
                  Informações Importantes
                </h3>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                    Visitas devem ser agendadas com antecedencia
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                    Atendemos pais, responsáveis e profissionais da educação
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                    Oferecemos atendimento em Libras
                  </li>
                </ul>
              </div>
            </div>

            {/* Map */}
            <div className="space-y-6">
              <div className="rounded-2xl overflow-hidden shadow-lg h-80 lg:h-[500px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3713.0044841574787!2d-45.93787762470577!3d-21.78451698005091!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ca4b4c5a0e5555%3A0x1234567890abcdef!2sR.%20M%C3%A1rio%20Xand%C3%B3%20de%20Oliveira%2C%202%20-%20S%C3%A3o%20Geraldo%2C%20Po%C3%A7os%20de%20Caldas%20-%20MG!5e0!3m2!1spt-BR!2sbr!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localização do CMAEE"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
