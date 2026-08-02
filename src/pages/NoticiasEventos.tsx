import { Calendar, ArrowRight, Clock, Tag, Newspaper } from "lucide-react";

const noticias = [
  {
    id: 1,
    titulo: "Parceria com a PUC Minas rende novos projetos",
    resumo:
      "A colaboração entre o CMAEE e a PUC Minas continua gerando frutos com novos projetos de extensão voltados para a educação inclusiva.",
    data: "10 Nov 2024",
    categoria: "Parceria",
    destaque: true,
  },
];

const proximosEventos = [
  {
    titulo: "Reunião de Pais e Mestres",
    data: "20 Dez 2024",
    horario: "19:00",
  },
  {
    titulo: "Encerramento do Ano Letivo",
    data: "22 Dez 2024",
    horario: "14:00",
  },
  {
    titulo: "Início das Aulas 2025",
    data: "03 Fev 2025",
    horario: "07:30",
  },
];

export function NoticiasEventos() {
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
              <Newspaper className="w-4 h-4" />
              Fique por Dentro
            </span>
            <h1 className="heading-xl text-white mb-6">
              Notícias e
              <span className="block gradient-text-light">Eventos</span>
            </h1>
            <p className="text-xl text-blue-100/90 leading-relaxed">
              Acompanhe as novidades, eventos e conquistas do Centro Educacional
              Dr. Tarso de Coimbra.
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

      {/* Main Content */}
      <section className="py-16 lg:py-24">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* News List */}
            <div className="lg:col-span-2">
              <div className="flex items-center justify-between mb-8">
                <h2 className="heading-md text-foreground">
                  Últimas <span className="gradient-text">notícias</span>
                </h2>
              </div>

              {/* Featured News */}
              <div className="grid sm:grid-cols-2 gap-6 mb-8">
                {noticias
                  .filter((n) => n.destaque)
                  .map((noticia) => (
                    <article
                      key={noticia.id}
                      className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-600 to-blue-800 p-8 card-interactive"
                    >
                      <div className="absolute top-0 right-0 w-40 h-40 bg-blue-400/20 rounded-full blur-3xl" />

                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 text-white text-xs font-medium mb-4">
                        <Tag className="w-3 h-3" />
                        {noticia.categoria}
                      </span>

                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-100 transition-colors">
                        {noticia.titulo}
                      </h3>

                      <p className="text-blue-100/80 text-sm leading-relaxed mb-6">
                        {noticia.resumo}
                      </p>

                      <div className="flex items-center justify-between">
                        <span className="flex items-center gap-2 text-blue-200 text-sm">
                          <Calendar className="w-4 h-4" />
                          {noticia.data}
                        </span>
                        <button className="flex items-center gap-1 text-white font-medium text-sm group-hover:gap-2 transition-all">
                          Ler mais
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    </article>
                  ))}
              </div>

              {/* Regular News */}
              <div className="space-y-4">
                {noticias
                  .filter((n) => !n.destaque)
                  .map((noticia) => (
                    <article
                      key={noticia.id}
                      className="group p-6 rounded-2xl bg-white shadow-soft border border-blue-100/50 hover:border-blue-200 card-interactive"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-medium">
                              <Tag className="w-3 h-3" />
                              {noticia.categoria}
                            </span>
                            <span className="flex items-center gap-1.5 text-muted-foreground text-sm">
                              <Calendar className="w-4 h-4" />
                              {noticia.data}
                            </span>
                          </div>

                          <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-blue-600 transition-colors">
                            {noticia.titulo}
                          </h3>

                          <p className="text-muted-foreground text-sm leading-relaxed">
                            {noticia.resumo}
                          </p>
                        </div>

                        <button className="flex items-center gap-1 text-blue-600 font-medium text-sm whitespace-nowrap group-hover:gap-2 transition-all">
                          Ler mais
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    </article>
                  ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Upcoming Events */}
              <div className="sticky top-24">
                <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100/50 border border-blue-100">
                  <h3 className="text-lg font-bold text-foreground mb-6 flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-blue-600" />
                    Próximos Eventos
                  </h3>

                  <div className="space-y-4">
                    {proximosEventos.map((evento) => (
                      <div
                        key={evento.titulo}
                        className="p-4 rounded-xl bg-white shadow-soft"
                      >
                        <h4 className="font-semibold text-foreground mb-2">
                          {evento.titulo}
                        </h4>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1.5">
                            <Calendar className="w-4 h-4 text-blue-500" />
                            {evento.data}
                          </span>
                          <span className="flex items-center gap-1.5">
                            <Clock className="w-4 h-4 text-blue-500" />
                            {evento.horario}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Newsletter */}
                <div className="mt-6 p-6 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-800 text-white">
                  <h3 className="text-lg font-bold mb-2">Fique informado</h3>
                  <p className="text-blue-100/80 text-sm mb-4">
                    Siga nossas redes sociais para receber as novidades em
                    primeira mão.
                  </p>
                  <a
                    href="https://wa.me/5535988543198"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-full py-3 rounded-xl bg-white text-blue-600 font-semibold hover:bg-blue-50 transition-colors"
                  >
                    Entrar em Contato
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
