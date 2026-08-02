import { Users, BookOpen, Award, GraduationCap, Heart } from "lucide-react";
import claudiaFerreira from "@/assets/corpo-docente/Cláudia-M.-Ferreira.JPG";
import deniceBarcelosSantosBarbosa from "@/assets/corpo-docente/Denice-Barcelos-dos-Santos-Barbosa.JPG";
import fabianaLuizaRoque from "@/assets/corpo-docente/Fabiana-Luiza-Roque.JPG";
import fabianaScassiottiSolia from "@/assets/corpo-docente/Fabiana-Scassiotti-Fernandes-Solia.JPG";
import gilmaraFatimaBrunorioRoberto from "@/assets/corpo-docente/Gilmara-de-Fátima-Brunorio-Roberto.JPG";
import isabelCristinaFerreira from "@/assets/corpo-docente/Isabel-Cristina-Ferreira-Dionízio.JPG";
import mariaJoseLourdesGoncalves from "@/assets/corpo-docente/Maria-José-de-Lourdes-Gonçalves.JPG";
import messiasFatimaSilva from "@/assets/corpo-docente/Messias-de-Fátima-da-Silva.JPG";
import patriciaMunizAlmada from "@/assets/corpo-docente/Patrícia-Muniz-Almada-Navegantes-Januário.JPG";
import sarahCristinaBotelho from "@/assets/corpo-docente/Sarah-Cristina-Botelho.JPG";

const corpoDocente = [
  { nome: "Cláudia M. Ferreira", foto: claudiaFerreira },
  {
    nome: "Denice Barcelos dos Santos Barbosa",
    foto: deniceBarcelosSantosBarbosa,
  },
  { nome: "Fabiana Luiza Roque", foto: fabianaLuizaRoque },
  { nome: "Fabiana Scassiotti Fernandes Solia", foto: fabianaScassiottiSolia },
  {
    nome: "Gilmara de Fátima Brunorio Roberto",
    foto: gilmaraFatimaBrunorioRoberto,
  },
  { nome: "Isabel Cristina Ferreira Dionízio", foto: isabelCristinaFerreira },
  { nome: "Maria José de Lourdes Gonçalves", foto: mariaJoseLourdesGoncalves },
  { nome: "Messias de Fátima da Silva", foto: messiasFatimaSilva },
  {
    nome: "Patrícia Muniz Almada Navegantes Januário",
    foto: patriciaMunizAlmada,
  },
  { nome: "Sarah Cristina Botelho", foto: sarahCristinaBotelho },
];

const highlights = [
  {
    icon: Users,
    value: "10",
    label: "Professores",
    description: "Equipe especializada",
  },
  {
    icon: BookOpen,
    value: "Bilíngue",
    label: "Metodologia",
    description: "Libras + Português",
  },
  {
    icon: Award,
    value: "65+",
    label: "Anos",
    description: "De experiência",
  },
  {
    icon: Heart,
    value: "100%",
    label: "Dedicação",
    description: "Ao ensino inclusivo",
  },
];

export function Academico() {
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
              <GraduationCap className="w-4 h-4" />
              Área Acadêmica
            </span>
            <h1 className="heading-xl text-white mb-6">
              Nossa Equipe
              <span className="block gradient-text-light">Docente</span>
            </h1>
            <p className="text-xl text-blue-100/90 leading-relaxed">
              Profissionais dedicados e especializados em educação de surdos,
              comprometidos com o desenvolvimento integral de cada aluno.
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

      {/* Highlights */}
      <section className="py-16 -mt-1 relative z-10">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item) => (
              <div
                key={item.label}
                className="group p-6 rounded-2xl glass-card shadow-soft hover-lift text-center"
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-lg shadow-blue-500/30 group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="w-7 h-7 text-white" />
                </div>
                <div className="text-2xl sm:text-3xl font-bold gradient-text mb-1">
                  {item.value}
                </div>
                <div className="font-semibold text-foreground">{item.label}</div>
                <div className="text-sm text-muted-foreground">
                  {item.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Faculty Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold mb-4">
              Corpo Docente
            </span>
            <h2 className="heading-lg text-foreground mb-4">
              Conheca nossos <span className="gradient-text">professores</span>
            </h2>
            <p className="body-lg max-w-2xl mx-auto">
              Uma equipe de profissionais altamente qualificados e apaixonados
              pela educação de surdos.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
            {corpoDocente.map((professor, index) => (
              <div
                key={professor.nome}
                className="group"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="relative mb-4">
                  {/* Glow effect */}
                  <div className="absolute -inset-2 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-500" />

                  {/* Image container */}
                  <div className="relative w-full aspect-square rounded-full overflow-hidden shadow-lg shadow-blue-500/10 group-hover:shadow-xl group-hover:shadow-blue-500/20 transition-all duration-500">
                    {/* Border gradient */}
                    <div className="absolute inset-0 p-1 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="w-full h-full rounded-full bg-white" />
                    </div>

                    {/* Image */}
                    <img
                      src={professor.foto}
                      alt={professor.nome}
                      className="absolute inset-1 w-[calc(100%-8px)] h-[calc(100%-8px)] rounded-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full" />
                  </div>
                </div>

                {/* Name */}
                <div className="text-center">
                  <p className="font-semibold text-foreground text-sm leading-tight group-hover:text-blue-600 transition-colors duration-300">
                    {professor.nome}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 p-12 lg:p-16">
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-300/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

            <div className="relative z-10 grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="heading-md text-white mb-4">
                  Quer fazer parte da nossa{" "}
                  <span className="gradient-text-light">equipe</span>?
                </h2>
                <p className="text-blue-100/90 leading-relaxed">
                  Estamos sempre em busca de profissionais dedicados e
                  apaixonados pela educação inclusiva. Entre em contato conosco
                  para saber mais sobre oportunidades.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 lg:justify-end">
                <a
                  href="mailto:tarsodecoimbra@edu.pocosdecaldas.mg.gov.br"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-white text-blue-600 font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
                >
                  Envie seu Curriculo
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
 