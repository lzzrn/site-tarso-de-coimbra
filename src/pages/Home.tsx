import { NavLink } from "react-router-dom";
import {
  ArrowRight,
  Users,
  BookOpen,
  Heart,
  Award,
  Sparkles,
  GraduationCap,
  HandHeart,
  ChevronRight,
} from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import foto1 from "@/assets/fotos-carrossel/fotos-carrossel1.JPG";
import foto2 from "@/assets/fotos-carrossel/fotos-carrossel2.JPG";
import foto3 from "@/assets/fotos-carrossel/fotos-carrossel3.JPG";
import depoimento1 from "@/assets/depoimentos/depoimentos1.MP4";
import depoimento2 from "@/assets/depoimentos/depoimentos2.MP4";
import depoimentoElizabeth from "@/assets/depoimentos/depoimentoElizabeth.MP4";
import depoimentoSara from "@/assets/depoimentos/depoimentoSara.MP4";

const stats = [
  { value: "65+", label: "Anos de História", icon: Award },
  { value: "200+", label: "Alunos Formados", icon: GraduationCap },
  { value: "10", label: "Professores Especializados", icon: Users },
  { value: "100%", label: "Compromisso", icon: Heart },
];

const features = [
  {
    icon: BookOpen,
    title: "Educação Bilíngue",
    description:
      "Ensino em Libras como primeira língua e Português escrito como segunda língua.",
  },
  {
    icon: Users,
    title: "Equipe Especializada",
    description:
      "Professores qualificados e dedicados à educação de surdos.",
  },
  {
    icon: HandHeart,
    title: "Inclusão Total",
    description:
      "Ambiente acolhedor que valoriza a cultura surda e promove o desenvolvimento integral.",
  },
  {
    icon: Sparkles,
    title: "Metodologia Inovadora",
    description:
      "Abordagens pedagógicas modernas adaptadas às necessidades de cada aluno.",
  },
];

const depoimentosVideos = [
  {
    original: depoimento1,
    traducao: depoimentoElizabeth,
    nome: "Depoimento de Elizabeth",
  },
  {
    original: depoimento2,
    traducao: depoimentoSara,
    nome: "Depoimento de Sara",
  },
];

