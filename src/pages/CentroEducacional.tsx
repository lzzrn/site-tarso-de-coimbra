import {
  Calendar,
  MapPin,
  Users,
  Award,
  BookOpen,
  Building,
  Heart,
  Quote,
} from "lucide-react";
import video from "../assets/videos/video1.mp4";

const timeline = [
  {
    year: "1959",
    title: "Fundação",
    description:
      "Fundação da Escola Dr. Tarso de Coimbra - ESTARC, sob os auspícios da Associação de Assistência à Criança Surda (AACS).",
  },
  {
    year: "1966",
    title: "Independência",
    description:
      "A escola deixa de ser mantida pela Gota de Leite Sinha Junqueira Lemos e se fortalece como instituição independente.",
  },
  {
    year: "1987",
    title: "Rede Municipal",
    description:
      "Incorporação à Rede Municipal de Ensino pela Lei n° 3.953, de 17 de janeiro de 1987.",
  },
  {
    year: "2011",
    title: "CMAEE",
    description:
      "Conversão em Centro Municipal de Atendimento Educacional Especializado, conforme Lei n° 8.805.",
  },
  {
    year: "Hoje",
    title: "Referência",
    description:
      "Referência regional em educação bilíngue para surdos, com sede própria e equipe especializada.",
  },
];

const values = [
  {
    icon: BookOpen,
    title: "Educação Bilíngue",
    description: "Libras como L1 e Português como L2",
  },
  {
    icon: Heart,
    title: "Inclusão",
    description: "Valorização da cultura e identidade surda",
  },
  {
    icon: Users,
    title: "Comunidade",
    description: "Ambiente acolhedor e respeitoso",
  },
  {
    icon: Award,
    title: "Excelência",
    description: "Compromisso com a qualidade do ensino",
  },
];

export function CentroEducacional() {
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
              <Building className="w-4 h-4" />
              Nossa História
            </span>
            <h1 className="heading-xl text-white mb-6">
              O Centro
              <span className="block gradient-text-light">Educacional</span>
            </h1>
            <p className="text-xl text-blue-100/90 leading-relaxed">
              Mais de 65 anos dedicados à educação de surdos, promovendo
              inclusão, respeito e desenvolvimento integral.
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

      {/* Video Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-blue-500/10">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-blue-700 rounded-3xl blur opacity-20" />
            <video
              src={video}
              autoPlay
              loop
              muted
              playsInline
              controls
              className="relative w-full rounded-3xl"
            />
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div
                key={value.title}
                className="group p-6 rounded-2xl glass-card shadow-soft hover-lift text-center"
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-lg shadow-blue-500/30 group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-bold text-foreground mb-1">{value.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="py-16 lg:py-24">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative py-16 lg:py-24 rounded-3xl bg-gradient-to-br from-blue-50 to-blue-100/50 overflow-hidden">
            <div className="absolute top-10 left-10 w-40 h-40 bg-blue-200/50 rounded-full blur-3xl" />
            <div className="absolute bottom-10 right-10 w-60 h-60 bg-blue-300/30 rounded-full blur-3xl" />

            <div className="relative z-10 text-center px-8">
              <Quote className="w-16 h-16 mx-auto text-blue-300 mb-6" />
              <p className="font-story-script text-4xl sm:text-5xl lg:text-6xl gradient-text leading-tight max-w-4xl mx-auto">
                Onde o aprendizado é a linguagem universal
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 lg:py-24">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold mb-4">
              Nossa Trajetoria
            </span>
            <h2 className="heading-lg text-foreground">
              Uma história de <span className="gradient-text">dedicação</span>
            </h2>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 lg:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-200 via-blue-400 to-blue-200 lg:-translate-x-1/2" />

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div
                  key={item.year}
                  className={`relative flex items-center gap-8 ${
                    index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}
                >
                  {/* Content */}
                  <div
                    className={`flex-1 pl-12 lg:pl-0 ${
                      index % 2 === 0
                        ? "lg:pr-16 lg:text-right"
                        : "lg:pl-16 lg:text-left"
                    }`}
                  >
                    <div
                      className={`inline-block p-6 rounded-2xl bg-white shadow-soft border border-blue-100/50 hover-lift ${
                        index % 2 === 0 ? "lg:ml-auto" : "lg:mr-auto"
                      }`}
                    >
                      <span className="inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-bold mb-3">
                        {item.year}
                      </span>
                      <h3 className="text-xl font-bold text-foreground mb-2">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground max-w-md">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Dot */}
                  <div className="absolute left-4 lg:left-1/2 w-4 h-4 rounded-full bg-blue-500 border-4 border-white shadow-lg lg:-translate-x-1/2" />

                  {/* Spacer for alternating layout */}
                  <div className="hidden lg:block flex-1" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* History Detail */}
      <section className="py-16 lg:py-24">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold mb-4">
                História Completa
              </span>
              <h2 className="heading-md text-foreground mb-6">
                Das origens ao <span className="gradient-text">presente</span>
              </h2>

              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  O Centro Municipal de Atendimento Educacional Especializado Dr.
                  Tarso de Coimbra (CMAEE) tem suas origens no ano de 1959, quando
                  foi fundada a Escola Dr. Tarso de Coimbra - ESTARC, sob os
                  auspícios da Associação de Assistência à Criança Surda (AACS),
                  em Poços de Caldas (MG).
                </p>
                <p>
                  O registro oficial de criação data de 17 de novembro de 1959,
                  assinado pelo Monsenhor Trajano Barroco e pela Sra. Maria do
                  Rosário Mourão Davis, então diretor e vice-diretora. À frente da
                  instituição estavam Rosina Nosce de Carvalho e Ana Rímoli de
                  Faria Dória, que, juntamente com o Dr. Tarso de Coimbra,
                  participaram ativamente da Campanha de Educação do Surdo
                  Brasileiro.
                </p>
                <p>
                  Nos primeiros anos, a escola funcionou em um prédio gentilmente
                  cedido pela direção da Gota de Leite Sinha Junqueira Lemos, que
                  permaneceu como mantenedora até 1966. Devido ao aumento no número de estudantes e à necessidade de
                  ampliar o corpo docente especializado, a escola foi incorporada
                  à Rede Municipal de Ensino em 1987, pela Lei n° 3.953, de 17 de
                  janeiro de 1987.
                </p>
              </div>
            </div>

            <div>
              <div className="space-y-6 text-muted-foreground leading-relaxed pt-12 lg:pt-24">
                <p>
                  Posteriormente, em 2011, foi convertida em Centro Municipal de
                  Atendimento Educacional Especializado (CMAEE), conforme a Lei n°
                  8.805, de 9 de novembro de 2011, consolidando seu papel como
                  referência no atendimento a pessoas surdas e com deficiência
                  auditiva.
                </p>
                <p>
                  Atualmente, o CMAEE Dr. Tarso de Coimbra está localizado na Rua
                  Mário Xando de Oliveira, n° 2, Bairro São Geraldo, em um
                  edifício construído em parceria entre a Prefeitura Municipal de
                  Poços de Caldas e a ALCOA Foundation.
                </p>
              </div>

              <div className="mt-8 p-6 rounded-2xl bg-blue-50 border border-blue-100">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">
                      Localização Atual
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      Rua Mário Xandó de Oliveira, n° 2
                      <br />
                      Bairro São Geraldo - Poços de Caldas/MG
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Patron Section */}
      <section className="py-16 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 to-slate-950" />
        <div className="absolute top-10 right-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-blue-300 text-sm font-semibold mb-6">
                Nosso Patrono
              </span>
              <h2 className="heading-lg text-white mb-6">
                Capitao{" "}
                <span className="gradient-text-light">Tarso de Coimbra</span>
              </h2>
              <div className="space-y-6 text-blue-100/80 leading-relaxed">
                <p>
                  Nascido em 10 de julho de 1908, no Distrito Federal (atual Rio
                  de Janeiro), formou-se em Ciencias Juridicas e Sociais pela
                  Universidade Fluminense.
                </p>
                <p>
                  Atuou como diretor substituto do Instituto Nacional de Educação
                  de Surdos (INES) entre 1954 e 1961, período em que também fundou
                  e dirigiu o Curso Normal de Formação de Professores para Surdos.
                </p>
                <p>
                  Seu trabalho pioneiro no INES - a primeira escola de surdos do
                  Brasil - inspirou a criação da unidade de Poços de Caldas, que
                  leva seu nome em homenagem.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 bg-white/5 rounded-3xl blur-2xl" />
              <div className="relative bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center">
                      <Calendar className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <p className="text-white font-medium">Nascimento</p>
                      <p className="text-blue-200/60 text-sm">
                        10 de julho de 1908
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center">
                      <Award className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <p className="text-white font-medium">Formação</p>
                      <p className="text-blue-200/60 text-sm">
                        Ciencias Juridicas e Sociais - UFF
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center">
                      <Building className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <p className="text-white font-medium">Cargo</p>
                      <p className="text-blue-200/60 text-sm">
                        Diretor Substituto - INES (1954-1961)
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center">
                      <Users className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <p className="text-white font-medium">Legado</p>
                      <p className="text-blue-200/60 text-sm">
                        Fundador do Curso de Formação de Professores
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