export function Home() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 gradient-hero" />
        <div className="absolute inset-0 pattern-dots opacity-30" />

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-300/20 rounded-full blur-3xl animate-float delay-300" />

        <div className="relative z-10 max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Content */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-blue-100 text-sm font-medium mb-8 animate-slide-up">
                <Sparkles className="w-4 h-4" />
                Desde 1959 transformando vidas
              </div>

              <h1 className="heading-xl text-white mb-6 animate-slide-up delay-100">
                Centro Municipal de
                <span className="block gradient-text-light mt-2">
                  Atendimento Educacional Especializado
                </span>
              </h1>

              <p className="text-xl text-blue-100/90 leading-relaxed mb-10 max-w-xl mx-auto lg:mx-0 animate-slide-up delay-200">
                Referência em educação bilíngue para surdos em Minas Gerais.
                Promovendo inclusão, aprendizado e desenvolvimento integral.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-slide-up delay-300">
                <a
                  href="https://wa.me/5535988543198"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-white text-blue-600 font-semibold shadow-xl shadow-black/20 hover:shadow-2xl hover:shadow-black/30 transition-all duration-300 hover:-translate-y-1 btn-shine"
                >
                  Agende uma Visita
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <NavLink
                  to="/centro-educacional"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold hover:bg-white/20 transition-all duration-300"
                >
                  Conheça Nossa História
                </NavLink>
              </div>
            </div>

            {/* Carousel */}
            <div className="relative animate-scale-in delay-200">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-400/20 to-blue-600/20 rounded-3xl blur-2xl" />
              <Carousel className="w-full max-w-lg mx-auto relative">
                <CarouselContent>
                  {[foto1, foto2, foto3].map((foto, index) => (
                    <CarouselItem key={index}>
                      <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                        <img
                          src={foto}
                          alt={`Foto ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent" />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-4 bg-white/90 hover:bg-white border-0 shadow-lg" />
                <CarouselNext className="right-4 bg-white/90 hover:bg-white border-0 shadow-lg" />
              </Carousel>
            </div>
          </div>
        </div>

        {/* Wave Divider */}
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

      {/* Stats Section */}
      <section className="py-16 -mt-1 relative z-10">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="group relative p-6 rounded-2xl glass-card shadow-soft hover-lift text-center"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-lg shadow-blue-500/30 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-7 h-7 text-white" />
                </div>
                <div className="text-3xl sm:text-4xl font-bold gradient-text mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold mb-4">
              Por que nos escolher
            </span>
            <h2 className="heading-lg text-foreground mb-4">
              Educação que <span className="gradient-text">transforma</span>
            </h2>
            <p className="body-lg max-w-2xl mx-auto">
              Oferecemos um ambiente único onde cada aluno pode desenvolver todo
              seu potencial.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="group p-8 rounded-2xl bg-white shadow-soft border border-blue-100/50 hover:border-blue-200 card-interactive"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 mb-6 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center group-hover:from-blue-500 group-hover:to-blue-600 transition-all duration-500">
                  <feature.icon className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors duration-500" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Section */}
      <section className="py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-800" />
        <div className="absolute inset-0 pattern-dots opacity-20" />

        <div className="absolute top-10 right-10 w-72 h-72 bg-blue-400/30 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-blue-300/20 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-blue-100 text-sm font-semibold mb-6">
                Parceria Institucional
              </span>
              <h2 className="heading-lg text-white mb-6">
                Parceria com a{" "}
                <span className="gradient-text-light">PUC Minas</span>
              </h2>
              <p className="text-xl text-blue-100/90 leading-relaxed mb-8">
                O CMAEE Dr. Tarso de Coimbra e a PUC Minas unem forcas
                em uma parceria voltada à educação inclusiva. A colaboração
                promove ações conjuntas nas áreas pedagógica, científica e
                social.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Projetos de extensão universitária",
                  "Oficinas e workshops especializados",
                  "Desenvolvimento de metodologias inovadoras",
                  "Pesquisa acadêmica em educação de surdos",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-white">
                    <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                      <ChevronRight className="w-4 h-4" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
              <NavLink
                to="/centro-educacional"
                className="inline-flex items-center gap-2 text-white font-semibold hover:gap-4 transition-all duration-300"
              >
                Saiba mais sobre nóssa história
                <ArrowRight className="w-5 h-5" />
              </NavLink>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 bg-white/10 rounded-3xl blur-2xl" />
              <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                <div className="aspect-video rounded-2xl bg-gradient-to-br from-white/20 to-white/5 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-white/20 flex items-center justify-center">
                      <Award className="w-10 h-10 text-white" />
                    </div>
                    <p className="text-white/80 font-medium">
                      Este site é resultado desta parceria transformadora
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 lg:py-16">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold mb-4">
              Depoimentos
            </span>
            <h2 className="heading-lg text-foreground mb-4">
              O que falam sobre <span className="gradient-text">nós</span>
            </h2>
            <p className="body-lg max-w-2xl mx-auto">
              Histórias reais de famílias que fazem parte da nossa comunidade.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10 max-w-3xl mx-auto">
            {depoimentosVideos.map((depoimento, index) => (
              <article key={index} className="space-y-5">
                <div className="group relative rounded-2xl overflow-hidden shadow-lg shadow-blue-500/10 max-w-[280px] mx-auto">
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-blue-700 rounded-2xl blur opacity-20" />
                  <video
                    src={depoimento.original}
                    controls
                    playsInline
                    aria-label={`${depoimento.nome} em português`}
                    className="relative w-full aspect-[9/16] rounded-2xl object-cover"
                  />
                </div>

                <div className="text-center">
                  <h3 className="text-lg font-bold text-foreground mb-3">
                    Tradução em Libras
                  </h3>
                  <div className="group relative rounded-2xl overflow-hidden shadow-lg shadow-blue-500/10 max-w-[280px] mx-auto">
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-blue-700 rounded-2xl blur opacity-20" />
                    <video
                      src={depoimento.traducao}
                      controls
                      playsInline
                      aria-label={`${depoimento.nome} traduzido para Libras`}
                      className="relative w-full aspect-[9/16] rounded-2xl object-cover bg-black"
                    />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 lg:py-16">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 p-12 lg:p-20">
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-300/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

            <div className="relative z-10 text-center">
              <h2 className="heading-lg text-white mb-6">
                Pronto para conhecer o
                <br />
                <span className="gradient-text-light">CMAEE</span>?
              </h2>
              <p className="text-xl text-blue-100/90 max-w-2xl mx-auto mb-10">
                Agende uma visita e descubra como podemos fazer a diferença na
                educação do seu filho.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://wa.me/5535988543198"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-white text-blue-600 font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
                >
                  Agende uma Visita
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <NavLink
                  to="/contato"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold hover:bg-white/20 transition-all duration-300"
                >
                  Entre em Contato
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
